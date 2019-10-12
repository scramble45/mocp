# mocp
a wrapper for MOC player

### Debug
~~~~
$ export DEBUG=mocp
~~~~

Usage:

~~~~
var mocp = require('mocp')

mocp.start()                   // starts mocp daemon (this must be initialized unless mocp is already running)


mocp.append('/file.flac')      // Append the files/directories/playlists passed in the command line to playlist
mocp.clear()                   // clear playlist
mocp.info()                    // Print information about the currently playing file
mocp.next()                    // Play the next song
mocp.pause()                   // Toggle between playing and paused
mocp.play()                    // Start playing from the first item on the playlist
mocp.playit('/yourfile.flac')  // Play files given on the command line without modifying the playlist
mocp.playlist('/yourlist.m3u') // Play playlist
mocp.previous()                // Play the previous song
mocp.repeat()                  // Toggle a control (repeat)
mocp.seek(105)                 // Seek by N seconds (can be negative)
mocp.stop()                    // Stop playing
mocp.suffle()                  // Toggle a control (shuffle)
mocp.volume(100)               // Adjust the PCM volume
~~~~
