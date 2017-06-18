// Rowan Hamilton
// index.js
// 2017

var spawn = require('child_process').spawn;
var volumeSetting = 10;


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

var seek = function(command, seconds){
    var exec = spawn('mocp', [command, seconds]);
        exec.stdout.on('data', function(data) {
            console.log(data.toString());
        });
}

var cmdfile = function(command, file){
    var exec = spawn('mocp', [command, file]);
        exec.stdout.on('data', function(data) {
            console.log(data.toString());
        });
}

var playlist = function(command, file){
    var exec = spawn('mocp', [command, file, '-p']);
        exec.stdout.on('data', function(data) {
            console.log(data);
        });
}

var volume_level = function(level){
    var exec = spawn('mocp', ['-v', level]);
        exec.stdout.on('data', function(data) {
            console.log(data.toString());
        });
}

exports.version = function() {
    command('-V');
}

exports.info = function() {
    command('-i');
}

exports.append = function(file) {
    cmdfile('-a', file);
}

exports.playit = function(file) {
    cmdfile('-l', file);
}

exports.enqueue = function(file) {
    cmdfile('-q', file);
}

exports.playlist = function(file) {
    playlist('-a', file);
}

exports.clear = function() {
    command('-c');
}

exports.play = function() {
    command('-p');
}

exports.seek = function(seconds) {
    seek('-k', seconds);
}

exports.stop = function() {
    command('-s');
}

exports.suffle = function() {
    command('-ts');
}

exports.repeat = function() {
    command('-tr');
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
