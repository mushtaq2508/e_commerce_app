import express from "express";
import productsListRouter from "./Routers/productsListRouter.js";
import cartRouter from "./Routers/cartRouter.js";
import paymentRouter from "./Routers/paymentRouter.js";

const app = express();
const port = 2000;

app.get("/", (req, res) => {
  res.send("Shop now");
});

app.use("/productsList", productsListRouter);
app.use("/cart", cartRouter);
app.use("/payment", paymentRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});