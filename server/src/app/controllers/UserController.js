import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.json({ error: 'User already exists' });
    }

    const { id, name, email, is_admin } = await User.create(req.body);
    return res.json({ id, name, email, is_admin });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
