let names = [
  "  goga ",
  "NIKA",
  "  ana  ",
  "Giorgi",
  "  mariam"
];

function namejumber(names) {
  let A = 0;

  for (let i = 0; i < names.length; i++) {
    let cleanName = names[i].trim().toLowerCase();
    let capitalize = cleanName[0].toUpperCase() + cleanName.slice(1);
    names[i] = capitalize;

    if (cleanName === "goga") {
      console.log("Hello Goga!");
    }
  }

  console.log(names);

  for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().includes("a")) {
      A++;
    }
  }

  console.log(A);

  for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
  }

  return names;
}

namejumber(names);