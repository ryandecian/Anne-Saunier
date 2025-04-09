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
const config_1 = __importDefault(require("../../database/config"));
function getUserMe(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            const [dataUser] = yield config_1.default.query("SELECT id, firstname, lastname, address, email, role, date_save FROM user WHERE id = ?", [userId]);
            // Vérifie si l'utilisateur existe dans la DB avec l'id du token
            if (!dataUser || dataUser.length === 0) {
                res.status(404).json({ message: "Utilisateur introuvable" });
                console.error({
                    identity: "getUserMe.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/getUsers/getUserMe.ts",
                    "❌ Nature de l'erreur": "L'utilisateur n'existe pas dans la DB, impossible de continuer.",
                });
                return;
            }
            req.body.dataUser = dataUser[0];
            next();
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "getUserMe.ts",
                type: "middleware",
                chemin: "/server/src/middleware/getUsers/getUserMe.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    });
}
exports.default = getUserMe;
