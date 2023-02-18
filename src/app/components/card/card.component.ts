import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class Card {
  @Input()
  Name: string =
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'
  @Input()
  rootClassName: string = ''
  @Input()
  Icon: string = '/playground_assets/group%201316-200w.png'
  @Input()
  IconAlt: string = 'image'
  @Input()
  Header: string = 'Sima Mosbacher'
  Name: string = 'Name'
  constructor() {}
}
