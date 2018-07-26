import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDescriptionComponent } from './tenant-description.component';

describe('TenantDescriptionComponent', () => {
  let component: TenantDescriptionComponent;
  let fixture: ComponentFixture<TenantDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
