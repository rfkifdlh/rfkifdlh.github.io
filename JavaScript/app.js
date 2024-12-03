// // console.log("sebelum pembanding");
// // if(1 + 1 === 2) {
// //     console.log('di dalam pembanding');
// // }
// // console.log("setelah pembanding");

// // let angka = Math.random();
// // console.log(angka);

// // if(angka >= 0.5 ) {
// //     console.log("Angka lebih besar dari 0.5")
// // }

// // if(angka <= 0.5 ) {
// //     console.log("Angka lebih kecil dari 0.5")
// // }

// // const iniHari = prompt('Isikan hari!').toLowerCase();

// // if (iniHari === 'senin') {
// //     console.log("Selamat bekerja kawan!");
// // } else if (iniHari === 'sabtu') {
// //     console.log("Semoga jangan cepat berlalu!");
// // } else {
// //     console.log('Yah biasa saja');
// // }

// // const nilai = '40';

// // if (nilai < 50) {
// //     console.log('E');
// // } else if (nilai < 60) {
// //     console.log('D')
// // } else if (nilai < 70) {
// //     console.log('C')
// // } else if (nilai < 80) {
// //     console.log('B')
// // } else if (nilai < 100) {
// //     console.log('A')
// // } 

// // const password = prompt('buat password');

// // if (password.length >= 6) {
// //     if (password.indexOf(' ') === -1) {
// //         console.log('password valid');
// //     } else {
// //         console.log('password tidak boleh ada spasi');
// //     }
// // } else {
// //     console.log('password minimal 6 karakter');
// // }

// // if (password.length >= 6 && password.indexOf(' ') === -1) {
// //     console.log('password valid')
// // } else {
// //     console.log('password tidak memenuhi syarat')
// // }

// // const balonku = prompt ('input warna balon');
// // switch(balonku) {
// //     case 'merah':
// //         console.log('warna merah');
// //         break;
// //     case 'hijau':
// //         console.log('dooooorrrrr');
// //         break;
// //     default:
// //         console.log('bukan balon saya')
// // }

// // for (let i = 1; i <= 10; i++) {
// //     console.log('saya ada di dalam loop');
// //     console.log(i);
// // }

// // for (let i = 0; i <= 20; i += 2) {
// //     console.log(i);
// // }

// // for (let i = 20; i >= 0; i -= 2) {
// //     console.log(i);
// // }

// // for (let i = 10; i <= 100000; i *= 10) {
// //     console.log(i);
// // }

// // const animal = ['cat', 'deeer', 'hog', 'koala', 'zebra'];

// // for (let i = 0; i < animal.length; i++) {
// //     console.log(i + 1, animal[i]);
// // }

// // const pilihan = 'abcd';
// // for (let i = 1; i <= 10; i++) {
// //     console.log(`${i}. Soal Nomor ${i} :`)
// //     for (let j = 0; j <pilihan.length; j++) {
// //         console.log(`       ${pilihan[j]}. Pilihan Jawaban`);
// //     }
// // }

// // const studentRow = [
// //     ['olivia', 'liam', 'emma', 'noah'],
// //     ['amelia', 'oliver', 'ava', 'elijah'],
// //     ['sophia', 'mateo', 'isabella', 'lucas'],
// // ];

// // for (let i = 0; i <studentRow.length; i++) {
// //     const row = studentRow[i];
// //     console.log(`Seat Row #${i + 1}`);
// //     for (let j = 0; j < row.length; j++) {
// //         console.log(`   ${row[j]}`);
// //     }
// // }

// // for (let row of studentRow) {
// //     for (let student of row) {
// //         console.log(student);
// //     }
// // }

// // let num = 0;
// // while (num < 10) {
// //     console.log (num);
// //     num++;
// // }

// // for (let num = 0; num < 10; num++) {
// //     console.log(num);
// // }

// // const PASSWORD = 'Pass123';

// // let guess = prompt('enter the password');
// // while (guess !== PASSWORD){
// //     guess = prompt('enter the password');
// // }
// // alert('congrats!! the password is correct');


// // let input =  prompt('hei, say something!');
// // while (true) {
// //     input = prompt(input);
// //     if (input.tolowerCase() === 'stop') break;
// // }
// // alert('ok');

// // for (let i = 0; 1 <= 10000; i ++ ) {
// //     console.log(i);
// //     if (i === 900) break;
// // }

// // let maximum = parseInt (prompt('masukan nilai maksimal!'));
// // while (!maximum) {
// //     maximum = parseInt(prompt('masukan nilai maksimal!'));
// // }

// // const targetNum = Math.floor(Math.random() * maximum) + 1;
// // console.log(targetNum);

// // let guess = parseInt(prompt('isi tebakan pertama kamu!'));
// // let attempts = 1;

