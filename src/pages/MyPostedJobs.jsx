import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function MyPostedJobs() {
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["my-jobs"],
    queryFn: async () => {
      const res = axios.get(`/posted-jobs?email=${user.email}`);
      return res;
    },
  });
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="px-4 my-10">
      <Table>
        <TableCaption>A list of your posted jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>

            <TableHead className="">Job ID</TableHead>
            <TableHead className="">Job Title</TableHead>
            <TableHead className="">Job Location</TableHead>
            <TableHead>Job Type</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="">Salary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((job, i) => (
            <TableRow key={job.jobId}>
              <TableCell>{i + 1}</TableCell>
              <TableCell className="font-medium">{job.jobId}</TableCell>
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell className="font-medium">{job.location}</TableCell>
              <TableCell>{job.jobType}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.category}</TableCell>
              <TableCell>{job.status}</TableCell>
              <TableCell className="">
                {job.salaryRange.min + " " + "/" + " " + job.salaryRange.max}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MyPostedJobs;
