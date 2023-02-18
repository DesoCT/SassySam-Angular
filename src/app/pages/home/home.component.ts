import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawpp0h: string = ' '
  rawvtkc: string = ' '
  rawdnez: string = ' '
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
