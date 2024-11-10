import { JobCard, JobCardOfTheDay } from "@/components/common/CustomCard";
import CustomSearch from "@/components/common/CustomSearch";
// import Heading from "@/components/common/Heading";
import { jobOfTheDay, jobs } from "@/lib/data";

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

      <section className="bg-white pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
