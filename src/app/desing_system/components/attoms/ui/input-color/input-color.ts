import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Palette } from '../../icons/palette/palette';

@Component({
  selector: 'ui-input-color',
  imports: [Palette],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputColor),
    multi: true
  }],
  templateUrl: './input-color.html',
  styleUrl: './input-color.scss'
})
export class InputColor implements ControlValueAccessor {
  value: string = '#000000';

  private onChange = (value: any) => { };
  onTouched = () => { };

  onInput(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChange(newValue); // informa al padre    
  }

  // Métodos requeridos por ControlValueAccessor
  writeValue(value: any): void {
    this.value = value || '#000000';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

    this.onTouched = fn;
  }

}
