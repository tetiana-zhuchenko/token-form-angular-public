import { Component, signal } from '@angular/core';
import { TokenComponent } from '../../components/token/token.component';
import { TTokenData } from '../../types/TTokenData';

@Component({
  selector: 'app-tokens-page',
  standalone: true,
  imports: [TokenComponent],
  templateUrl: './tokens-page.component.html',
  styleUrl: './tokens-page.component.css',
})
export class TokensPageComponent {
  tokens = signal<TTokenData[]>([]);

  ngOnInit() {
    const storedTokens = this.getFromLocalStorage();
    this.tokens.set(storedTokens);
  }

  getFromLocalStorage(): TTokenData[] {
    if (typeof window !== 'undefined') {
      const existingData = localStorage.getItem('AngTokApp');
      if (existingData) {
        return JSON.parse(existingData);
      }
    }
    return [];
  }

  backClicked() {
    window.history.back();
  }
}
