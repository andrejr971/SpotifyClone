import * as Yup from 'yup';
import User from '../models/User';
import Playlist from '../models/Playlist';
import Song from '../models/Song';
import Artist from '../models/Artist';
import Album from '../models/Album';

class PlaylistController {
  async index(req, res) {
    const user_id = req.userId;
    const playlists = await Playlist.findAll({
      where: { user_id },
      attributes: ['id', 'title', 'description'],
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(playlists);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { title, description } = req.body;

    const user_id = req.userId;

    const play = await Playlist.create({ title, description, user_id });

    return res.json({ id: play.id, title, description });
  }

  async show(req, res) {
    const { id } = req.params;
    const user_id = req.userId;

    const playlist = await Playlist.findOne({
      where: { id, user_id },
      attributes: ['id', 'title', 'description'],
      include: [
        {
          model: Song,
          as: 'songs',
          through: {
            attributes: [],
          },
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

    return res.json(playlist);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha na validação' });
    }

    const { id } = req.params;

    const user_id = req.userId;

    const playlist = await Playlist.findOne({
      where: { id, user_id },
    });

    if (!playlist) {
      return res.status(404).json({ error: 'Playlist não encontrada' });
    }

    await playlist.update(req.body);

    const { title, description } = playlist;

    return res.json({ title, description });
  }

  async delete(req, res) {
    const { id } = req.params;
    const user_id = req.userId;

    const playlist = await Playlist.findOne({
      where: { id, user_id },
    });

    await playlist.destroy();

    return res.json({ ok: true });
  }
}

export default new PlaylistController();
