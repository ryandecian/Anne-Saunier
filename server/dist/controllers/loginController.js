"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginController = express_1.default.Router();
// Import des dépendances externes :
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Import des Middlewares :
const RouteLimiterRequestIP_1 = __importDefault(require("../Security/middlewareSecurity/RouteLimiterRequestIP"));
const VerifyKeys_1 = __importDefault(require("../middleware/VerifyKeys/VerifyKeys"));
// Import des Repositories :
const emailRepository_1 = __importDefault(require("../repository/emailRepository"));
// Import des utils
const hashArgonUtils_1 = require("../utils/hashArgonUtils");
const createDateUtils_1 = require("../utils/createDateUtils");
// URI : /api/login
loginController.post("/", 
// Vérification : 
RouteLimiterRequestIP_1.default, (0, VerifyKeys_1.default)(["email", "password"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /* Logique métier 1 : Vérification si l'email existe */
        const dataUser = yield (0, emailRepository_1.default)(req.body.email);
        if (dataUser.length === 0) {
            res.status(404).json({ message: "Email ou mot de passe incorrect" });
            console.error({
                identity: "loginController.ts",
                type: "controller",
                URI: "/api/login",
                methode: "POST",
                metier: "Logique métier 1",
                codeStatus: "404 : Not Found",
                chemin: "/server/src/middleware/VerifyEmail/VerifyEmailTrue.ts",
                "❌ Nature de l'erreur": "L'email n'existe pas dans la DB, impossible de continuer.",
            });
            return;
        }
        /* Logique métier 2 : Vérifier le mot de passe utilisateur*/
        const verifyPassword = yield (0, hashArgonUtils_1.verifyPasswordArgonUtils)(dataUser[0].password, req.body.password);
        if (!verifyPassword) { // Si c'est false, c'est que le mot de passe est incorrect
            res.status(401).json({ message: "Email ou mot de passe incorrect" });
            console.error({
                identity: "loginController.ts",
                type: "controller",
                URI: "/api/login",
                methode: "POST",
                metier: "Logique métier 2",
                codeStatus: "401 : Unauthorized",
                chemin: "/server/src/middleware/Argon/VerifyPassword.ts",
                "❌ Nature de l'erreur": "Le mot de passe reçu est différent de la DB, accès interdit",
            });
            return;
        }
        /* Logique métier 3 : Création du JWT client et server */
        // Récupération de la clé secrète Server
        const SECRET_KEY_TOKEN_SERVER = process.env.SECRET_KEY_TOKEN_SERVER;
        // Récupération de la clé secrète Client
        const SECRET_KEY_TOKEN_CLIENT = process.env.SECRET_KEY_TOKEN_CLIENT;
        // Vérification des clés secrète Server et Client si elles existent
        // Si l'une d'entre elles n'existe pas, on renvoie une erreur 500
        if (!SECRET_KEY_TOKEN_SERVER || !SECRET_KEY_TOKEN_CLIENT) {
            res.status(500).json({ message: "Erreur interne serveur." });
            console.error({
                identity: "loginController.ts",
                type: "controller",
                URI: "/api/login",
                methode: "POST",
                metier: "Logique métier 3",
                codeStatus: "500 : Internal Server Error",
                chemin: "/server/src/controllers/loginController.ts",
                "❌ Nature de l'erreur": "Erreur interne serveur, clé secrète Server ou client pour la création token manquante.",
            });
            return;
        }
        // Création des variables token
        const expiresIn = 60 * 60; // 1 heure
        const dateNow = yield (0, createDateUtils_1.createDate_Number_Utils)(); // Date actuelle en timestamp UNIX
        const payload_server = {
            id: dataUser[0].id,
            email: dataUser[0].email,
            role: dataUser[0].role,
            iat: dateNow, // ⏳ Date de création du token
        };
        const payload_client = {
            id: dataUser[0].id,
            email: dataUser[0].email,
            firstname: dataUser[0].firstname,
            lastname: dataUser[0].lastname,
            address: dataUser[0].address,
            role: dataUser[0].role,
            date_save: dataUser[0].date_save,
            iat: dateNow, // ⏳ Date de création du token
        };
        // Création du token server
        const token_server = jsonwebtoken_1.default.sign(payload_server, SECRET_KEY_TOKEN_SERVER, { expiresIn });
        // Création du token client
        const token_client = jsonwebtoken_1.default.sign(payload_client, SECRET_KEY_TOKEN_CLIENT, { expiresIn });
        /* Logique métier 4 : Réponse au client */
        res.status(200)
            .cookie("jwtTokenServerLAPM", token_server, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 1000, // 1 heure
        })
            .json({
            message: "Connexion réussie",
            jwtTokenClientLAPM: token_client
        });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "Erreur interne serveur." });
        console.error({
            identity: "loginController.ts",
            type: "controller",
            URI: "/api/login",
            methode: "POST",
            codeStatus: "500 : Internal Server Error",
            chemin: "/server/src/controllers/loginController.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
}));
exports.default = loginController;
