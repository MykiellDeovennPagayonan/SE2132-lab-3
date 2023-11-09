interface Offer {
  code: string;
  name: string;
  value: String;
  id: string;
}

async function fetchData() {
  const apiUrl = "https://6523fbffea560a22a4e92f9e.mockapi.io/se2132/getOffers";
  try {
    const response = await fetch(apiUrl);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

function getOffersWithCode(data: Array<Offer>, code: string) {
  return data.filter((item) => item.code === code).map((item) => item.name);
}

export default async function findOffers(codeToSearch: string) {
  try {
    const data = await fetchData();
    console.log(data);
    const namesWithCode = getOffersWithCode(data, codeToSearch);
    return namesWithCode;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
