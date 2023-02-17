const invitedPersons:string[] = ['Babar Azam', 'Shadab Khan', 'Shaheen Afridi', 'Haris Rauf', 'Muhammad Rizwan'];

invitedPersons.forEach(p => {
    console.log(`Dear ${p}, I would like to invite you to dinner party at my place.`);
});

const excludedPerson:string = "Shadab Khan";

if(invitedPersons.indexOf(excludedPerson) !== -1){
    console.log(`${excludedPerson} couldn't come at the dinner.`);        
}

const includedPerson:string = "Shahnawaz Dahani";

invitedPersons.map((p, i) => {
    if(p === excludedPerson){
        invitedPersons[i] = includedPerson
    }
})

invitedPersons.forEach(p => {
    console.log(`Dear ${p}, I would like to invite you to dinner party at my place.`);
});

invitedPersons.forEach(p => {
    console.log(`Hey ${p}, I found bigger dinner table so, more guests or coming.`);
});

const middleIndex:number = Number(invitedPersons.length / 2);

// Added name in the middle of array
invitedPersons.splice(middleIndex, 0, "David Watson");

// Added name in the last of array
invitedPersons.push("Alex Hales");

invitedPersons.forEach(p => {
    console.log(`Dear ${p}, I'm Inviting you to come at my place for dinner.`);
});