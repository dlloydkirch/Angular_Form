import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any>{
    return this.http.post('https://putsreq.com/cquTRhUhb0DnvFfITtQl', userSettings);
    //return of(userSettings);



    //putsreq.com code
    //var parsedBody = JSON.parse(request.body);

    //response.body = parsedBody;

  }
}
