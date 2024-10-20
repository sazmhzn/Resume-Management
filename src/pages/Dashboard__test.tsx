import {
  BarChartComponent,
  PieChartComponent,
} from "@/components/ChartComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Dashboard__test = () => {
  return (
    <section className="relative  dark:bg-gray-900 w-full">
      <div className="text-base">
        <header className="flex mb-4">
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="inline-flex items-center justify-end gap-4 w-full">
            <Button
              variant="default"
              size="sm"
              className=" bg-blue-400 px-4 py-5 rounded-sn text-white text-sm"
            >
              Upgrade to Pro
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <article className="col-span-2">
            <BarChartComponent />
          </article>
          <div className="flex flex-col gap-4 relative  h-full">
            <PieChartComponent />
            <PieChartComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard__test;
