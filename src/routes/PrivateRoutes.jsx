import { useAuth } from "@/hooks/useAuth";

function PrivateRoutes({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Permission denied</p>;
  return children;
}

export default PrivateRoutes;
