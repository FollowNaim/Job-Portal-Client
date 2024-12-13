import signupAnimation from "@/assets/animation/register.json";
import Validation from "@/components/pass-validation/Validation";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { auth } from "@/firebase/firebase.config";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const { handleSignup, setLoading } = useAuth();
  const [isDisable, setIsDisable] = useState(true);
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const role = form.rule.value;
    const password = pass;
    handleSignup(email, pass).then((res) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      }).then(() => {
        axios.post("/users", {
          uid: res.user.uid,
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
          role,
        });
        navigate("/");
      });
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full max-w-7xl mx-auto my-10 px-4">
      <form className="col-span-1" onSubmit={handleSubmit}>
        <Card className="md:max-w-sm w-full  mx-auto ">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Sign up your account</CardTitle>
            <CardDescription>
              Provide your user info to create a account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                required
                name="name"
                id="name"
                placeholder="Enter the user's name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                name="email"
                id="email"
                type="email"
                placeholder="Enter the user's email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="photo">Photo URL</Label>
              <Input
                name="photo"
                id="photo"
                type="url"
                placeholder="Enter a photo url"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="photo">Select Your Rule</Label>
              <Select name="rule">
                <SelectTrigger className="">
                  <SelectValue placeholder="Select Your Rule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Rule</SelectLabel>
                    <SelectItem value="job_seeker">Job Seeker</SelectItem>
                    <SelectItem value="recruiter">Recruiter</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Validation setPass={setPass} setIsDisable={setIsDisable} />
            </div>
            <Button disabled={isDisable} className="w-full pt-2">
              Sign Up
            </Button>
            <div className="mt-4 text-center text-sm">
              Alreadt have an account?{" "}
              <Link to="/auth/signin" className="underline">
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
      <div className="col-span-1 hidden md:block">
        <div className="w-[300px] h-[300px] mx-auto col-span-1 ">
          <Lottie
            width={300}
            height={300}
            animationData={signupAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}
