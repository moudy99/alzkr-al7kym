import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllMusicComponent } from './delete-all-music.component';

describe('DeleteAllMusicComponent', () => {
  let component: DeleteAllMusicComponent;
  let fixture: ComponentFixture<DeleteAllMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAllMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAllMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
