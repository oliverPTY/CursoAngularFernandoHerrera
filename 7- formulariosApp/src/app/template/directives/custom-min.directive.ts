import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector: '[CustomMin] [ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustonMinDirective,
        multi: true
    }]
})
export class CustonMinDirective implements Validators{


    @Input()  minimo!: number;

    constructor(){}


    validate(control: FormControl){
      const inputValue = control.value;
       
       if(inputValue < this.minimo){
           return {'customMin': true};
       }else
       {
           return null
       }

    //    return (inputValue < this.minimo)
    //          ?{'CustomMin': true}
    //          : null;
      
    }



}