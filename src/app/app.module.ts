import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { InfiniteSlideComponent } from './components/infinite-slide/infinite-slide.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillComponent } from './components/skill/skill.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ComponentsLayoutComponent } from './components/components-layout/components-layout.component';
import { CardComponent } from './components/components-layout/card/card.component';
import { NavComponent } from './components/components-layout/nav/nav.component';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    InfiniteSlideComponent,
    AboutComponent,
    FooterComponent,
    LayoutComponent,
    ContactComponent,
    SkillComponent,
    ExperienceComponent,
    ComponentsLayoutComponent,
    CardComponent,
    NavComponent,

  ],
  imports: [
    ParallaxModule,
    BrowserModule,
    AppRoutingModule,
    InlineSVGModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
