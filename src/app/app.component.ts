import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'testing-i18n';


  public get idiomasDisponibles() : string[] {
    return this.translate.getLangs()
  }

  public get idiomaActual(): string{
    return this.translate.currentLang
  }

  cambiarIdioma(evento: Event){
    const elemento = evento.target as HTMLSelectElement
    this.translate.use(elemento.value)
  }


  constructor(private translate: TranslateService){
    translate.addLangs(['en', 'es','it']);
    translate.setDefaultLang('en');

    const browserLang : string = translate.getBrowserLang() ?? "en";
    translate.use(browserLang.match(/en|es|it/) ? browserLang : 'en');
  }
}
