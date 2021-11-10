let person = {
    firstName: 'Divya',
    lastName : 'Pai',
    middleName : 'Hari',
    age: 32
}

if (person.firstName == 'Disha')
{
    console.log('Disha');
}
else
if (person.firstName == 'Divya')
{
    console.log('Divya');
    console.log(person.age);
    delete person.age;
    console.log(person.age);
}
else
{
    console.log('Vinesh');
}

