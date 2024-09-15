import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Anil-Kumar-Learning-Angular';
  aboutme = 'I am Anil Kumar '
  course = 'My course name is Computer programing'

}
