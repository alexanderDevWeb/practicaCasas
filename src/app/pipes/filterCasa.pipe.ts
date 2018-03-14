import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({
  name: 'filterCasa'
})
export class FilterCasaPipe implements PipeTransform {
  /**
   *Filtro para buscar en una colección de casas
   *no es case sensitive
   * @param casas : Casa[]
   * @param searchText : string con la casa o direccion
   */
  transform(
    casas: Casa[],
    searchText: string,
    ch: boolean = false
  ): Casa[] {

    if (!casas) {
      return [];
    }


    // // Si solo está marcado el checked
    // if (!searchText && ch) {
    //   return recetario.filter(it => {
    //     if (it.isGlutenFree) {
    //       return it.nombre.toLowerCase();
    //     }
    //   });
    // }

    // Si no hay criterio devuelve el array tal cual
    if (!searchText) {
      console.log('Filtrando 2!');
      return casas;
    }

    searchText = searchText.toLowerCase();

    return casas.filter(it => {
      // Si es gluten free añado y está checeado añado #
      /* if (ch) {
        if (it.isGlutenFree) {
          return it.nombre.toLowerCase().includes(searchText);
        }
      } else {
        return it.nombre.toLowerCase().includes(searchText);
      } */
      const crit = it.nombre + it.direccion;

      return crit.toLowerCase().includes(searchText);

    });
  }
}
