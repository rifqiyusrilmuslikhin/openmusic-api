/* eslint-disable camelcase */
  
exports.up = (pgm) => {
  pgm.sql("INSERT INTO users(id, username, password, fullname) VALUES ('old_songs', 'old_songs', 'old_songs', 'old songs')");
 
  pgm.sql("UPDATE playlists SET owner = 'old_songs' WHERE owner = NULL");
 
  pgm.addConstraint('playlists', 'fk_playlists.owner_users.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};
 
exports.down = (pgm) => {
  pgm.dropConstraint('playlists', 'fk_playlists.owner_users.id');
 
  pgm.sql("UPDATE playlists SET owner = NULL WHERE owner = 'old_songs'");
 
  pgm.sql("DELETE FROM playlists WHERE id = 'old_songs'");
};