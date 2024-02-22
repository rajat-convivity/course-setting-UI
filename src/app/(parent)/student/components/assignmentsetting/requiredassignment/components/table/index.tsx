"use client";
import {
  Table,
  TableBody,
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
    activity: "on",
    frequency: "warm up",
    weight: "10",
    email: "20",
  },
  {
    activity: "off",
    frequency: "warm up",
    weight: "10",
    email: "20",
  },
  {
    activity: "on",
    frequency: "warm up",
    weight: "20",
    email: "10",
  },
  {
    activity: "on",
    frequency: "warm up",
    weight: "20",
    email: "20",
  },
  {
    activity: "on",
    frequency: "warm up",
    weight: "10",
    email: "10",
  },
  {
    activity: "off",
    frequency: "warm up",
    weight: "20",
    email: "10",
  },
];

export function Demo() {
  const [enable, setEnable] = useState(true);
  return (
    <div className="px-[24px] max-md:px-0 py-[24px]">
      <p className="text-gray-900 font-[600] text-[16px] mb-[16px]">
        Required Assignment
      </p>
      <Table className="w-[957px]  max-md:w-[100%] border-b-[1px] border-gray-200">
        <TableHeader className=" text-[12px] max-md:hidden flex text-gray-600 bg-gray-100">
          <TableRow>
            <TableHead className="w-[127px]">Enabled</TableHead>
            <TableHead className="w-[127px]">Assignment</TableHead>
            <TableHead className="w-[127px]">Weight</TableHead>
            <TableHead className="w-[127px]">Problems</TableHead>
            <TableHead className="w-[127px]">Learn helps</TableHead>
            <TableHead className="w-[127px]">Attempts</TableHead>
            <TableHead className="w-[147px]">Retry credit scoring</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.activity} className="flex max-md:flex-col">
              <TableCell className="font-medium w-[127px] flex gap-[8px] max-md:bg-gray-100 max-md:w-[100%]">
                <Switch
                  onCheckedChange={() => setEnable(!enable)}
                  className="h-[20px] w-[36px]"
                  id="airplane"
                />
                {invoice.activity}
              </TableCell>
              <p className="text-[12px] text-gray-600 font-[600] px-[24px] pt-[24px] hidden max-md:flex">
                Frequency
              </p>
              <TableCell className="w-[127px] max-md:w-[100%] max-md:pt-[12px]">
                {invoice.frequency}
              </TableCell>
              <p className="text-[12px] text-gray-600 font-[600] px-[24px] hidden max-md:flex">
                weight
              </p>
              <TableCell className="w-[127px] flex gap-[12px] text-[14px]">
                <p className="py-[0.5rem] px-[0.875rem] border-[1px] border-gray-200 rounded-[8px]">
                  {invoice.weight}
                </p>
              </TableCell>
              <p className="text-[12px] text-gray-600 font-[600] px-[24px] hidden max-md:flex">
                Email
              </p>
              <TableCell className=" w-[127px]">
                <Select>
                  <SelectTrigger className="w-[109px] max-md:w-[100%] border-gray-200 rounded-[8px]">
                    <SelectValue placeholder="warm up" />
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
                </Select>{" "}
              </TableCell>
              <TableCell className="font-medium w-[127px] max-md:bg-gray-100 max-md:w-[100%]">
                <Switch
                  onCheckedChange={() => setEnable(!enable)}
                  className="h-[20px] w-[36px]"
                  id="airplane"
                />
                {invoice.activity}
              </TableCell>
              <TableCell className="w-[127px] flex gap-[12px] text-[14px]">
                <p className="py-[0.5rem] px-[0.875rem] border-[1px] border-gray-200 rounded-[8px]">
                  {invoice.weight}
                </p>
              </TableCell>
              <TableCell className=" w-[127px]">
                <Select>
                  <SelectTrigger className="w-[109px] max-md:w-[100%] border-gray-200 rounded-[8px]">
                    <SelectValue placeholder="warm up" />
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
