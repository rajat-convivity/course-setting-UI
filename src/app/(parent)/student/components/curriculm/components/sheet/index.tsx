import Cards from "./card";

export default function Content() {
  const paymentcard = [
    {
      id: "1",
      value: "math",
    },
    {
      id: "2",
      value: "english",
    },
    {
      id: "3",
      value: "science",
    },
  ];
  return (
    <div>
      <div className="pb-[1rem] border-b-[1px] border-gray-200  flex flex-col gap-[8px]">
        <p className="text--gray-900 text-[24px] font-[700]">Change Curiulum</p>
        <p className="text-[1rem] font-[400] text-[#465F82]">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <Cards />
    </div>
  );
}
