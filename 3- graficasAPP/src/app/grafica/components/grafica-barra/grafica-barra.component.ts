import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {


  @Input() tipoGrafica: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  @Input() barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit(): void {

    if(this.tipoGrafica){
      this.barChartType = 'horizontalBar';
    }
  }


}
