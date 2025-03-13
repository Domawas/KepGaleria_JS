import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep{
    
    
    constructor(lista){
        this.aktIndex=2
        this.lista= []
        this.nagyKepElem = document.getElementsByClassName("kiemeltkep")[0];
        this.lista=lista
        new KiemeltKep(
            this.lista[this.aktIndex].kep,
            this.lista[this.aktIndex].cim,
            this.nagyKepElem
        );
    this.balElem = document.querySelector(".bal");
    this.jobbElem = document.querySelector(".jobb");
    this.esemenykezelok()
    }

    esemenykezelok(){
        this.balElem.addEventListener("click", function () {
            console.log("bal");
            this.aktIndex--;
            this.aktIndex < 0 ? ( this.aktIndex  = this.lista.length - 1) : (this.aktIndex = this.aktIndex);
            const NAGYKEP = new KiemeltKep(
              this.lista[this.aktIndex].kep,
              this.lista[this.aktIndex].cim,
              this.nagyKepElem
            );
          });
          this.jobbElem.addEventListener("click", function () {
            console.log("jobb");
            this.aktIndex++;
            this.aktIndex > this.lista.length - 1 ? (this.aktIndex = 0) : (this.aktIndex = aktIndex);
            const NAGYKEP = new KiemeltKep(
                this.lista[this.aktIndex].kep,
                this.lista[this.aktIndex].cim,
              this.nagyKepElem
            );
          });
    }

}


/* bal és a jobb gombbal léptessük a képeket */

/*1. meg kell fogni a gombokat */
/*2. hozzáadjuk az eseménykezelőket */



/*3. A lista következő elemével példányosítjuk a NAGYKEP-et */


