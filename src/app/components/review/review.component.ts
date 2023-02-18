import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-review',
  templateUrl: 'review.component.html',
  styleUrls: ['review.component.css'],
})
export class Review {
  @Input()
  Quote: string =
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”'
  @Input()
  Author: string = 'Sima Mosbacher'
  @Input()
  rootClassName: string = ''
  @Input()
  AvatarSrc: string =
    'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3NzU5NDE3&ixlib=rb-4.0.3&w=200'
  @Input()
  Position: string = 'Manager'
  @Input()
  AvatarAlt: string = 'image'
  constructor() {}
}
