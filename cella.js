class Cella {
  #adat;
  #id;
  #divElem;
  constructor(id, adat, szuloELEM) {
    this.#adat = adat;
    this.id = id;
    this.szuloELEM = szuloELEM;

    if (adat == "f") {
      szuloELEM.append(
        `<div class=sakk> <img src="./kepek/feher.jpg" alt="kép"> </div>`
      );
    } else if (adat == "h") {
      szuloELEM.append(
        `<div class=sakk> <img src="./kepek/hatter.jpg" alt="kép"> </div>`
      );
    } else if (adat == "fe") {
      szuloELEM.append(
        `<div class=sakk> <img src="./kepek/fekete.jpg" alt="kép"> </div>`
      );
    }
  }

  setAllapot() {}
  szinBeallit() {}
  kattintasTrigger() {}
}

export default Cella;
