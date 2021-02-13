import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private http: HttpClient) { }

  getWorkExperience(){
    return this.http.get('assets/data/work-experience.json')
  }
}
