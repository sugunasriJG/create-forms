import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceLeftPaneComponent } from './workspace-left-pane.component';

describe('WorkspaceLeftPaneComponent', () => {
  let component: WorkspaceLeftPaneComponent;
  let fixture: ComponentFixture<WorkspaceLeftPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceLeftPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceLeftPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
