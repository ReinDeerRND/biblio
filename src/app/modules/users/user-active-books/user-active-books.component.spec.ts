import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActiveBooksComponent } from './user-active-books.component';

describe('UserActiveBooksComponent', () => {
  let component: UserActiveBooksComponent;
  let fixture: ComponentFixture<UserActiveBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActiveBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserActiveBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
