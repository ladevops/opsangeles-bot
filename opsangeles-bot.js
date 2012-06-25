#!/usr/bin/env node

var Client           = require('irc').Client;

// configuration
// irc.  server names, guys to auto-op, etc
var botname   = "opsangeles-bot";
var server    = "chat.freenode.com";
var channel   = [ "#opsangeles" ];
var opusers   = [ 
  "lolcatstevens",
  "alrs",
  "cwebber",
  "blovett",
  "goodwill",
  "llakey",
  "jsnby",
  "retr0h",
  "up_the_irons",
  "solarce",
  "s0larce"
];


// set up the irc clients
var irc = new Client( 
  server, 
  botname, 
  { channels: channel }
);

irc.on('join', function(to, nick) {

  if ( opusers.indexOf( nick ) >= 0 ) {
    irc.send('mode', to, '+o', nick);
  }

});


/* placeholder for bot interaction
irc.on('message', function (nick, to, text) {
});
*/

irc.on('error', function(text) {
  console.log(text);
});
