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

  //incremented in app.component.ts' route navigator function because the incrementation must happen at the exact time of the route change
  //otherwise, the slight delays between the two times accumulate and after some cycles, the delay accumulation makes the browser compensate
  //causing the value incrementation to not respect the timeouts assigned in the code
  @Input() amountSaver = this.statCardList[2].amount; 
  @Input() message = 0;

  private messageSource = new BehaviorSubject<number>(0);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  //waiting function
  // sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  // i: number;
  // async addKm()
  // {
  //     for(this.i = 0; this.i <= 0; this.i++)
  //     {
  //       await this.sleep(120000);
  //       this.statCardList[2].amount = +this.statCardList[2].amount + 1;
  //       this.i = -1;
  //     }
  // }

  ngOnInit()
  {
    //this.addKm();
  }
}
