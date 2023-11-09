const apiUrl = "https://6523fbffea560a22a4e92f9e.mockapi.io/se2132/getOffers/6";

fetch(apiUrl)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });