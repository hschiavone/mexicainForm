import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DisplayEventPage } from './../pages/display-event/display-event';
import { AdminPage } from './../pages/admin/admin';
import { HTTP } from '@ionic-native/http';
import { Vibration } from '@ionic-native/vibration';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AdminPage,
    DisplayEventPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AdminPage,
    DisplayEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,

    BarcodeScanner,
    Vibration,
    HTTP,   
     InAppBrowser

  ]
})
export class AppModule {}