export class Todo {
    id: number = -1;
    titre: string = '';
    complete: boolean = false;
    constructor(valeurs: Object = {}) {
        Object.assign(this, valeurs);
        // this.id = (valeurs as Todo).id;
        // this.titre = (valeurs as Todo).titre;
        // this.complete = (valeurs as Todo).complete;
    }
}

