//Insira o DDD desejado na constante DDD para fazer alteração no código seguinte
const DDD = 11;

console.log('O DDD inserido foi:  ' +DDD);

function city() {
    let DDD1 = Number(DDD);
    switch(DDD1) {
        case 21 : return 'Rio de Janeiro'; break;
        case 11 : return 'São Paulo'; break;
        case 27 : return 'Vitória'; break;
        case 31 : return 'Belo Horizonte'; break;
        case 32 : return 'Juiz de Fora'; break;
        case 61 : return 'Brasília'; break;
        case 71 : return 'Salvador'; break;
        case 19 : return 'Campinas'; break;
        default: return 'DDD não cadastrado';
    }
}

city(DDD)
console.log('A cidade correspondente é:   ' +city(DDD));

// Para ver o código em ação juntamente com um HTML é só acessar meu github
//github = lucasAjorg