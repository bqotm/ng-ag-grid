import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionResultRendererComponent } from './mission-result-renderer.component';

describe('MissionResultRendererComponent', () => {
  let component: MissionResultRendererComponent;
  let fixture: ComponentFixture<MissionResultRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionResultRendererComponent]
    });
    fixture = TestBed.createComponent(MissionResultRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
