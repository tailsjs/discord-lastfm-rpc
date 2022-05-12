const { lastfm, discord } = require("./config.json");
const rpc = require("discord-rich-presence")(discord.clientKey);
const fetch = require("node-fetch");

async function update(){
    let result = (await (await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfm.username}&api_key=${lastfm.apiKey}&format=json`)).json());
    if(result.error != undefined){
        console.error(`Error!\n(${result.error}) ${result.message}`);
        process.exit(1)
    }
    let track = result.recenttracks.track[0];
    if(track["@attr"] == undefined){
        console.log("Please, start scrobbling!");
        process.exit(1)
    }
    rpc.updatePresence({
        details: `${track.artist["#text"]} - ${track.name}`,
        state: track.album["#text"],
        largeImageKey: track.image.filter(e => e["#text"] != undefined).reverse()[0]["#text"],
        largeImageText: `${track.artist["#text"]} - ${track.name} (${track.album["#text"]})`,
        instance: true,
        buttons: [
            {
                label : "Listen with me!",
                url: track.url
            },
            {
                label: "Here my profile!",
                url: `https://www.last.fm/user/${lastfm.username}`
            }
        ]
    })
    console.log("RPC Updated!")
}; 

update();

setInterval(update, discord.updateEvery)