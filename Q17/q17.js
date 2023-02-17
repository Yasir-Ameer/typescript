var invitedPersons = ['Babar Azam', 'Shadab Khan', 'Shaheen Afridi', 'Haris Rauf', 'Muhammad Rizwan'];
invitedPersons.forEach(function (p) {
    console.log("Dear ".concat(p, ", I would like to invite you to dinner party at my place."));
});
var excludedPerson = "Shadab Khan";
if (invitedPersons.indexOf(excludedPerson) !== -1) {
    console.log("".concat(excludedPerson, " couldn't come at the dinner."));
}
var includedPerson = "Shahnawaz Dahani";
invitedPersons.map(function (p, i) {
    if (p === excludedPerson) {
        invitedPersons[i] = includedPerson;
    }
});
invitedPersons.forEach(function (p) {
    console.log("Dear ".concat(p, ", I would like to invite you to dinner party at my place."));
});
invitedPersons.forEach(function (p) {
    console.log("Hey ".concat(p, ", I found bigger dinner table so, more guests or coming."));
});
var middleIndex = Number(invitedPersons.length / 2);
// Added name in the middle of array
invitedPersons.splice(middleIndex, 0, "David Watson");
// Added name in the last of array
invitedPersons.push("Alex Hales");
invitedPersons.forEach(function (p) {
    console.log("Dear ".concat(p, ", I'm Inviting you to come at my place for dinner."));
});
console.log("I can invite only 2 two people");
// Remove the persons until it be 2 person list
var len = invitedPersons.length;
for (var index = len; index > 0; index--) {
    if (2 < index) {
        var removedPerson = invitedPersons.pop();
        console.log("".concat(removedPerson, " I am really sorry I can't invite you this time."));
    }
}
// Remove 2 remaining person from the list
invitedPersons.splice(0, 2);
// Empty list
console.log(invitedPersons);
