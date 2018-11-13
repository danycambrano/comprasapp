import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: any = [{
    nombre: 'Telefonica',
    cif: 'B1234567',
    direcion: 'Paseo de la castellana, 100',
    cp: '28960',
    localidad: 'Mexico',
    provincia: 'Mexico',
    telefono: '9111111',
    email: 'danycambrano@gmail.com',
    contacto: 'Dany'
  },
{
  nombre: 'Iberland',
  cif: 'B1234567',
  direcion: 'Benito juarez, 100',
  cp: '28970',
  localidad: 'Mexico',
  provincia: 'Mexico',
  telefono: '9111111',
  email: 'danycambrano@gmail.com',
  contacto: 'José Pérez León'
}];

  constructor() { }

  getProveedores() {
    return this.proveedores;
  }
}
