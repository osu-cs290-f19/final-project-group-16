var text = [];
var textURL = [];
var textDesc = [];
var photo_name = [];
var color;

function findLocation(pic){
    var pictures = document.getElementById('pictures').childNodes;
    console.log(pic);
    for (var i = 1; i < pictures.length; i+=2){

        if (pic.getAttributeNode('data-color').value == 'Blue'){
            for (var j = i; j < pictures.length; j+=2){
                if (pictures[j].getAttributeNode('data-color').value != 'Blue'){
                    return j;
                }
            }
        }
        else if (pic.getAttributeNode('data-color').value == 'Green'){
            for (var j = i+=2; j < pictures.length; j+=2){
                if (pictures[j].getAttributeNode('data-color').value != 'Green'){
                    return j-=2;
                }
            }
        }
        else if (pic.getAttributeNode('data-color').value == 'Yellow'){
            
            for (var j = i+=2; j < pictures.length; j+=2){
                if (pictures[j].getAttributeNode('data-color').value != 'Yellow'){
                    return j-=2;
                }
            }
        }
        else if (pic.getAttributeNode('data-color').value == 'Orange'){
           
            for (var j = i+=2; j < pictures.length; j+=2){
                if (pictures[j].getAttributeNode('data-color').value != 'Orange'){
                    return j-=2;
                }
            }
        }
        else if (pic.getAttributeNode('data-color').value == 'Red'){
            
            for (var j = i+=2; j < pictures.length; j+=2){
                if (pictures[j].getAttributeNode('data-color').value != 'Red'){
                    return j-=2;
                }
            }
        }
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
    var colorSelect = document.getElementById('addendum-color-select');
    var color = colorSelect.value;
    post.setAttribute('data-color', color);
    post.setAttribute('data-user',text);
    post.setAttribute('data-url', textURL);
    post.setAttribute('data-desc', textDesc);
    

    var postContents = document.createElement('img');
    postContents.classList.add('post-pic');
    postContents.setAttribute('src',textURL);

    var index = findLocation(post);
    posts.insertBefore(post,posts.children[index-2]);
    var text = document.createTextNode('');
    posts.insertBefore(text, posts.children[index-1]);
    post.appendChild(postContents);


    // var clickPicture = document.getElementById('pictures').childNodes;
    // console.log(clickPicture);
    // clickPicture.forEach(function(elem){
    //     elem.addEventListener('click',pictureClicked);
    // });

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

