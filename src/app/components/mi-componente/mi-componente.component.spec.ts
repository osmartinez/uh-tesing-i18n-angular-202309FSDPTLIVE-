import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponenteComponent } from './mi-componente.component';
import { By } from '@angular/platform-browser';

describe('MiComponenteComponent', () => {
  let component: MiComponenteComponent;
  let compiled: HTMLElement
  let fixture: ComponentFixture<MiComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiComponenteComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia tener una variable que inicialmente este en estado apagado', ()=>{
    expect(component.estado).toBe("apagado")
  })

  it('deberia cambiar el estado a encendido si ejecuto la funcion cambiar()',()=>{
    component.cambiar()
    expect(component.estado).toBe("encendido")
  })

  it('deberia permutar el estado de apagado a encendido y de encendido a apagado si ejecuto la funcion cambiar()',()=>{
    component.cambiar()
    expect(component.estado).toBe("encendido")
    component.cambiar()
    expect(component.estado).toBe("apagado")
  })

  it('deberia haber un boton con nombre "interruptor"',()=>{
    const boton = compiled.querySelector('button')
    expect(boton).toBeTruthy()
    expect(boton?.textContent).toBe("interruptor")
  })

  it('deberia cambiar permutar el estado al pulsar el boton interruptor',()=>{
    //const boton = compiled.querySelector('button')
    const boton = fixture.debugElement.query(By.css("button"))
    boton?.triggerEventHandler("click")
    expect(component.estado).toBe("encendido")
    boton?.triggerEventHandler("click")
    expect(component.estado).toBe("apagado")

  })

  it('deberia mostrar un h1 con el texto del estado actual de manera reactiva',()=>{
    const h1 = compiled.querySelector("h1")
    
    expect(h1).toBeTruthy()

    expect(h1?.textContent)
    .withContext("de primeras, el estado es apagado, entonces el h1 tambien deberia mostrar apagado")
    .toBe("apagado")

    component.cambiar()
    fixture.detectChanges();

    expect(h1?.textContent)
    .withContext("tras ejecutar cambiar() por primera vez, el h1 deberia tomar valor encendido")
    .toBe("encendido")

    const boton = fixture.debugElement.query(By.css("button"))
    boton?.triggerEventHandler("click")

    fixture.detectChanges();

    expect(h1?.textContent)
    .withContext("tras pulsar el boton, el estado deberia permutar otra vez a apagado")
    .toBe("apagado")
    
  })
  
});
