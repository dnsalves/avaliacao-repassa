import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  /* --------------------- STORE --------------------- */
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation Fails' });
    }

    const userExists = await User.findOne({
      where: {
        email: req.body.email,
        deletedAt: { $ne: null },
      },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, is_admin } = await User.create(req.body);
    return res.json({ id, name, email, is_admin });
  }

  /* --------------------- UPDATE --------------------- */
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation Fails' });
    }

    const { email } = req.body;

    const user = await User.findByPk(req.params.id);

    // validates if the email has changed
    if (email !== user.email) {
      const emailExists = await User.findOne({ where: { email } });

      if (emailExists)
        return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, isAdmin } = await user.update(req.body);
    return res.json({ id, name, isAdmin });
  }

  /* --------------------- INDEX --------------------- */
  async index(req, res) {
    const { id } = req.params;

    if (id) {
      const users = await User.findOne({
        where: { deletedAt: null, id },
        attributes: ['id', 'name', 'isAdmin'],
      });
      return res.json(users);
    }

    const users = await User.findAll({
      where: { deletedAt: null },
      attributes: ['id', 'name', 'isAdmin'],
    });
    return res.json(users);
  }

  /* --------------------- DELETE --------------------- */
  async delete(req, res) {
    const userExists = await User.findOne({
      where: {
        id: req.params.id,
        deletedAt: null,
      },
    });

    if (!userExists) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    await User.update(
      { deletedAt: new Date() },
      { where: { id: req.params.id } }
    );

    return res.json({ message: 'User deleted' });
  }
}

export default new UserController();
