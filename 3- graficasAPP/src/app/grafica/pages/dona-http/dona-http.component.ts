
import { Component, OnInit } from '@angular/core';
import { GraficaService } from '../../services/grafica.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHTTPComponent implements OnInit {

  constructor(private serviceDona: GraficaService) { }

  ngOnInit(): void {
     //--FORMA TRADICIONAL (se hara mediante el service con RXjs)

    // this.serviceDona.GetGrafica().subscribe(data =>{
    //   const labels = Object.keys(data);
    //   const value = Object.values(data);

    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData = value;
    // })

    this.serviceDona.getUserRedesDona()
    .subscribe(data =>{
      this.doughnutChartLabels = data.labels;
      this.doughnutChartData = data.value
      
    })
  }


  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  public color: Color[] = [
    {
      backgroundColor:[
        '#0115FA',
        '#DC0901',
        '#01FA33',
        '#01FFF1',
        '#F56C04'
      ]
    }
  ]

}
