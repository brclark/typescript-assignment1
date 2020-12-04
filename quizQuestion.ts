export class QuizQuestion {
    question: string;
    correctAnswer: string;

    constructor(question: string, correctAnswer: string) {
        this.question = question;
        this.correctAnswer = correctAnswer;
    }

    //grade(userAnswer: string) : boolean
}