import Film from '../models/film';

class FilmService {
  public async getAllFilms() {
    return Film.findAll();
  }

  public async createFilm(filmData: { id: number, title: string; director: string; year: number; genre: string; cast: string; synopsis: string; image: string; })
  {
    return Film.create(filmData);
  }

  public async getFilmById(filmId: number) {
    return Film.findByPk(filmId);
  }

  public async updateFilm(filmId: number, filmData: { title?: string; director?: string; releaseYear?: number }) {
    const film = await Film.findByPk(filmId);
    if (!film) throw new Error('Film not found');
    return film.update(filmData);
  }

  public async deleteFilm(filmId: number) {
    const film = await Film.findByPk(filmId);
    if (!film) throw new Error('Film not found');
    return film.destroy();
  }
}

export default FilmService;
