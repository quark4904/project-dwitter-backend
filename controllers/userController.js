import { userService } from '../services';

const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const REQUIRED_KEYS = { email, password, name };
    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        res.status(409).json({ message: 'key required' });
      }
    }

    const checkUser = await userService.signUp(email, password, name);

    return res.status(201).json({ message: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  return res.json('signin');
};

export default { signUp, signIn };
