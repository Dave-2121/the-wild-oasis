import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
export function useBookings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //Filter
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue, operation: "eq" };

  //sort
  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortValue.split("-");
  const sortBy = !sortValue ? null : { field, direction };

  //pagination
  const page = !searchParams.get("page") ? 1 : +searchParams.get("page");

  const { data: { data: bookings, count } = {}, isLoading } = useQuery({
    queryKey: ["bookings", filteredValue, sortValue, page],
    queryFn: async () => getBookings({ filter, sortBy, page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  //prefetching
  page !== pageCount &&
    queryClient.prefetchQuery({
      queryKey: ["bookings", filteredValue, sortValue, page + 1],
      queryFn: async () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  page !== 1 &&
    queryClient.prefetchQuery({
      queryKey: ["bookings", filteredValue, sortValue, page - 1],
      queryFn: async () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { bookings, isLoading, count };
}
