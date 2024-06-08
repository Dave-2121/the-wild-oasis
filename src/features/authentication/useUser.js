import { useQuery } from "@tanstack/react-query";
import { getCurrentuser } from "../../services/apiAuth";
export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentuser,
  });

  const isAuthenticated = user?.role === "authenticated";

  return { user, isLoading, isAuthenticated };
}
