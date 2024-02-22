"use client";
import {} from "@/app/assests/images/Mathbook.png";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Saxonmathbook from "@/app/assests/images/svg/saxonmathbookcurriculum";
export default function Form() {
  const [position, setPosition] = useState("bottom");
  return (
    <div className="flex max-md:flex-col gap-[1.5rem]">
      <Saxonmathbook />
      <div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[6px]">
            <p className="text-gray-600 font-[600]">Textbook</p>
            <Select>
              <SelectTrigger className="w-[320px] border-gray-300 rounded-[8px]">
                <SelectValue placeholder="Saxon math 5/4" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="bg-white">
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-gray-600 font-[600]">Edition</p>
            <Select>
              <SelectTrigger className="w-[320px] border-gray-300 rounded-[8px]">
                <SelectValue placeholder="Three" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="bg-white">
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-gray-600 font-[600]">Start at lesson</p>
            <Select>
              <SelectTrigger className="w-[320px] border-gray-300 rounded-[8px]">
                <SelectValue placeholder="One" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="bg-white">
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <p className="text-gray-600 font-[600]">Enable Videos</p>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Teaching Video</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Corny Brain Break</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Practice Video</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
