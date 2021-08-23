import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos Personalizados
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { VentasModule } from './ventas/ventas.module';


//Cambiar el local del APP
import localES from '@angular/common/locales/es-PA';
import localja from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common'

registerLocaleData(localES);
registerLocaleData(localja);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRoutingModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,useValue:'es-PA'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
