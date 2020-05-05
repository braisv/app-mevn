import express  from "express";
import morgan   from "morgan";
import cors     from "cors";
import path     from "path";
import history  from "connect-history-api-fallback";

const app       = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   res.send("Hello world!");
// });

app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function () {
  console.log("Listening port: ", app.get("port"));
});
