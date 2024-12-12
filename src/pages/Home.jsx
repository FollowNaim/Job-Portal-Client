import pay from "@/assets/hero/apple-pay.png";
import freelancer from "@/assets/hero/freelancer.png";
import job from "@/assets/hero/job.png";
import support from "@/assets/hero/support.png";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Services from "@/components/home/Services";
import SmallCard from "@/components/home/SmallCard";

function Home() {
  return (
    <div>
      <Banner />
      <div className="px-4 mb-10">
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
        <Services />
      </div>
    </div>
  );
}

export default Home;
