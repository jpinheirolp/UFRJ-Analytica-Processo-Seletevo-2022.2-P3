const util = require('util')
const request = require("request");
const requestPromise = util.promisify(request);


async function get_info_AudioDB(artist,id_artist){ 
    console.log(`Buscando albums do(a) artista: ${artist}`);
    const artist_data = await requestPromise(`https://www.theaudiodb.com/api/v1/json/2/album.php?i=${id_artist}`, {json: true});
    const artist_albums = artist_data.body.album;
    const lastest_album = {id: 0, year: 0};
    artist_albums.forEach(album => {
        album_year = album.intYearReleased
        if(album_year > lastest_album.year){
            lastest_album.id = album.idAlbum;
            lastest_album.year = album_year;
        }
    });
    console.log(`Buscando  musicas do ultimo album de ${artist}`);
    const album_info = await requestPromise(`https://theaudiodb.com/api/v1/json/2/track.php?m=${lastest_album.id}`, {json: true});

    const track_names = {};
    const track_counter = {count:0};


    const album_tracks = album_info.body.track;
    const latest_album_name = album_tracks[0].strAlbum;
    album_tracks.forEach(track => {
        track_counter.count++;
        track_names[`${track_counter.count}`] = track.strTrack;
    });
    
    const album_info_response = {
        artist: artist,
        latest_album: latest_album_name,
        album_year: lastest_album.year,
        album_tracks: track_names
        }
    return album_info_response;
}

async function get_last_album(artist,id_artist){
    const artist_info  = await get_info_AudioDB(artist,id_artist);
    return artist_info;
}

module.exports = {get_last_album};
