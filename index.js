var pictures = [,];
var text = [];
var textURL = [];
var textDesc = [];
var photo_name = [];
var color;

function grabPictures() {
    var pics = document.querySelectorAll('#posts > *')
    return pics;
}

pictures = grabPictures();

for (var i = 0; i < pictures.length(); i++){
    if (pictures[i].data-color == 'Blue'){
        console.log(i, pictures[i].data-color);
    }
}

function addURL(event){
    var currText = event.currentTarget.value;
    textURL= currText;
}

function addName(event){
    var currText = event.currentTarget.value;
    text = currText;
}

function addDesc(event){
    var currText = event.currentTarget.value;
    textDesc = currText;
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
    
    var dataurl = document.createAttribute('data-url');
    dataurl.value = event.currentTarget.data-url;
    win.setAttributeNode(dataurl);

    var datauser = document.createAttribute('data-user');
    datauser.value = event.currentTarget.data-user;
    win.setAttributeNode(datauser);

    var datadesc = document.createAttribute('data-desc');
    datadesc.value = event.currentTarget.data-desc;
    win.setAttributeNode(datadesc);
    
}

function addInfo(){
    var url = document.getElementById('add-URL');
    var username = document.getElementById('add-username');
    var desc = document.getElementById('add-desc');

    var text = createTextNode(url.data-url);
    url.appendChild(text);

}

function closePop(event){
    var win = document.getElementById('picture-click');
    win.classList.add('hidden');
    var back = document.getElementById('backdrop');
    back.classList.add('hidden');
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

var closeWindow = document.getElementById('close');
closeWindow.addEventListener('click', closePop);

