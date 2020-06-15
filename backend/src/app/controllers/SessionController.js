import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha Incorreta' });
    }

    const { id, name, perfil, administrator, path } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        perfil,
        path,
        administrator,
      },
      token: jwt.sign({ id, administrator }, authConfig.secret, {
        expiresIn: authConfig.expires,
      }),
    });
  }
}

export default new SessionController();
