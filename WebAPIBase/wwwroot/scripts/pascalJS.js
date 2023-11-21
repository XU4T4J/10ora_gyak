window.onload = function () {
    //mi történik, ha betölt az oldal

    var pascalDiv = document.getElementById('pascal');
    var drawPascal = function (sorSzam) {
        //Pascal háromszög DOM elemeinek létrehozása és elhelyezése
        for (var sor = 0; sor < sorSzam; sor++) {

            var ujSor = document.createElement('div')
            ujSor.classList.add('sor')
            pascalDiv.appendChild(ujSor);

            for (var oszlop = 0; oszlop <= sor; oszlop++) {
                var ujElem = document.createElement('div')
                ujElem.classList.add('elem')
                ujElem.innerHTML = //sor + ':' + oszlop
                    faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop));
                ujSor.appendChild(ujElem);

            }
        }
    }
}

var faktorialis = function (a) {
    if (a == 1) {
        return 1
    }
    else {
        return a * faktorialis(a - 1)
    }
}

//új DOM elem létrehozása:
//var ujElem = document.createElement('div');
//ujElem.classList.add('újosztály')
//ujElem.id = 'újID';
//ujElem.innerText = '0';
//ujElem.innerHTML = '<div>Hello!</div>';

//var szuloElem = document.getElementById('szulo'); //szülő elem meghatározása
//szuloElem.appendChild(ujElem);

