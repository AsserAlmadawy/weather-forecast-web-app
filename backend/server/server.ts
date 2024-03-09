import express from "express";
import type { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

let data: Object = {};

const app: Application = express(),
    port: number = 5000;

app.use(express.static("../../frontend/src"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on http://localhost:${port}.`));

app.get("/weather", (_req, res) => res.send(data));

app.post("/weather", (req, _res) => data = req.body);