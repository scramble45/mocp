const spawn = require('child_process').spawn
    , debug = require('debug')

exec = (cmd, cb) => {
  /*
    Had to use stdbuf here because mocp returns a
    segfault message that we can't get through stdout
    without some kind of redirection
  */
  cmd = ['-o0', 'mocp'].concat(cmd)
  mocp = spawn('stdbuf', cmd)

  mocp.stdout.on('data', (data) => {
    return cb(null, data.toString())
  })

  mocp.stderr.on('data', (data) => {
    return cb(data.toString())
  })
}

command = (cmd) => {
  exec(cmd, (err, result) => {
    if (!err) {
      debug('mocp')(result)
      return result
    } else {
      debug('mocp:error')(err)
      return err
    }
  })
}

module.exports = {
  append     : (file) =>    {command(['-a', file])},
  clear      : () =>        {command(['-c'])},
  enqueue    : (file) =>    {command(['-q', file])},
  info       : () =>        {command(['-i'])},
  next       : () =>        {command(['-f'])},
  pause      : () =>        {command(['-G'])},
  play       : () =>        {command(['-p'])},
  playit     : (file) =>    {command(['-l', file])},
  playlist   : (file) =>    {command(['-a', file])},
  previous   : () =>        {command(['-r'])},
  repeat     : () =>        {command(['-tr'])},
  start      : () =>        {command(['-S'])},
  seek       : (seconds) => {command(['-k', seconds])},
  stop       : () =>        {command(['-s'])},
  suffle     : () =>        {command(['-ts'])},
  version    : () =>        {command(['-V'])},
  volume     : (level) =>   {command(['-v', level])}
}
