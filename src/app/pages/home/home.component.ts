import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawo302: string = ' '
  raws84w: string = ' '
  rawlg5u: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('sassysam')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'sassysam',
      },
    ])
  }
}
