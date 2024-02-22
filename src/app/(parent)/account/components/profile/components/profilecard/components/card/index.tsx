import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SheetContent, Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Check } from "lucide-react";
import Edit from "../../../editprofile";
const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;
type SheetSide = (typeof SHEET_SIDES)[number];
export default function Profiledatacard({ items }: any) {
  console.log(items, "item");
  return (
    <div className="flex border-b-[0.0625rem] border-gray-200">
      <div className="flex gap-[0.75rem] px-[1.5rem] py-[1rem]">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-gray-900 text-[0.875rem] font-[400]">
            {items.name}
          </p>
          <p className="text-gray-600 text-[0.875rem] font-[400]">
            {items.email}
          </p>
        </div>
      </div>
      <div className="px-[1.5rem] max-md:hidden py-[1rem]">
        <div className="flex gap-2">
          <Check height={12} color="gray" />
          <p className="text-gray-600 text-[0.75rem] font-[400]">
            Configure Assesment
          </p>
        </div>
        <div className="flex gap-2">
          <Check height={12} color="gray" />
          <p className="text-gray-600 text-[0.75rem] font-[400]">Reports</p>
        </div>
        <div className="flex gap-2">
          <Check height={12} color="gray" />
          <p className="text-gray-600 text-[0.75rem] font-[400]">
            Email Reports
          </p>
        </div>
      </div>
      <div className="flex justify-end flex-row-reverse px-[1.5rem] py-[1rem]">
        <Sheet key={"right"}>
          <SheetTrigger asChild>
            <Button className="text-[#0000bf] text-[0.875rem]">
              <span className="label">Edit</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white" side={"right"}>
            <Edit />
          </SheetContent>
        </Sheet>
        <Button className="text-[#0000bf] text-[0.875rem]">
          <span className="label">Resend</span>
        </Button>
      </div>
    </div>
  );
}
