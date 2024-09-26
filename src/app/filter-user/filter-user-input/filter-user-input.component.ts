import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteModule,
} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filter-user-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterUserInputComponent),
      multi: true,
    },
  ],
  templateUrl: './filter-user-input.component.html',
  styleUrl: './filter-user-input.component.scss',
})
export class FilterUserInputComponent implements ControlValueAccessor {
  @Input() matAutocomplete!: MatAutocomplete;
  filterStr = '';

  onChange = (val: string) => val;
  onTouched = () => {};

  writeValue(str: string): void {
    this.filterStr = str;
    this.onChange(str);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.onTouched();
  }

  handleInput(e: Event) {
    this.filterStr = (e.target as HTMLInputElement).value;

    this.onChange(this.filterStr);
  }
}
