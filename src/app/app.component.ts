import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [NavBarComponent, AboutMeComponent, ProjectCardComponent],
})
export class AppComponent {
	title = 'About: Nerscylla';
}
