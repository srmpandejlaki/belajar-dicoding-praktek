let myScore = 100;
let computerScore = 90;

if (myScore > computerScore) {
    console.log("Selamat, Anda menang");
} else {
    console.log("Anda kalah");
}

// Operator Perbandingan
// == (sama) !=, === (identik) !==
// > (lebih/kurang dari) <, >= (lebih/kurang dari sama dengan) <=


// gabungan IF/ELSE dengan OR & AND
let totalBelanja = 125000;
let jenisMember = "Bronze";

if(totalBelanja > 100000 && jenisMember == "Silver") {
    console.log("Selamat, Anda mendapat diskon sebesar 10%");
} else {
    console.log("Maaf, saat ini Anda belum mendapat diskon");
}

if(totalBelanja > 100000 || jenisMember == "Silver") {
    console.log("Selamat, Anda mendapat diskon sebesar 10%");
} else {
    console.log("Maaf, saat ini Anda belum mendapat diskon");
}
