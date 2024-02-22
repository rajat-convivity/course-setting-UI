import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
export default function Password() {
  return (
    <Card className="rounded-[0.5rem] border-[0.0625rem] shadow-sm  mx-auto w-[52rem] max-md:w-[100%] bg-white">
      <CardHeader className="flex ">
        <CardTitle>My Password</CardTitle>
        <CardDescription>
          Update your password and personal details here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="py-[20px] flex-col flex gap-[6px] border-t-[0.0625rem] border-gray-200 max-lg:flex-col">
          <label className="max-lg:hidden text-[0.875rem] font-[600] text-gray-700">
            Current Password
          </label>
          <div className="flex-col">
            <label htmlFor="firstName" className="hidden max-lg:block">
              Current Password{" "}
            </label>
            <Input
              placeholder="********"
              id="currentpassword"
              className="bg-[#F9FAFB] w-[100%] font-[400] text-[1rem] text-gray-900 rounded-[0.5rem] border-gray-300"
            />
          </div>
        </div>
        <div className="py-[20px] flex flex-col gap-[6px] border-gray-200 max-lg:flex-col">
          <label className="max-lg:hidden text-[0.875rem] font-[600] text-gray-700">
            New Password
          </label>
          <div className="flex gap-[2rem] max-lg:flex-col">
            <label htmlFor="email" className="hidden max-lg:block">
              New Password
            </label>
            <Input
              placeholder="********"
              id="newpassword"
              className="bg-[#F9FAFB] w-[100%] font-[400] text-[1rem] text-gray-900 rounded-[0.5rem] border-gray-300"
            />
          </div>
        </div>
        <div className="py-[20px] flex flex-col gap-[6px] border-gray-200 max-lg:flex-col">
          <label className="max-lg:hidden text-[0.875rem] font-[600] text-gray-700">
            Confirm New Password
          </label>
          <div className="flex gap-[2rem] max-lg:flex-col">
            <label htmlFor="email" className="hidden max-lg:block">
              Confirm New Password
            </label>
            <Input
              placeholder="********"
              id="confirmpassword"
              className="bg-[#F9FAFB] w-[100%] font-[400] text-[1rem] text-gray-900 rounded-[0.5rem] border-gray-300"
            />
          </div>
        </div>
        <div className="flex justify-end border-t-[1px] border-gray-200">
          <Button className="bg-[#0000FF] text-white mt-[1.25rem] font-[600] rounded-[0.5rem] px-[1rem] py-[0.625rem] hover:bg-[#BFBFFF]">
            <span className="label">Save Changes</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
