const productsListMiddleware = (req, res, next) => {
  res.json({
    alert: "products_list_middleware"
  });
  next();
};

export default productsListMiddleware;