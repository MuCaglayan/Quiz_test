export class RowController {
  // Mevcut satırı tutan değişken
  currentRow: number = 0;
  // Maksimum satır sayısı
  maxRows: number;

  constructor(maxRows: number) {
    this.maxRows = maxRows;
  }

  // Bir sonraki satıra geç
  nextRow() {
    if (this.currentRow < this.maxRows - 1) {
      this.currentRow++;
    }
    // Eğer son satırdaysa, hiçbir şey yapma; başa dönme
  }

  // Bir önceki satıra geç
  previousRow() {
    if (this.currentRow > 0) {
      this.currentRow--;
    }
    // Eğer ilk satırdaysa, hiçbir şey yapma; son satıra dönme
  }
}
