import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name: 'Vuela',
})
export class VolarHeroe implements PipeTransform{


    transform (Valor:boolean){

        if(Valor===true ){

            return 'Vuela'

        }else{
            return 'No Vuela'
        }

    }

    
    
}