var coverURL = [];
var genre = [];
var album = [];
var artist = [];


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

function addAlbum(event){
    var albumDiv = document.createElement('div');
    albumDiv.classList.add('album');
    albumDiv.setAttribute('data-album',album);
    albumDiv.setAttribute('data-artist',artist);
    albumDiv.setAttribute('data-genre', genre);

    var albumImg = document.createElement('img');
    albumImg.src= coverURL;
    albumImg.classList.add('album-pic');

    albumDiv.appendChild(albumImg);

    var songDiv = document.createElement('div');
    songDiv.classList.add('hidden');

    albumDiv.appendChild(songDiv);

    var albums = document.getElementById('albums');
    albums.appendChild(albumDiv);
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
