import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { HomeService } from '../../service/home.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';

class MockHomeService {
  register(name: string, email: string, password: string): boolean {
    if (email === 'existing@example.com') {
      return false; 
    }
    return true; 
  }
}

class MockRouter {
  navigate(path: string[]): void {
    
  }
}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let homeService: HomeService;
  let router: MockRouter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: HomeService, useClass: MockHomeService },
        { provide: Router, useClass: MockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeService);
    router = TestBed.inject(Router) as unknown as MockRouter;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty fields', () => {
    expect(component.name).toBe('');
    expect(component.email).toBe('');
    expect(component.password).toBe('');
    expect(component.errorMessage).toBe('');
  });

  it('should show an error message if any field is empty', () => {
    component.name = '';
    component.email = 'test@example.com';
    component.password = 'password';
    component.register();
    expect(component.errorMessage).toBe('All fields are required');
  });

  it('should register successfully and navigate to login if details are valid', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.name = 'New User';
    component.email = 'newuser@example.com';
    component.password = 'password';
    component.register();
    expect(component.errorMessage).toBe('');
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should show an error message if user is already registered', () => {
    component.name = 'Existing User';
    component.email = 'existing@example.com';
    component.password = 'password';
    component.register();
    expect(component.errorMessage).toBe('User already registered');
  });
});