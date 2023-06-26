import express, { json } from "express";
import { router as productRouter } from "./routes/product.js";

const port = process.env.PORT || 8080;
const app = express();
app.use(json());

app.use('/products',productRouter)



app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send("Success");
});

app.listen(port, () =>
  console.log(`Server is running on port http://localhost:${port}`)
);
