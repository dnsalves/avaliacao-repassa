import User from '../models/User';

class UserController {
  /* --------------------- STORE --------------------- */
  async store(req, res) {
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
        email: req.body.email,
        deletedAt: { $ne: null },
      },
    });

    if (!userExists) {
      return res.json({ error: 'User does not exists' });
    }

    await User.update(
      { deletedAt: new Date() },
      { where: { id: req.params.id } }
    );

    return res.json({ message: 'User deleted' });
  }
}

export default new UserController();
