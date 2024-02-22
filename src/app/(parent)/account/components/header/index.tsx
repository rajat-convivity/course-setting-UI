"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import Account from "../../page";
import Tab from "../settingtabs";
import StudentCourseSetting from "@/app/(parent)/student/page";
export default function Header() {
  const [current, setCurrent] = useState("settings");
  return (
    <div className="flex-col gap-[1.25rem] pb-[1.5rem] max-md:w-[100%] border-b-[0.0625rem] border-gray-200">
      <path className="flex text-[0.875rem] font-[600]  gap-[0.75rem] ">
        <Tabs defaultValue={current}>
          <TabsList>
            <TabsTrigger
              onClick={() => {
                setCurrent("settings");
              }}
              className={`text-gray-500 max-md:w-[20rem] max-md:data-[state=active]:shadow-none data-[state=inactive]:bg-white w-[6.3125rem] data-[state=active]:text-[#0000bf]  max-md:data-[state=active]:bg-white max-md:data-[state=active]:text-gray-700 rounded-[0.375rem]  px-[0.75rem] py-[0.5rem] ${
                current === "settings" ? "block" : "max-md:hidden"
              } `}
              value="settings">
              settings
            </TabsTrigger>
            <ChevronRight height={18} color="gray" />

            <TabsTrigger
              onClick={() => {
                setCurrent("account");
              }}
              className={`text-gray-500 max-md:w-[20rem] max-md:data-[state=active]:shadow-none data-[state=inactive]:bg-white w-[6.3125rem] data-[state=active]:text-[#0000bf]  max-md:data-[state=active]:bg-white max-md:data-[state=active]:text-gray-700 rounded-[0.375rem]  px-[0.75rem] py-[0.5rem] ${
                current === "account" ? "block" : "max-md:hidden"
              } `}
              value="account">
              Account
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            {" "}
            <Account>
              <Tab />
            </Account>
          </TabsContent>
          <TabsContent value="settings">
            {" "}
            <StudentCourseSetting />
          </TabsContent>
        </Tabs>
      </path>
    </div>
  );
}
