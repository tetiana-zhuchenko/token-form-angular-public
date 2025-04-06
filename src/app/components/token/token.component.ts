import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TTokenData } from '../../types/TTokenData';

@Component({
  selector: 'app-token',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './token.component.html',
  styleUrl: './token.component.css',
})
export class TokenComponent {
  token = input<TTokenData>();
}
