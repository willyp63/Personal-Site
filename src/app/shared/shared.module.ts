import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterInnerComponent } from './components/footer-inner/footer-inner.component';
import { SkillChartComponent } from './components/skill-chart/skill-chart.component';

@NgModule({
  imports: [
    CommonModule,
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
