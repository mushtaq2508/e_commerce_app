let cartProducts = [
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
  }
];

const listCart = (req, res) => {
  res.json({
    cartProducts
  });
};

const updateCart = (req, res) => {
  res.json(req.body);
};

const deleteCartProduct = (req, res) => {
  res.json({alert: "Deleted from cart!"});
}

export { listCart, updateCart, deleteCartProduct };