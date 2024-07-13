import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFilesInHomeComponent } from './delete-file-in-home.component';

describe('DeleteFilesInHomeComponent', () => {
  let component: DeleteFilesInHomeComponent;
  let fixture: ComponentFixture<DeleteFilesInHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteFilesInHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteFilesInHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
