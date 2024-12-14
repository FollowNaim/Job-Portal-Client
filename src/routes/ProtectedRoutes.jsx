import { useAuth } from "@/hooks/useAuth";

function ProtectedRoutes({ children, allowedRoles = [] }) {
  const { loading, dbUser } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (dbUser?.role && !allowedRoles.includes(dbUser?.role))
    return <p>Permission denied</p>;
  return children;
}

export default ProtectedRoutes;
