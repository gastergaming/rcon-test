var Rcon = require('/node-rcon');

//IP - CSGO Server IP, PORT - SERVER PORT, PASSWORD - RCON_PASSWORD
var conn = new Rcon('IP', PORT, 'PASSWORD');

conn.on('auth', function() {
  console.log("Authenticated");
//Put your command down below. In this case, the RCON Command to be executed is changelevel de_mirage which changes the map.
  conn.send("changelevel de_mirage");
  console.log("Changing Map")
  process.exit();
});

conn.connect();
