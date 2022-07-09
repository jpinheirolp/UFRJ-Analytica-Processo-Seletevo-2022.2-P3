const album_info_service = require("../Services/album_info_service");

const util = require('util')
const request = require("request");
const requestPromise = util.promisify(request);

async function get_last_album (req, res){
    const artist = req.query.artist;

    console.log(`Buscando id do(a) artista ${artist}`);
    const artist_info = await requestPromise(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`, {json: true});
    if (artist_info.body.artists == null){
        res.status(404).send(`Não foi encontrado o artista ${artist}`);
        return false;
    }
    const id_artist = artist_info.body.artists[0].idArtist;

    const last_album = await album_info_service.get_last_album(artist,id_artist);
    
    res.status(200).json({last_album:last_album});
}

module.exports = {get_last_album};