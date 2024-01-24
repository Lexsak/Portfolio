import { Component } from '@angular/core';

interface cardProject {
  title: string;
  desc: string;
  image: string;
  tag: string[];
  liveLink: string;
  githubLink: string;
}

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent {
  cardsProject: cardProject[] = [
    {
      title: 'CHOOSE-COLOR',
      desc: 'Website that will help you choose a color palette.',
      image: './assets/images/choose-color.png',
      tag: ['ANGULAR', 'TYPESCRIPT'],
      liveLink: 'https://lexsak.github.io/choose-color/',
      githubLink: 'https://github.com/Lexsak/choose-color',
    },
    {
      title: 'PREVAC',
      desc: 'Prevac home page.',
      image: './assets/images/prevac.png',
      tag: ['WORDPRESS'],
      liveLink: 'https://prevac.pl/',
      githubLink: '',
    },
    {
      title: 'RECIPE-BOOK',
      desc: 'Recipe book with login panel and fetching data.',
      image: './assets/images/recipe-book.png',
      tag: ['ANGULAR', 'FIREBASE', 'TYPESCRIPT', 'bootstrap'],
      liveLink: 'https://ng-recipe-book-e4619.web.app',
      githubLink: 'https://github.com/Lexsak/recipe-book-angular',
    },
  ];

  skills: string[] = [
    './assets/icons/html.svg',
    './assets/icons/css.svg',
    './assets/icons/js.svg',
    './assets/icons/typescript.svg',
    './assets/icons/angular.svg',
    './assets/icons/react.svg',
    './assets/icons/tailwindcss.svg',
    './assets/icons/bootstrap.svg',
    './assets/icons/wordpress.svg',
    './assets/icons/playwright.svg',
  ];

  tools: string[] = [
    './assets/icons/visual-studio-code.svg',
    './assets/icons/figma.svg',
    './assets/icons/github.svg',
  ];
}
