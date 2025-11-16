export const getDestinationData = async () => {
  const url =
    "https://raw.githubusercontent.com/AhmedEl-hadad/Travellian/refs/heads/assets/data/destinations.json";
  const options = { method: "GET" };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch hero data:", error);
    return null;
  }
};
