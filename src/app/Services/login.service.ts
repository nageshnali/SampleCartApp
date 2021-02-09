import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  readonly APIURL: string = "http://nag.mycoreapp.com/api/";
  errorMessage: any = '';
  constructor(private http: HttpClient) { }
  VerifyUser(loginCode: string, loginID: string): Observable<string> {
    return this.http.get<string>(this.APIURL + "User/ValidateUserCode?loginID=" + loginID + "&loginCode=" + loginCode)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  handleError(error: any) {
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      this.errorMessage = error.error.message;
    }
    else {
      // Get server-side error
      this.errorMessage = 'Error Code: ${ error.status } \nMessage: ${ error.message }';
    }
    window.alert(this.errorMessage);
    return throwError(this.errorMessage);
  }
}
