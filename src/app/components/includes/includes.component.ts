import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-includes',
  templateUrl: 'includes.component.html',
  styleUrls: ['includes.component.css'],
})
export class Includes {
  @Input()
  rootClassName: string = ''
  @Input()
  Label: string = 'Sed ut pespiciatis unde omnis'
  constructor() {}
}
