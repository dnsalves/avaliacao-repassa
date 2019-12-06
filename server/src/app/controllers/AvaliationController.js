import Avaliation from '../models/Avaliation';

class AvaliationController {
  /* --------------------- INDEX --------------------- */
  async index(req, res) {
    const { employeeId } = req.params;
    const { userId, isAdmin } = req;

    if (userId !== +employeeId && !isAdmin) {
      return res.status(401).json({ error: 'Not allowed to see this review!' });
    }

    const avaliation = await Avaliation.findAll({
      where: { employeeId, deletedAt: null },
    });

    return res.json(avaliation);
  }

  /* --------------------- STORE --------------------- */
  async store(req, res) {
    const { userId, isAdmin } = req;
    const model = {
      adminId: userId,
      employeeId: req.params.employeeId,
      ...req.body,
    };

    if (!isAdmin) {
      return res.status(401).json({ error: 'Not allowed to insert a review!' });
    }

    const avaliation = await Avaliation.create(model);
    return res.json(avaliation);
  }

  /* --------------------- UPDATE --------------------- */
  async update(req, res) {
    const { isAdmin } = req;
    const { id } = req.params;
    const { avaliation } = req.body;

    if (!isAdmin) {
      return res
        .status(401)
        .json({ error: 'Not allowed to update this review!' });
    }

    await Avaliation.update({ avaliation }, { where: { id } });
    return res.json({ message: 'Review updated' });
  }

  /* --------------------- DELETE --------------------- */
  async delete(req, res) {
    const { isAdmin } = req;
    const { id } = req.params;

    if (!isAdmin) {
      return res
        .status(401)
        .json({ error: 'Not allowed to delete this review!' });
    }

    const reviewExists = await Avaliation.findOne({
      where: { id, deletedAt: { $ne: null } },
    });

    if (!reviewExists) {
      return res.json({ error: 'Review does not exists' });
    }

    await Avaliation.update({ deletedAt: new Date() }, { where: { id } });

    return res.json({ message: 'Review deleted' });
  }
}

export default new AvaliationController();
