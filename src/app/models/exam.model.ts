export class ExamModel {
    id: number;
    examDate: Date;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.id = 0;
        this.examDate = new Date();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}