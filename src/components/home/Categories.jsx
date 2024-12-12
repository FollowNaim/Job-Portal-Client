import c1 from "@/assets/hero/c1.jpg";
import c2 from "@/assets/hero/c2.jpg";
import c3 from "@/assets/hero/c3.jpg";
import c4 from "@/assets/hero/c4.jpg";
import c5 from "@/assets/hero/c5.jpg";
import Category from "./Category";
function Categories() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <h4 className="text-3xl font-bold">Browse talent by category</h4>
        <p className="py-4">Get some Inspirations from 1800+ skills</p>
        <div className="grid grid-cols-5 gap-8 mt-8">
          <Category count={8} img={c1} title={"Development & IT"} />
          <Category count={8} img={c2} title={"Design & Creative"} />
          <Category count={2} img={c3} title={"Digital & Marketing"} />
          <Category count={4} img={c4} title={"Writing & Translation"} />
          <Category count={5} img={c5} title={"Music & Audio"} />
        </div>
      </div>
    </div>
  );
}

export default Categories;
