var Rcon = require('/node-rcon');

//IP - CSGO Server IP, PORT - SERVER PORT, PASSWORD - RCON_PASSWORD
var conn = new Rcon('IP', PORT, 'PASSWORD');

conn.on('auth', function() {
  console.log("Authenticated");
  console.log("Changing Map")
  conn.send("changelevel de_mirage");
  process.exit();
});

conn.connect();
