import pay from "@/assets/hero/apple-pay.png";
import bigcta from "@/assets/hero/big-cta.jpg";
import freelancer from "@/assets/hero/freelancer.png";
import job from "@/assets/hero/job.png";
import support from "@/assets/hero/support.png";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Services from "@/components/home/Services";
import SmallCard from "@/components/home/SmallCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";

function Home() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const result = await axios.get("/jobs?limit=6");
      return result;
    },
  });
  console.log(data?.data);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <Banner />
      <div className="px-4 mb-10 container mx-auto">
        <h4 className="text-3xl font-bold">Need something done?</h4>
        <p className="pt-2">Most viewed and all-time top-selling services</p>
        <div className="grid grid-cols-4 gap-4 mt-10">
          <SmallCard
            img={job}
            title={"Post a job"}
            sub={
              "It’s free and easy to post a job. Simply fill in a title, description."
            }
          />
          <SmallCard
            img={freelancer}
            title={"Choose freelancers"}
            sub={
              "It’s free and easy to post a job. Simply fill in a title, description."
            }
          />
          <SmallCard
            img={pay}
            title={"Pay safely"}
            sub={
              "It’s free and easy to post a job. Simply fill in a title, description."
            }
          />
          <SmallCard
            img={support}
            title={"We’re here to help"}
            sub={
              "It’s free and easy to post a job. Simply fill in a title, description."
            }
          />
        </div>
      </div>
      <div className="mb-10 mt-20">
        <Categories />
      </div>
      <div className="mb-10 mt-20">
        <Services jobs={data?.data} />
      </div>
      <div
        className="bg-cover bg-no-repeat py-20 bg-center mb-10"
        style={{ backgroundImage: `url('${bigcta}')` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-sm">
            <h3 className="text-3xl leading-snug font-bold font-dm">
              With talented freelancers do more work.
            </h3>
            <div className="mt-6 flex items-center gap-6">
              <Button
                className="rounded-3xl py-6 flex items-center bg-green-800"
                size="lg"
              >
                <GoArrowUpRight /> Find Work
              </Button>
              <Button
                className="rounded-3xl py-6 bg-transparent flex items-center border-black hover:text-white hover:bg-black"
                size="lg"
                variant="outline"
              >
                <GoArrowUpRight /> Find Talent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
