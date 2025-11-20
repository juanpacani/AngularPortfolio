import { Directive, Input } from "@angular/core";

@Directive()
export abstract class InputColorClass {
    @Input() color?: string;
}