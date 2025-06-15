import { Component, Input } from '@angular/core';
import {
	simpleAngular,
	simpleTypescript,
	simplePhp,
	simplePython,
	simpleRust,
} from '@ng-icons/simple-icons';
import { diDiscordjsPlain, diCsharpPlain } from '@ng-icons/devicon/plain';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { data } from './skills.json';

@Component({
	selector: 'app-skill-card',
	imports: [NgIcon],
	providers: [
		provideIcons({
			simpleAngular,
			simpleTypescript,
			simplePhp,
			simplePython,
			simpleRust,
			diDiscordjsPlain,
			diCsharpPlain,
		}),
	],
	templateUrl: './skill-card.component.html',
	styleUrl: './skill-card.component.scss',
})
export class SkillCardComponent {
	@Input() skill: string = 'AngularJS';

	get icon(): string {
		return data[this.skill as keyof typeof data].icon;
	}

	get description(): string {
		return data[this.skill as keyof typeof data].description;
	}
}
