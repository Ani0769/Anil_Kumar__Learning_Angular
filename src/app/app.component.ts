import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './shared/models/user';
import { JsonPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Counter1: Counter = { id: 1, playerName: "Lewis Hamilton", cars: "Toyota", stadium: "Monza Circuit", isCarracer: true };
  Counter2: Counter = { id: 2, playerName: "Michael Schumacher", cars: "Ford", stadium: "Daytona International Speedway", isCarracer: true };
  Counter3: Counter = { id: 3, playerName: "Fernando Alonso", cars: "BMW", stadium: "Circuit de Monaco", isCarracer: true };
  Counter4: Counter = { id: 4, playerName: "Sebastian Vette", cars: "Mustang", stadium: "Le Mans", isCarracer: true };
  Counter5: Counter = { id: 5, playerName: "Dale Earnhardt Jr. ", cars: "Mercedes Benz", stadium: "Silverstone Circuit ", isCarracer: true };
  Counter6: Counter = { id: 6, playerName: "Anil", cars: "Audi", stadium: "Windsor stadium", isCarracer: false };

  counterList: Counter[] = [this.Counter1, this.Counter2, this.Counter3, this.Counter4, this.Counter5, this.Counter6];
}
