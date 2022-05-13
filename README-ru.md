# discord-lastfm-rpc
Получает последний проигранный трек в LastFM и показывает его в дискорде через Rich Presence

[English version](https://github.com/tailsjs/discord-lastfm-rpc/blob/main/README.md)

## Установка.
1. Скачайте/клонируйте репозиторий
2. Введите "npm i"
3. Настройте `config.json`
4. `node index.js`

## Как настраивать config.json?
Вам нужны [LastFM API Key](https://www.last.fm/api/account/create) и [Discord ApplicationID](https://discord.com/developers/applications)

### Что куда вводить?
```json
{
    "lastfm": {
        "apiKey": "LastFM API Key",
        "username": "Имя пользователя в LastFM"
    },
    "discord": {
        "clientKey": "Discord ApplicationID",
        "updateEvery": 10e3
    },
    "text": {
        "details": "{artist} - {track}",
        "state": "{album}",
        "imageText": "{artist} - {track} ({album})",
        "buttons": [ "Слушай со мной!", "Мой профиль!" ]
    },
    "buttonsEnabled": true
}
```
### Рекомендую не трогать `discord.updateEvery`.
### В `text` можно редактировать положение названия трека, артиста и т.п.
* `{artist}` отвечает за создателя трека
* `{track}` отвечает за имя трека
* `{album}` отвечает за альбом, в котором находится трек.
#### Пример:
```js
"details": "Я слушаю {track} от {artist}" // Я слушаю Animal I Have Become от Three Days Grace
```

*sheesh*

###### [то же самое, но тут есть интерфейс](https://github.com/tangenx/lfdi)

