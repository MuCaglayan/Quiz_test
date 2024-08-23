import { AnswerStateManager } from './click';
import { Answers } from './answers';

export class Score {
    private answerStateManager: AnswerStateManager;
    private answers: Answers;

    constructor(answerStateManager: AnswerStateManager, answers: Answers) {
        this.answerStateManager = answerStateManager;
        this.answers = answers;
    }

    calculateScore(): number {
        let score = 0;
        const totalQuestions = this.answers.options.length;

        for (let i = 0; i < totalQuestions; i++) {
            const selectedAnswer = this.answerStateManager.selectedAnswers[i];
            const correctAnswer = this.answers.options[i].correctAnswer;
            if (selectedAnswer === correctAnswer) {
                score += 10;
            }
        }

        return score;
    }
}
