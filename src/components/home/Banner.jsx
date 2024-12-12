import hero from "@/assets/hero/hero2.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
function Banner() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-right mb-10 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r from-transparent via-black/20 to-black/30 before:z-10"
      style={{ backgroundImage: `url('${hero}')` }}
    >
      <div className="container mx-auto px-4 relative z-50">
        <div className="py-32 w-1/2">
          <h2 className="text-5xl leading-tight font-bold text-white">
            Freelance Services For Your Business
          </h2>
          <p className="py-3 text-muted/80">
            Millions of people use freeio.com to turn their ideas into reality.
          </p>
          <div className="mt-6">
            <div className="bg-white pr-2 py-2 rounded-[100px] flex items-center gap-2 h-16 pl-6">
              <IoSearchOutline />
              <Input
                className="border-0 outline-0 shadow-none focus:outline-none focus-visible:outline-none focus:border-0 focus-visible:ring-0"
                placeholder="What are you looking for ?"
              />
              <Button className="rounded-3xl h-full w-40">Search</Button>
            </div>
          </div>
          <div className="text-muted/90 mt-4">
            <h4 className=" font-medium ">Popular Searches</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-muted/20 px-4 py-1 rounded-3xl ">
                Designer
              </span>
              <span className="bg-muted/20 px-4 py-1 rounded-3xl ">
                Developer
              </span>
              <span className="bg-muted/20 px-4 py-1 rounded-3xl ">Ios</span>
              <span className="bg-muted/20 px-4 py-1 rounded-3xl ">Web</span>
              <span className="bg-muted/20 px-4 py-1 rounded-3xl ">PHP</span>
              <span className="bg-muted/20 px-4 py-1 rounded-3xl ">Senior</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