// // while (guess !== targetNum) {
// //     attempts++;
// //     if (guess > targetNum) {
// //         guess = prompt ('terlalu tinggi! tebak lagi:');
// //     } else {
// //         guess = prompt ('terlalu rendah! tebak lagi:');
// //     }
// // }

// // alert(`selamat tebakan anda benar! dengan percobaan ${attempts} kali`);

// // const fruits = ['banana', 'orange', 'apple', 'mango'];

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(`buah ${fruits[i]}`)
// // }

// // for (let fruit of fruits) {
// //     console.log(`buah ${fruit}`)
// // }

// // const studentScore = {
// //     olivia: 20,
// //     liam: 13,
// //     emma: 40,
// //     noah: 18,
// //     amelia: 32,
// //     oliver: 10,
// //     ava: 11,
// //     elijah: 21,
// //     sophia: 14,
// //     mateo: 22,
// // }

// // for (let student in studentScore) {
// //     console.log(`${student} memiliki skor ${studentScore[student]}`);
// // }

// // let total = 0;
// // let scores = Object.values(studentScore);
// // for (let score of scores) {
// //     total += score;
// // }
// // console.log(total / scores.length);

// // Math.floor(Math.random() * 6) + 1;
// // console.log(lemparDadu);
// // Math.floor(Math.random() * 6) + 1;
// // Math.floor(Math.random() * 6) + 1;
// // Math.floor(Math.random() * 6) + 1;
// // Math.floor(Math.random() * 6) + 1;
// // Math.floor(Math.random() * 6) + 1;
// // function lemparDadu() {
// //     console.log(Math.floor(Math.random() * 6) + 1);
// // }

// // function nyanyi () {
// //     console.log('cek...');
// //     console.log('do re mi...');
// // }

// // nyanyi();
// // nyanyi();
// // nyanyi();
// // nyanyi();

// // function selamatPagi(name) {
// //     console.log(`halo, ${name}. Selamat Pagi`);
// // }

// // selamatPagi('Aim');

// // function jumlahkan(a = 0, b = 0) {
// //     const total = a + b;
// //     return total;
// // }

// // function jumlahkan(a, b) {
// //     if (typeof a !== 'number' || typeof b !== 'number') {
// //         return false;
// //     }
// //     return a + b;
// // }

// // let programming = 'JavaScript';

// // function typeSafe() {
// //    programming = 'TypeScript';
// //    console.log(programming);
// // }

// // typeSafe();
// // console.log(programming);

// // let tinggi = 8;
// // if (tinggi > 5) {
// //    var lebar = 10;
// //    // console.log(lebar);
// // }
// // console.log('lebar: ',lebar);

// // for (let index = 0; index < 10; index++) {
// //    // var indexNumber = index;
// //    // console.log(indexNumber);
// //    var lebar = index;
// // }
// // console.log('index: ', indexNumber);

// // function lamarKerja() {
// //    const jabatan = 'programmer';
   
// //    function lebihDalam() {
// //       function orangDalam() {
// //          let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
// //          console.log(kenalan);
// //       }
   
// //       orangDalam();
// //    }

// //    lebihDalam();
// // 

// // function perpangkatan(nilai) {
// //    return nilai * nilai;
// // }

// // let hasil = perpangkatan(5);

// // const hasilPerpangkatan = function (nilai, pembanding) {
// //    return nilai * pembanding;
// // };

// // hasilPerpangkatan(10);


// // function duaKali(func){
// //    func()
// //    func()
// // }

// // function lemparDadu(){
// //    const hasil = Math.floor(Math.random() * 6) + 1;
// //    console.log(hasil);
// // }

// // function hasilnyaAdalahFunction(){
// //    const rand = Math.random();
// //    if(rand > 0.10) {
// //       return function () {
// //          console.log('Selamat, angkanya lebih besar');
// //       };
// //    } else {
// //       return function() {
// //          console.log('maaf, mungkin bisa coba lagi');
// //       };
// //    }
// // }

// // function myFun() { // function biasa
// //    console.log('HI');
// //    return 'Hello';
// // }

// // const myMath = {
// //    perkalian: function (x, y) { // method
// //       return x * y;
// //    },
// // };

// // const saya = {
// //    nama: 'Aim',
// //    hobi: 'Mancing ikan',
// //    kenalan: function(){
// //       return `Hi, saya ${this.nama}. hobi saya ${this.hobi}.`;
// //    },
// // };

// // try {
// //    SafeArray.kenalan()
// // } catch {
// //    console.log('error!!');
// // }

// // // saya.kenalan();
// // console.log('setelah proses try and catch');

// // function teriak(msg) {
// //    try {
// //       console.log(msg.toUpperCase());
// //    } catch (error){
// //       console.log(error);
// //       console.log('silahkan masukan tipe data string pada argument teriak()');
// //    }
// // }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const angkaDouble = angka.map(function(num) {
// //    return num * 2;
// // });

