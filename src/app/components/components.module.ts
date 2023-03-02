import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Mark } from './mark/mark.component'
import { Review } from './review/review.component'
import { Navbar } from './navbar/navbar.component'
import { Excludes } from './excludes/excludes.component'
import { Article } from './article/article.component'
import { Card } from './card/card.component'
import { Includes } from './includes/includes.component'
import { Accordion } from './accordion/accordion.component'

@NgModule({
  declarations: [
    Mark,
    Review,
    Navbar,
    Excludes,
    Article,
    Card,
    Includes,
    Accordion,
  ],
  imports: [CommonModule, RouterModule],
  exports: [Mark, Review, Navbar, Excludes, Article, Card, Includes, Accordion],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
