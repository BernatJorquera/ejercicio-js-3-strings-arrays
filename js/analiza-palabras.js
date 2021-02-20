const analizaPalabras = palabras => {
  console.log("#######");
  for (let i in palabras) {
    palabra = palabras[i];
    let deletreo = "";
    for (let j in palabra) {
      if (j == 0) {
        deletreo += `${palabra[j].toLowerCase()}`;
      } else {
        deletreo += `-${palabra[j].toLowerCase()}`;
      }
    }
    esPar = (palabra.length % 2 === 0) ? "" : "im";
    esMayus = (palabra.charAt(0) === palabra.charAt(0).toUpperCase()) ? "" : "no ";
    contieneBle = (palabra.search("ble") !== -1) ? "sí" : "no";
    console.log(`Palabra ${i}: ${palabra}`);
    console.log(`Nº de caracteres: ${palabra.length}`);
    console.log(`Deletreo: ${deletreo}`);
    console.log(`La palabra es ${esPar}par y ${esMayus}empieza por mayúscula`);
    console.log(`La palabra ${contieneBle} contiene "ble"`);
    console.log("#######");
  }
}
