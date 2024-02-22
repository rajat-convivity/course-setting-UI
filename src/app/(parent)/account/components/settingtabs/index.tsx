"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "../profile/page";
import NotificationCard from "../notification";
import Billing from "../billing";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MyDetails from "../mydetails/components";
import { Button } from "@/components/ui/button";
import Personal from "../mydetails/components/personalinfo";
import Password from "../mydetails/components/passwordinfo";
export default function Tab() {
  const [current, setCurrent] = useState("mydetails");
  const [show, setShow] = useState(false);
  return (
    <Tabs
      defaultValue={current}
      className="w-[400px] flex max-md:flex-col  gap-[2rem] max-md:gap-[4rem] max-md:mt-20">
      <div className=" flex relative justify-between w-[343px] z-10 mx-auto max-md:border-[1px] py-[2px] -mt-20 rounded-[0.5rem] border-gray-200 h-[100%]">
        <TabsList className="flex-col max-md:bg-white gap-[1rem] max-md:gap-0 max-md:justify-start max-md:-mt-0.5 max-md:h-[100%] mt-40 font-[600] text-[0.875rem]">
          <TabsTrigger
            onClick={() => {
              setCurrent("mydetails"), setShow(!show);
            }}
            className={`text-gray-500 max-md:w-[20rem] w-[6.3125rem] data-[state=active]:text-[#0000bf] max-md:data-[state=active]:shadow-none data-[state=active]:bg-[#E5E5FF] data-[state=inactive]:bg-white max-md:data-[state=active]:bg-white  max-md:data-[state=active]:text-gray-700  rounded-[0.375rem] px-[0.75rem] py-[0.5rem] ${
              current === "mydetails" || show === true
                ? "block"
                : " max-md:hidden"
            } `}
            value="mydetails">
            My Details
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              setCurrent("profile"), setShow(!show);
            }}
            className={`text-gray-500 max-md:w-[20rem] max-md:data-[state=active]:shadow-none data-[state=inactive]:bg-white w-[6.3125rem] data-[state=active]:text-[#0000bf] data-[state=active]:bg-[#E5E5FF] max-md:data-[state=active]:bg-white max-md:data-[state=active]:text-gray-700 rounded-[0.375rem]  px-[0.75rem] py-[0.5rem] ${
              current === "profile" || show === true ? "block" : "max-md:hidden"
            } `}
            value="profile">
            Profile
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              setCurrent("billing"), setShow(!show);
            }}
            className={`text-gray-500 max-md:w-[20rem] max-md:data-[state=active]:shadow-none data-[state=inactive]:bg-white w-[6.3125rem] data-[state=active]:text-[#0000bf] data-[state=active]:bg-[#E5E5FF] max-md:data-[state=active]:bg-white max-md:data-[state=active]:text-gray-700 rounded-[0.375rem]  px-[0.75rem] py-[0.5rem] ${
              current === "billing" || show === true ? "block" : "max-md:hidden"
            } `}
            value="billing">
            Billing
          </TabsTrigger>
          <TabsTrigger
            onClick={() => {
              setCurrent("notification"), setShow(!show);
            }}
            className={`text-gray-500  max-md:w-[20rem] max-md:data-[state=active]:shadow-none data-[state=inactive]:bg-white w-[6.3125rem] data-[state=active]:text-[#0000bf] data-[state=active]:bg-[#E5E5FF] max-md:data-[state=active]:bg-white max-md:data-[state=active]:text-gray-700 rounded-[0.375rem]  px-[0.75rem] py-[0.5rem] ${
              current === "notification" || show === true
                ? "block"
                : "max-md:hidden"
            } `}
            value="notification">
            Notification
          </TabsTrigger>
        </TabsList>
        <Button
          onClick={() => setShow(!show)}
          className="hidden max-md:block absolute right-[2px] mt-1">
          <ChevronDown height={"20px"} width={"20px"} color="#667085" />
        </Button>
      </div>
      <TabsContent value="mydetails">
        <MyDetails>
          <Personal />
          <Password />
        </MyDetails>
      </TabsContent>
      <TabsContent value="profile">
        <Profile />
      </TabsContent>
      <TabsContent value="notification">
        <NotificationCard />
      </TabsContent>
      <TabsContent value="billing">
        <Billing />
      </TabsContent>
    </Tabs>
  );
}
