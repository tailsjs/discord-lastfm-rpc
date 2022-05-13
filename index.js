const { lastfm, discord, text, buttonsEnabled } = require("./config.json");
const rpc = require("discord-rich-presence")(discord.applicationID);
const fetch = require("node-fetch");

async function update(){
    let result = (await (await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfm.username}&api_key=${lastfm.apiKey}&format=json`)).json());
    if(result.error != undefined){
        console.error(`Error!\n(${result.error}) ${result.message}`);
        process.exit(1)
    }
    let track = result.recenttracks.track[0];
    if(track["@attr"] == undefined)
        console.warn("Please, start scrobbling!");

    let formatObject = { "artist": track.artist["#text"], track: track.name, album: track.album["#text"] };
    rpc.updatePresence({
        details: text.details.format(formatObject),
        state: text.state.format(formatObject),
        largeImageKey: track.image.filter(e => e["#text"] != undefined).reverse()[0]["#text"],
        largeImageText: text.imageText.format(formatObject),
        instance: true,
        activity: "listening",
        buttons: buttonsEnabled ? [
            {
                label : text.buttons[0].format(formatObject),
                url: track.url
            },
            {
                label: text.buttons[1].format(formatObject),
                url: `https://www.last.fm/user/${lastfm.username}`
            }
        ] : undefined
    });
    console.log("RPC Updated!")
}; 

update();

setInterval(update, discord.updateEvery)

String.prototype.format = function(values) {
    let oldString = this.split(" ");
    let newString = [];

    for(let i of oldString){
        let protoString = i;
        if(Object.keys(values).indexOf(protoString.replace(/\{|\}/gi, "")) != -1)
            protoString = values[i.replace(/\{|\}/gi, "")];
        
        newString.push(protoString)
    };
    return newString.join(" ")
}