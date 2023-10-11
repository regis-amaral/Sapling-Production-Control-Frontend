import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public bntInicio: string = 'Inicio'

  constructor() { }

  ngOnInit(): void {
  }
}
