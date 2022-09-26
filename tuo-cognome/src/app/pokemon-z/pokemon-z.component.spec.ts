import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonZComponent } from './pokemon-z.component';

describe('PokemonZComponent', () => {
  let component: PokemonZComponent;
  let fixture: ComponentFixture<PokemonZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
