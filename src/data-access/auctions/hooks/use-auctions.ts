import {useQuery} from "@tanstack/react-query";
import {EntitiesKeys} from "@/data-access/constants/entities-keys";
import {auctionsAPI} from "@/data-access/auctions/auctions-api";

export const useAuctions = () => {
  return useQuery({
    queryKey: [EntitiesKeys.auctions],
    queryFn: auctionsAPI.fetchAuctions,
  })
}
