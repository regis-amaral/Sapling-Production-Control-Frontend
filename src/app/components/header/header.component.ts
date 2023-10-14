import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public PAGINA_ATUAL: string = 'Home';

  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.atualizarTitulo();
      }
    });
  }

  private atualizarTitulo() {
    const rotaAtual = this.router.url;
    switch (rotaAtual) {
      case '/': this.PAGINA_ATUAL = " \\  Home"; break;
      case '/specie': this.PAGINA_ATUAL = " \\  Espécies"; break;
      case '/genetic-material': this.PAGINA_ATUAL = " \\  Materiais Genéticos"; break;
      default: this.PAGINA_ATUAL = undefined;
    }
  }
}
