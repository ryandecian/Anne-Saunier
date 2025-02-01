import express, { Request, Response } from "express";

const app = express();
const port = 8080;

/**
 * Pour lire le body d'un (request) contenant un json, j'ai besoin d'importer un middleware
 * d'express pour lire la request correctement.
 * Action callBack
 * Methode: USE
 */
app.use(express.json());

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
 * Route de login
 * Path: /login
 * Action callBack
 * Methode: POST
 */
app.post("/login", (req: Request, res: Response) => {
    console.log(req.body)
    res.json(req.body);
})


/**
 * Le server se lance sur le port 8080
 */
app.listen(port, () => {
    console.log(`Server lancé sur http://localhost:${port}`);
});

