import { Request, Response } from 'express';
import FilmService from '../services/filmService';

const filmService = new FilmService();

class FilmController {
  public async getAllFilms(req: Request, res: Response) {
    try {
      const films = await filmService.getAllFilms();
      res.status(200).json(films);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async createFilm(req: Request, res: Response) {
    try {
      const { id, title, director, year, genre, cast, synopsis, image }
      = req.body;
      await filmService.createFilm({ id, title, director, year, genre, cast, synopsis, image });
      res.status(200).json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getFilmById(req: Request, res: Response) {
    try {
      const filmId = Number(req.params.id);
      const film = await filmService.getFilmById(filmId);
      if (!film) {
        res.status(404).json();
      } else {
        res.status(200).json(film);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async deleteFilm(req: Request, res: Response) {
    try {
      const filmId = Number(req.params.id);
      await filmService.deleteFilm(filmId);
      res.status(200).json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default FilmController;
