export class Unidades{

    id : string;
    nomeuni : string;
    cnpj : string;
    endereco : string;    
    cidade : string;
    uf : string;
    bairro : string;
    nº : string;
    telefone1 : string;
    telefone2 : string;
    email : string;

    constructor(){   
    }

    // Dados do firebase
    setDados(obj : any){
        this.nomeuni = obj.nomeuni;
        this.cnpj = obj.cnpj;
        this.endereco = obj.endereco;
        this.cidade = obj.cidade;
        this.uf = obj.uf;
        this.bairro = obj.bairro;
        this.nº = obj.nº;
        this.telefone1 = obj.telefone1;
        this.telefone2 = obj.telefone2;
        this.email = obj.email;
    }
}