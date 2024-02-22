"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
const FormSchema = z.object({
  permission: z.boolean().default(false).optional(),
  configure_assesment: z.boolean(),
  reports: z.boolean(),
});
export function SwitchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      permission: false,
    },
  });
  return (
    <Form {...form}>
      <form className="w-full">
        <h3 className="text-lg font-medium">Permissons</h3>
        <div className="">
          <FormField
            control={form.control}
            name="permission"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-[0.5rem] rounded-lg py-[0.375rem] px-3">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-0.5 border-0">
                  <FormDescription className="text-gray-600 font-[400] text-[0.875rem]">
                    Configure Assesment
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="configure_assesment"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-[0.5rem] rounded-lg py-[0.375rem]  px-3">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-0.5 border-0">
                  <FormDescription className="text-gray-600 font-[400] text-[0.875rem]">
                    Reports
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reports"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-[0.5rem] rounded-lg py-[0.375rem] px-3">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-0.5 border-0">
                  <FormDescription className="text-gray-600 font-[400] text-[0.875rem]">
                    Email Reports
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
