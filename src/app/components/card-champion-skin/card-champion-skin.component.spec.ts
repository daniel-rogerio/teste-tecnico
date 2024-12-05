import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChampionSkinComponent } from './card-champion-skin.component';

describe('CardChampionSkinComponent', () => {
  let component: CardChampionSkinComponent;
  let fixture: ComponentFixture<CardChampionSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardChampionSkinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChampionSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
