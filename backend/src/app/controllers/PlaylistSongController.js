import Playlist from '../models/Playlist';

class PlaylistSongController {
  async store(req, res) {
    const { id, song_id } = req.params;

    const playlist = await Playlist.findOne({ where: { id } });

    if (!playlist) {
      return res.status(404).json({ error: 'Playlist não encontrada' });
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
