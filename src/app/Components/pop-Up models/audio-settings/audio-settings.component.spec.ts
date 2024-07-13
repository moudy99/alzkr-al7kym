import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSettingsComponent } from './audio-settings.component';

describe('AudioSettingsComponent', () => {
  let component: AudioSettingsComponent;
  let fixture: ComponentFixture<AudioSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
