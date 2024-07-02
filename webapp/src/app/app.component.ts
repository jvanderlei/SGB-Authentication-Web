import { HomeComponent } from '../common/components/home/home.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'webapp';
}
