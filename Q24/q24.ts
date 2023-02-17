// 1
let isPersonName = 'Yasir';
console.log("Is Person Name == 'Yasir'? I predict True.")
console.log(isPersonName == 'Yasir')

//2
let isAge = 26;
console.log("Is age over 20? I predict True.")
console.log(isAge > 20)

//3
let languages = ["Sindhi","Urdu", "English"];
console.log("Is french among the list? I predict False");
console.log(languages.indexOf('French') == 1);

//4
let isDeveloper = true;
console.log("Is Developer == true ? I predict True.")
console.log(isDeveloper == true)

//5
let isStudent = "Yes";
console.log("Is he Web 3.0 & Metaverse student == 'Yes'? I predict True.")
console.log (isStudent == "Yes")

//6
let provinces: number = 4;
console.log("Pakistan have 5 provinces? I predict False");
console.log(provinces == 5);

//7
let doesLionFly: boolean = false;
let doesLionSwim: boolean = false;
console.log("Does lion fly or swim? I predict False");
console.log(doesLionFly !== false && doesLionSwim !== false);

//8
let IsLodonCityofFrance: boolean = false;
console.log("Is London city of France? I predict False");
console.log(IsLodonCityofFrance === false);

//9
let isBetter = false;
console.log("Is Java better than JavaScript ? I predict False");
console.log(isBetter == false);

//10
let skills: string[] = ["Larvel", "React.js", "Node.js", "Next.js", "Metaverse"];
console.log("is Next.js in a skills list?. I predict True");
console.log(skills.indexOf("Next.js") !== -1);