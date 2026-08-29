import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShelfComponent } from './user-shelf.component';

describe('UserShelfComponent', () => {
  let component: UserShelfComponent;
  let fixture: ComponentFixture<UserShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
