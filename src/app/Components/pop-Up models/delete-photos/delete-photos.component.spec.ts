import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePhotosComponent } from './delete-photos.component';

describe('DeletePhotosComponent', () => {
  let component: DeletePhotosComponent;
  let fixture: ComponentFixture<DeletePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
