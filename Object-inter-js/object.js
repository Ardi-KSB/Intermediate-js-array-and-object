// Exercise 1
const hewan = {
  nama: "kucing",
  kaki: 4,
  warna: [" orange ", "putih ", "hitam"],
  spesies: "mamalia",
  makanan: ["ikan", "ayam"],
  keahlian: function () {
    return "berburu tikus";
  },
};

console.log(
  `Ini adalah hewan ${hewan.nama} \nMemiliki ${hewan.kaki} kaki \nSpesies ${
    hewan.spesies
  }\nKucing ini berwarna${hewan.warna}\nMakanan kesukaannya ${
    hewan.makanan[0]
  } dan ${hewan.makanan[1]}\nKeahliannya ${hewan.keahlian()}`
);


// Exercise 2
const data = [
  {
    name: "Alpha",
    class: "Dragon",
    club: ["Bola", "Bulutangkis"],
  },
  {
    name: "Beta",
    class: "Lizard",
    club: ["Membaca", "Bulutangkis"],
  },
];
console.log(
  `${data[0].name} ada di kelas ${data[0].class}, dia mengikuti club ${data[0].club}`
);
console.log(
  `${data[1].name} ada di kelas ${data[1].class}, dia mengikuti club ${data[1].club}`
);



// Exercise 3
let todos = [
  { id: 3, todo: "belajar coding" },
  { id: 7, todo: "nanti tidur" },
];
// hasil:
// 3, "belajar coding"
// 7, "nanti tidur"
console.log(todos);
console.log(todos[0].id, todos[0].todo);
console.log(todos[1].id, todos[1].todo);

// hasil
// 3, "belajar coding"
console.log(todos[0].id, todos[0].todo);

// hasil
// 3, "belajar coding"
// 7, "nanti tidur"
// 8, "ngerjain tugas"
todos.push({ id: 8, todo: "ngerjain tugas" });
console.log(todos);
console.log(todos[0].id, todos[0].todo);
console.log(todos[1].id, todos[1].todo);
console.log(todos[2].id, todos[2].todo);

// hasil
// 3, "belajar coding"
// 8, "ngerjain tugas"
todos.splice(1, 1);
console.log(todos);

// hasil
// 3, "belajar CRUD"
// 8, "ngerjain tugas"
todos[0].todo = "belajar CRUD";
console.log(todos);
