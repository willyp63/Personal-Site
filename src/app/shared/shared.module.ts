import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterInnerComponent } from './components/footer-inner/footer-inner.component';
import { SkillChartComponent } from './components/skill-chart/skill-chart.component';
import { RoutingModule } from '@app/routes/routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
  ],
  declarations: [
    FooterInnerComponent,
    SkillChartComponent,
  ],
  exports: [
    FooterInnerComponent,
    SkillChartComponent,
  ],
})
export class SharedModule { }
