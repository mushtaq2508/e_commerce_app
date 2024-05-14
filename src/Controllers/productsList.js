let products = [
  {
    name: "Product A",
    id: 100,
    price: 10
  },
  {
    name: "Product B",
    id: 101,
    price: 20
  },
  {
    name: "Product C",
    id: 102,
    price: 30
  },
  {
    name: "Product D",
    id: 103,
    price: 40
  }
];

const listProducts = (req, res) => {
  res.json({
    products
  });
};

export { listProducts };