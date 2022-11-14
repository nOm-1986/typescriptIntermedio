(()=> {
  type Hobby = 'Reading' | 'Writing' | 'Speaking';

  enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
  }

  type User = {
    username: string,
    role: ROLES,
    hobby: Hobby
  }

  const nicoUer: User = {
    username: 'faBelMe',
    role: ROLES.ADMIN,
    hobby: 'Speaking'
  }


})();
