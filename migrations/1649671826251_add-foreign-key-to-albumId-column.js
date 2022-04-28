/* eslint-disable camelcase */

exports.up = pgm => {
	pgm.sql("INSERT INTO albums(id, name, year) VALUES ('old_songs', 'old_songs', 2010)");
 
  	pgm.sql("UPDATE songs SET album_id = 'old_songs' WHERE album_id = NULL");

	pgm.addConstraint('songs','fk_songs.album_id_albums.id','FOREIGN KEY(album_id) REFERENCES albums(id) ON DELETE CASCADE', );
};

exports.down = pgm => {
	pgm.dropConstraint('songs', 'fk_songs.album_id_albums.id');

	pgm.sql("UPDATE songs SET album_id = NULL WHERE album_id = 'old_songs'");
 
	pgm.sql("DELETE FROM songs WHERE id = 'old_songs'");
};
