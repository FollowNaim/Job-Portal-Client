import fillAnimation from "@/assets/animation/fill.json";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import axios from "axios";
import { format } from "date-fns";
import Lottie from "lottie-react";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
function AddJob() {
  const { user } = useAuth();
  const [date, setDate] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const { max, min, ...newjob } = data;
    newjob.salaryRange = { min, max, currency: "bdt" };
    newjob.requirements = newjob.requirements.split("\n");
    newjob.responsibilities = newjob.responsibilities.split("\n");
    newjob.jobId = `job-${Math.floor(1000 + Math.random() * 9000)}`;
    newjob.hr_email = user.email;
    newjob.hr_name = user.displayName || "N/A";
    newjob.applicationDeadline = date;
    axios.post("/jobs", newjob);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center justify-center mt-10 mb-14 px-4 md:px-6">
        <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
          <Card className="w-full max-w-lg mx-auto">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl">Add a Job</CardTitle>
              <CardDescription>
                Apply for job and make your career to new level.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    required
                    name="title"
                    id="title"
                    placeholder="ex: Web Developer"
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="jobType">Job Type</Label>
                  <Select name="jobType">
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select a Job Type " />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                        <SelectItem value="Remote">Remote</SelectItem>
                        <SelectItem value="OnSite">OnSite</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                {/* <div className="grid gap-2 w-full">
                  <Label htmlFor="phone">Phone Number</Label>
                  <PhoneInput name="phone" defaultCountry="BD" />
                </div> */}
              </div>
              <div className="flex items-center gap-3">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    required
                    name="company"
                    id="company"
                    type="text"
                    placeholder="Gree Line"
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="company_logo">Company Logo</Label>
                  <Input
                    required
                    name="company_logo"
                    id="company_logo"
                    type="url"
                    placeholder="https://example.com/logo.png"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    required
                    name="location"
                    id="location"
                    type="text"
                    placeholder="ex: washington DC, USA"
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="applicationDeadline">Status</Label>
                  <Select name="status">
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select a Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="inactive">inactive</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="category">Category</Label>
                  <Select name="category">
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="Development">Development</SelectItem>
                        <SelectItem value="Engineering">Engineering</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Teaching">Teaching</SelectItem>
                        <SelectItem value="Management">Management</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="applicationDeadline">
                    Application Deadline
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          " justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="min">Min Salaray</Label>
                  <Input
                    required
                    name="min"
                    id="min"
                    type="number"
                    placeholder="Minimum Salary"
                  />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="max">Max</Label>
                  <Input
                    required
                    name="max"
                    id="max"
                    type="number"
                    placeholder="Maximum Salary"
                  />
                </div>
              </div>
              <div className="w-full">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea
                  name="requirements"
                  placeholder="Write your requirements. per requirements in a new line."
                />
              </div>
              <div className="w-full">
                <Label htmlFor="responsibilities">Responsibilities</Label>
                <Textarea
                  name="responsibilities"
                  placeholder="Write your responsibilities. per responsibilities in a new line."
                />
              </div>
              <div className="w-full">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  placeholder="Write your job description."
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply</Button>
            </CardFooter>
          </Card>
        </form>
        <div className="w-[300px] h-[300px] mx-auto col-span-1 hidden md:block">
          <Lottie
            width={300}
            height={300}
            animationData={fillAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}

export default AddJob;
