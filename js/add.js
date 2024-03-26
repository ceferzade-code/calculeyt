
let x = '';
let operator = undefined;
let onClickBir = document.querySelector('.bir');
onClickBir.onclick = function () {
    document.querySelector('.ekran').textContent += "1";
    x += '1';
};
let onClickIki = document.querySelector('.iki');
onClickIki.onclick = function () {
    document.querySelector('.ekran').textContent += "2";
    x += '2';
};
let onClickUch = document.querySelector('.uch');
onClickUch.onclick = function () {
    document.querySelector('.ekran').textContent += "3";
    x += '3';
};
let onClickDord = document.querySelector('.dord');
onClickDord.onclick = function () {
    document.querySelector('.ekran').textContent += "4";
    x += '4';
};
let onClickBesh = document.querySelector('.besh');
onClickBesh.onclick = function () {
    document.querySelector('.ekran').textContent += "5";
    x += '5';
};
let onClickAlti = document.querySelector('.alti');
onClickAlti.onclick = function () {
    document.querySelector('.ekran').textContent += "6";
    x += '6';
};
let onClickYeddi = document.querySelector('.yeddi');
onClickYeddi.onclick = function () {
    document.querySelector('.ekran').textContent += "7";
    x += '7';
};
let onClickSekkiz = document.querySelector('.sekkiz');
onClickSekkiz.onclick = function () {
    document.querySelector('.ekran').textContent += "8";
    x += '8';
};
let onClickDoqquz = document.querySelector('.doqquz');
onClickDoqquz.onclick = function () {
    document.querySelector('.ekran').textContent += "9";
    x += '9';
};
let onClickSifir = document.querySelector('.sifir');
onClickSifir.onclick = function () {
    document.querySelector('.ekran').textContent += "0";
    x += '0';
};
let onClickNoqte = document.querySelector('.noqte');
onClickNoqte.onclick = function () {
    document.querySelector('.ekran').textContent += ".";
    x += '.';
};

// let x = Number(document.querySelector('.ekran').textContent);
// console.log(x);

let y = [];


let onClickPilus = document.querySelector('.pilus');
onClickPilus.onclick = function () {
    document.querySelector('.ekran').textContent += '+';
    operator = "PLUS";
    // y = +x;
    y.push(x);y.push('+')
    //  y += +x;
    x = "";
};

let onClickMinus = document.querySelector('.minus');
let z = 0;
onClickMinus.onclick = function () {
    document.querySelector('.ekran').textContent += '-';
    operator = "MINUS";
    // return y += x;
    y.push(x);y.push('-');
    x = '';
};

let onClickBolme = document.querySelector('.bolme');
let b = 0;
onClickBolme.onclick = function () {
    document.querySelector('.ekran').textContent += '/';
    operator = "BOLME";
    // return y += x;
    y.push(x);y.push('/')
    x = '';
};

let onClickVurma = document.querySelector('.vurma');
let v = 0;
onClickVurma.onclick = function () {
    document.querySelector('.ekran').textContent += '*';
    operator = "VURMA";
    // y += x;
    y.push(x);y.push('*')
    x = '';
};

// let y = Number(document.querySelector('.ekran').textContent);


let onClickBeraber = document.querySelector('.beraber');
onClickBeraber.onclick = function () {
y.push(x);
    for (let i = 2; i < y.length; i+=2) {

        if (y[i-1]=='+') {

            // document.querySelector('.ekran').textContent = +y[0] + (+y[i]);
           
            y[0]=+y[0] + (+y[i]);

        }
        else if (y[i-1]=='-') {
            // document.querySelector('.ekran').textContent = +y[0] - (+y[i]);
            y[0]=+y[0] - (+y[i]);
        }
        else if (y[i-1]=='/') {
            // document.querySelector('.ekran').textContent = +y[0] / (+y[i]);
            y[0]=+y[0] / (+y[i]);
        }
        else if (y[i-1]=='*') {
            // document.querySelector('.ekran').textContent = +y[0] * (+y[i]);
            y[0]=+y[0] * (+y[i]);
        }
        
        // delete y[i];
    }
    document.querySelector('.ekran').textContent = +y[0];
    // switch (operator) {
    //     case "PLUS":
    //         document.querySelector('.ekran').textContent = y + (+x);
    //         break;
    //     case "MINUS":
    //         document.querySelector('.ekran').textContent = y - (+x);
    //         break;
    //     case "BOLME":
    //         document.querySelector('.ekran').textContent = y / (+x);
    //         break;
    //     case "VURMA":
    //         document.querySelector('.ekran').textContent = y * (+x);
    //         y =  y * (+x)
    //         break;
    // }

    // if (y) {
    //     document.querySelector('.ekran').textContent = y + (+x);
    //     y = y + (+x);
    // }
    // else if (z) { document.querySelector('.ekran').textContent = z - (+x) };
    // document.querySelector('.ekran').textContent = y + (+x);
};
// console.log(typeof(document.getElementsByClassName("ekran")));

let onClickAc = document.querySelector('.ac');
onClickAc.onclick = function () {
    document.querySelector('.ekran').textContent = ""
    x = '';
    y = [];
};