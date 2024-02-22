import { Button } from "@/components/ui/button";
import { List, Arrow_right } from "lucide-react";
import MCard from "../download";
import Curriculmsaxonmath from "@/app/assests/images/svg/curriculumsaxonmath";
import CurriculumProfile from "@/app/assests/images/svg/Curriculumprofile";
export default function Description() {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex flex-col gap-[1rem]">
        <div className=" max-md:w-100% flex flex-col gap-[1rem] items-start">
          <p className="font-[700] text-[#03080E]">Description</p>

          <ul className="list-disc pl-[1.25rem]">
            <li>Saxon Math 5/4</li>
            <li>3rd Edition</li>
            <li>20 Lesson</li>
            <li>12 Investigation</li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam
            quas autem incidunt, fugit ducimus esse, cum magni quod cumque
            fugiat ullam inventore eius necessitatibus veritatis maiores at
            dolor. Nesciunt veniam perspiciatis eveniet ratione velit sequi eos,
            earum, alias fugiat quia cumque? Enim alias deleniti modi fuga,
            harum non quos.
          </p>

          <Button className="left-0 border-[0px] shadow-none text-[#0000BF] px-0 pb-[0.5rem] flex gap-[0.5rem]">
            <List width={"20px"} />
            <span className="label">Table of Content</span>
          </Button>
        </div>
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-[#03080E] font-[700]">Teacher</p>
          <div className="bg-[#F7F5F1] rounded-full flex justify-between p-[0.5rem] items-center">
            <div className="flex">
              <CurriculumProfile />
              <p className="text-[#03080E] font-[600] text-[0.875rem] my-auto px-2">
                Mrs Thompson
              </p>
            </div>
            <Button className=" text-[#0000BF] font-[600] text-[0.875rem] flex items-center border-none shadow-none gap-[0.25rem]">
              <span className="label">About</span>
              <Arrow_right height={"18px"} />
            </Button>
          </div>
        </div>
      </div>
      <MCard />
    </div>
  );
}
