

// let temp = Number(prompt('Inserisci la temperatura'));
// if (temp < 18){console.log ('Non ci sono piu’ le mezze stagioni')}
// else if (temp >= 30){console.log ('Lu mare, lu sole, lu ientu')}
// else if (temp < 30){console.log ('Mi dia una Peroni sudata')}
// else if (temp < 0){console.log ('Non e’ tanto il freddo quanto l’umidità')}
// else if (temp < -10){console.log ('Copriti… ancora ti raffreddi')}



let temper = Number(prompt('Inserisci la temperatura'));
let fraseretorica;
switch (true) {
    
    case temper < -10:
    fraseretorica = 'Copriti… ancora ti raffreddi'
    break;  
    
    case temper < 0:
    fraseretorica = 'Non e’ tanto il freddo quanto l’umidità'
    break; 
    
    case temper < 18:
    fraseretorica = 'Non ci sono piu’ le mezze stagioni'
    break;
    
    case temper >= 30:
    fraseretorica = 'Lu mare, lu sole, lu ientu'
    break; 
    
    case temper < 30:
    fraseretorica = 'Mi dia una Peroni sudata'
    break; 
    
}

console.log(fraseretorica);

