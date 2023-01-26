// membuat sebuah function yang bernama sayhello degan parameternya yaitu nama
function sayhello(nama){
    // menampilkan pesan di web
    document.writeln(`<p>Hello ${nama}</p>`);
}
// memanggil function sayhello dengan parameternya yaitu : eko
sayhello("Eko");    // sayhello(nama) 
// dan output : Hello Eko



// membuat sebuah variabel say dengan valuenya sayhello
let say = sayhello;

// membuat variabel say dengan valuenya Budi
say("Budi");    // sayhello(nama) 
// dan output : Hello Budi

// membuat sebuah function yang bernama givemeName dengan parameternya yaitu callback
function givemeName(callback){
    // memanggil parameter callback dengan valuenya Komandan
    callback("Komandan");   // sayhello("Komandan")
}
// memanggil function givemeName dengan valuenya sayhello
givemeName(sayhello);   // sayhello(nama) 
// dan output : Hello Komandan

// memanggil function givemeNAme dengan valuenya say
givemeName(say);    // givemeName(sayhello) 
// dan output: Hello Komandan



// membuat variabel add untuk dijadikan sebuah function yang parameternya yaitu a dan b
let add = function (a, b) {
    // mengembalikan parameter kedalam bentuk operasi aritmatika
    return a + b;
};
// menampilkan pesan di console dengan valuenya yaitu 2 dan 3 untuk melakukan operasi aritmatika
console.log(add(2, 3)); //output: 5



// membuat sebuah variabel calculator yang dijadikan sebagai objek
let calculator = {
    // menambahkan variabel add untuk dijadikan sebagai function dengan parameter a dan b
    add: function(a, b){
        // mengembalikan kedalam bentuk operasi aritmatika
        return a + b;
    },
    // menambahkan variabel subtract untuk dijadikan sebagai function dengan parameter c dan d
    subtract: function(a, b){
        // mengembalikan kedalam bentuk operasi arimatika
        return a - b;
    }
};
// menampilkan pesan di console dengan memanggil variabel calculator dan add serta valuenya
console.info(calculator.add(4,10));     // output : 14
// menampilkan pesan di console dengan memanggil variabel calculator dan subtract serta valuenya
console.info(calculator.subtract(100, 23));     // output : 77
