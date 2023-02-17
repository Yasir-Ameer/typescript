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
