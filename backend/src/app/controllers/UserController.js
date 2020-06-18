import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'path', 'perfil', 'administrator'],
    });

    const filterUsers = users.filter((user) => user.id !== req.userId);

    return res.json(filterUsers);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { email } = req.body;

    const userExist = await User.findOne({
      where: { email },
    });

    if (userExist) {
      return res.status(400).json({ error: 'E-mail existente' });
    }

    const { id, name } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('oldPassword', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (email !== user.email) {
      const emailExist = await User.findOne({
        where: { email },
      });

      if (emailExist) {
        return res.status(400).json({ error: 'E-mail existente' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha não confere' });
    }

    let data = { ...req.body };

    if (req.file) {
      const { originalname, filename: path } = req.file;

      data = { ...data, originalname, path };
    }

    try {
      await user.update(data);

      const { id, perfil, name, path, administrator } = user;

      return res.json({
        profile: {
          id,
          name,
          email,
          perfil,
          path,
          administrator
        },
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}

export default new UserController();
