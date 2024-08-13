import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: string; // @Input() marks avatar as settable property from outside
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {}
}
