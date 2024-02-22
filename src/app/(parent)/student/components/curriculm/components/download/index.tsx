import { DownloadIcon, FileIcon } from "@radix-ui/react-icons";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function MCard() {
  return (
    <div>
      <Card className="text-[#03080E] font-[600] border-0 w-[26.5rem] h-[18.25rem] max-md:w-fit max-md:mx-auto">
        <CardHeader>
          <CardTitle className="text-[1rem]">Downloads</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="flex items-center justify-between space-x-4 border-b-2 pb-[1rem] border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="h-[2.5rem] w-[2.5rem] rounded-[1.25rem] bg-[#D9D9FF]">
                <FileIcon className="mx-auto my-2.5 text-[#0000FF] h-[1.25rem] w-[1.25rem]" />
              </div>
              <div>
                <p className="text-[0.875rem]">Saxon 5/4 Cheat Sheet.pdf</p>
              </div>
            </div>
            <Button className="border-[1px] border-gray-300 rounded-[0.5rem] shadow-xs">
              <span className="label">Download</span>
            </Button>
          </div>
          <div className="flex items-center justify-between space-x-4 border-b-2 pb-[1rem] border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="h-[2.5rem] w-[2.5rem] rounded-[1.25rem] bg-[#D9D9FF]">
                <FileIcon className="mx-auto my-2.5 text-[#0000FF] h-[1.25rem] w-[1.25rem]" />
              </div>{" "}
              <div>
                <p className="text-[0.875rem]">
                  Corelation For Earlier Edition.pdf
                </p>
              </div>
            </div>
            <Button className="border-[1px] border-gray-300 rounded-[0.5rem] shadow-xs">
              <span className="label">Download</span>
            </Button>
          </div>
          <div className="flex items-center justify-between space-x-4 border-b-2 pb-[1rem] border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="h-[2.5rem] w-[2.5rem] rounded-[1.25rem] bg-[#D9D9FF]">
                <FileIcon className="mx-auto my-2.5 text-[#0000FF] h-[1.25rem] w-[1.25rem]" />
              </div>
              <div>
                <p className="text-[0.875rem]">TextBook Correction.pdf</p>
              </div>
            </div>
            <Button className="border-[1px] border-gray-300 rounded-[0.5rem] shadow-xs">
              <span className="label">Download</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
