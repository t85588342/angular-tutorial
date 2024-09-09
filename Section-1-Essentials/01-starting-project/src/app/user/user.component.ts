import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
  signal,
} from '@angular/core';

import { type User } from './user.model';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string; // @Input() marks avatar as settable property from outside
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();
  // select = output<string>(); // internally uses EventEmitter

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// Signals Approach
// export class UserComponent {
//   avatar = input.required<string>();
//   name = input.required<string>();

//   imagePath = computed(() => {
//     return 'assets/users/' + this.avatar();
//   });

//   onSelectUser() {}
// }
