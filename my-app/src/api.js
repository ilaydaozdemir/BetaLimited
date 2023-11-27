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

export const viewCart = async () => {
  try {
    const response = await fetch(`${BASE_URL}/view-cart`, {
      method: "GET",
      headers: {
        "Session-ID": localStorage.getItem("sessionId"),
      },
    });

    const contentType = response.headers.get("Content-Type");
    if (contentType === "application/json") {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    const message = `Could not fetch cart: ${error}`;
    throw new Error(message);
  }
};

export const addToCart = async (productId) => {
  try {
    await fetch(`${BASE_URL}/add-to-cart?id=${productId}`, {
      method: "GET",
      headers: {
        "Session-ID": localStorage.getItem("sessionId"),
      },
    });
    console.log(`product is added to cart`);
  } catch (error) {
    const message = `Could not add product to cart: ${error}`;
    throw new Error(message);
  }
};

export const subtractFromCart = async (productId) => {
  try {
    await fetch(`${BASE_URL}/subtract-from-cart?id=${productId}`, {
      method: "GET",
      headers: {
        "Session-ID": localStorage.getItem("sessionId"),
      },
    });
    console.log("product is subtracted from cart");
  } catch (error) {
    const message = `Could not subtract product from cart: ${error}`;
    throw new Error(message);
  }
};
