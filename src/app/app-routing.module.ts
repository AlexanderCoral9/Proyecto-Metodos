import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './historia/historia.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { DopComponent } from './dop/dop.component';
import { FiveSComponent } from './five-s/five-s.component';
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

const routes: Routes = [
  { path: '', component: HistoriaComponent },
  { path: 'indicadores', component: IndicadoresComponent },
  { path: 'dop', component: DopComponent },
  { path: 'dap', component: DapComponent },
  { path: 'fiveS', component: FiveSComponent },
  { path: 'estudioMovimientos', component: VestudioMovimientosComponent },
  { path: 'herramientasReactivas', component: ViiHerramientasReactivasComponent },
  { path: 'balanceLinea', component: IxBalanceLineaComponent },
  { path: 'puntoOptimo', component: XPuntoOptimoComponent },
  { path: 'balanceEnsamblaje', component: XiBalanceEnsamblajeComponent },
  { path: 'localizacionEmpresas', component: XiiLocalizacionEmpresasComponent },
  { path: 'distribucionPlanta', component: XiiDistribucionPlantaComponent },
  { path: 'administracionMetodos', component: XivAdministracionMetodosComponent },
  { path: 'condicionesLaborales', component: XvCondicionesLaboralesComponent },
  { path: 'ergonomia', component: XviErgonomiaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

