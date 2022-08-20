import express from "express";
import { readFileSync } from "fs";

const app = express();
const store = new Map();

app.use(express.json());

app.use("/css", express.static("public/css"));
app.use("/js", express.static("public/js"));

app.post("/shorten", (req, res) => {
  const uuid = Math.random().toString(36).slice(-6);
  const url = req.body.url;

  if (!url) {
    return res.status(400).send();
  }

  store.set(uuid, url);

  return res.json({ shortened: uuid });
});

app.get("/:uuid", (req, res) => {
  if (!store.has(req.params.uuid)) {
    return res.status(400);
  }

  const url = store.get(req.params.uuid);
  res.redirect(url);
});

app.get("/", (_, res) => {
  const html = readFileSync("html/index.html", { encoding: "utf8" });
  res.send(html);
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
