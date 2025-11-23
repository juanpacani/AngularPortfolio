import { Directive, Input } from "@angular/core";

@Directive()
export abstract class DefaultDynamicIconAbstractClass {
    @Input() color?: string;
    abstract applyProperties(properties: Map<string, string>): void;
}