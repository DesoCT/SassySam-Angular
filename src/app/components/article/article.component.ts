import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
})
export class Article {
  @Input()
  rootClassName: string = ''
  @Input()
  Button: string = 'Read ->'
  @Input()
  ButtonLink: string = ''
  @Input()
  Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
  @Input()
  Header: string = 'TechCrunch'
  constructor() {}
}
