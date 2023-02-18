import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src1: string = '/playground_assets/planical7012-ttpb.svg'
  @Input()
  image_src: string = '/playground_assets/hamburger-200h.png'
  @Input()
  image_alt1: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  BrandingLogo: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08e9141c-e9e9-4d51-994d-22f260b21c68/0f4ac702-51a5-4a68-8182-06e3f427edb8?org_if_sml=14251'
  constructor() {}
}
