import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'history-of-architecture';
  bgIcon: string | undefined;

  constructor(
  ) { }

  ngOnInit(): void {
    const bgIcon = localStorage.getItem('bgIcon');
    this.bgIcon = bgIcon ? bgIcon : 'light-mode';
    this.changeStyle();
  }

  toggleMode(): void {
    const bgIcon = this.bgIcon ? this.bgIcon : localStorage.getItem('bgIcon');
    this.bgIcon = bgIcon === 'light-mode' ? 'dark-mode' : 'light-mode'
    this.changeStyle();
    localStorage.setItem('bgIcon', this.bgIcon);
  }

  changeStyle(): void {
    const element = document.body;
    if (this.bgIcon === 'dark-mode') {
      element.style.background = '#222222';
      element.style.color = '#FFF5EE';
    } else {
      element.style.background = 'transparent';
      element.style.color = 'black';
    }
  }
}
