import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSubmenuComponent } from './tasks-submenu.component';

describe('TasksSubmenuComponent', () => {
  let component: TasksSubmenuComponent;
  let fixture: ComponentFixture<TasksSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksSubmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
