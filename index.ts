// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!

import * as input from "readline-sync";
import { QuizQuestion } from "./quizQuestion";

// Functions to create:
    // main(): void => executes the logic of the program
    // administerQuiz(questions: string[]): string[] => returns the list of candidate answers
    // gradeAndPrint(questions: string[], answers: string[], key: string[]): number => returns numCorrect

function administerQuiz(questions: string[]): string[] {
    let answers: string[] = [];

    for (let i: number = 0; i < questions.length; i++) {
        let answer: string = input.question(questions[i]);
        answers.push(answer);
    }

    return answers;
}

function gradeAndPrint(questions: string[], answers: string[], key: string[]) : number {
    let numCorrect: number = 0;

    for (let i: number = 0; i < questions.length; i++) {
        console.log(`${i+1}) ${questions[i]}`);
        console.log(`Your answer: ${answers[i]}`);
        console.log(`Correct answer: ${key[i]}\n`);
    
        if (answers[i].toLowerCase() === key[i].toLowerCase()) {
            numCorrect++;
        }
    }

    return numCorrect;
}


function main() : void {
    let questions: string[] = [
        "True or false: 5 kilometer == 5000 meters?",
        "(5 + 3)/2 * 10 = ?",
        'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
        "Who was the first American woman in space?",
        "What is the minimum crew size for the ISS?"
      ];
      
    let key: string[] = ["true", "40", "Trajectory", "Sally Ride", "3"];

    let quizQuestions: QuizQuestion[] = [];
    
    quizQuestions.push(new QuizQuestion(questions[0], key[0]));
    // TODO: Add definitions for the rest of the questions...
    
    let answers: string[];
    
    let candidateName: string = input.question("What is your name? ");
    
    /* Administer the quiz, getting back candidate answers */
    answers = administerQuiz(questions);
    
    
    /* Generating the candidate report */
    let numCorrect: number = 0;
    
    console.log(`\nCandidate Name: ${candidateName}`);
    numCorrect = gradeAndPrint(questions, answers, key);
    // TODO: use quizQuestions array in gradeAndPrint
    
    let percentage: number = (numCorrect / questions.length) * 100;
    
    console.log(`>>> Overall grade: ${percentage}% (${numCorrect} out of ${questions.length}) <<<`);
    if (percentage >= 80) {
        console.log(">>> Status: PASSED <<<");
    } else {
        console.log(">>> Status: FAILED <<<");
    }
} /* main() */


main();