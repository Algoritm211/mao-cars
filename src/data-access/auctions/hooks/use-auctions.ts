import { useQuery } from '@tanstack/react-query';
import { EntitiesKeys } from '@/data-access/constants/entities-keys';
import { auctionsAPI } from '@/data-access/auctions/auctions-api';
import { AuctionsFilterInputs } from '@/system/cars/components/auctions-filter/models/auctions-filter';
import { GetAuctionDTO } from '@/core/interfaces/api/auctions';

export const useAuctions = (filter: AuctionsFilterInputs) => {
  return useQuery<GetAuctionDTO>({
    queryKey: [EntitiesKeys.auctions, filter],
    queryFn: () => auctionsAPI.fetchAuctions(filter),
    refetchOnMount: false,
  });
};
