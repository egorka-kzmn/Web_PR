const fio = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

const personalList = fio.map(name => {
    return {
        name: name,
        personalNumber: name.length  
    };
});

personalList.forEach(p => {
    console.log(`Name: ${p.name} - Personal Number: ${p.personalNumber}`);
});
