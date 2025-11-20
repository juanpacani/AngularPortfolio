import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostListener, input, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NgFor, NgIf, } from "@angular/common";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputText } from '../../../directives/inputs/input-text';
import { UiStyleMapping } from '../../../../utilities/services/stylesMapping/style-mapping';
import { UiStyleRule } from '../../../../data/ui-constants';

@Component({
  selector: 'ui-select',
  imports: [InputText, NgIf, NgFor, FormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UiSelect),
    multi: true
  }],
  templateUrl: './select.html',
  styleUrl: './select.scss'
})
export class UiSelect implements ControlValueAccessor, AfterViewInit {

  @ViewChild('input') inputEl!: ElementRef<HTMLElement>;

  @HostListener('document:click', ['$event'])
  outerClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.active = false;
    }
  };
  
  @Input() transform?: string; //This option basicly allow to the consumer put the options at the side where he wants
  @Input() options?: string[];
  @Input() styles: UiStyleRule[] = [];
  @Input() placeholder?: string;
   
  @Input() type:
    | 'button'
    | 'email'
    | 'number'
    | 'password'
    | 'text' = 'text';

  value: any;
  active = false;

  @Output() selected = new EventEmitter<string>();

  inputWidth: number = 0;
  inputHeight: number = 0;

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef,
    private styleMapping: UiStyleMapping,
  ) {}

  ngAfterViewInit(): void {
    this.overrideStyles();
    this.inputWidth =  this.inputEl.nativeElement.offsetWidth || 3;
    this.inputHeight = this.inputEl.nativeElement.offsetHeight || 3;
  }

  onChange = (value: any) => { };
  onTouched = () => { };


  //Here starts the events from ControlValueAccesor
  writeValue(value: any): void {
    this.value = value;
  };
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  //Here ends The events from ControlValueAccesor

  choseValue(option: any) {    
    this.value = option;
    this.onChange(option);
    this.onTouched();
    this.active = false;    
    this.selected.emit(option);
  };

  overrideStyles() {
    const input = this.inputEl.nativeElement;
    if (!input) return;
    this.styleMapping.overrideStyles(this.renderer, this.styles, input);
  };
}
