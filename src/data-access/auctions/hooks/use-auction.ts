import {useQuery} from "@tanstack/react-query";
import {auctionsAPI, EntitiesKeys} from "@/data-access";
import {AuctionExtended} from "@/core/interfaces/api/auction";

export const useAuction = (id: string) => {
  return useQuery<AuctionExtended>({
    queryKey: [EntitiesKeys.auction, id],
    queryFn: () => auctionsAPI.fetchAuction(id),
    refetchOnMount: false
  })
}
