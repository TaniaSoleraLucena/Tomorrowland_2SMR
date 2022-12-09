/***********************************************************/
/* Web de Tomorrowland                                    */
/* JS para index                                           */
/* autora: Tania Solera Lucena                             */
/* versión: 1.0                                            */
/* 8 de DIciembre de 2022                                  */
/***********************************************************/

/* JS QUE REGULA LA BARRA DE NAVEGACION                    */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  