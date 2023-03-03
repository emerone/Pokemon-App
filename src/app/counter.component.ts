
import { Component, Input } from "@angular/core";

@Component({
    selector: "",
    template: `
    <div style="width: max-content; margin: 1rem auto;display:grid;">
        <p>Le compte est de : {{count}}</p>
        <div style="margin:0 auto; display:flex; gap:1rem;">
            <button (click)="down()">-</button>
            <button (click)="up()">+</button>
        </div>
    </div>
    `,
    styles: [""]
})
export class AppCounter {
    @Input("value")
    count: number = 0

    @Input()
    step: number = 1;

    up(){
        this.count = this.count + this.step
    }
    down(){
        this.count = this.count - this.step
    }
}