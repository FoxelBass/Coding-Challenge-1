/*CHALLENGE 1*/

/*1) REGISTRO.
  Vamos a construir un programa que permita al usuario registrarse en nuestra aplicacion. Para ello, en primer lugar vamos a
  mostrar un mensaje que le de la bienvenida al usuario y le pregunte si desea registrarse (PISTA: recuerden que habia un metodo del 
  navegador que permitia hacer este tipo de consultas al usuario, devolviendo true o false segun el caso).
  En caso de que el usuario acepte registrarse, le vamos a pedir que ingrese su nombre de usuario en primer lugar. El nombre de usuario
  tiene que tener por lo menos 3 caracteres y no va a ser case sensitive, por lo que lo vamos a almacenar en minusculas, independientemente
  de como lo ingrese el usuario. Agregar la validacion necesaria para que en caso de que el usuario no cumpla con las concidiones, 
  se muestre un mensaje de error.
  Si el nombre de usuario es ingresado correctamente, le vamos a pedir al usuario que ingrese una contrasena, la que tiene que tener
  por lo menos 6 caracteres. La contrasena tiene que ser case sensitive, por lo que se respetan las mayusculas y minusculas segun lo ingrese
  el usuario.
  En caso de que la contrasena no cumpla con el requisito anterior, se debe mostrar un mensaje de error. De lo contrario, se debe mostrar un
  mensaje de exito informando al usuario que se completo el registro. (OTRA PISTA: Para ver como validar la longitud de un string, pueden ver el siguiente
    enlace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length ) */

let userRegister, userPassword, registred;

const welcome = confirm(
  `Bienvenido al Sistema. 
  Haz click en CONFIRMAR si deseas registrarte.`
);

do {
  if (welcome) {
    if (!userRegister) {
      userRegister = prompt("Ingresa un nombre de al menos 3 caracteres");
    }
    if (userRegister.length > 3) {
      userRegister = userRegister.toLowerCase();

      userPassword = prompt("Ingresa una contraseña de al menos 6 caracteres");

      if (userPassword.length >= 6) {
        alert("Te has registrado correctamente!");
        registred = true;
      } else {
        alert("La contraseña debe ser de al menos 6 caracteres");
        userPassword = null;
      }
    } else {
      alert("El nombre de usuario debe ser de al menos 3 caracteres");
    }
  } else {
    alert("Te esperamos en otro momento!");
  }
} while (welcome && (!userPassword || !userRegister));

/*2) LOGIN
  Partiendo de la base del punto anterior, en caso de que se complete el registro, vamos a mostrarle un mensaje al usuario preguntandole
  si desea iniciar sesion. En caso de que el usuario haga click en aceptar, vamos a pedirle que ingrese su nombre de usuario y luego su contrasena
  Si alguno de los datos ingresados no coinciden con los informados al momento del registro, le vamos a mostrar un mensaje de error al usuario.
  Caso contrario, le mostraremos un mensaje que diga que el login fue exitoso. Recordar el tema de normalizar los inputs en caso de que sea necesario,
  para poder hacer la comparacion contra los valores almacenados.
  */

let loginUser, loginPass;

if(registred){
  const start = confirm("Bienvenido! ¿Deseas iniciar sesión?");

  do {
    if (start === true){ 
      do {
        if (!loginUser) {
          loginUser = prompt("Ingresa tu nombre de usuario");
          loginUser = loginUser.toLowerCase();

         /*  if(!loginUser === null){
              start = false;
          } */

          if (loginUser === userRegister) {
          } else {
            alert("El usuario no coincide con el registro. Intente de nuevo");
            loginUser = null;
          }
        }
      } while (loginUser != userRegister);
      do{
                if (!loginPass) {
                    loginPass = prompt("Ingresa tu contraseña de usuario");
                    loginPass = loginPass.toLowerCase();

                if (loginPass === userPassword) {
                    alert("Te has logueado correctamente!");
                } else {
                    alert("La contraseña no coincide con el registro. Intente de nuevo");
                    loginPass = null;
                }
            }
      }while(loginPass != userPassword);  
    } else{
      alert("Te esperamos en otro momento!");
    }
  } while (start && (!loginUser || !loginPass));
}
/*3) EXTRA
  Tomando los ejercicios anteriores, los vamos a modificar para que, en el caso de que cualquiera de las validaciones anteriores arroje un error
  el programa vuelva a pedir al usuario la informacion solicitada en ese punto. Tener en cuenta que el usuario podra dar por terminado el programa
  tocando el boton de cancelar al momento en que se le pide ingresar un dato o se le consulta si desea registrarse o iniciar sesion.
*/
