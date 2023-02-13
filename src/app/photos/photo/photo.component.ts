import { Component, Input } from '@angular/core';

@Component({
    selector: 'pp-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
   @Input() url = '';
   @Input() description = '';
}