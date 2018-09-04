import { Injectable } from '@angular/core';
import {Widget} from '../app/Widget';

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {
  NAMES = ['John Smith', 'Ella Wison', 'Ted Miken', 'Sara Parker', 'Jasica Tylor', 'Ron Star', 'Shu Long', 'Egor Ivanov'];
  TITELS = ['Новый крутой заголовок', 'Лучшие новости', '5 интересных фактов', 'Все о листовой тле', 'Топ 10 заголовков',
    'Все о новом чём-то там'];

  private generateImage(): string {
    return '/assets/avatars/' + (1 + Math.floor(Math.random() * 9)) + '.png';
  }

  generateWidget(): Widget {
    return {
      creater: this.NAMES[Math.floor(Math.random() * this.NAMES.length)],
      favorite: !!(Math.floor(Math.random() * 2)),
      header: this.TITELS[Math.floor(Math.random() * this.TITELS.length)],
      mainImgs: [this.generateImage(), this.generateImage(), this.generateImage()],
      observe: {
        imgs: [this.generateImage(), this.generateImage(), this.generateImage()],
        total: 3 + Math.floor(Math.random() * 9996)
      }
    };
  }

  constructor() { }
}
