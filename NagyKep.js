import KiemeltKep from "./KiemeltKep.js";

export default class NagyKep {
    constructor(lista) {
        this.aktIndex = 2;  
        this.lista = lista; 
        this.nagyKepElem = document.getElementsByClassName("kiemeltkep")[0];


        new KiemeltKep(
            this.lista[this.aktIndex].kep,
            this.lista[this.aktIndex].cim,
            this.nagyKepElem
        );

        this.balElem = document.querySelector(".bal");
        this.jobbElem = document.querySelector(".jobb");

        this.esemenykezelok();
    }

    esemenykezelok() {
        
        this.balElem.addEventListener("click", () => { 
            console.log("bal");
            this.aktIndex--;  
            if (this.aktIndex < 0) {
                this.aktIndex = this.lista.length - 1; 
            }

          
            new KiemeltKep(
                this.lista[this.aktIndex].kep,
                this.lista[this.aktIndex].cim,
                this.nagyKepElem
            );
        });

        
        this.jobbElem.addEventListener("click", () => { 
            console.log("jobb");
            this.aktIndex++;  
            if (this.aktIndex >= this.lista.length) {
                this.aktIndex = 0;  
            }

            
            new KiemeltKep(
                this.lista[this.aktIndex].kep,
                this.lista[this.aktIndex].cim,
                this.nagyKepElem
            );
        });
    }
}
