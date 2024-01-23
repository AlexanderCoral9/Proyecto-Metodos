import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HistoriaComponent } from './historia/historia.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { DopComponent } from './dop/dop.component';
import { FiveSComponent } from './five-s/five-s.component';
import { FormsModule } from '@angular/forms';
import { DapComponent } from './dap/dap.component';
import { VestudioMovimientosComponent } from './vestudio-movimientos/vestudio-movimientos.component';
import { ViiHerramientasReactivasComponent } from './vii-herramientas-reactivas/vii-herramientas-reactivas.component';
import { IxBalanceLineaComponent } from './ix-balance-linea/ix-balance-linea.component';
import { XPuntoOptimoComponent } from './x-punto-optimo/x-punto-optimo.component';
import { XiBalanceEnsamblajeComponent } from './xi-balance-ensamblaje/xi-balance-ensamblaje.component';
import { XiiLocalizacionEmpresasComponent } from './xii-localizacion-empresas/xii-localizacion-empresas.component';
import { XiiDistribucionPlantaComponent } from './xii-distribucion-planta/xii-distribucion-planta.component';
import { XivAdministracionMetodosComponent } from './xiv-administracion-metodos/xiv-administracion-metodos.component';
import { XvCondicionesLaboralesComponent } from './xv-condiciones-laborales/xv-condiciones-laborales.component';
import { XviErgonomiaComponent } from './xvi-ergonomia/xvi-ergonomia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HistoriaComponent,
    IndicadoresComponent,
    DopComponent,
    FiveSComponent,
    DapComponent,
    VestudioMovimientosComponent,
    ViiHerramientasReactivasComponent,
    IxBalanceLineaComponent,
    XPuntoOptimoComponent,
    XiBalanceEnsamblajeComponent,
    XiiLocalizacionEmpresasComponent,
    XiiDistribucionPlantaComponent,
    XivAdministracionMetodosComponent,
    XvCondicionesLaboralesComponent,
    XviErgonomiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
