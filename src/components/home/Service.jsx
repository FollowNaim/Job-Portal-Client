import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function Service({ job }) {
  const {
    _id,
    jobId,
    title,
    location,
    category,
    jobType,
    description,
    company_logo,
    company,
    requirements,
    salaryRange,
  } = job || {};
  return (
    <div className="group">
      <Card className="bg-green-50/20 h-[430px] group-hover:-translate-y-1 group-hover:transition-transform group-hover:ease-in-out group-hover:duration-300 shadow-none group-hover:border-green-500 flex flex-col">
        <CardHeader className="">
          <div className="flex items-center gap-4 pb-3">
            <img className="w-10" src={company_logo} alt="" />
            <div>
              <h3 className="text-lg font-medium">{company}</h3>
              <p className="flex items-center gap-2 mt-2 text-sm">
                <CiLocationOn /> <p className="text-primary/60"> {location}</p>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2">
                  <MdOutlineWorkHistory />{" "}
                  <p className="text-primary/70">{jobType}</p>
                </p>
                <p className="flex items-center gap-2">
                  <IoMdTime /> <p className="text-primary/70">32 minutes ago</p>
                </p>
              </div>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto">
          <CardDescription>
            <p className="">{description}</p>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              {requirements.map((req, i) => (
                <span
                  key={i}
                  className="bg-muted px-3 py-1 text-black rounded-md"
                >
                  {req}
                </span>
              ))}
            </div>
            <div className="flex items-center mt-4 ">
              <p className="text-black  text-base pr-2">
                {salaryRange.min} / {salaryRange.max}{" "}
              </p>{" "}
              {salaryRange.currency === "bdt" ? "BDT" : salaryRange.currency}
            </div>
          </CardDescription>
          <div className="flex justify-between items-center mt-6">
            <Button className="bg-transparent" variant="outline">
              View Details
            </Button>
            <Link to={`/jobs/apply/${jobId}`}>
              <Button
                className="group-hover:bg-green-800 group-hover:text-white bg-transparent"
                variant="outline"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Service;
