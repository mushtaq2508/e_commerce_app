const cartMiddleware = (req, res, next) => {
  res.json({
    alert: "cart_middleware"
  });
  next();
};

export default cartMiddleware;