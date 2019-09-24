import {Component, HostBinding, OnInit} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;
  // votes: number;
  // title: string;
  // link: string;
  constructor() {
    this.article = new Article('Angular', 'http://angular.io');
    // this.link = 'http://angular.io';
    // this.votes = 3;
    // this.title = 'Angular';
    }

    voteUp(): boolean {
    console.log('voted up!');
    this.article.votes++;
    return false;
    }
    voteDown(): boolean {
    console.log(`voted down!`);
    this.article.votes--;
    return false;
    }
  ngOnInit() {
  }

}
