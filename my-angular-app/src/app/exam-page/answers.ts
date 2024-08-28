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
               choices: [ 'Mars','Jüpiter', 'Satürn'],
               correctAnswer: 'Jüpiter' },
            { question: 'Dünyanın en derin okyanusu hangisidir?',
               choices: ['Atlantik', 'Hint', 'Pasifik', 'Kuzey Buz Denizi'],
               correctAnswer: 'Pasifik' },
            { question: 'Hangi canlı daha ağırdır?',
               choices: ['Fil', 'Aslan', 'Zürafa', 'Mavi Balina' ],
               correctAnswer: 'Mavi Balina' },
            { question: 'Dünyanın en uzun nehri hangisidir?',
               choices: ['Amazon Nehri', 'Nil Nehri', 'Fırat Nehri', 'Yangtze Nehri' ],
               correctAnswer:'Nil Nehri' },
            { question: 'Mona Lisa tablosunu kim yapmıştır?',
               choices: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Michelangelo Buonarroti' ],
               correctAnswer:'Leonardo da Vinci' },
            { question: 'Sefiller kiabının yazarı kimdir?',
               choices: ['Fyodor Dostoevsky', 'William Shakespeare', 'Leo Tolstoy', 'Victor Hugo' ],
               correctAnswer:'Victor Hugo' },
           { question: 'Tarihte bilinen ilk yazı hangi uygarlık tarafından bulunmuştur?',
                choices: ['Mısır', 'Çin', 'Sümerler', 'Yunan'],
                correctAnswer: 'Sümerler' },
            { question: 'Avrupa Birliği’nin para birimi nedir?',
                choices: ['Dolar', 'Euro', 'Sterlin', 'Frank'],
                correctAnswer: 'Euro' }
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