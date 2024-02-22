"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SwitchForm } from "../switch";
const profileFormSchema = z.object({
  username: z.array(
    z.object({
      value: z
        .string()
        .min(2, {
          message: "username must be at least 2 characters.",
        })
        .max(30, {
          message: "username must not be longer than 30 characters.",
        }),
    })
  ),
  file: z.array(
    z.object({
      value: z.any().refine((files) => files?.length == 1, "File is required."),
    })
  ),
  password: z.array(
    z.object({
      value: z
        .string()
        .min(2, {
          message: "password must be at least 2 characters.",
        })
        .max(30, {
          message: "password must not be longer than 30 characters.",
        }),
    })
  ),
});
type ProfileFormValues = z.infer<typeof profileFormSchema>;
const defaultValues: Partial<ProfileFormValues> = {
  username: [
    {
      value: "",
    },
  ],
  password: [{ value: "" }],
};
export default function Profileform() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });
  const { fields, append } = useFieldArray({
    name: "password",
    control: form.control,
  });
  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="w-full flex flex-col gap-[1rem] ">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col gap-[1rem] pb-[1rem] border-b">
              <div className="flex flex-col gap-[1rem]">
                <FormField
                  control={form.control}
                  name={`username.${index}.value`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-[0.875rem] font-[600] text-gray-700">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#F9FAFB] font-[400] max-md:w-[100%] text-[1rem] max-md:ml-0 text-gray-500 rounded-[0.5rem] border-gray-300"
                          placeholder="Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`password.${index}.value`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-[0.875rem] font-[600] text-gray-700">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#F9FAFB] font-[400] max-md:w-[100%] text-[1rem] max-md:ml-0 text-gray-500 rounded-[0.5rem] border-gray-300"
                          placeholder="Last Name"
                          {...field}
                          type=""
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <FormField
                  control={form.control}
                  name={`username.${index}.value`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-[0.875rem] font-[600] text-gray-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#F9FAFB] font-[400] max-md:w-[100%] text-[1rem] max-md:ml-0 text-gray-500 rounded-[0.5rem] border-gray-300"
                          placeholder="abc@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SwitchForm />
              </div>
            </div>
          ))}
          <div className="flex-col items-center mt-[1rem]">
            <Button
              className="bg-[#0000FF] w-[100%] flex gap-[0.5rem] text-white py-[0.625rem] px-[1rem] rounded-[0.5rem]  "
              type="submit"
              variant="default">
              <span className="label">Save and Continue</span>
            </Button>
            <Button
              type="button"
              variant="link"
              className="mt-2 w-[100%] hover:no-underline p-0"
              onClick={() => append({ value: "" })}>
              <span className="label">Delete Account</span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
