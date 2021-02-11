import {Component, ElementRef, Input, ViewChild, AfterViewInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, AUTO_STYLE
} from '@angular/animations';

const ExtraSpacing = 25;

@Component({
  selector: 'app-expanding-timeline-card',
  templateUrl: './expanding-timeline-card.component.html',
  styleUrls: ['./expanding-timeline-card.component.scss'],
  animations: [
    trigger('expand', [
      state('true', style({
        height: '{{expandedHeight}}'
      }), {params: {expandedHeight: AUTO_STYLE}}),
      state('false', style({
        height: '{{collapsedHeight}}'
      }), {params: {collapsedHeight: AUTO_STYLE}}),
      transition('true => false', [
        animate('0.5s ease-out')
      ]),
      transition('false => true', [
        animate('0.5s ease-in')
      ]),
    ]),
  ]
})

export class ExpandingTimelineCardComponent implements AfterViewInit {
  @Input() responsibilities: string[];
  @ViewChild('big') big: ElementRef;
  @ViewChild('small') small: ElementRef;

  public expanded: boolean = false;
  public expandedHeight: string;
  public collapsedHeight: string;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.collapsedHeight = this.small.nativeElement.scrollHeight + ExtraSpacing + 'px';
      this.expandedHeight = this.big.nativeElement.scrollHeight + ExtraSpacing + 'px';
    }, 25)
  }

  public getExpandedHeight() {
    return this.big.nativeElement.scrollHeight + ExtraSpacing + 'px';
  }

  public getCollapsedHeight() {
    return this.small.nativeElement.scrollHeight + ExtraSpacing + 'px';
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
