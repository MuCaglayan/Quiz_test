import { RowController } from "./row_controller";

export class Answers {
    // options özelliği, her sorunun seçenekleri ve doğru cevabını içeren bir dizi
    options: { choices: string[], question: string, correctAnswer: string }[];
    rowController: RowController;
    message: string = '';

    constructor() {
        // Her soru için bir obje dizisi tanımlanıyor
        this.options = [
            { question: 'Türkiye’nin başkenti neresidir?',
              choices: ['İstanbul', 'Ankara', 'İzmir', 'Antalya' ],
              correctAnswer: 'Ankara' },
            { question: 'Dünyanın en yüksek dağı hangisidir?',
              choices: ['Everest', 'Kilimanjaro', 'McKinley', 'Elbrus'],
              correctAnswer: 'Everest' },
            { question: 'Hangi gezegen Güneş Sistemi’ndeki en büyük gezegendir?',
              choices: [ 'Jüpiter', 'Satürn'],
              correctAnswer: 'Jüpiter' },
            { question: 'Dünyanın en derin okyanusu hangisidir?',
              choices: ['Atlantik', 'Hint', 'Pasifik', 'Kuzey Buz Denizi'],
              correctAnswer: 'Kuzey Buz Denizi' }
        ];

        // RowController'ı, soru sayısına göre başlatıyoruz
        this.rowController = new RowController(this.options.length);
    }

    // Mevcut satırdaki belirli bir seçeneği döndüren fonksiyon
    getElement(col: number): string {
        return this.options[this.rowController.currentRow].choices[col];
    }

    // Mevcut satırdaki sorunun metnini döndüren fonksiyon
    getQuestion(): string {
        return this.options[this.rowController.currentRow].question;
    }

    // Mevcut satırdaki doğru cevabı döndüren fonksiyon
    getCorrectAnswer(): string {
        return this.options[this.rowController.currentRow].correctAnswer;
    }
}