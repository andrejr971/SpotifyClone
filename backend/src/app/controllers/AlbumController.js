import * as Yup from 'yup';
import Artist from '../models/Artist';
import Album from '../models/Album';
import Song from '../models/Song';

class AlbumController {
  async index(req, res) {
    const albums = await Album.findAll({
      attributes: ['id', 'title', 'thumbnail', 'path'],
      include: [{ model: Artist, as: 'artist', attributes: ['id', 'name'] }],
    });

    return res.json(albums);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: 'Parâmetro não passado' });
    }

    const album = await Album.findByPk(id, {
      attributes: ['id', 'title', 'thumbnail', 'path'],
      include: [
        { model: Artist, as: 'artist', attributes: ['id', 'name'] },
        {
          model: Song,
          as: 'songs',
          attributes: [
            'id',
            'title',
            'path_thumbnail',
            'path_song',
            'thumbnail',
            'song',
          ],
          include: [
            {
              model: Artist,
              as: 'artist',
              attributes: ['id', 'name'],
            },
            {
              model: Album,
              as: 'album',
              attributes: ['id', 'title'],
            },
          ],
        },
      ],
    });

    if (!album) {
      return res.status(404).json({ error: 'Album não encontrado' });
    }

    return res.json(album);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { artist_id } = req.params;

    const { title } = req.body;

    if (!req.file) {
      return res.status(500).json({ error: 'Falha ao carregar thumbnail' });
    }

    const { originalname, filename: path } = req.file;

    const album = await Album.create({
      title,
      originalname,
      path,
      artist_id,
    });

    const { id, thumbnail } = album;

    return res.json({ id, title, path, thumbnail });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { id } = req.params;

    const { title } = req.body;

    let data = { title };

    if (req.file) {
      const { originalname, filename: path } = req.file;

      data = { ...data, originalname, path };
    }

    const album = await Album.findByPk(id);

    if (!album) {
      return res.status(404).json({ error: 'Album não encontrado' });
    }

    await album.update(data);

    const { thumbnail } = album;

    return res.json({ id, title, thumbnail });
  }
}

export default new AlbumController();
