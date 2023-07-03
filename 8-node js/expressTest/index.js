import express, { json } from "express";
import { router as productRouter } from "./routes/product.js";
import { router as userRouter } from "./routes/user.js";
import { router as categoryRouter } from "./routes/category.js";
import { verifyToken } from "./models/user.js";
const port = process.env.PORT || 8080;
const app = express();
app.use(json());


app.use("/products", [verifyToken],productRouter);
app.use("/users", userRouter);
app.use("/category", categoryRouter);

app.listen(port, () =>
  console.log(`Server is running on port http://localhost:${port}`)
);
