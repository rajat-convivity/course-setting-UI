import Profiledatacard from "./components/card";
const data = [
  {
    id: 1,
    name: "Oliviya",
    email: "oliviya@gmail.com",
  },
  {
    id: 2,
    name: "Harit",
    email: "harit@gmail.com",
  },

  {
    id: 3,
    name: "john",
    email: "john@gmail.com",
  },
];
export default function ProfileCard() {
  console.log(data, "dat");
  return (
    <div className="rounded-[0.75rem] shadow-sm border-[0.0625rem] max-md:w-[100%]  border-gray-200 w-[36.5625rem]">
      <div className="flex justify-between rounded-t-[0.75rem] py-[0.75rem] px-[1.5rem] border-b-[1px] border-gray-200 bg-gray-50 text-[0.75rem] font-[600] text-gray-600">
        <p>Name</p>
        <p className="max-md:hidden">Permissons</p>
        <p></p>
      </div>
      <div>
        {data.map((item) => {
          return <Profiledatacard items={item} />;
        })}
      </div>
    </div>
  );
}
