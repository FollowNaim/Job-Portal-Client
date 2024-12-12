import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div className="">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 border-b border-border">
        <div>
          <h2 className="text-2xl font-bold">Freeio.</h2>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>Home</li>
            <li>Services</li>
            <li>Pages</li>
          </ul>
        </div>
        <div>
          <Button variant="ghost">Login</Button>
          <Button variant="">Register</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
