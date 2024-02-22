"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function NotificationCard() {
  return (
    <Card className="bg-white w-[52.0625rem] border-[1px] mx-auto border-gray-200 p-[1.5rem]  rounded-[0.75rem] shadow-none max-md:w-[100%]">
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          We may still send you important notifications about your account
          outside of your notification settings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-start border-t-[1px] gap-[32px] border-t-gray-200 py-[16px] max-lg:flex-col max-lg:gap-[20px]">
          <div className="w-[50%] max-lg:w-[100%]">
            <h4 className="text-[14px] text-[#344054] font-[600]">Comments</h4>
            <p className="text-[14px] leading-[20px] text-[#475467]">
              These are notifications for comments on your posts and replies to
              your comments.
            </p>
          </div>
          <div className="flex flex-col gap-[8px] items-center ">
            <div className="flex flex-row gap-[4px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">Push</span>
            </div>
            <div className="flex flex-row gap-[4px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600] ">Email</span>
            </div>
            <div className="flex flex-row gap-[4px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">SMS</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start border-t-[1px] gap-[32px] border-t-gray-200 py-[16px]  max-lg:flex-col max-lg:gap-[20px]">
          <div className="w-[50%] max-lg:w-[100%]">
            <h4 className="text-[14px] text-[#344054] font-[600]">Tags</h4>
            <p className="text-[14px] leading-[20px] text-[#475467]">
              These are notifications for when someone tags you in a comment,
              post or story.
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-row gap-[8px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">Push</span>
            </div>
            <div className="flex flex-row gap-[8px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">Email</span>
            </div>
            <div className="flex flex-row gap-[8px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">SMS</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start border-t-[1px] gap-[32px] border-t-gray-200 py-[16px] max-lg:flex-col max-lg:gap-[20px]">
          <div className="w-[50%] max-lg:w-[100%]">
            <h4 className="text-[14px] text-[#344054] font-[600]">Reminders</h4>
            <p className="text-[14px] leading-[20px] text-[#475467]">
              These are notifications to remind you of updates you might have
              missed.
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-row gap-[8px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">Push</span>
            </div>
            <div className="flex flex-row gap-[8px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">Email</span>
            </div>
            <div className="flex flex-row gap-[8px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">SMS</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start border-t-[1px] gap-[32px] border-t-gray-200 py-[16px] max-lg:flex-col max-lg:gap-[20px]">
          <div className="w-[50%] max-lg:w-[100%]">
            <h4 className="text-[14px] text-[#344054] font-[600]">
              More activity about you
            </h4>
            <p className="text-[14px] leading-[20px] text-[#475467]">
              These are notifications for posts on your profile, likes and other
              reactions to your posts, and more.
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-row gap-[8px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">Push</span>
            </div>
            <div className="flex flex-row gap-[8px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">Email</span>
            </div>
            <div className="flex flex-row gap-[8px] items-center w-[80px]">
              <Switch className="bg-gray-200 data-[state=checked]:bg-[#0000BF]" />
              <span className="text-[14px] font-[600]">SMS</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
