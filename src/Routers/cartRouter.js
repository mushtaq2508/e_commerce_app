import { Router } from "express";
import { listCart, updateCart, deleteCartProduct } from "../Controllers/cart.js";
import cartMiddleware from "../Middlewares/cartMiddleware.js";

const cartRouter = Router();

router.use(cartMiddleware)
router.get("/", listCart);
router.post("/updateCart", updateCart);
router.delete("/deleteCartProduct/:id", deleteCartProduct);

export default cartRouter;