import { authContext } from "@/provider/AuthProvider";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(authContext);
};
