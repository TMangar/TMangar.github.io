import {Component, OnInit} from '@angular/core';
import {WorkExperience} from "../../models/work-experience";
import {WorkExperienceService} from "../../services/work-experience.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  jobs: WorkExperience[];

  constructor(private workExperienceService: WorkExperienceService) {
  }

  ngOnInit(): void {
    this.workExperienceService.getWorkExperience().subscribe((result: WorkExperience[]) => {
      this.jobs = result;
    })
  }

}
