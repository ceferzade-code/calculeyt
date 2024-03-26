let blackClik = document.querySelector('.black');
blackClik.onclick = function () {
    console.log(document.querySelector('.black').style.backgroundColor)
    if (document.querySelector('.black').style.backgroundColor == 'black') {
        document.querySelector('.section').style.backgroundColor = 'black';
        document.querySelector('.black').style.backgroundColor = 'white';
    }
    else {
        document.querySelector('.section').style.backgroundColor = 'white';
        document.querySelector('.black').style.backgroundColor = 'black';
    }
};
