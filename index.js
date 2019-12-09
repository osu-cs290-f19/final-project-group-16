var pictures = [,];
var textURL = [];
var genre = [];
var album = [];
var artist = [];
var color;

function addAlbumName(event){
    var currText = event.currentTarget.value;
    album = currText;
}

function addGenre(event){
    var currText = event.currentTarget.value;
    genre = currText;
}

function addURl(event){
    var currText = event.currentTarget.value;
    textURL = currText;
}

function addArtist(event){
    var currText = event.currentTarget.value;
    artist = currText;

}

function addPost(event){
    var posts = document.getElementById('pictures');
    var post = document.createElement('div');
    post.classList.add('post');
    post.setAttribute('data-color', color);
    post.setAttribute('data-user',text);
    post.setAttribute('data-url', textURL);
    post.setAttribute('data-desc', textDesc);
    posts.appendChild(post);

    var postContents = document.createElement('img');
    postContents.classList.add('post-pic');
    postContents.setAttribute('src',textURL);
    post.appendChild(postContents);
    var clickPicture = document.getElementById('pictures').childNodes;
    console.log(clickPicture);
    clickPicture.forEach(function(elem){
        elem.addEventListener('click',pictureClicked);
    });

    text = null;
    textURL = null;
    textDesc = null;
}

function pictureClicked(event){
    var win = document.getElementById('picture-click');
    var back = document.getElementById('backdrop');
    win.classList.remove('hidden');
    back.classList.remove('hidden');
    console.log("clicked pictures");
    var pic = document.getElementById('pop-up-img');
    var url = event.currentTarget.data-url;
    pic.setAttribute('src',event.currentTarget.dataset.url);
}


var textInputURL = document.getElementById('addendum-url');
textInputURL.addEventListener('change',addURL);

var textInputName = document.getElementById('addendum-name');
textInputName.addEventListener('change',addName);

var addItemButton = document.getElementById('addendum-button');
addItemButton.addEventListener('click', addPost);

var textInputDesc = document.getElementById('addendum-desc');
textInputDesc.addEventListener('change', addDesc);

var clickPicture = document.getElementById('pictures').childNodes;
console.log(clickPicture);
clickPicture.forEach(function(elem){
    elem.addEventListener('click',pictureClicked);
});
