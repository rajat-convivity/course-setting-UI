import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Require from "../assignmentsetting/requiredassignment";
import Curriculm from "../curriculm";
import Notification from "../notification";

export function TabsDemo() {
  return (
    <Tabs
      defaultValue="curriculum"
      className="flex gap-[2rem] max-md:flex-col w-[400px]">
      <TabsList className="flex flex-col mt-10 gap-[0.5rem] w-full">
        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
        <TabsTrigger value="assignment">Assignment setting</TabsTrigger>
        <TabsTrigger value="notification">Notification</TabsTrigger>
      </TabsList>
      <TabsContent value="curriculum">
        <Curriculm />
      </TabsContent>
      <TabsContent value="assignment">
        <Require />
      </TabsContent>
      <TabsContent value="notification">
        <Notification />
      </TabsContent>
    </Tabs>
  );
}
