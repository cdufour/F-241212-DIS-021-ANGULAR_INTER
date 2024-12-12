import { Component } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    title: string = 'Child Component'
}