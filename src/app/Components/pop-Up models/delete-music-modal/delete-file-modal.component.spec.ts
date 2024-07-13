import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMusicModalComponent } from './delete-file-modal.component';

describe('DeleteMusicModalComponent', () => {
  let component: DeleteMusicModalComponent;
  let fixture: ComponentFixture<DeleteMusicModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMusicModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMusicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
