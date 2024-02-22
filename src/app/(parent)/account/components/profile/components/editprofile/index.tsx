import Profileform from "../sidebarform";
export default function Edit() {
  return (
    <div className="w-[25.9375rem] h-[100vh] overflow-scroll border-b-[0.0625rem] pr-[4rem] max-md:pr-1 max-md:w-[100%] bg-white">
      <div className="px-[1.5rem] py-[1rem] border-b-[1px] border-gray-200">
        <p className="text-gray-900 font-[600] text-[1.5rem]">Oliviya rhye</p>
        <p className="text-gray-600 font-[400] text-[0.875rem]">
          Lorem adipisicing elit.
        </p>
      </div>
      <Profileform />
    </div>
  );
}
