const myFavouriteAuthors = {
  NobelPrizeWinners: {
    yy1901: [
      "Sully Prudhomme",
      "Theodor Mommsen",
      "Bjørnstjerne Bjørnson",
      "Frédéric Mistral",
      "José Echegaray",
      "Henryk Sienkiewicz",
      "Giosuè Carducci",
      "Rudyard Kipling",
      "Rudolf Christoph Eucken",
      "Selma Lagerlöf",
      "Paul von Heyse"
    ],

    yy1911: [
      "Maurice Maeterlinck",
      "Gerhart Hauptmann",
      "Rabindranath Tagore",
      "Romain Rolland",
      "Verner von Heidenstam",
      "Karl Adolph Gjellerup",
      "Henrik Pontoppidan",
      "Carl Spitteler",
      "Knut Hamsun"
    ],

    yy1921: [
      "Anatole France",
      "Jacinto Benavente",
      "William Butler Yeats",
      "Władysław Reymont",
      "George Bernard Shaw",
      "Grazia Deledda",
      "Henri Bergson",
      "Sigrid Undset",
      "Thomas Mann",
      "Sinclair Lewis"
    ],

    yy1931: [
      "Erik Axel Karlfeldt",
      "John Galsworthy",
      "Ivan Bunin",
      "Luigi Pirandello",
      "Eugene O'Neill",
      "Roger Martin du Gard",
      "Pearl S. Buck",
      "Frans Eemil Sillanpää"
    ],
    yy1941: [
      "Johannes Vilhelm Jensen",
      "Gabriela Mistral",
      "Hermann Hesse",
      "André Gide",
      "T. S. Eliot",
      "William Faulkner",
      "Bertrand Russell",
      "Pär Lagerkvist"
    ],
    yy1951: [
      "Pär Lagerkvist",
      "François Mauriac",
      "Winston Churchill",
      "Ernest Hemingway",
      "Halldór Laxness",
      "Juan Ramón Jiménez",
      "Albert Camus",
      "Boris Pasternak",
      "Salvatore Quasimodo",
      "Saint-John Perse"
    ],
    yy1961: [
      "Ivo Andrić",
      "John Steinbeck",
      "Giorgos Seferis",
      "Jean-Paul Sartre",
      "Mikhail Sholokhov",
      "Shmuel Yosef Agnon",
      "Nelly Sachs",
      "Miguel Ángel Asturias",
      "Yasunari Kawabata",
      "Samuel Beckett",
      "Aleksandr Solzhenitsyn"
    ],
    yy1971: [
      "Pablo Neruda",
      "Heinrich Böll",
      "Patrick White",
      "Eyvind Johnson",
      "Harry Martinson",
      "Eugenio Montale",
      "Saul Bellow",
      "Vicente Aleixandre",
      "Isaac Bashevis Singer",
      "Odysseas Elytis",
      "Czesław Miłosz"
    ],
    yy1981: [
      "Elias Canetti",
      "Gabriel García Márquez",
      "William Golding",
      "Jaroslav Seifert",
      "Claude Simon",
      "Wole Soyinka",
      "Joseph Brodsky",
      "Naguib Mahfouz",
      "Camilo José Cela",
      "Octavio Paz"
    ],
    yy1991: [
      "Nadine Gordimer",
      "Derek Walcott",
      "Toni Morrison",
      "Kenzaburō Ōe",
      "Seamus Heaney",
      "Wisława Szymborska",
      "Dario Fo",
      "José Saramago",
      "Günter Grass",
      "Gao Xingjian"
    ],
    yy2001: [
      "V. S. Naipaul",
      "Imre Kertész",
      "J. M. Coetzee",
      "Elfriede Jelinek",
      "Harold Pinter",
      "Orhan Pamuk",
      "Doris Lessing",
      "J. M. G. Le Clézio",
      "Herta Müller",
      "Mario Vargas Llosa"
    ],
    yy2011: [
      "Tomas Tranströmer",
      "Mo Yan",
      "Alice Munro",
      "Patrick Modiano",
      "Svetlana Alexievich",
      "Bob Dylan",
      "Kazuo Ishiguro"
    ]
  },
  [Symbol.iterator]() {
    // Get all the authors in an array
    const genres = Object.values(this.NobelPrizeWinners);

   // console.log(genres);

    // Store the current genre and author index
    let currentAuthorIndex = 0;
    let currentGenreIndex = 0;

    return {
      // Implementation of next()
      next() {
        // authors according to current genre index
        const authors = genres[currentGenreIndex];

        // doNotHaveMoreAuthors is true when the authors array is exhausted.
        // That is, all items are consumed.
        const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
        if (doNothaveMoreAuthors) {
          // When that happens, we move the genre index to the next genre
          currentGenreIndex++;
          // and reset the author index to 0 again to get new set of authors
          currentAuthorIndex = 0;
        }

        // if all genres are over, then we need tell the iterator that we
        // can not give more values.
        const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
        if (doNotHaveMoreGenres) {
          // Hence, we return done as true.
          return {
            value: undefined,
            done: true
          };
        }

        // if everything is correct, return the author from the
        // current genre and incerement the currentAuthorindex
        // so next time, the next author can be returned.
        return {
          value: genres[currentGenreIndex][currentAuthorIndex++],
          done: false
        };
      }
    };
  }
};

for (const author of myFavouriteAuthors) {
  console.log(author);
}

//console.log(...myFavouriteAuthors);
