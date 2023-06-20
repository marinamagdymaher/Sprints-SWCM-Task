import fetch from "node-fetch";
const getCurrencyOption = async () => {
  const price = await fetch(
    "https://v6.exchangerate-api.com/v6/8a946c17762fa2c30024f5f8/latest/USD"
  );
  const priceRate = await price.json();
  return priceRate.conversion_rates.EGP;
};
getCurrencyOption();
const getProduct = async () => {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
    );
    const productResponse = await response.json();
    const priceRate = await getCurrencyOption();
    const buckets = {};
    productResponse.forEach((item) => {
      if (!(item.category.id in buckets)) {
        buckets[item.category.id] = [
          {
            category: {
              id: item.category.id,
              name: item.category.name,
            },
            products: [item],
          },
        ];
      }
      item.price *= priceRate;
      buckets[item.category.id].push(item);
    });
    for (const key in buckets) {
      buckets[key].forEach((item) => {
        console.log(item);
      });
      console.log("------------------------------------------------");
    }
  } catch (err) {
    console.log(err);
  }
};
getProduct();
