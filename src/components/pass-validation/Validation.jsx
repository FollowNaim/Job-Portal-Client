import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function Validation({ setIsDisable, setPass }) {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState({});
  const PASSWORD_REQUIREMENTS = [
    { regex: /.{6,}/, text: "At least 6 characters" },
    { regex: /[a-z]/, text: "At least 1 lowercase letter" },
    { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  ];
  useEffect(() => {
    const validation = () => {
      const filtered = PASSWORD_REQUIREMENTS.map((req) => {
        return {
          met: req.regex.test(password),
          text: req.text,
        };
      });
      return {
        score: filtered.filter((req) => req.met).length,
        filtered,
      };
    };
    setScore(validation());
    setPass(password);
  }, [password]);
  useEffect(() => {
    setIsDisable(score.score >= 3 ? false : true);
  }, [score.score]);
  return (
    <div>
      <Label>Password</Label>
      <Input
        type="text"
        value={password}
        placeholder="Enter a password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex gap-2 justify-between mt-2">
        <span
          className={`${
            score.score >= 1 ? "bg-green-200" : "bg-border"
          } p-1 w-full rounded-full`}
        ></span>
        <span
          className={`${
            score.score >= 2 ? "bg-green-200" : "bg-border"
          } p-1 w-full rounded-full`}
        ></span>
        <span
          className={`${
            score.score >= 3 ? "bg-green-200" : "bg-border"
          } p-1 w-full rounded-full`}
        ></span>
      </div>
      <div>
        <p className="my-2 text-sm font-medium">Must Contain</p>
        <ul>
          {score?.filtered?.map((req, i) => {
            {
              return (
                <li key={i} className="flex gap-2 items-center">
                  {req.met ? (
                    <Check className="text-emerald-500" size={16} />
                  ) : (
                    <X className="text-muted-foreground/80" size={16} />
                  )}{" "}
                  <p
                    className={`${
                      req.met ? "text-emerald-500" : "text-muted-foreground"
                    } text-xs`}
                  >
                    {req.text}
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Validation;
