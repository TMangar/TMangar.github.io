import {Component, OnInit} from '@angular/core';
import {WorkExperience} from "../models/work-experience";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  jobs: WorkExperience[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('assets/data/work-experience.json').subscribe((result: WorkExperience[]) => {
      this.jobs = result;
    })
  }

}
