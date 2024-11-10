import { JobCardOfTheDay } from "@/components/common/CustomCard";
import CustomSearch from "@/components/common/CustomSearch";
// import Heading from "@/components/common/Heading";
import { jobOfTheDay } from "@/lib/data";

const Jobs = () => {
  return (
    <>
      <section className="p-4 bg-white">
        <div className="flex min-h-[20vh] items-center rounded-lg justify-between max-w-7xl px-0 py-10 mx-auto">
          <div className="mx-auto w-full bg-blue-50 p-4 flex gap-8 md:items-center justify-between">
            <div className="md:w-2/3 mx-auto space-y-4">
              <div className="relative flex flex-col items-center justify-center">
                <h1 className="text-[#05264e] text-center md:text-5xl text-4xl md:font-extrabold font-semibold m-0 p-0">
                  <div className="w-[200px] h-[25px] absolute left-[135px] top-[30px]  opacity-10 bg-[#3c65f5]" />
                  <span className="text-[#3c65f5] font-['Inter'] inline leading-[60px]">
                    22 Jobs{" "}
                  </span>
                  Available Now
                </h1>
                <div className="text-[#4f5e64] text-center w-[70ch] md:text-md text-sm font-normal font-['Inter'] leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  repellendus magni, atque delectus molestias quis
                </div>
              </div>

              <CustomSearch />
            </div>
          </div>
        </div>
      </section>

      {/* of the day */}
      <section className="bg-white py-8">
        <div className="flex  flex-col items-center justify-between max-w-7xl px-0 mx-auto">
          <div className="flex w-full  flex-col items-center justify-between ">
            <div className="my-12 px-6 flex-1 relative grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 content-start gap-4 w-full">
              {jobOfTheDay &&
                jobOfTheDay.map((job, index) => <JobCardOfTheDay {...job} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
