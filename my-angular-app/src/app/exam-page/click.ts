export class AnswerStateManager {
    // Seçilen cevapları saklayan dizi
    selectedAnswers: (string | null)[];
    // Mevcut satır
    currentRow: number;
  
    constructor(totalQuestions: number) {
      this.selectedAnswers = Array(totalQuestions).fill(null);
      this.currentRow = 0;
    }
  
    // Mevcut satırdaki cevabı işaretle
    selectAnswer(answer: string): void {
      if (this.selectedAnswers[this.currentRow] === answer) {
        // Eğer zaten seçilmişse, seçimi kaldır
        this.selectedAnswers[this.currentRow] = null;
      } else {
        // Aksi takdirde, yeni cevabı işaretle
        this.selectedAnswers[this.currentRow] = answer;
      }
    }
  
    // Mevcut satırdaki cevabı döndür
    getSelectedAnswer(): string | null {
      return this.selectedAnswers[this.currentRow];
    }
  
    // Satır numarasını güncelle
    setCurrentRow(row: number): void {
      this.currentRow = row;
    }
  
    // Seçilen cevabın koyuluk durumunu kontrol et
    isSelectedAnswer(answer: string): boolean {
      return this.selectedAnswers[this.currentRow] === answer;
    }
  }
  