export default class Kep {
  #eUt;
  #cim; /*privát adattag */
  #index;
  constructor(eUt, cim, index, szulElem) {
    /*beállítja az adattagokat */
    this.#eUt = eUt;
    this.#cim = cim;
    this.#index = index;
    this.szulElem = szulElem; /*publikus adattag */
    this.megjelenit();
    this.kepElem = document.querySelector(".kep:last-child");
    this.kepElem.addEventListener("click", () => {
      console.log(this.#index);
      /*NINCS RETURN, ehelyett létrehozunk egy saját eseményt - neve: kivalaszt. A saját esényunkre tetszőleges osztályban feltudunk iratkozni */

      const e = new CustomEvent("kivalaszt", { detail: this.#index }); /*visszaadom az objektumnak a sorszámát */
      window.dispatchEvent(e);
    });
  }
  /*kell-e getter es setter valójában (akarjuk e változtatni a képeket?)
    mivel a galériában a képek elérési utját nem akarjuk változtatni, ezért nem kell */

  megjelenit() {
    /*HTML kódban elhelyezzuk a képet az adataival */
    let html = `<div class="kep">
        <img src="${this.#eUt}" alt="${this.#cim}">
      </div>`;
    /* innerHTML -html kodot illesztunk be de nem kapunk html dom objektumot
    Ezért használjuk insertAdjacentHTML  */
    this.szulElem.insertAdjacentHTML("beforeend", html);
  }
}
