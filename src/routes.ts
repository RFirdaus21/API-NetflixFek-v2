import express from 'express';
import UserController from './controllers/userController';
import FilmController from './controllers/filmController';

const router = express.Router();
const userController = new UserController();
const filmController = new FilmController();

router.post('/login', userController.login);
router.post('/register', userController.createUser);

router.get('/users', userController.getAllUsers);
router.delete('/users/:id', userController.deleteUser);

router.get('/films', filmController.getAllFilms);
router.post('/films', filmController.createFilm);
router.get('/films/:id', filmController.getFilmById);
router.delete('/films/:id', filmController.deleteFilm);

export default router;
