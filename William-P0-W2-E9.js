//Tugas Function Nomor 1
function shoutOut (jawaban) {
  return jawaban
}
console.log(shoutOut("Halo Function!"));

//Tugas Function Nomor 2
function calculateMultiply (num1, num2) {
 hasilPerkalian = num1*num2;
 return hasilPerkalian
}
var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian);


//Tugas Function Nomor 3
function processSentence (name,age,address,hobby) {
  fullsentence = "Nama saya " +name+ ", umur saya " +age+ " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby +"!";
  return fullsentence
}
var fullsentence = processSentence ("Agus", 30, "Jln. Malioboro, Yogjakarta", "gaming");
console.log(fullsentence);