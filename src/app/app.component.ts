import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	simpleDiscord,
	simpleGithub,
	simpleInstagram,
} from '@ng-icons/simple-icons';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [
		NavBarComponent,
		AboutMeComponent,
		ProjectCardComponent,
		SkillCardComponent,
		NgIcon,
	],
	providers: [provideIcons({ simpleDiscord, simpleGithub, simpleInstagram })],
})
export class AppComponent {
	title = 'About Nerscylla';

	constructor(private titleService: Title) {
		this.titleService.setTitle(this.title);
	}
}
