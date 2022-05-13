# discord-lastfm-rpc
Получает последний проигранный трек в LastFM и показывает его в дискорде через Rich Presence

[English version](https://github.com/tailsjs/discord-lastfm-rpc/blob/main/README.md)

## Установка.
1. Скачайте/клонируйте репозиторий
2. Введите "npm i"
3. Настройте `config.json`
4. `node index.js`

## Как настраивать config.json?
Вам нужны [LastFM API Key](https://www.last.fm/api/account/create) и [Discord Application и clientID](https://discord.com/developers/applications)

### Что куда вводить?
```json
{
    "lastfm": {
        "apiKey": "LastFM API Key",
        "username": "Имя пользователя в LastFM"
    },
    "discord": {
        "clientKey": "Discord clientID",
        "updateEvery": 10e3
    }
}
```
### Рекомендую не трогать `discord.updateEvery`.
*sheesh*

###### [то же самое, но тут есть интерфейс](https://github.com/tangenx/lfdi)

