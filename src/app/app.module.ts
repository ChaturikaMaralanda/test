import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LeftMenuComponent } from './core/left-menu/left-menu.component';
import { TopMenuComponent } from './core/top-menu/top-menu.component';
import { FooterComponent } from './core/footer/footer.component';
import { RightMenuComponent } from './core/right-menu/right-menu.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { PageHeaderComponent } from './core/page-header/page-header.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    TopMenuComponent,
    FooterComponent,
    RightMenuComponent,
    NavigationComponent,
    PageHeaderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
