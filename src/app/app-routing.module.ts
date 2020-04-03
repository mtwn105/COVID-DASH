import { AboutComponent } from './about/about.component';
import { FaqComponent } from './help/faq/faq.component';
import { SymptomsComponent } from './help/symptoms/symptoms.component';
import { PreventiveMeasuresComponent } from './help/preventive-measures/preventive-measures.component';
import { CoronaHelpComponent } from './corona-help/corona-help.component';
import { AllCountriesStatsComponent } from './all-countries-stats/all-countries-stats.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: DashboardMainComponent,
}, {
  path: 'world',
  component: AllCountriesStatsComponent
}, {
  path: 'help',
  component: CoronaHelpComponent
},{
  path: 'about',
  component: AboutComponent
}, {
  path: 'help',
  children: [
    {
      path: 'preventive-measures',
      component: PreventiveMeasuresComponent
    },
    {
      path: 'symptoms',
      component: SymptomsComponent
    }, {
      path: 'faq',
      component: FaqComponent
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
