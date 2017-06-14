import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlantesPage } from '../pages/plantes/plantes';
import { HttpProvider } from './providers/httpProvider';
import { VideoModal } from '../pages/video/video';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlantesPage,
    VideoModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlantesPage,
    VideoModal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, HttpProvider]
})
export class AppModule {}
