import Cella from "./cella.js";
import { kartyalista } from "./lista.js";
class Jatekter{
    #db;
    #allapotLista;
    #elemLista;
    #lepes
    #kartyalista;

    constructor(){
        this.#allapotLista=["f","f","f","h","h","h","fe","fe","fe"];
        this.init();
        this.#kartyalista=kartyalista;
        

    };

    jatekTer(){}
    lepesKereses(){}
    init(){
        const szuloELEM=$("article");
        for (let index = 0; index < this.#allapotLista.length; index++) {
             new Cella(index,this.#allapotLista[index],szuloELEM);
            
        }


    };
    ellenorzes(){};



}
export default Jatekter