var viccek;
window.onload = letöltés()

function letöltés() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés");
    console.log(d);
    viccek = d;

    var main = document.getElementById('main');
    for (var i = 0; i < viccek.length; i++) {
        var ujVicc = document.createElement('div');
        vicc = viccek[i].text;
        console.log(vicc);
        for (var j = 0; j < vicc.length-1; j++) {
            if (vicc[j] == 'a' || vicc[j] == 'q' && vicc[j + 1] == '.') {
                vicc[j] += '<br>';
            }
        }

        ujVicc.innerHTML =`<p>${vicc}</p> <br>`;
        main.appendChild(ujVicc);
        
    }
}