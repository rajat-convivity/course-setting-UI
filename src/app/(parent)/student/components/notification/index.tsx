import { Button } from "@/components/ui/button";
import { TableDemo } from "./components/table";

export default function Notification() {
  return (
    <div className="py-[24px] rounded-[12px] border-[1px] border-gray-200">
      <div className="pb-[24px] px-[24px] border-b-[1px] border-gray-200">
        <h3 className="text-[1.125rem] text-gray-900 font-[600]">
          Notifications
        </h3>
      </div>
      <TableDemo />
      <div className="w-[100%] pr-[24px] max-md:pr-[0px]   flex justify-end">
        <Button className="text-white bg-[#BFBFFF] w-fit max-md:w-[100%] rounded-[8px]">
          <span className="label">Save Changes</span>
        </Button>
      </div>
    </div>
  );
}
