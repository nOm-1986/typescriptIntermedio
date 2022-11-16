
  type Hobby = 'Reading' | 'Writing' | 'Speaking';

  export enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
  }

  export type User = {
    username: string,
    role: ROLES,
    //hobby: Hobby
  }

  const faboUser: User = {
    username: 'faBelMe',
    role: ROLES.ADMIN,
    //hobby: 'Speaking'
  }
  //console.log(faboUser);


