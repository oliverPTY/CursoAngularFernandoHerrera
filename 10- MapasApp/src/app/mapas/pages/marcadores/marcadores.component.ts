import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl' 


interface marcadorColor {
  color: string,
  marker?: mapboxgl.Marker,
  centro?: [number , number]
}


@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomlevel: number = 15
  center: [number,number] = [-79.66489209909659,8.970299909063417]

  //Arreglo de marcadores

  marcadores:marcadorColor[] = [];
   
  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -79.66489209909659,8.970299909063417],
      zoom: this.zoomlevel
     });
     

     this.leerMarcadores();
    //  const marker = new mapboxgl.Marker()
    //  .setLngLat(this.center)
    //  .addTo(this.mapa)
  }


  irMarcador(marker: mapboxgl.Marker){

   
    this.mapa.flyTo({
      center: marker.getLngLat()
    })
    
  }


  //--Agregar Nuevo Marcador
  agregarMarcados(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const newMarker = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
    .setLngLat(this.center)
    .addTo(this.mapa)

    this.marcadores.push(
      {
        color: color,
        marker: newMarker
      }
    )


    newMarker.on('dragend', ()=>{
      this.guardarMarcadoresLocalStorage();
      
    })

    this.guardarMarcadoresLocalStorage();
    
  }


  //-Guardar en localStorage
  guardarMarcadoresLocalStorage(){

    const lngLatArray: marcadorColor[] = []
   this.marcadores.forEach(m=>{
     const color = m.color;
     const {lng , lat} = m.marker!.getLngLat();
     
     
     lngLatArray.push({
      color: color,
      centro: [lng, lat]
    })
   
    })

    localStorage.setItem('marcadores',JSON.stringify(lngLatArray) )

   
  }




  //-LEER DE LOCALSOTORAGE
  leerMarcadores(){
    if(!localStorage.getItem('marcadores')){
      return
    }
    const lnglatArr: marcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    lnglatArr.forEach(m=>{
      const newMark = new mapboxgl.Marker({
        color: m.color,
        draggable: true,
      })
      .setLngLat(m.centro!)
      .addTo(this.mapa)


      this.marcadores.push({
        marker: newMark,
        color: m.color 
      })
      
      newMark.on('dragend', ()=>{
        this.guardarMarcadoresLocalStorage();
        
      })

    })

   
  }


  //------------------Borrar marcador----
  borrarMarcador(i: number){
  this.marcadores[i].marker?.remove();
  this.marcadores.splice(i,1);
  this.guardarMarcadoresLocalStorage();
  }

}
