import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface ValueCardProps {
  title: string;
  iconSrc: string;
  amount: string;
  percentageChange: string;
  isIncrease: boolean;
}
export const ValueCard = ({
  title,
  iconSrc,
  amount,
  percentageChange,
  isIncrease,
}) => {
  return (
    <div className="col-lg-6 col-md-12 col-6 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="card-title d-flex align-items-start justify-content-between">
            <div className="avatar flex-shrink-0">
              <img src={iconSrc} alt={title} className="rounded" />
            </div>
            <div className="dropdown">
              <button
                className="btn p-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-dots-vertical-rounded" />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="javascript:void(0);">
                  View More
                </a>
                <a className="dropdown-item" href="javascript:void(0);">
                  Delete
                </a>
              </div>
            </div>
          </div>
          <span className="fw-semibold d-block mb-1">{title}</span>
          <h3 className="card-title mb-2">{amount}</h3>
          <small
            className={`fw-semibold ${
              isIncrease ? "text-success" : "text-danger"
            }`}
          >
            <i
              className={`bx ${
                isIncrease ? "bx-up-arrow-alt" : "bx-down-arrow-alt"
              }`}
            />{" "}
            {percentageChange}
          </small>
        </div>
      </div>
    </div>
  );
};

export const JobCategoryCard = ({ title, jobsAvailable, imageSrc, link }) => {
  return (
    <div className="flex gap-4 p-2 relative bg-white rounded-xl border border-[#061224]/10">
      <img
        className="w-[42px] h-[42px] aspect-square "
        src={imageSrc}
        alt="Job Icon"
      />
      <div className="space-y-2">
        <div className=" text-[#05264e] text-base font-medium font-['Inter'] leading-tight">
          <Link to={link}>{title} </Link>
        </div>
        <div className="w-[96.89px] h-[18px] left-[71px] top-[49.69px]  text-[#4f5e64] text-xs font-medium font-['Inter'] leading-[18px]">
          {jobsAvailable} Jobs Available
        </div>
      </div>
    </div>
  );
};

export const JobCardOfTheDay = ({
  companyName,
  location,
  position,
  jobType,
  postedDate,
  description,
  skills = [],
  salaryInfo = "Sign in to view salary",
  logoSrc = "https://via.placeholder.com/52x52",
}) => {
  return (
    <div className="bg-[#f8faff] rounded-lg border border-[#e0e6f7] p-6 flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <img
          className="w-[52px] h-[52px]"
          src={logoSrc}
          alt={`${companyName} logo`}
        />
        <div>
          <div className="text-[#05264e] text-lg font-bold font-['Inter']">
            {companyName}
          </div>
          <div className="text-[#777f87] text-xs font-normal font-['Inter']">
            {location}
          </div>
        </div>
      </div>

      {/* Position and Job Type */}
      <div>
        <div className="text-[#05264e] text-sm font-bold font-['Inter'] leading-tight">
          {position}
        </div>
        <div className="flex gap-4 text-[#777f87] text-xs font-normal font-['Inter'] mt-1">
          <span>{jobType}</span>
          <span>{postedDate}</span>
        </div>
      </div>

      {/* Description */}
      <div className="text-[#4f5e64] text-sm font-medium font-['Inter'] line-clamp-3">
        {description}
      </div>

      {/* Skills */}
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-3 py-1 bg-[#eff3fc] rounded-[5px] text-center text-[#4f5e64] text-xs font-normal font-['Inter'] leading-3"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Salary Information */}
      <Link
        to="/my-account"
        className="m-0 p-0 text-[#3c65f5] text-base font-semibold font-['Inter'] flex items-center gap-1"
      >
        {salaryInfo}
      </Link>

      {/* Apply Button */}
      <Button className=" px-6 py-3 bg-[#e0e6f7] rounded text-[#3c65f5] text-xs font-normal font-['Inter'] capitalize">
        Apply Now
      </Button>
    </div>
  );
};

export const TopRecruiter = ({
  companyName,
  location,
  openings,
  logoSrc,
  rating,
}) => {
  return (
    <div className="bg-white rounded-xl border border-[#061224]/10 p-4 flex flex-col justify-between">
      <div className="flex flex-col items-start gap-2">
        <img
          className="w-[42px] h-[42px] rounded-full"
          src={logoSrc}
          alt={`${companyName} logo`}
        />
        <div>
          <h3 className="text-[#05264e] text-base font-bold my-1">
            {companyName}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index < rating ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
            <span className="text-[#777f87] text-xs font-medium">
              ({rating})
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-2">
          <span className="text-[#777f87] text-xs font-normal">{location}</span>
        </div>
        <div className="text-[#777f87] text-xs font-normal">
          {openings} Opening Jobs
        </div>
      </div>
    </div>
  );
};
