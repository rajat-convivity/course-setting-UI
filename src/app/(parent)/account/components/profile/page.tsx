import ProfileCard from "./components/profilecard";
import { Studentform } from "./components/studentform";

export default function Profile() {
  return (
    <div className="rounded-[0.75rem] w-[52rem] max-md:w-[100%] p-[1.5rem] max-md:px-4 border-[0.0625rem] flex flex-col gap-[1rem] border-gray-200 shadow-sm">
      <div className="border-b-[0.0625rem] flex flex-col gap-[1.25rem] pb-[1.25rem] px-[1rem]">
        <p className="text-gray-900 font-[600] text-[1.125rem]">
          Secondary Access
        </p>
        <p className="text-gray-600 font-[400] text-[0.875rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="gap-[4rem] flex max-md:flex-col px-[1rem]">
        <div className="w-[17.5rem]">
          <p className="text-[0.875rem] font-[600] text-gray-700">
            Invite Members
          </p>
          <p className="text-gray-600 font-[400] text-[0.875rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quas.
          </p>
        </div>
        <Studentform />
      </div>
      <div className="flex max-md:flex-col gap-[4rem] border-t-[1px] border-gray-200 pt-[2rem]">
        <div className="w-[17.5rem] px-[1rem]">
          <p className="text-[0.875rem] font-[600] text-gray-700">
            Members Access
          </p>
          <p className="text-gray-600 font-[400] text-[0.875rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quas.
          </p>
        </div>
        <ProfileCard />
      </div>
    </div>
  );
}
