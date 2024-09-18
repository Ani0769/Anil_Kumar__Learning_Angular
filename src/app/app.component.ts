import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './shared/models/user';
import { JsonPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  User1: User = { id: 1, playerName: "Lewis Hamilton", cars: "Toyota", stadium: "Monza Circuit", isCarracer: true };
  User2: User = { id: 2, playerName: "Michael Schumacher", cars: "Ford", stadium: "Daytona International Speedway", isCarracer: true };
  User3: User = { id: 3, playerName: "Fernando Alonso", cars: "BMW", stadium: "Circuit de Monaco", isCarracer: true };
  User4: User = { id: 4, playerName: "Sebastian Vette", cars: "Mustang", stadium: "Le Mans", isCarracer: true };
  User5: User = { id: 5, playerName: "Dale Earnhardt Jr. ", cars: "Mercedes Benz", stadium: "Silverstone Circuit ", isCarracer: true };
  User6: User = { id: 6, playerName: "Anil", cars: "Audi", stadium: "Windsor stadium", isCarracer: false };

  UserList: User[] = [this.User1, this.User2, this.User3, this.User4, this.User5, this.User6];
}
