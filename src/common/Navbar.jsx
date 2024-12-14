import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, dbUser, handlSignOut } = useAuth();
  return (
    <div className="">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 border-b border-border">
        <div>
          <h2 className="text-2xl font-bold">Freeio.</h2>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/my-jobs"}>
              <li>My Jobs</li>
            </Link>
            <Link to={"/jobs"}>
              <li>All Jobs</li>
            </Link>
            <Link to={"/my-posted-jobs"}>
              <li>My Posted Jobs</li>
            </Link>
            {dbUser?.role === "recruiter" && (
              <Link to={"/add-jobs"}>
                <li>Add a Job</li>
              </Link>
            )}
            {dbUser?.role === "job_seeker" && <li>Apply for Job</li>}
          </ul>
        </div>
        <div>
          {!user && (
            <>
              <Link to={"/auth/signin"}>
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to={"/auth/signup"}>
                <Button variant="">Register</Button>
              </Link>
            </>
          )}
          {user && (
            <>
              <Button variant="" onClick={handlSignOut}>
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
