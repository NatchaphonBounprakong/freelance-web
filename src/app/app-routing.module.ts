import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/components-layout/card/card.component';
import { ComponentsLayoutComponent } from './components/components-layout/components-layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillComponent } from './components/skill/skill.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'skill',
        component: SkillComponent,
      }, {
        path: 'exp',
        component: ExperienceComponent,
      }
      , {
        path: 'comp',
        component: ComponentsLayoutComponent,
        children: [
          {
            path: 'card',
            component: CardComponent,
          },
          {
            path: '',
            redirectTo: 'card',
            pathMatch: 'full',
          },
        ]
      },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
