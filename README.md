# mocp
 a wrapper for MOC player

Usage:

~~~~
var mocp = require('mocp');

mocp.info(); // Print information about the currently playing file
mocp.musicdir('/folder'); // Start in MusicDir
mocp.append('/file.flac'); // Append the files/directories/playlists passed in the command line to playlist
mocp.playit('/yourfile.flac'); // Play files given on the command line without modifying the playlist
mocp.playlist('/yourlist.m3u'); // Play playlist
mocp.play(); // Start playing from the first item on the playlist
mocp.stop(); // Stop playing
mocp.clear(); // clear playlist
mocp.next(); // Play the next song
mocp.repeat(); // Toggle a control (repeat)
mocp.suffle(); // Toggle a control (shuffle)
mocp.seek(105); // Seek by N seconds (can be negative)
mocp.previous(); // Play the previous song
mocp.pause(); // Toggle between playing and paused
mocp.volume(100); // Adjust the PCM volume
mocp.volumeUp(); // Increase volume
mocp.volumeDown(); // Decrease volume
~~~~

