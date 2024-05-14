import { Router } from "express";
import { listProducts } from "../Controllers/productsList.js";
import productsListMiddleware from "../Middlewares/productsListMiddleware.js";

const productsListRouter = Router();

router.use(productsListMiddleware)
router.get("/listProducts", listProducts);

export default productsListRouter;