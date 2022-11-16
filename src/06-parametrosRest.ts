import {ROLES, User} from './01-enum';

const currentUser: User = {
  username: 'FaboBelMe',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if(currentUser.role == ROLES.ADMIN){
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log(rta);


/*Que pasa si yo quiero checkear no solo admin si no todo
  Puedo crear una función que haga eso.
  La idea es dejar de pasar tanto parámetro y volverlo REST param
*/

export const checkRole = (role1: string, role2: string) => {
  if(currentUser.role === role1){
    return true;
  }
  if(currentUser.role === role2){
    return true;
  }
  return false;
}


const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log(rta2);


//Utilizando un array como parámetro
export const checkRoleV2 = (role: string[]) => {
  if(role.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log(rta3);


//REST PARAMAS - PARÁMETROS RES
export const checkRoleV3 = (...role: string[]) => {
  if(role.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN);
console.log(rta4);


