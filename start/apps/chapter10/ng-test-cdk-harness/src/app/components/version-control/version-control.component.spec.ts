import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VersionControlComponent } from './version-control.component';
import { FormsModule, NgForm } from '@angular/forms';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
describe('VersionControlComponent', () => {
  let component: VersionControlComponent;
  let fixture: ComponentFixture<VersionControlComponent>;
  let harnessLoader: HarnessLoader;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionControlComponent, VcLogsComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    harnessLoader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error on wrong version number input', async () => {
    const form = fixture.debugElement.query(
      By.css('form')
    ).injector.get(NgForm);
    form.controls['version'].setValue('abcd');
    fixture.detectChanges();
    await fixture.whenStable();
    const submitVersionButton = fixture.debugElement.query(
      By.css('#submitVersionBtn')
    ).nativeElement;
    submitVersionButton.click();
    fixture.detectChanges();
    await fixture.whenStable();
    const errorAlert = fixture.debugElement.query(
      By.css('small.error')
    ).nativeElement;
    expect(errorAlert).toBeTruthy();
    const errorAlertText = errorAlert.textContent.trim();
    expect(errorAlertText).toBe('Version number does not match the pattern (x.x.x)');
  });

  it('should show the new log in the list after adding submitting a new log', async () => {
    const form = fixture.debugElement.query(
      By.css('form')
    ).injector.get(NgForm);
    const VERSION = '2.3.6';
    form.controls['version'].setValue(VERSION);
    fixture.detectChanges();
    await fixture.whenStable();
    const submitButton = fixture.debugElement.query(
      By.css('button[type=submit]')
    ).nativeElement;
    submitButton.click();
    fixture.detectChanges();
    await fixture.whenStable();
    const logs = fixture.debugElement.queryAll(By.css('.logs__item'));
    expect(logs.length).toBe(2);
    const firstLog = logs[0].nativeElement.textContent.trim();
    expect(firstLog).toBe(`initial version is 0.0.0`);
    const secondLog = logs[1].nativeElement.textContent.trim();
    expect(secondLog).toBe(`version changed to 2.3.6`);
  });
});
