import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'Mayusculas',
})
export class MayusculaPipe implements PipeTransform{


transform(valor: string , Desicion: boolean): string {

    if(Desicion === false){
        return valor.toLowerCase();
    }else
    {
        return valor.toLocaleUpperCase(); 
    }
}


}