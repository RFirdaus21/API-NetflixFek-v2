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
const film_1 = __importDefault(require("../models/film"));
class FilmService {
    getAllFilms() {
        return __awaiter(this, void 0, void 0, function* () {
            return film_1.default.findAll();
        });
    }
    createFilm(filmData) {
        return __awaiter(this, void 0, void 0, function* () {
            return film_1.default.create(filmData);
        });
    }
    getFilmById(filmId) {
        return __awaiter(this, void 0, void 0, function* () {
            return film_1.default.findByPk(filmId);
        });
    }
    updateFilm(filmId, filmData) {
        return __awaiter(this, void 0, void 0, function* () {
            const film = yield film_1.default.findByPk(filmId);
            if (!film)
                throw new Error('Film not found');
            return film.update(filmData);
        });
    }
    deleteFilm(filmId) {
        return __awaiter(this, void 0, void 0, function* () {
            const film = yield film_1.default.findByPk(filmId);
            if (!film)
                throw new Error('Film not found');
            return film.destroy();
        });
    }
}
exports.default = FilmService;
