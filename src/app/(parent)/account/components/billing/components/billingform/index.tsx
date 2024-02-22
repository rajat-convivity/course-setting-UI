import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function BillingForm() {
  return (
    <form>
      <RadioGroup
        defaultValue="option-one"
        className="flex flex-col gap-[1rem]">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">
            <p className="text-gray-700 text-[0.875rem] font-[600]">
              Send to my account email.
            </p>
            <p className="text-gray-700 text-[0.875rem] font-[400]">
              olivia@gmail.com
            </p>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">
            <p className="text-gray-700 text-[0.875rem] font-[600]">
              Send to an alternative email.
            </p>
          </Label>
        </div>
        <Input
          type="email"
          placeholder="Email"
          className="rounded-[0.5rem] w-[30.5rem] max-md:w-[100%] text-gray-500 border-[0.0625rem] border-gray-300 px-[0.875rem] py-[0.625rem]"
        />
      </RadioGroup>
    </form>
  );
}
