"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const invoices = [
  {
    activity: "lesson completion",
    frequency: "daily summary",
    mobile: true,
    email: false,
  },
  {
    activity: "lesson completion",
    frequency: "daily summary",
    mobile: true,
    email: false,
  },
  {
    activity: "lesson completion",
    frequency: "daily summary",
    mobile: false,
    email: true,
  },
  {
    activity: "lesson completion",
    frequency: "daily summary",
    mobile: false,
    email: false,
  },
  {
    activity: "lesson completion",
    frequency: "daily summary",
    mobile: true,
    email: true,
  },
  {
    activity: "lesson completion",
    frequency: "daily summary",
    mobile: false,
    email: true,
  },
];

export function TableDemo() {
  const [enable, setEnable] = useState(false);
  return (
    <div className="px-[24px] max-md:px-0 py-[24px]">
      <Table className="w-[957px]  max-md:w-[100%] border-b-[1px] border-gray-200">
        <TableHeader className=" text-[12px] max-md:hidden flex text-gray-600 bg-gray-100">
          <TableRow>
            <TableHead className="w-[227px]">Activity</TableHead>
            <TableHead className="w-[227px]">Frequency</TableHead>
            <TableHead className="w-[227px]">Mobile</TableHead>
            <TableHead className="w-[227px]">Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.activity} className="flex max-md:flex-col">
              <TableCell className="font-medium w-[227px] max-md:bg-gray-100 max-md:w-[100%]">
                {invoice.activity}
              </TableCell>
              <p className="text-[12px] text-gray-600 font-[600] px-[24px] pt-[24px] hidden max-md:flex">
                Frequency
              </p>
              <TableCell className="w-[227px] max-md:w-[100%] max-md:pt-[12px]">
                <Select>
                  <SelectTrigger className="w-[180px] max-md:w-[100%] border-gray-200 rounded-[8px]">
                    <SelectValue placeholder="Daily Summary" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="bg-white">
                      <SelectLabel>{invoice.frequency}</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <p className="text-[12px] text-gray-600 font-[600] px-[24px] hidden max-md:flex">
                Mobile
              </p>
              <TableCell className="w-[227px] flex gap-[12px] text-[14px]">
                <Switch
                  onCheckedChange={() => setEnable(!enable)}
                  className="h-[20px] w-[36px]"
                  id="airplane-mode"
                />{" "}
                {enable === true ? "Enabled" : "Disabled"}
              </TableCell>
              <p className="text-[12px] text-gray-600 font-[600] px-[24px] hidden max-md:flex">
                Email
              </p>
              <TableCell className=" w-[227px]">
                <Switch
                  onCheckedChange={() => setEnable(!enable)}
                  className="h-[20px] w-[36px]"
                  id="airplane"
                />
                {enable === true ? "Enabled" : "Disabled"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
