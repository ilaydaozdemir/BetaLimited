const BASE_URL =
  "https://linkedin-cv-crawler.beta-limited.workers.dev/interview";

export const listProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    throw error;
  }
};
