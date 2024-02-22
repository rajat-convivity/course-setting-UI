"use client";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function Cards() {
  return (
    <div className="rounded-[0.75rem] w-[20.9375rem] max-md:w-[100%] p-[1.5rem] border-[1px] border-gray-200">
      <div>
        <div className="flex gap-2 space-x-2">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">
                <p className="text-gray-900  font-[600]">Saxon Math</p>
              </Label>
            </div>
            <p className="text-[0.875rem] ml-6 text-gray-600 font-[400]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </RadioGroup>
          <div></div>
        </div>
      </div>
    </div>
  );
}
