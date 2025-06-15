import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import languageColorsJson from './lang-colors.json';

@Component({
	selector: 'app-project-card',
	imports: [CommonModule],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
	@Input() project: string = 'Nerscylla/Nerscylla';

	description: string = '';
	languages: string[][] = [];
	license: string[] = [
		'no license available',
		'https://img.shields.io/badge/no_license-unavailable-red?style=for-the-badge',
	];

	languageColors: { [key: string]: string } =
		languageColorsJson.languageColors ?? languageColorsJson;

	ngOnInit() {
		this.fetchInfo();
	}

	async fetchInfo() {
		if (!this.project) return;
		const url_repo: string = `https://api.github.com/repos/${this.project}`;
		const url_languages: string = `https://api.github.com/repos/${this.project}/languages`;
		const url_license: string = `https://api.github.com/repos/${this.project}/license`;
		try {
			const response_repo = await fetch(url_repo);
			const response_languages = await fetch(url_languages);
			const response_license = await fetch(url_license);
			if (response_repo.ok) {
				this.description = (await response_repo.json()).description;
			} else {
				this.description = 'No description available';
			}
			if (response_languages.ok) {
				Object.keys(await response_languages.json()).forEach(
					(language) => {
						this.languages.push([
							language,
							`https://img.shields.io/badge/Language-${encodeURIComponent(
								language
							)}-${encodeURIComponent(
								this.languageColors[language] || 'green'
							)}?style=for-the-badge&logo=${encodeURIComponent(
								language
							)}&logoColor=${encodeURIComponent(
								this.languageColors[language]
							)}`,
						]);
					}
				);
			} else {
				this.languages = [
					[
						'no language',
						`https://img.shields.io/badge/Language-not_defined-red?style=for-the-badge`,
					],
				];
			}
			if (response_license.ok) {
				const licenseName: string = (await response_license.json())
					.license.name;
				this.license = [
					licenseName,
					`https://img.shields.io/badge/License-${licenseName.replace(
						/[- ]/g,
						'_'
					)}-green?style=for-the-badge`,
				];
			}
		} catch (error) {
			console.error(error);
		}
	}
}
