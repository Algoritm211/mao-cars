

class AuctionsApi {
  async fetchAuctions() {
    const response = await fetch(`http://localhost:3001/autos/auctions`);
    const data = await response.json();

    return data;
  }
}


export const auctionsAPI = new AuctionsApi();
