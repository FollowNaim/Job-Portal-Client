import Service from "@/components/home/Service";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function AllJobs() {
  const { data, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get("/jobs");
      return res;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="grid grid-cols-3 gap-4 my-10 px-4">
      {data.data.map((job) => (
        <Service key={job._id} job={job} />
      ))}
    </div>
  );
}

export default AllJobs;
