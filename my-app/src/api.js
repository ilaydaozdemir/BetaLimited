const BASE_URL =
  "https://linkedin-cv-crawler.beta-limited.workers.dev/interview";

export const createSession = async () => {
  try {
    const response = await fetch(`${BASE_URL}/createsession`);
    const data = await response.text();
    return data;
  } catch (error) {
    const message = `Could not create session: ${error}`;
    console.error(message);
    throw new Error(message);
  }
};

export const listProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    const message = `Could not fetch produts: ${error}`;
    console.error(message);
    throw new Error(message);
  }
};
