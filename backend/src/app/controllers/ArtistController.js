import * as Yup from 'yup';
import Artist from '../models/Artist';
import Album from '../models/Album';
import Song from '../models/Song';

class ArtistController {
  async index(req, res) {
    const { type } = req.query;

    let attributes = ['id', 'name'];

    if (type === '1') {
      attributes = [
        'id',
        'name',
        'path_thumbnail',
        'path_cover',
        'thumbnail',
        'cover',
      ];
    }

    const artists = await Artist.findAll({
      attributes,
    });

    return res.json(artists);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: 'Parâmetro não passado' });
    }

    const { type } = req.query;

    let artist;

    if (type === '1') {
      artist = await Artist.findByPk(id, {
        attributes: [
          'id',
          'name',
          'path_thumbnail',
          'path_cover',
          'thumbnail',
          'cover',
        ],
        include: [
          {
            model: Album,
            as: 'albuns',
          },
        ],
      });
    } else {
      artist = await Artist.findByPk(id, {
        attributes: [
          'id',
          'name',
          'path_thumbnail',
          'path_cover',
          'thumbnail',
          'cover',
        ],
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
    }

    return res.json(artist);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    let data = req.body;

    if (req.files) {
      const { cover, thumbnail } = req.files;

      if (thumbnail) {
        const { filename: path_thumbnail } = thumbnail[0];
        data = { ...data, path_thumbnail };
      }

      if (cover) {
        const { filename: path_cover } = cover[0];
        data = { ...data, path_cover };
      }
    }

    const { id, name } = await Artist.create(data);

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

    let data = req.body;

    if (req.files) {
      const { cover, thumbnail } = req.files;

      if (thumbnail) {
        const { filename: path_thumbnail } = thumbnail[0];
        data = { ...data, path_thumbnail };
      }

      if (cover) {
        const { filename: path_cover } = cover[0];
        data = { ...data, path_cover };
      }
    }

    const artist = await Artist.findByPk(id);

    if (!artist) {
      return res.status(404).json({ error: 'Artista não encontrado' });
    }

    await artist.update(data);

    // const { name } = artist;

    return res.json(artist);
  }
}

export default new ArtistController();
