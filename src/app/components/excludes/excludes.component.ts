import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-excludes',
  templateUrl: 'excludes.component.html',
  styleUrls: ['excludes.component.css'],
})
export class Excludes {
  @Input()
  Label: string = 'Sed ut pespiciatis unde omnis'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
