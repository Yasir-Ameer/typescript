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

console.log("I can invite only 2 two people");

// Remove the persons until it be 2 person list
const len = invitedPersons.length;
for (let index = len; index > 0; index--) {
    if( 2 < index ){
        const removedPerson = invitedPersons.pop();
         console.log(`${removedPerson} I am really sorry I can't invite you this time.`);
    }
}

// Remove 2 remaining person from the list
invitedPersons.splice(0, 2);

// Empty list
console.log(invitedPersons);

