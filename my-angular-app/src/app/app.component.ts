import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Router'ı import edin
import { RouterOutlet } from '@angular/router'; // RouterOutlet'ı import edin


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet] // RouterOutlet'ı imports array'ine ekleyin
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.navigate(['/start-quiz']); // Başlangıçta /start-quiz sayfasına yönlendirin
  }
}
 