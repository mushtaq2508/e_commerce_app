const paymentOptions = (req, res) => {
  res.json({
    message: "payment options",
    data: ["upi", "wallet", "credit/debit cards"]
  })
}

const paymentSuccess = (req, res) => {
  res.json({
    alert: "Success!",
  });
}

const paymentFailed = (req, res) => {
  res.json({
    alert: "Failed!",
  });
}

export { paymentOptions, paymentSuccess, paymentFailed }