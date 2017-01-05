// Rowan Hamilton
// index.js
// 2016

var spawn = require('child_process').spawn;
var volumeSetting = 10;

/*
mocp -S -start server

-q –enqueue Add the files given on command line to the queue.
-p –play Start playing from the first item on the playlist.
-l –playit Play files given on command line without modifying the
playlist.
-s –stop Stop playing.
-f –next Play next song.
-r –previous Play previous song.
-x –exit Shutdown the server.
-G –toggle-pause Toggle between play/pause.
-v –volume (+/-)LEVEL Adjust PCM volume.
-k –seek N Seek by N seconds (can be negative).
-j –jump N{%,s} Jump to some position of the current track.
-o –on <controls> Turn on a control (shuffle, autonext, repeat).
-u –off <controls> Turn off a control (shuffle, autonext, repeat).
-t –toggle <controls> Toggle a control (shuffle, autonext, repeat)
*/

var start_server = function(){
    var exec = spawn('mocp', ['-S']);
        exec.stdout.on('data', function(data) {
            console.log(data.toString());
        });
}

start_server(); // Start mocp service


function volume(inp){
        if (inp){
            volumeSetting += 5;
        }
        else{
            volumeSetting -= 5;
        }
    command('-v ' + volumeSetting);
    return 1;
}

var command = function(command){
    var exec = spawn('mocp', [command]);
        exec.stdout.on('data', function(data) {
            console.log(data.toString());
        });
}

var playfile = function(command, file){
    var exec = spawn('mocp', [command, file]);
        exec.stdout.on('data', function(data) {
            console.log(data.toString());
        });
}

var volume_level = function(level){
    var exec = spawn('mocp', ['-v', level]);
        exec.stdout.on('data', function(data) {
            console.log(data.toString());
        });
}

exports.playit = function(file) {
    playfile('-l', file);
}

exports.play = function() {
    command('-p');
}

exports.stop = function() {
    command('-s');
}

exports.next = function() {
    command('-f');
}

exports.previous = function() {
    command('-r');
}

exports.pause = function() {
    command('-G');
}

exports.volume = function(level){
    volume_level(level);
}

exports.volumeUp = function() {
    volume(true);
}

exports.volumeDown = function() {
    volume(false);
}