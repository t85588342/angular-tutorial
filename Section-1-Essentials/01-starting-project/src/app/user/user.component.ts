import { Component, computed, Input, input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
// export class UserComponent {
//   @Input({ required: true }) avatar!: string; // @Input() marks avatar as settable property from outside
//   @Input({ required: true }) name!: string;

//   get imagePath() {
//     return 'assets/users/' + this.avatar;
//   }
//   onSelectUser() {}
// }

// Signals Approach
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {}
}
