const paymentMiddleware = (req, res, next) => {
  res.json({
    alert: "payment_middleware"
  });
  next();
};

export default paymentMiddleware;