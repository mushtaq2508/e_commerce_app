import { Router } from "express";
import { paymentOptions, paymentSuccess, paymentFailed } from "../Controllers/payment.js";
import paymentMiddleware from "../Middlewares/paymentMiddleware.js";

const paymentRouter = Router();

router.use(paymentMiddleware)
router.get("/paymentOptions", paymentOptions);
router.get("/paymentSuccess", paymentSuccess);
router.get("/paymentFailed", paymentFailed);

export default paymentRouter;