import IUsers from "../../interfaces/users/users.interface";
class Users implements IUsers {
  username: string[];
  password: string[];
  constructor() {
    this.username = ['', ''];
    this.password = ['', ''];
  };
  administratorUser(): any {
    return cy.login(this.username[1], this.password[1]);
  };
};
export default Users;
