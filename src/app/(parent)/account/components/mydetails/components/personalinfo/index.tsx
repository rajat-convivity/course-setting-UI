import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Personal() {
  return (
    <Card className="rounded-[0.5rem]  border-[0.0625rem] shadow-sm w-[52rem] max-md:w-[100%]  bg-white">
      <CardHeader className="flex ">
        <CardTitle>Personal info</CardTitle>
        <CardDescription>
          Update your photo and personal details here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="py-[20px] flex flex-row gap-[24px] border-t-[1px] border-gray-200 max-lg:flex-col">
          <label className="max-lg:hidden text-[0.875rem] font-[600] text-gray-700">
            Name
          </label>
          <div className="flex gap-[2rem] max-lg:flex-col">
            <label htmlFor="firstName" className="hidden max-lg:block">
              First name
            </label>
            <Input
              placeholder="Olivia"
              id="firstName"
              className="bg-[#F9FAFB] font-[400] max-lg:w-[100%] text-[1rem] text-gray-900 rounded-[0.5rem] ml-24 max-lg:ml-0 border-gray-300"
            />
            <label htmlFor="lastName" className="hidden max-lg:block">
              Last name
            </label>
            <Input
              placeholder="Rhye"
              id="lastName"
              className="bg-[#F9FAFB] font-[400] max-md:w-[100%] text-[1rem] text-gray-900 rounded-[0.5rem] border-gray-300"
            />
          </div>
        </div>
        <div className="py-[20px] flex flex-row gap-[24px] border-t-[1px] border-gray-200 max-lg:flex-col">
          <label className="max-lg:hidden text-[0.875rem] font-[600] text-gray-700">
            Email-address
          </label>
          <div className="flex gap-[2rem] max-lg:flex-col">
            <label htmlFor="email" className="hidden max-lg:block">
              Email Address
            </label>
            <Input
              placeholder="olivia@gmail.com"
              id="Email"
              className="bg-[#F9FAFB] font-[400] max-md:w-[100%] text-[1rem] ml-10 w-[32rem] text-gray-900 max-lg:w-[100%] rounded-[0.5rem] max-lg:ml-0 border-gray-300"
            />
          </div>
        </div>
        <div className="py-[20px] flex flex-row gap-[24px] border-t-[1px] border-gray-200 max-lg:flex-col">
          <label className="max-lg:hidden text-[0.875rem] font-[600] text-gray-700">
            Phone Number
          </label>
          <div className="flex gap-[2rem] max-lg:flex-col">
            <label htmlFor="phone number" className="hidden max-lg:block">
              Phone number
            </label>
            <Input
              placeholder="9728628793926"
              id="phonenumber"
              className="bg-[#F9FAFB] font-[400] max-md:w-[100%] text-[1rem] ml-10 w-[32rem] max-lg:ml-0 max-lg:w-[100%] text-gray-900 rounded-[0.5rem] border-gray-300"
            />
          </div>
        </div>
        <Input type="file" placeholder="" id="file-input" className="hidden" />
        <label
          htmlFor="file-input"
          className="flex flex-row gap-[32px] border-t-[1px] border-b-[1px] py-[20px]  border-gray-200 max-lg:flex-col">
          <div>
            <h6 className="text-gray-700 font-[600]">Your Photo</h6>
            <p className="text-gray-600">
              This will be displayed on your profile.
            </p>
          </div>
          <div className="flex gap-[16px] max-lg:flex-col ml-10 max-md:ml-0">
            <Avatar className="bg-red-700 h-[64px] w-[64px]">
              <AvatarImage src="" alt=""></AvatarImage>
            </Avatar>
            <div className="border-[1px] rounded-[12px] border-gray-200 px-[32px] py-[16px]">
              <Input
                type="file"
                placeholder=""
                id="file-input"
                className="hidden"
              />
              <label htmlFor="file-input" className="flex justify-center">
                <div className="rounded-full border-[6px] border-gray-50 bg-gray-100 h-[40px] w-[40px]">
                  <UploadCloud color="gray" />
                </div>
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
        </label>
        <div className="flex justify-end py-[0.5rem]">
          <Button className="bg-[#0000FF] text-white font-[600] rounded-[0.5rem] px-[1rem] py-[0.625rem] mt-[1.25rem] hover:bg-[#BFBFFF]">
            <span className="label">Save Changes</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
