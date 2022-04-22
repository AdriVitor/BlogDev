import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ReactComponent } from './react/react.component';
import { AngularComponent } from './angular/angular.component';
import { VueComponent } from './vue/vue.component';

const routes: Routes = [
  {path: "", component: CardsComponent},
  {path: "Javascript", component: JavascriptComponent},
  {path: "React", component: ReactComponent},
  {path: "Angular", component: AngularComponent},
  {path: "Vue", component: VueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
