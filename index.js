var coverURL = [];
var genre = [];
var album = [];
var artist = [];

var allAlbums = [];


function addURL(event){
    var currText = event.currentTarget.value;
    coverURL = currText;
}

function addAlbumName(event){
    var currText = event.currentTarget.value;
    album = currText;
}

function addArtist(event){
    var currText = event.currentTarget.value;
    artist = currText;
}

function addGenre(event){
    var currText = event.currentTarget.value;
    genre = currText;
}

function insertAlbum(name, artist, genre, url){
    var albumDiv = document.createElement('div');
    albumDiv.classList.add('album');
    albumDiv.setAttribute('data-album',name);
    albumDiv.setAttribute('data-artist',artist);
    albumDiv.setAttribute('data-genre', genre);

    var albumImg = document.createElement('img');
    albumImg.src= url;
    albumImg.classList.add('album-pic');

    albumDiv.appendChild(albumImg);

    var songDiv = document.createElement('div');
    songDiv.classList.add('hidden');

    albumDiv.appendChild(songDiv);

    var albums = document.getElementById('albums');
    albums.appendChild(albumDiv);
}

function addAlbum(event){
    // var albumDiv = document.createElement('div');
    // albumDiv.classList.add('album');
    // albumDiv.setAttribute('data-album',album);
    // albumDiv.setAttribute('data-artist',artist);
    // albumDiv.setAttribute('data-genre', genre);

    // var albumImg = document.createElement('img');
    // albumImg.src= coverURL;
    // albumImg.classList.add('album-pic');

    // albumDiv.appendChild(albumImg);

    // var songDiv = document.createElement('div');
    // songDiv.classList.add('hidden');

    // albumDiv.appendChild(songDiv);

    // var albums = document.getElementById('albums');
    // albums.appendChild(albumDiv);

    insertAlbum(album, artist, genre, coverURL);

    var someelse = document.getElementById('add-album');
    someelse.classList.add('hidden');
    
    var something = document.getElementById('album-add-pic');
    something.classList.remove('hidden');

}

function albumSearch(albumPost, filters) {
    if (filters.albumName){
        var name = albumPost.album.toLowerCase();
        var filterName = filters.albumName.toLowerCase();

        if (name.indexOf(filterName) === -1) {
            return false;
        }
    }

    if (filters.artistName){
        var artist = albumPost.artist.toLowerCase();
        var filterArtist = filters.artistName.toLowerCase();
        if (artist.indexOf(filterArtist) === -1){
            return false;
        }
    }

    if (albumPost.genre != filters.genre){
        return false;
    }

    return true;
}

function doFilters() {
    var filters = {
        albumName : document.getElementById('album-name-filter').value.trim(),
        artistName : document.getElementById('artist-name-filter').value.trim(),
        genre : document.getElementById('genre-select').value.trim()
    }

    var albumContainer = document.getElementById('albums');
    while(albumContainer.lastChild){
        albumContainer.removeChild(albumContainer.lastChild);
    }

    allAlbums.forEach(function(album) {
        if (albumSearch(album,filters)){
            insertAlbum(album.name, album.artist, album.genre, coverURL);
        }
    });
}

function parseAlbumElem(album){
    var post = {
        name: album.getAttribute('data-album'),
        artist : album.getAttribute('data-artist'),
        genre : album.getAttribute('genre')
    };

    var postImg = album.querySelector('#album > img:first-of-type');
    post.url = postImg.src;

    return post;
}

function showAddAlbum(event){
    var something = document.getElementById('album-add-pic');
    something.classList.add('hidden');

    var someelse = document.getElementById('add-album');
    someelse.classList.remove('hidden');
}

function updateButton(event){

}

var albumElems = document.getElementsByClassName('album');
  for (var i = 0; i < albumElems.length; i++) {
    allAlbums.push(parseAlbumElem(albumElems[i]));
  }


var addAlbumCoverURL = document.getElementById('album-cover-add');
addAlbumCoverURL.addEventListener('change',addURL);

var addAlbumNameText = document.getElementById('album-name-add');
addAlbumNameText.addEventListener('change',addAlbumName);

var addAlbumArtist = document.getElementById('artist-name-add');
addAlbumArtist.addEventListener('change',addArtist);

var addAlbumGenre = document.getElementById('genre-name-add');
addAlbumGenre.addEventListener('change',addGenre);

var addButton = document.getElementById('add-button');
addButton.addEventListener('click',addAlbum);

var addAlbumPic = document.getElementById('album-add-pic');
addAlbumPic.addEventListener('click',showAddAlbum);

var updateButton = document.getElementById('update-button');
updateButton.addEventListener('click', filterAlbums);