import { LoaderService } from './service/loader.service';
import { CovidWorldStatsService } from './api/covid-world-stats.service';
import { CovidIndiaStatsService } from './api/covid-india-stats.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { AllCountriesStatsComponent } from './all-countries-stats/all-countries-stats.component';
import { LoaderComponent } from './common/loader/loader.component';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { StateWiseStatsComponent } from './dashboard/state-wise-stats/state-wise-stats.component';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
import { HighchartsChartModule } from 'highcharts-angular';
import { CoronaHelpComponent } from './corona-help/corona-help.component';
import { PreventiveMeasuresComponent } from './help/preventive-measures/preventive-measures.component';
import { SymptomsComponent } from './help/symptoms/symptoms.component';
import { FaqComponent } from './help/faq/faq.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardMainComponent,
    AllCountriesStatsComponent,
    LoaderComponent,
    StateWiseStatsComponent,
    CoronaHelpComponent,
    PreventiveMeasuresComponent,
    SymptomsComponent,
    FaqComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    FusionChartsModule,
    HighchartsChartModule
  ],
  providers: [
    CovidIndiaStatsService,
    CovidWorldStatsService,
    LoaderService,
    NgxSpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
