import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

function Service() {
  return (
    <div className="group">
      <Card className="bg-green-50/20  group-hover:-translate-y-1 group-hover:transition-transform group-hover:ease-in-out group-hover:duration-300 shadow-none group-hover:border-green-500">
        <CardHeader className="">
          <div className="flex items-center gap-4 pb-3">
            <img
              className="w-10"
              src="https://i.ibb.co/mXD5MNf/facebook.png"
              alt=""
            />
            <div>
              <h3 className="text-lg font-medium">Favorite IT</h3>
              <p className="flex items-center gap-2">
                <CiLocationOn /> <p className="text-primary/60"> Chittagong</p>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <CardTitle className="text-lg">Software Engineer </CardTitle>
            <CardDescription>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2">
                  <MdOutlineWorkHistory />{" "}
                  <p className="text-primary/70">Hybrid</p>
                </p>
                <p className="flex items-center gap-2">
                  <IoMdTime /> <p className="text-primary/70">32 minutes ago</p>
                </p>
              </div>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p className="">
              We are seeking a skilled Software Engineer to join our dynamic
              team. The candidate will work on diverse projects and contribute
              to innovative solutions.
            </p>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <span className="bg-muted px-3 py-1 text-black rounded-md">
                Javascript
              </span>
              <span className="bg-muted px-3 py-1 text-black rounded-md">
                React
              </span>
            </div>
            <div className="flex items-center mt-4 ">
              <p className="text-black  text-base pr-2">40000 / 60000 </p> BDT
            </div>
          </CardDescription>
          <div className="flex justify-between items-center mt-6">
            <Button className="bg-transparent" variant="outline">
              View Details
            </Button>
            <Button
              className="group-hover:bg-green-800 group-hover:text-white bg-transparent"
              variant="outline"
            >
              Apply Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Service;
