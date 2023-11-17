import {AuctionsFilterInputs} from "@/system/cars/components/auctions-filter/models/auctions-filter";


class AuctionsApi {
  async fetchAuctions(inputs: AuctionsFilterInputs) {
    const params = new URLSearchParams(inputs as Record<string, string>).toString()

    const response =
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE}/autos/auctions?${params}`);
    const data = await response.json();

    return data;
  }

  async fetchAuction(id: string) {
    const response =
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE}/autos/auctions/${id}`);

    const auction = response.json();
    return auction;
  }
}


export const auctionsAPI = new AuctionsApi();
