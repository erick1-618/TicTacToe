var va = 0;
var vv = 0;
var jogadas;
jogo(0);

function CheckVit() {
    //vitórias horizontais
    if ((a[0] > 0) && (a[0] == a[1] && a[1] == a[2])) Vit(a, 0);
    if ((b[0] > 0) && (b[0] == b[1] && b[1] == b[2])) Vit(b, 0);
    if ((c[0] > 0) && (c[0] == c[1] && c[1] == c[2])) Vit(c, 0);
    //vitórias verticais
    if ((a[0] > 0) && (a[0] == b[0] && b[0] == c[0])) Vit(a, 0);
    if ((a[1] > 0) && (a[1] == b[1] && b[1] == c[1])) Vit(a, 1);
    if ((a[2] > 0) && (a[2] == b[2] && b[2] == c[2])) Vit(a, 2);
    //vitórias diagonais
    if ((a[0] > 0) && (a[0] == b[1] && b[1] == c[2])) Vit(a, 0);
    if ((a[2] > 0) && (a[2] == b[1] && b[1] == c[0])) Vit(a, 2);
    if (jogadas == 9) {
        alert('Empate!');
        if (vez == 0) jogo(1);
        else jogo(0);
    }
}

function Vit(array, ind) {
    if (array[ind] == 1) {
        alert('Vitória do Azul!');
        ++va;
        jogo(0);
    }
    else if (array[ind] == 2) {
        alert('Vitoria do Vermelho!');
        ++vv;
        jogo(1);
    }
}

function somaM(x, y) {
    var z;
    if (x === a) z = 'a';
    else if (x === b) z = 'b';
    else if (x === c) z = 'c';
    var elementoID = z + y;
    if (!x[y]) {
        ++jogadas;
        if (vez === 0) {
            x[y] += 1;
            document.getElementById(elementoID).style.background = "blue";
            vez = 1;
        }
        else {
            x[y] += 2;
            document.getElementById(elementoID).style.background = "red";
            vez = 0;
        }
        CheckVit();
    }
}

function jogo(v) {
    jogadas = 0;
    a = [0, 0, 0];
    b = [0, 0, 0];
    c = [0, 0, 0];
    for (i = 0; i < 3; ++i) {
        document.getElementById('a' + i).style.background = "gray";
        document.getElementById('b' + i).style.background = "gray";
        document.getElementById('c' + i).style.background = "gray";
    }
    vez = v;
    document.getElementById("VA").innerHTML = "Vitórias do Azul: " + va;
    document.getElementById("VV").innerHTML = "Vitórias do Vermelho: " + vv;
}

