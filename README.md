# irclogger
Just a simple IRC logbot.

```
git clone https://github.com/jvanhalen/irclogger.git
cd irclogger
npm install 
node app.js
```

### Configuration

Edit spybot.js file

```
  this.bot = new irc.Client('irc.quakenet.org', nick, {
    channels: ['#yourchannelhere'],
    port: 6667,
    debug: true,
    realName: "simple logbot",
    retryDelay: 15000 // retry timeout 15 sec
  });
```

to satisfy your needs.
