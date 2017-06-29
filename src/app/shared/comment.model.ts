export class Comment {
    public userName: string;
    public points: number;
    public text: string;
    public date: Date;

    constructor(userName:string, points: number, text: string, date: Date) {
        this.userName = userName;
        this.points = points;
        this.text = text;
        this.date = date;
    }
}