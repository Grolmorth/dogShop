
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('admin') === 'true') { return true }
    else {
      alert("Brak dostępu")
      return false;
    }
  }


}
