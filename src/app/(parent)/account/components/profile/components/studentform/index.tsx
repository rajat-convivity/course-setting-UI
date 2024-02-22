import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { DownloadCloud } from "lucide-react";
import { Plus } from "lucide-react";
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
export function Studentform() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });
  const { fields, append } = useFieldArray({
    name: "password",
    control: form.control,
  });
  const addanother = (e: any) => {
    e.preventDefault();
    append({ value: "" });
  };
  const submit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="w-full flex flex-col gap-[1rem] ">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col gap-[1rem] pb-[1rem] border-b">
              <div className="flex gap-[1rem] max-md:flex-col">
                <FormField
                  control={form.control}
                  name={`username.${index}.value`}
                  render={({ field }) => (
                    <FormItem className="w-full max-md:hidden">
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
                    <FormItem className="w-full max-md:hidden">
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
              <div className="flex max-md:flex-col gap-[1rem]">
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
              <div className="flex max-md:hidden gap-[0.75rem]">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="border-[1px] rounded-[12px] w-[32.8125rem] border-gray-200 px-[32px] py-[16px]">
                  <Input
                    type="file"
                    placeholder=""
                    id="file-input"
                    className="hidden"
                  />
                  <label htmlFor="file-input" className="flex justify-center">
                    <DownloadCloud />
                  </label>
                  <div className="text-[14px] flex gap-[4px] justify-center items-center">
                    <Button className="text-[#0000BF] hover:no-underline px-0">
                      <span className="label">Click to upload</span>
                    </Button>
                    <span className="text-gray-600 text-center">
                      or drag and drop
                    </span>
                  </div>
                  <p className="text-[12px] leading-[18px] text-gray-600 text-center">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between gap-[150px] items-center mt-[1rem]">
            <Button
              onClick={(e) => {
                addanother(e);
              }}
              className="mt-2 text-gray-600 font-[600] text-[14px] hover:no-underline p-0">
              <Plus height={"16px"} width={"16px"} color="#475467" />
              <span className="label">Add another</span>
            </Button>
            <Button
              className="bg-[#0000FF]  flex gap-[0.5rem] text-white py-[0.625rem] px-[1rem] rounded-[0.5rem]  "
              type="submit"
              onClick={(e) => e.preventDefault()}>
              <Mail />
              <span className="label">Send Invites</span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
