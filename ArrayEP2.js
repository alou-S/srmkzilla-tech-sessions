//Task 4
let names = ['Rajeev', 'Edvard', 'Columb', 'Avram', 'Anika', 'Erling', 'Elmir', 'Audovacar',  'Vlatka', 'Angel'];

// Filter
function checkLengthF(moniker) {
    return moniker.length < 6;
}
console.log('Filtered:', names.filter(checkLengthF), '\n');

// For Each
lt6fe = [];

function checkLength(moniker) {
    if (moniker.length < 6){
        lt6fe.push(moniker);
        return moniker;
    }
}

names.forEach(checkLength);
console.log('ForEached:', lt6fe);

// Map
console.log('\nMapped:', names.map(checkLength).filter(x => x));
