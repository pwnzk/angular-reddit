import { Component } from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Array<Article>;
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
    }

  constructor() {
    // super(props);
    this.articles = [
      new Article('Angular2', 'angular.io'),
    new Article('WIki', 'wiki.com'),
    new Article('Pornhb', 'Pornhub.com'),
    ];
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  // title = 'angular-reddit';
}
