import { User } from './user';

export class Message {

  message: string;
  createdAt: Date;
  sender: User;


  // Constructors

  /** default constructor */
  constructor({ message, createdAt, sender }: any) {
    this.message = message;
    this.createdAt = createdAt;
    this.sender = sender as User; // new User(sender);
  }

}
