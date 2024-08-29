const fetchBusData = async () => {
  try {
    const response = await fetch("/next-deparure");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

		return response.json();

  } catch (error) {
    console.error(`Error fetching bus data: ${error}`);
  }
};

const renderBusData = (buses) => {
  const tableBody = document.querySelector("#bus tbody");
  tableBody.textContent = "";

  console.log(buses);
};

const init = async () => {
  const buses = await fetchBusData();
  renderBusData(buses);
};

init();
