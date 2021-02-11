import {AfterContentChecked, AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {
  AUTO_STYLE,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-expanding-timeline-card',
  templateUrl: './expanding-timeline-card.component.html',
  styleUrls: ['./expanding-timeline-card.component.scss'],
  animations: [
    trigger('expand', [
      state('false', style({ height: 300})),
      state('true', style({ height: 800})),
      transition('false => true', animate( '600ms ease-out')),
      transition('true => false', animate('600ms ease-in'))
    ])
  ]
})

export class ExpandingTimelineCardComponent implements AfterContentInit {
  @Input() responsibilities: string[];
  @ViewChild('collapsible') collapsibleElement: ElementRef;

  public expanded: boolean = false;
  public contentSize: any;

  ngAfterContentInit(): void{
    this.collapsibleElement.nativeElement.setAttribute('data-collapsed', 'true')
  }

  // This is the important part!

  collapseSection(element) {
    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(() => {
      element.style.height = this.collapsibleElement.nativeElement.scrollHeight + 'px';
      element.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(() => {
        element.style.height = this.collapsibleElement.nativeElement.scrollHeight + 'px';
      });
    });

    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
  }

  expandSection(element) {
    // have the element transition to the height of its inner content
    element.style.height = this.collapsibleElement.nativeElement.scrollHeight + 'px';

    // when the next css transition finishes (which should be the one we just triggered)
    function myFunc() {
      // remove this event listener so it only gets triggered once
      element.removeEventListener('transitionend', myFunc);
    }

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', myFunc);

    element.style.height = null;
  }

  toggleExpanded() {
    this.expanded = !this.expanded;

    var section = this.collapsibleElement;
    var isCollapsed = section.nativeElement.getAttribute('data-collapsed') === 'true';

    if(isCollapsed) {
      this.expandSection(section.nativeElement)
      section.nativeElement.setAttribute('data-collapsed', 'false')
    } else {
      this.collapseSection(section.nativeElement)
    }
  }

  ngAfterContentChecked(): void {
  //   console.log(document.querySelector('.section.collapsible').scrollHeight)
  //   if(document.querySelector('.section.collapsible').scrollHeight !== this.contentSize)
  //   {
  //     this.contentSize = document.querySelector('.section.collapsible').scrollHeight;
  //     var section = document.querySelector('.section.collapsible');
  //     var isCollapsed = section.getAttribute('data-collapsed') === 'true';
  //
  //     if(isCollapsed) {
  //       this.expandSection(section)
  //       section.setAttribute('data-collapsed', 'false')
  //     } else {
  //       this.collapseSection(section)
  //     }
  //   }
  }
}
