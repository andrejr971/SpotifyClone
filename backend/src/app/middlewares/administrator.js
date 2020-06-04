export default async (req, res, next) => {
  const administrator = req.adm;

  if (!administrator) {
    return res.status(404).json({ error: 'Area restrista' });
  }

  return next();
};
