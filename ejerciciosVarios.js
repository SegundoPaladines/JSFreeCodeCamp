/* 
    Realizacion de los test para la certificacion en Algoritmos de JavaScript y Estructuras de datos
    de freeCodeCamp.

    AUTOR: SEGUNDO SANTANDER PALADINES ORTIZ

    Lo realicé en vs code porque en el IDE me siento mejor trabajando, luego lo lleve a la plataforma

*/

//  Palindromes

function palindrome(str) {
    str = str.split('');
    var reg = /^[A-Za-z0-9]$/;
    var limpio = [];
    str.forEach(elemento => {
        if(reg.test(elemento)){
            limpio.push(elemento);
        }
    });
    str = limpio;
    var reverso = [];

    for(var i =0; i < str.length; i++){
        reverso[i] = str[str.length -i -1];
    }

    str = str.join('').toLowerCase();
    reverso = reverso.join('').toLowerCase();

    return str === reverso;
}

//console.log(palindrome("A man, a plan, a canal. Panama"));

// Convertidor de numeros a romanos
function  convertToRoman(num){
    var res = "";
    while(num > 0){
        if(num > 999){
            res = res + "M";
            num = num - 1000;
        }else if(num > 499){
            if(num > 899){
                res = res + "CM";
                num = num - 900;
            }else{
                res = res + "D";
                num = num - 500;
            }
        }else if(num > 99){
           if(num > 399){
            res = res + "CD";
            num = num - 400;
           }else{
                res = res + "C";
                num = num - 100;
           }
        }else if(num > 49){
            if(num > 89){
                res = res + "XC";
                num = num - 90;
            }else{
                res = res + "L";
                num = num - 50;
            }
        }else if(num > 9){
            if(num > 39){
                res = res + "XL";
                num = num - 40;
            }else{
                res = res + "X";
                num = num - 10;
            }
        }else if(num > 4){
            if(num == 9){
                res = res + "IX";
                num = num - 9;
            }else{
                res = res + "V";
                num = num -5;
            }
        }else if (num > 0){
            if(num === 4){
                res = res + "IV";
                num = num -4;
            }else{
                res = res + "I";
                num = num -1;
            }
        }
    }
    return res;
}

//console.log(convertToRoman(909));

//cifrado rot13
function rot13(str) {
    var regex = /^[A-Z]$/;
    var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    abecedario = abecedario.split('');
    str = str.split('');
    for(var i = 0; i < str.length; i++){
        if(regex.test(str[i])){
            str[i] = abecedario[sumTrece(pos(str[i]))];
        }
    }
    return str.join('');
}

function pos(letra){
    var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    abecedario = abecedario.split('');
    for(var i = 0; i < abecedario.length; i++){
        if(letra === abecedario[i]){
            return i;
        }
    }
}

function sumTrece(pos){
    var res = pos + 13;
    if(res > 25){
        res = res - 26;
    }
    return res;
}
  
//console.log(rot13("SERR PBQR PNZC"));

//Prueba de telefono
function telephoneCheck(str) {
    /* Si validamos que cada parentesis que se abra o cieere con la reg ex
     sería muy extenza, por lo cual mejor usamos una bandera para hacer eso
     */
    var regex = /^(1|)( |)(\(|)([0-9]{3})(\)|)(-| |)([0-9]{3})(-| |)([0-9]{4})$/;
    if(regex.test(str)){
        var bandera = true;
        str = str.split('');
        str.forEach(letra => {
            if((letra === "(") || (letra === ")")){
                bandera = bandera? false : true;
            }
        });
        return bandera;
    }else{
        return false;
    }
}
//console.log(telephoneCheck("555-555-5555"));

/*la reg ex evita que pase algo como esto:
1 )555(....
cosa que pasaria con el algoritmo de los parentesis*/

