import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  public initialNavLinks = [
    { id: 1, title: 'TERMS', href: '#' },
    { id: 2, title: 'PRIVACY', href: '#' },
    { id: 3, title: 'FAQ', href: '#' },
  ];
}
