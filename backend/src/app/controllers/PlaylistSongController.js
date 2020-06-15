import Playlist from '../models/Playlist';
import Song from '../models/Song';

class PlaylistSongController {
  async store(req, res) {
    const { id, song_id } = req.params;

    const playlist = await Playlist.findOne({
      where: { id },
      include: [
        {
          model: Song,
          as: 'songs',
          through: {
            attributes: [],
          },
          attributes: ['id'],
        },
      ],
    });

    if (!playlist) {
      return res.status(404).json({ error: 'Playlist não encontrada' });
    }

    const existSong = playlist.songs.find((song) => song.id === song_id);

    if (existSong) {
      return res.status(204).json('Música já foi adicionada');
    }

    playlist.addSong(song_id);

    return res.json({ ok: true });
  }

  async delete(req, res) {
    const { id, song_id } = req.params;

    const playlist = await Playlist.findOne({ where: { id } });

    if (!playlist) {
      return res.status(404).json({ error: 'Playlist não encontrada' });
    }

    playlist.removeSong(song_id);

    return res.json({ ok: true });
  }
}

export default new PlaylistSongController();
