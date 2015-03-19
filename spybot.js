var mysql = require('mysql');
var irc = require('irc');

function Bot() {
  this.init();
}

Bot.prototype.init = function () {

  var nick = 'spybot' + Math.floor(Math.random()*100+1);

  var self = this;

  this.bot = new irc.Client('irc.quakenet.org', nick, {
    channels: ['#yourchannelhere'],
    port: 6667,
    debug: true,
    realName: "tiko spybot",
    retryDelay: 15000 // retry timeout 15 sec
  });
  
  this.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'test1234',
    database : 'ircloki'
  });

  this.bot.addListener('message', function(from, to, message) {
    console.log("msg:", from, to, message);

    self.connection.query("INSERT INTO loki (nick, message) VALUES (?, ?)", 
      [from, message], function(err, result) {
      if(err) {
        console.log("unable to INSERT data to database");
      }
    });
  });
};


module.exports = Bot;