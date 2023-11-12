import {AuctionsFilterInputs} from "@/system/cars/components/auctions-filter/models/auctions-filter";


class AuctionsApi {
  async fetchAuctions(inputs: AuctionsFilterInputs) {
    const params = new URLSearchParams(inputs as Record<string, string>).toString()

    const response = await fetch(`http://localhost:3001/autos/auctions?${params}`);
    const data = await response.json();

    return data;
  }
}


export const auctionsAPI = new AuctionsApi();
