import { Request, Response } from 'express';
import UserService from '../services/userService';

const userService = new UserService();

class UserController {
  public async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      await userService.createUser({ username, password });
      res.status(200).json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await userService.login({ username, password });

      if(!user){
        res.status(404).json({role: ""});
        return;
      }

      res.status(200).json({role: user.role});
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const userId = Number(req.params.id);
      await userService.deleteUser(userId);
      res.status(200).json();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
