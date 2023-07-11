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
const filmService_1 = __importDefault(require("../services/filmService"));
const filmService = new filmService_1.default();
class FilmController {
    getAllFilms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const films = yield filmService.getAllFilms();
                res.status(200).json(films);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    createFilm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, title, director, year, genre, cast, synopsis, image } = req.body;
                yield filmService.createFilm({ id, title, director, year, genre, cast, synopsis, image });
                res.status(200).json();
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    getFilmById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filmId = Number(req.params.id);
                const film = yield filmService.getFilmById(filmId);
                if (!film) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(film);
                }
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    deleteFilm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filmId = Number(req.params.id);
                yield filmService.deleteFilm(filmId);
                res.status(200).json();
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = FilmController;
