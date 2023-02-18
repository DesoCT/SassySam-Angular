import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css'],
})
export class Accordion {
  @Input()
  text2: string = 'Nemo enim ipsam voluptatem quia voluptas'
  @Input()
  text1: string =
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud'
  @Input()
  text: string = 'Aliquam quaerat voluptatem'
  @Input()
  text4: string = 'Magnam aliquam quaerat voluptatem'
  @Input()
  text5: string =
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud'
  @Input()
  text3: string =
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
