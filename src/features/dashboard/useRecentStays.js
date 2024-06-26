import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../../services/apiBookings";
import { subDays } from "date-fns";

export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last") ? 7 : searchParams.get("last");
  const date = subDays(new Date(), numDays).toISOString();
  const { data: stays, isLoading } = useQuery({
    queryFn: () => getStaysAfterDate(date),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { stays, confirmedStays, isLoading, numDays };
}
