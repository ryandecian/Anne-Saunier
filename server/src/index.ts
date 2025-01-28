import express, { Request, Response } from "express";

const app = express();
const port = 8080;

/**
 * Route de base
 * Path: /
 * Action callBack
 * Methode: GET
 */
app.get("/", (req: Request, res: Response) => {
    res.send("API de Anne SAUNIER !!!");
})

/**
 * Le server se lance sur le port 8080
 */
app.listen(port, () => {
    console.log(`Server lancé sur http://localhost:${port}`);
});

