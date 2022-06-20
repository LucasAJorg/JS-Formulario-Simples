const form = document.getElementById('form');

form.onsubmit = function(e) {
    e.preventDefault();

    let DDD = document.getElementById('DDD').value;
    document.getElementById('currentNumber').innerHTML = DDD;

    function city(DDD) {
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
    
    document.getElementById('city1').innerHTML = city(DDD);

    form.reset()
}