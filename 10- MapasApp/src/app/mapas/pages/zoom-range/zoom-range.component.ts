import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl' 


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomlevel: number = 10
  center: [number,number] = [0 , 0]


  constructor() { }

  ngOnDestroy(): void {
   this.mapa.off('zoom', ()=>{});
   this.mapa.off('zoomend', ()=>{});
   this.mapa.off('move', ()=>{});
  }

  ngAfterViewInit(): void {

     
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -79.66489209909659,8.970299909063417],
      zoom: this.zoomlevel
     });

     this.mapa.on('zoom', (event)=>{
     this.zoomlevel = this.mapa.getZoom();
     });


     this.mapa.on('zoomend', (event)=>{

      if(this.mapa.getZoom()  > 18){
        this.mapa.zoomTo(18)
      }
      });

      //movimiento del mapa
      this.mapa.on('move' , (ev) =>{
       const target = ev.target;
        this.center = [target.getCenter().lng, target.getCenter().lat]
      })


  }

  zoomIn(){
    this.mapa.zoomIn();
    this.zoomlevel = this.mapa.getZoom();
  }

  zoomOut(){
    this.mapa.zoomOut();
    this.zoomlevel = this.mapa.getZoom();
  }

  zoomCambio(valor: string){
    this.mapa.zoomTo(Number(valor))
  }

}
