import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSaverService {

  @Input() statCardList = [
    {
      icon: "tram",
      title: "Numero Veicolo",
      amount: "2154AnZ",
      color: "primary"
    },
    {
      icon: "tag",
      title: "Linea",
      amount: "Linea 4",
      color: "primary"
    },
    {
      icon: "check",
      title: "km percorsi",
      amount: 654.21,
      color: "primary"
    }
  ];

  @Input() amountSaver = this.statCardList[2].amount;
  @Input() message = 0;

  private messageSource = new BehaviorSubject<number>(0);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  addKm()
  {
    //add km to km percorsi card
    setInterval(() => {
      for(let i = 0; i <= 0; i++)
      {
        this.statCardList[2].amount = +this.statCardList[2].amount + 1;
      }
    }, 3000);  //add 1km every 2minutes to total KM percorsi
  }

  //waiting function
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async transition() {
    while (true) {
      for(let i = 0; i <= 0; i++)
      {
        if(this.message == 50)
        {
          this.message = 50;  //reach top speed at 50km/h (to stop incrementation)
          await this.sleep(9000); //wait 9seconds before slowing down
          this.message = 0;
          await this.sleep(12000); //wait 12seconds at station
        }
        await this.sleep(90);  //increment speed every 0.09s because 50/4.5s = 0.09km/s (formula is maximumSpeed/maximumSpeedReachedInterval = incrementInterval)
        this.message = this.message + 1;
      }
    }
  }

  ngOnInit()
  {
    this.addKm();
  }

  changeMessage(message: number)
  {
    this.messageSource.next(message);
  }
}
