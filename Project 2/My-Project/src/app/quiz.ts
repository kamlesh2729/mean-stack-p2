export class Quiz {
    constructor(
    public question: string,
    public answer: { Option:string, correct:boolean } [],
    ){}
}
