import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrentuserService {
  userSubject=new Subject<string>();
}
