const mapDBToAlbumModel = ({
  id,
  name,
  year,
  cover,
}) => ({
  id,
  name,
  year,
  coverUrl: cover,
});

const mapDBToSongModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
});

const mapNestedSongs = ({ song_id, song_title, performer }) => ({
  id: song_id,
  title: song_title,
  performer,
});

module.exports = { mapDBToAlbumModel, mapDBToSongModel, mapNestedSongs };
