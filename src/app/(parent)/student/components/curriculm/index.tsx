import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Description from "./components/description";
import Form from "./components/form";
import Content from "./components/sheet";
import Curriculmsaxonmath from "@/app/assests/images/svg/curriculumsaxonmath";
export default function Curriculm() {
  return (
    <div className="p-[1.5rem] rounded-[0.5rem] border-[1px] border-gray-200 w-[59.8125rem] max-md:w-[100%]">
      <div className="flex flex-col gap-[1rem] pb-[1rem] border-b-[1px] border-gray-200">
        <p className="text-[1.125rem] font-[600] text-gray-900">Curriculum</p>
        <p className="text-[0.875rem] text-gray-600 font-[400]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex max-md:flex-col justify-between border-b-[1px] border-gray-200 py-[24px]">
        <Curriculmsaxonmath />
        <div className="flex max-md:flex-col gap-[1rem]">
          <Button className="text-[#0000bf] text-[0.875rem] font-[400]">
            <div className="h-[1rem] w-[1rem] rounded-full font-[400] border-[1px] border-[#0000bf]">
              ?
            </div>
            <span className=" underline underline-offset-2 label">
              How to change curriculum
            </span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="px-[0.875rem] max-md:text-[0.875rem] py-[0.5rem] rounded-[0.5rem] border-[1px] border-gray-300 ">
                <span className="label">Change Curiculum</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <Content />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="flex gap-[1.5rem] max-md:flex-col">
        <Form />
        <Description />
      </div>
    </div>
  );
}
