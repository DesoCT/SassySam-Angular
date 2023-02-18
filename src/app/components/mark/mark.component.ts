import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-mark',
  templateUrl: 'mark.component.html',
  styleUrls: ['mark.component.css'],
})
export class Mark {
  @Input()
  Label: string = 'Duis aute irure dolor in reprehenderit'
  constructor() {}
}
