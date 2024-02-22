"use client";
import { RadioGroup } from "@/components/ui/radio-group";
import BillingForm from "./components/billingform";
import PaymentCard from "./components/paymentcard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
export default function Billing() {
  const [card, setCard] = useState("");
  console.log(card, "hgfgahj");
  const paymentcard = [
    {
      id: "1",
      value: "visa",
    },
    {
      id: "2",
      value: "rupay",
    },
    {
      id: "3",
      value: "debit",
    },
    {
      id: "4",
      value: "credit",
    },
  ];
  return (
    <div className="py-[1.5rem] pl-[1.5rem] pr-[1.5rem] max-md:pr-[0.75 rem] max-md:py-0 max-md:pl-[0.75rem] flex flex-col gap-[1rem] border-[0.0625rem] w-[52.0625rem] max-md:w-[100%] rounded-[0.75rem] border-gray-200">
      <div className="border-b-[1px] border-gray-200 pb-4">
        <p className="text-[1.125rem] font-[600] text-gray-900 ">
          Account Credit
        </p>
        <div className="flex justify-between">
          <p className="text-[1.875rem] font-[700] text-gray-900">&#x24;37.9</p>
          <p className="text-gray-600 text-[0.875rem] font-[400] pt-4">
            How can i use this?
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-200 pb-[1.5rem]">
        <p className="font-[600] tetx-[1.125rem] text-gray-900">
          Payment Method
        </p>
        <p className="text-gray-600 text-[0.875rem] font-[400]">
          Update your billing details and address{" "}
        </p>
      </div>
      <div className="flex max-md:flex-col gap-[2rem] justify-between border-b-[1px] border-gray-200 pb-[1.5rem]">
        <div className="">
          <p className="font-[600] tetx-[0.875rem] text-gray-900">
            Contact Email
          </p>
          <p className="text-gray-600 text-[0.875rem] font-[400]">
            Where should invoice be sent?
          </p>
        </div>
        <BillingForm />
      </div>
      <div className="flex max-md:flex-col gap-[2rem] border-b-[1px] border-gray-200 pb-[1.5rem]">
        <div className="">
          <p className="font-[600] tetx-[0.875rem] text-gray-900">
            Card Details
          </p>
          <p className="text-gray-600 text-[0.875rem] font-[400]">
            Select default payment method.
          </p>
        </div>
        <div>
          <RadioGroup className="flex flex-col gap-[0.75rem]">
            {paymentcard.map((payment) => (
              <PaymentCard
                id={payment.id}
                value={payment.value}
                setter={setCard}
                set={card}
              />
            ))}
          </RadioGroup>
          <Button className="text-[0.875rem] text-gray-600 flex gap-2 font-[600]">
            <Plus className="h-[18px]" />
            <span className="label">Add new payment method</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
