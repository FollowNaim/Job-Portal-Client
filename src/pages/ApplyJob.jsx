import fillAnimation from "@/assets/animation/fill.json";

import { Button } from "@/components/ui/button";
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
import { PhoneInput } from "@/components/ui/PhoneInput";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Lottie from "lottie-react";
import { useParams } from "react-router-dom";

export default function ApplyJob() {
  const { user } = useAuth();
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["single-job"],
    queryFn: async () => {
      const res = await axios.get(`/jobs/${id}`);
      return res;
    },
  });
  if (isError) return <p>Something went wrong</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data.data) return <p>Something went wrong</p>;
  const { title, company, jobId } = data.data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = Object.fromEntries(new FormData(e.target));
    formdata.jobId = jobId;
    formdata.email = user.email;
    const res = await axios.post("/jobs/apply", formdata);
    console.log(res);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center justify-center mt-10 mb-14 px-4 md:px-6">
      <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">
              {company} - {title}
            </CardTitle>
            <CardDescription>
              Apply for job and make your career to new level.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label>User Name</Label>
                <Input disabled value={user?.displayName} />
              </div>
              <div className="grid gap-2 w-full">
                <Label>User Email</Label>
                <Input disabled value={user?.email} />
              </div>
            </div> */}
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="name">FullName</Label>
                <Input required name="name" id="name" placeholder="Jon Doe" />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="phone">Phone Number</Label>
                <PhoneInput name="phone" defaultCountry="BD" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid gap-2 w-full">
                <Label htmlFor="linkedin">Linkedin URL</Label>
                <Input
                  required
                  name="linkedin"
                  id="linkedin"
                  type="url"
                  placeholder="https://www.linkedin.com/in/ataurrahmannaim"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="portfolio">Portfolio Link</Label>
                <Input
                  required
                  name="portfolio"
                  id="portfolio"
                  type="url"
                  placeholder="https://naim.vercel.app"
                />
              </div>
            </div>
            <div className="w-full">
              <Label htmlFor="cover_letter">Cover Letter</Label>
              <Textarea
                name="cover_letter"
                placeholder="Write your cover letter."
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
  );
}
