import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSortComponent } from './buttons.component';

describe('ButtonsComponent', () => {
  let component: ButtonSortComponent;
  let fixture: ComponentFixture<ButtonSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonSortComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
