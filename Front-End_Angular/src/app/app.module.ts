import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavbodyComponent } from './backgroundbody/backgroundbody.component';
import { CardsComponent } from './cards/cards.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JavascriptService } from './javascript/javascript.service';
import { ReactComponent } from './react/react.component';
import { AngularComponent } from './angular/angular.component';
import { VueComponent } from './vue/vue.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavbodyComponent,
    CardsComponent,
    JavascriptComponent,
    ReactComponent,
    AngularComponent,
    VueComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, JavascriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
