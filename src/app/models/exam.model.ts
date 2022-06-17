export class ExamModel {
    id: number;
    name: string;
    date: Date;
    createdAt: Date;
    updatedAt: string;
    examinationOfficer: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.date = new Date();
        this.createdAt = new Date();
        this.updatedAt = '';
        this.examinationOfficer = '';
    }
}