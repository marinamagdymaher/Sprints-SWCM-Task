export const readProduct = async () => {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=1&limit=10"
  );
  const data = await res.json();
  return data;
};

export const getSingleProduct = async (productId) => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`
  );
  const data = await res.json();
  return data;
};

export const deleteSingleProduct = async (productId) => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`,
    {
      method: "DELETE",
    }
  );
  const data = await res.json();
  return data;
};

export const updateSingleProduct = async (req) => {
  try {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products/${req.id}`,
      {
        method: "PUT",
        body: JSON.stringify(req),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const createSingleProduct = async (req) => {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/`, {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};


