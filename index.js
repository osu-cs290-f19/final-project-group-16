var coverURL = [];
var genre = [];
var album = [];
var artist = [];

// function addAlbumName(event){
//     var currText = event.currentTarget.value;
//     album = currText;
// }

// function addGenre(event){
//     var currText = event.currentTarget.value;
//     genre = currText;
// }

// function addURl(event){
//     var currText = event.currentTarget.value;
//     textURL = currText;
// }

// function addArtist(event){
//     var currText = event.currentTarget.value;
//     artist = currText;

// }

function openNav() {
    document.getElementById('add-album').style.width = "250px";
}

function closeNav() {
    document.getElementById('add-album').style.width = "0";
}

function albumClicked(event){


}

function popOut(event){
    openNav();
}

var hoverAdd = document.getElementById('add-album');
hoverAdd.addEventListener('hover',popOut);
var albums = document.getElementById('albums').childNodes;
albums.forEach(function(elem){
    elem.addEventListener('click',albumClicked);
});
