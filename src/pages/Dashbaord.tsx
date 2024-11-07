import {
  BarChartComponent,
  PieChartComponent,
} from "@/components/ChartComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="relative  dark:bg-gray-900 w-full">
      <div className="text-base">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <article className="col-span-2">
            <BarChartComponent />
          </article>
          <div className="flex flex-col gap-4 relative  h-full">
            <PieChartComponent />
            <PieChartComponent />
          </div>
          s
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
