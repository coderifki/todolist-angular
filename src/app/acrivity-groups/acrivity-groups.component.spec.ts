import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrivityGroupsComponent } from './acrivity-groups.component';

describe('AcrivityGroupsComponent', () => {
  let component: AcrivityGroupsComponent;
  let fixture: ComponentFixture<AcrivityGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcrivityGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcrivityGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
