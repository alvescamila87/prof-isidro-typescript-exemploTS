export class Pessoa {
    // defino os atributos que caracterizam uma Pessoa
    private id: number;
    private name: string;
    private salario: number;

    public constructor(id: number, name: string, sa: number){
        this.id = id;
        this.name = name;
        this.salario = sa;
    }

    public exibir(): void {
        console.log("Pessoa = " + this.id + " / " + this.name + " / " + this.salario);
    }
}