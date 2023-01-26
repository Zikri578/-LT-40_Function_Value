# -LT-40_Function_Value

Function sebagai value adalah sebuah konsep dalam javascript yang memungkinkan function untuk diperlakukan sebagai data. Hal ini berarti bahwa function dapat ditugaskan ke variabel, dikirim sebagai parameter ke function lain, dan dikembalikan sebagai nilai oleh function. Contoh:

    let myFunction = function() {
      console.log("Hello World!");
    }
    myFunction(); // Output: "Hello World!"

Pada contoh di atas, function `"myFunction"` ditugaskan ke variabel dan dipanggil seperti variabel biasa. Selain itu, function juga dapat diteruskan sebagai parameter ke function lain:

    function callFunction(fn) {
      fn();
    }
    callFunction(myFunction); // Output: "Hello World!"

Pada contoh di atas, function `"myFunction"` diteruskan sebagai parameter ke function `"callFunction"` dan dipanggil dalam function tersebut. Dan juga dapat dikembalikan sebagai nilai oleh function:

    function createFunction() {
      return function() {
        console.log("Hello World!");
      }
    }
    let myFunction = createFunction();
    myFunction(); // Output: "Hello World!"

Pada contoh di atas, function `"createFunction"` mengembalikan function lain sebagai nilai dan ditugaskan ke variabel `"myFunction"`. Secara keseluruhan, memperlakukan function sebagai value membuat javascript lebih fleksibel dan mudah digunakan. Dengan memperlakukan function sebagai value, Anda dapat menuliskan kode yang lebih terstruktur dan reusable. Hal ini dapat membuat kode Anda lebih mudah dipelihara dan dikembangkan dalam jangka panjang.

Selain itu, function sebagai value juga memungkinkan Anda untuk menuliskan kode yang lebih terorganisir dan efisien, karena Anda dapat menuliskan logika yang sama dalam sebuah function yang dapat dipanggil di berbagai tempat dalam kode Anda. Ini juga memungkinkan Anda untuk menuliskan kode yang lebih dinamis dan dapat diubah dengan mudah, karena Anda dapat membuat function yang dapat diterima parameter dan mengembalikan nilai yang berbeda.
