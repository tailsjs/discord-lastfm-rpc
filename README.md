# discord-lastfm-rpc
Gets the track being listened to in LastFM and shows it in Discord via Rich Presence

[Русская версия](https://github.com/tailsjs/discord-lastfm-rpc/blob/main/README-ru.md)

## Installation.
1. Download/Clone repository
2. Type "npm i"
3. Configurate `config.json`
4. `node index.js`

## How to configurate config.json?
You need [LastFM API Key](https://www.last.fm/api/account/create) and [Discord Application and clientID](https://discord.com/developers/applications)

### What do i need to do here?
```json
{
    "lastfm": {
        "apiKey": "LastFM API Key",
        "username": "LastFM username"
    },
    "discord": {
        "clientKey": "Discord clientID",
        "updateEvery": 10e3
    }
}
```
### I will recommend you don't touch `discord.updateEvery`.
*sheesh*

###### [same, but there is an interface](https://github.com/tangenx/lfdi)

