import * as Yup from 'yup';
import Song from '../models/Song';
import Artist from '../models/Artist';

class SongController {
  async index(req, res) {
    const { album_id } = req.params;

    const songs = await Song.findAll({
      where: { album_id },
    });

    return res.json(songs);
  }

  async show(req, res) {
    const { id } = req.params;

    const song = await Song.findOne({
      where: { id },
      include: {
        model: Artist,
        as: 'artist',
        attributes: ['id', 'name'],
      },
    });

    return res.json(song);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { album_id, artist_id } = req.params;

    const { title } = req.body;

    if (!req.files) {
      return res.status(500).json({ error: 'Falha ao carregar thumbnail' });
    }

    const { song, file } = req.files;

    const { originalname, filename: path_thumbnail } = file[0];
    const { filename: path_song } = song[0];

    const songs = await Song.create({
      title,
      artist_id,
      album_id,
      originalname,
      path_thumbnail,
      path_song,
    });

    return res.json(songs);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { album_id, artist_id, id } = req.params;

    const songs = await Song.findByPk(id);

    if (!songs) {
      return res.status(404).json({ error: 'Música não encontrada' });
    }

    const { title } = req.body;

    let data = { title, artist_id, album_id };

    if (req.files) {
      const { song, file } = req.files;

      const { originalname, filename: path_thumbnail } = file[0];
      const { filename: path_song } = song[0];

      data = { ...data, originalname, path_thumbnail, path_song };
    }

    await songs.update(data);

    const songUp = await Song.findByPk(id, {
      attributes: [
        'id',
        'title',
        'artist_id',
        'album_id',
        'path_thumbnail',
        'path_song',
        'thumbnail',
        'song',
      ],
    });

    return res.json(songUp);
  }
}

export default new SongController();
