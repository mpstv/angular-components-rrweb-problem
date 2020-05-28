import { Component } from "@angular/core";
import { record } from "rrweb";
import { eventWithTime, listenerHandler } from "rrweb/typings/types";
import rrwebPlayer from "rrweb-player";

@Component({
  selector: "app-root",
  template: `
    <div class="content">
      <button (click)="startRecord()">Start record</button>
      <button (click)="stopAndReplayRecord()">Replay</button>
      <h1>Welcome to {{ title }}!</h1>
      <app-some-component></app-some-component>
    </div>
  `,
  styles: [
    `
      app-some-component {
        display: none;
      }
    `,
  ],
})
export class AppComponent {
  title = "angular-components-rrweb-problem";

  recordingSession: listenerHandler;
  events: eventWithTime[] = [];

  startRecord() {
    this.recordingSession = record({
      emit: (event) => {
        this.events.push(event);
      },
    });
  }

  stopAndReplayRecord() {
    if (this.recordingSession) {
      this.recordingSession();
      this.recordingSession = null;

      new rrwebPlayer({
        target: document.body,
        data: {
          width: 500,
          height: 500,
          autoPlay: true,
          events: this.events,
        },
      });
    }
  }
}
