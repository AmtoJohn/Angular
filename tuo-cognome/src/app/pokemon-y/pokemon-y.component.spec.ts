import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonYComponent } from './pokemon-y.component';

describe('PokemonYComponent', () => {
  let component: PokemonYComponent;
  let fixture: ComponentFixture<PokemonYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
