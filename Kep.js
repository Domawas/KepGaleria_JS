export default class Kep {
  #eUt;
  #cim; /*privát adattag */
  constructor(eUt, cim, szulElem) {
    /*beállítja az adattagokat */
    this.#eUt = eUt;
    this.#cim = cim;
    this.szulElem = szulElem; /*publikus adattag */
    this.megjelenit();
  }
  /*kell-e getter es setter valójában (akarjuk e változtatni a képeket?)
    mivel a galériában a képek elérési utját nem akarjuk változtatni, ezért nem kell */

  megjelenit() {
    /*HTML kódban elhelyezzuk a képet az adataival */
    let html = `<div class="kep">
        <img src="${this.#eUt}" alt="${this.#cim}">
      </div>`;
    this.szulElem.innerHTML += html;
  }
}
