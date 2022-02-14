import bcrypt from 'bcrypt';
import { userDao } from '../models';

const signUp = async (email, password, name) => {
  const user = await userDao.getUserByEmail(email);
  if (user) {
    const error = new Error('existed user');
    error.statusCode = 409;

    throw error;
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  return await userDao.createUser(email, hashedPassword, name);
};

export default { signUp };
