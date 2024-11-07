import React from "react";

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