// const angkaBaru = angka.filter((n) => {
//    return n < 5;
// })

// const animes = [
//    {
//       title: 'Attack on Titan',
//       rating: 90,
//       year: 2013,
//    },
//    {
//       title: 'One Piece',
//       rating: 89,
//       year: 1999,
//    },
//    {
//       title: 'Bleach',
//       rating: 82,
//       year: 2004,
//    },
//    {
//       title: 'Hunter x Hunter',
//       rating: 90,
//       year: 2011,
//    },
//    {
//       title: 'Naruto',
//       rating: 84,
//       year: 2002,
//    },
// ];

// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const judulAnimeBagus = animeBagus.map((anime) => anime.rating >= 85)
//    .map((anime) => anime.title);
// const animeCukupBagus = animes.filter((anime) => anime.rating < 85);
// const animeBaru = animes.filter((anime) => anime.year > 2010);

// const animeList = animes.map(function(anime) {
//    return anime.title.toUpperCase();
// });

// function perpangkatan(x) {
//    return x * x;
// }

// const hasil = perpangkatan(5);

// const hasil = function (x) {
//    return x * x;
// };

// const random = () => (
//    Math.floor(Math.random() * 1000)
// );

// const add = (a, b) => a + b

// console.log('Halo...');
// setTimeout(() => {
//    console.log('masih di sana gak?');
// }, 5000);
// console.log('Saya pergi ya...');

//  const interval = setInterval (() => {
//    console.log(Math.random());
// }, 2000);

// const examScore = [80, 85, 70, 90, 93, 77];
// const isGraduate = examScore.every((score) => score >= 75);
// for(let score of examScore) {
//    total += score;
// }

// const total = examScore.reduce((total, scroe) => {
//    return total + scroe;
// })

// const animes = [
//    {
//       title: 'One Piece',
//       rating: 89,
//       year: 1999,
//    },
//    {
//       title: 'Bleach',
//       rating: 82,
//       year: 2004,
//    },
//    {
//       title: 'Attack on Titan',
//       rating: 92,
//       year: 2013,
//    },
//    {
//       title: 'Hunter x Hunter',
//       rating: 90,
//       year: 2011,
//    },
//    {
//       title: 'Naruto',
//       rating: 84,
//       year: 2002,
//    },
// ];

// const isAnimeListNew = animes.some((anime) => anime.year > 2020);

// const lowAnime = animes.reduce((lowAnime, currAnime) => {
//    console.log(lowAnime, currAnime);
//    if(currAnime.rating < lowAnime.rating) {
//       return currAnime;
//    }
//    return lowAnime;
// });

// const person = {
//    firstName: 'Jhon',
//    LastName: 'Doe',
//    fullName: () => {
//       console.log(this);
//       return `${this.firstName} ${this.lastName}`;
//    },
//    panggilNanti: function() {
//       setTimeout(function () {
//          console.log(this);
//          console.log(this.fullName());
//       }, 3000)
//    },
// };

// function lemparDadu(sisi = 6) {
//    return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name, msg = 'selamat bekerja', name) {
//    console.log(`${anime} ${msg}`);
// }

// const angka = [1,2,3,4,5,6,7,8,9]
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];

// const campuran = [...nama, ...angka];

// const user = {
//    name: 'rifki',
//    email: 'mhmdrfki920@gmail.com',
// };

// const credential = {
//    password: 'password',
//    token: 'u2973128461',
// };

// const userBaru = {...user, ...credential};

// const sumAll = (...nums) => {
//    return nums.reduce((total, el) => total + el);
// };


// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix', 'Gerrad', 'Huey'];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//    console.log(`Medali emas diraih: ${gold}`);
//    console.log(`Medali silver diraih: ${silver}`);
//    console.log(`Medali bronze diraih: ${bronze}`);
//    console.log(`Peserta lainnya: ${sisa}`);
// };

// const [gold, silver, bronze, ...peserta] = nama;

// const user = {
//    name: 'rifki',
//    email: 'mhmdrfki920@gmail.com',
//    role: 'Admin',
// };

// const {name: nama, email, phone = '0812321634'} = user;

// phone;

// const userAndRole = ({name, role}) => {
//    return `${name} ${role}`
// }

// const animes = [
//    {
//       title: 'One Piece',
//       rating: 89,
//       year: 1999,
//    },
//    {
//       title: 'Bleach',
//       rating: 82,
//       year: 2004,
//    },
//    {
//       title: 'Attack on Titan',
//       rating: 92,
//       year: 2013,
//    },
//    {
//       title: 'Hunter x Hunter',
//       rating: 90,
//       year: 2011,
//    },
//    {
//       title: 'Naruto',
//       rating: 84,
//       year: 2002,
//    },
// ];

// const anime = animes.map(({title, year, rating}) => {
//    return `${anime.title} (${anime.year}) rating ${anime.rating}`;
// });