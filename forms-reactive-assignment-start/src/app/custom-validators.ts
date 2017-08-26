import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators{
    static forbiddenNames(control: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise<any>((resolve, reject)=>{
            setTimeout(() =>{
                if (control.value === 'Test'){
                   resolve({'nameIsForbidden': true});
                }else{
                    resolve(null);
                }            
            }, 1500);
        });
        return promise;
    }
}