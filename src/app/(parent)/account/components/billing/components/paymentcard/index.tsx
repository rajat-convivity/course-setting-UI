"use client";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
export default function PaymentCard({ id, value, set, setter }: any) {
  return (
    <div
      className={`rounded-[0.75rem] w-[32.5625rem] max-md:w-[100%]  p-[1rem] border-[0.125rem] flex gap-[0.75rem] ${
        set === value
          ? "bg-[#E5E5FF] border-[0.125rem] border-[#0000ff]"
          : "border-gray-200 bg-white"
      }`}>
      <div className="w-[100%] flex justify-between">
        <div className="flex gap-[0.75rem]">
          <img
            src="../../../assests/images/Payment method icon (1).png"
            alt="img"
          />
          <div className="flex flex-col">
            <p
              className={`text-[0.875rem] font-[600] text-gray-600 ${
                set === value ? "text-[#000080]" : ""
              }`}>
              Visa ending in 1234.
            </p>
            <p
              className={`text-[0.875rem] font-[400]
                 ${set === value ? "text-[#0000ff]" : "text-gray-600"}`}>
              Expiry 06/24
            </p>
            <Button className="text-[#0000bf] -ml-4 font-[600]">
              <span className="label -ml-24">Edit</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-2 -mt-14">
          <Label
            htmlFor="r1"
            className={` text-gray-600 font-[600] text-[0.875rem] ${
              set === value ? "text-[#3333ff]" : ""
            }`}>
            {set === value ? "Default" : "Set as default"}
          </Label>
          <RadioGroupItem value={value} id={id} onClick={() => setter(value)} />
        </div>
      </div>
    </div>
  );
}
