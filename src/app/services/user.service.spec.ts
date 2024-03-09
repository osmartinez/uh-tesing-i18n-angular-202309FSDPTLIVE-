import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from '../interfaces/user';
import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('la funcion toupper deberia convertir un texto a mayusculas',()=>{
    const resultado = service.toUpper("hola")
    expect(resultado).toBe("HOLA")
  })

  it('la funcion findAll deberia devolver un array con algun usuario',(done: DoneFn)=>{
    service.findAll().subscribe({
      next: (res)=> {
        const usuarios = res as User[]
        expect(usuarios.length).toBeGreaterThan(0)
        done()
      },
    })
  })

});
