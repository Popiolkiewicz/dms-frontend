import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { OauthComponent } from './oauth/oauth.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        OauthComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }
