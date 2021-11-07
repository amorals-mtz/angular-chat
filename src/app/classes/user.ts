export class User {

  firstName: string;
  lastName: string;
  photoUrl: string;


  // Constructors

  /** default constructor */
  constructor({ firstName, lastName, photoUrl }: any) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.photoUrl = photoUrl;
  }

}
