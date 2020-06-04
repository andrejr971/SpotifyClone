import * as Yup from 'yup';
import Artist from '../models/Artist';
import Album from '../models/Album';
import Song from '../models/Song';

class ArtistController {
  async index(req, res) {
    const artists = await Artist.findAll({
      attributes: ['id', 'name'],
    });

    return res.json(artists);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: 'Parâmetro não passado' });
    }

    const artist = await Artist.findByPk(id, {
      attributes: ['id', 'name'],
      include: [
        {
          model: Album,
          as: 'albuns',
          include: [
            {
              model: Song,
              as: 'songs',
            },
          ],
        },
      ],
    });

    return res.json(artist);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { id, name } = await Artist.create(req.body);

    return res.json({ id, name });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { id } = req.params;

    const artist = await Artist.findByPk(id);

    if (!artist) {
      return res.status(404).json({ error: 'Artista não encontrado' });
    }

    await artist.update(req.body);

    const { name } = artist;

    return res.json({ id, name });
  }
}

export default new ArtistController();
