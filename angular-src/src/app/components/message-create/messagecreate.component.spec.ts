import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagecreateComponent } from './messagecreate.component';

describe('MessageComponent', () => {
  let component: MessagecreateComponent;
  let fixture: ComponentFixture<MessagecreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagecreateComponent]
    });
    fixture = TestBed.createComponent(MessagecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
