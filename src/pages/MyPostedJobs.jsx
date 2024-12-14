import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { MoreHorizontal } from "lucide-react";

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
            <TableHead className="text-right">Actions</TableHead>
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
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Update this Job</DropdownMenuItem>
                    <DropdownMenuItem>View Job Details</DropdownMenuItem>
                    <DropdownMenuItem>Delete Job</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MyPostedJobs;
