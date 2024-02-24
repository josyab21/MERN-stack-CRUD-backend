import express from "express";
import indexRoute from "./routes";
import connectDB from "./config/db.conn";
import credentials from "./middlewares/credential";
import corsOptions from "./config/corsOptions";
import cors from "cors";

const app: express.Application = express();
const PORT = process.env.PORT || 3000;
//app.set("port", process.env.PORT || 3000);

app.use(credentials);
app.use(cors(corsOptions)); //crros origin resorce sharing
app.use(express.json()); //distruct json from request or response
app.use("/api", indexRoute); //route(index )

connectDB();

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
