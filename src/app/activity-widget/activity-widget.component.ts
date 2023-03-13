import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-widget',
  templateUrl: './activity-widget.component.html',
  styleUrls: ['./activity-widget.component.css']
})
export class ActivityWidgetComponent {
  activityStart: string;
  activityEnd: string;
  chosenActivity: string;

  onSubmit() {
    console.log('Form submitted!');
    console.log('activityStart:', this.activityStart);
    console.log('activityEnd:', this.activityEnd);
    console.log('chosenActivity:', this.chosenActivity);
  }
}
