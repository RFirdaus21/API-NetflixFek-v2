import User from '../models/user';

class UserService {
  public async getAllUsers() {
    return User.findAll();
  }

  public async createUser(userData: { username: string; password: string })
  {
    return User.create(userData);
  }

  public async getUserById(userId: number) {
    return User.findByPk(userId);
  }

  public async login(userData: { username: string; password: string }): Promise<User|null> 
  {
      const user = await User.findOne({ where: { username: userData.username, password: userData.password } });
      if (!user) {
          return null;
      }

      return user;
  }

  public async updateUser(userId: number, userData: { name?: string; email?: string }) {
    const user = await User.findByPk(userId);
    if (!user) throw new Error('User not found');
    return user.update(userData);
  }

  public async deleteUser(userId: number) {
    const user = await User.findByPk(userId);
    if (!user) throw new Error('User not found');
    return user.destroy();
  }
}

export default UserService;
