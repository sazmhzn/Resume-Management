import { RecentJobCards } from "@/components/candidate/Cards";

const jobs = [
  {
    logoSrc:
      "data:image/png;base64,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",
    position: "Digital Marketing Executive",
    location: "Balkumari, Lalitpur",
    type: "Full Time",
    published: "11 months ago",
    salary: "20 - 40",
  },
  {
    logoSrc:
      "data:image/png;base64,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",
    position: "Software Engineer",
    location: "Kathmandu, Nepal",
    type: "Part Time",
    published: "2 months ago",
    salary: "30 - 50",
  },
  // Add more job objects as needed
];

export const AppliedJobs = () => {
  return (
    <div className="space-y-4">
      {jobs.map((job, index) => (
        <RecentJobCards
          key={index}
          // logoSrc={job.logmakeoSrc}
          position={job.position}
          location={job.location}
          type={job.type}
          published={job.published}
          salary={job.salary}
        />
      ))}
    </div>
  );
};