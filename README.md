# discord-lastfm-rpc
Gets the track being listened to in LastFM and shows it in Discord via Rich Presence

[Русская версия](https://github.com/tailsjs/discord-lastfm-rpc/blob/main/README-ru.md)

## Installation.
1. Download/Clone repository
2. Type "npm i"
3. Configurate `config.json`
4. `node index.js`

## How to configurate config.json?
You need [LastFM API Key](https://www.last.fm/api/account/create) and [Discord ApplicationID](https://discord.com/developers/applications)

### What do i need to do here?
```json
{
    "lastfm": {
        "apiKey": "LastFM API Key",
        "username": "LastFM username"
    },
    "discord": {
        "clientKey": "Discord ApplicationID",
        "updateEvery": 10e3
    },
    "text": {
        "details": "{artist} - {track}",
        "state": "{album}",
        "imageText": "{artist} - {track} ({album})",
        "buttons": [ "Listen with me!", "Here my profile!" ]
    },
    "buttonsEnabled": true
}
```
### I will recommend you don't touch `discord.updateEvery`.
### In `text` you can edit the position of the track name, artist, etc.
* `{artist}` responsible for the creator of the track
* `{track}` responsible for the track name
* `{album}` is responsible for the album in which the track is.
#### Example:
```js
"details": "I'm listen {track} by {artist}" // I'm listen Animal I Have Become by Three Days Grace
```
*sheesh*

###### [same, but there is an interface](https://github.com/tangenx/lfdi)

