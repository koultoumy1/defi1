let masseFanta = 65; // kg
let masseMamadou = 75; // kg
let tailleFanta = 1.6; // m
let tailleMamadou = 1.7; // m

let IMCMamadou = masseMamadou / tailleMamadou ** 2;
let IMCFanta = masseFanta / tailleFanta ** 2;
let mamadouIMCPlusEleve = IMCMamadou > IMCFanta;

console.log("IMC de Mamadou : " + IMCMamadou);
console.log("IMC de Fanta : " + IMCFanta);
console.log("Mamadou a un IMC plus élevé que Fanta : " + mamadouIMCPlusEleve);
masseFanta = 75; // kg
masseMamadou = 80; // kg
tailleFanta = 1.65; // m
tailleMamadou = 1.75; // m
console.log("IMC de Mamadou : " + IMCMamadou);
console.log("IMC de Fanta : " + IMCFanta);
console.log("Mamadou a un IMC plus élevé que Fanta : " + mamadouIMCPlusEleve);
// Conversion de devise
let CinqCentMille = 500000; //GNF
let TauxDeChange = 8700; // 1USD en GNF
let MontantEnUSD = CinqCentMille / TauxDeChange;
console.log("Le montant equivalent en USD est : " + MontantEnUSD);
// Exo3 Calcul de moyenne
let Note1 = 14;
let Note2 = 16;
let Note3 = 18;
let Somme = Note1 + Note2 + Note3;
let Moyenne = Somme / 3;
console.log("La moyenne arithmétique de Sory est : " + Moyenne);
