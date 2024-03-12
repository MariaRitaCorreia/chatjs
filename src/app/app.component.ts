import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  standalone: true,
  imports: [ CommonModule, RouterOutlet ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  meuCanvas:any;
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#meuCanvas`);
    new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],
        datasets: [
          {
            label: 'Titulo tabela',
            data: [85,72,86,81,84,86,94,60,62,41,58]
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