function checkCashRegister(price, cash, cid) {
    let res = {
        status:"",
        change: []
    };
    var cambio = cash - price;

    while(cambio > 0){
        if((cambio >= 100) && (devolverCantidad(cid, "ONE HUNDRED") >= 100)){
            cambio = cambio - 100;
            if(res.change ["ONE HUNDRED"]){
                res.change ["ONE HUNDRED"] = res.change ["ONE HUNDRED"] + 100;
            }else{
                res.change ["ONE HUNDRED"] = 100;
            }
            cid = quitar(cid, "ONE HUNDRED");
        }else if((cambio >= 20) && (devolverCantidad(cid, "TWENTY") >= 20)){
            cambio = cambio - 20;
            if(res.change ["TWENTY"]){
                res.change ["TWENTY"] = res.change ["TWENTY"] + 20;
            }else{
                res.change ["TWENTY"] = 20;
            }
            cid = quitar(cid, "TWENTY");
        }else if((cambio >= 10) && (devolverCantidad(cid, "TEN") >= 10)){
            cambio = cambio - 10;
            if(res.change ["TEN"]){
                res.change ["TEN"] = res.change ["TEN"] + 10;
            }else{
                res.change ["TEN"] = 10;
            }
            cid = quitar(cid, "TEN");
        }else if((cambio >= 5) && (devolverCantidad(cid, "FIVE") >= 5)){
            cambio = cambio - 5;
            if(res.change ["FIVE"]){
                res.change ["FIVE"] = res.change ["FIVE"] + 5;
            }else{
                res.change ["FIVE"] = 5;
            }
            cid = quitar(cid, "FIVE");
        }else if((cambio >= 1) && (devolverCantidad(cid, "ONE") >= 1)){
            cambio = cambio - 1;
            if(res.change ["ONE"]){
                res.change ["ONE"] = res.change ["ONE"] + 1;
            }else{
                res.change ["ONE"] = 1;
            }
            cid = quitar(cid, "ONE");
        }else if((cambio >= 0.25) && (devolverCantidad(cid, "QUARTER") >= 0.25)){
            cambio = cambio - 0.25;
            if(res.change ["QUARTER"]){
                res.change ["QUARTER"] = res.change ["QUARTER"] + 0.25;
            }else{
                res.change ["QUARTER"] = 0.25;
            }
            cid = quitar(cid, "QUARTER");
        }else if((cambio >= 0.0998) && (devolverCantidad(cid, "DIME") >= 0.0998)){
            cambio = cambio - 0.1;
            if(res.change ["DIME"]){
                res.change ["DIME"] = res.change ["DIME"] + 0.1;
            }else{
                res.change ["DIME"] = 0.1;
            }
            cid = quitar(cid, "DIME");
        }else if((cambio >= 0.0498) && (devolverCantidad(cid, "NICKEL") >= 0.0498)){
            cambio = cambio - 0.05;
            if(res.change ["NICKEL"]){
                res.change ["NICKEL"] = res.change ["NICKEL"] + 0.05;
            }else{
                res.change ["NICKEL"] = 0.05;
            }
            cid = quitar(cid, "NICKEL");
        }else if((cambio >= 0.0098) && (devolverCantidad(cid, "PENNY") >= 0.0098)){
            cambio = cambio - 0.01;
            if(res.change ["PENNY"]){
                res.change ["PENNY"] = res.change ["PENNY"] + 0.01;
            }else{
                res.change ["PENNY"] = 0.01;
            }
            cid = quitar(cid, "PENNY");
        }else{
            break;
        }
    }

    if((cambio < 0.01) && (sumaCaja(cid) > 0)){
        res["status"] = "OPEN";

        var nuevo_change = [];
        for (const arr in res.change) {
            nuevo_change.push([arr, Math.round(res.change[arr]*1000)/1000]);
        }
        res.change = nuevo_change;

    }else if((cambio < 0.01) && (sumaCaja(cid) <= 0)){
        res["status"] = "CLOSED";
        var nuevo_change = [];
        cid.forEach(elemento => {
            var bandera = false;
            for (const arr in res.change) {
                if(arr === elemento[0]){
                    bandera = true;
                    nuevo_change.push([arr, Math.round(res.change[arr]*1000)/1000]);
                    break;
                }
            }
            if(!bandera){
                nuevo_change.push([elemento[0], elemento[1]]);
            }
        });
        res.change = nuevo_change;
    }else if((cambio > 0.01)){
        res["status"] = "INSUFFICIENT_FUNDS";
        res.change = [];
    }

    return res;
}

function devolverCantidad(array, val){
    var res = 0;
    array.forEach(elemento => {
        if(elemento[0] === val){
            res = elemento[1];
        }
    });
    return res; 
}

function quitar(array, val){
    array.forEach(elemento => {
        if(elemento[0] === val){
            switch(val){
                case "PENNY":
                    elemento[1] = elemento[1] - 0.01;
                    break;
                case "NICKEL": 
                    elemento[1] = elemento[1] - 0.05;
                    break;
                case "DIME": 
                    elemento[1] = elemento[1] - 0.1;
                    break;
                case "QUARTER":
                    elemento[1] = elemento[1] - 0.25;
                    break;
                case "ONE":
                    elemento[1] = elemento[1] - 1;
                    break;
                case "FIVE":
                    elemento[1] = elemento[1] - 5;
                case "TEN":
                        elemento[1] = elemento[1] - 10;
                    break;
                case "TWENTY":
                    elemento[1] = elemento[1] - 20;
                    break;
                case "ONE HUNDRED":
                    elemento[1] = elemento[1] - 100;
                    break;
            }
        }
    });
    return array;
}
function sumaCaja(array){
    var suma = 0;
    array.forEach(elemento => {
        if(elemento[1] > 0){
            suma = suma + elemento [1];
        }
    });
    return suma;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));