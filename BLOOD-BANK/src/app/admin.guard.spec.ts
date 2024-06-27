import { AdminGuard } from './admin.guard';
import { Router } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ServiceService } from './service.service';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let mockRouter: Router;
  let mockService: ServiceService;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'createUrlTree']);
    mockService = jasmine.createSpyObj('ServiceService', [
      'isUserLoggedIn',
      'userType',
    ]);

    guard = new AdminGuard(mockRouter, mockService);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation for admin user', () => {
    // Mock behavior
    (mockService.isUserLoggedIn as jasmine.Spy).and.returnValue(true);
    (mockService.userType as jasmine.Spy).and.returnValue('admin');

    const routeMock: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot; // Mock ActivatedRouteSnapshot

    const result = guard.canActivate(routeMock, {} as RouterStateSnapshot);

    expect(result).toBe(true);
    expect(mockRouter.navigate).not.toHaveBeenCalled();
    expect(mockRouter.createUrlTree).not.toHaveBeenCalled();
  });

  it('should redirect to login page for non-admin user', () => {
    // Mock behavior
    (mockService.isUserLoggedIn as jasmine.Spy).and.returnValue(true);
    (mockService.userType as jasmine.Spy).and.returnValue('user'); // Assuming 'user' instead of 'admin'

    const routeMock: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot; // Mock ActivatedRouteSnapshot

    const result = guard.canActivate(routeMock, {} as RouterStateSnapshot);

    expect(result).toEqual(jasmine.any(UrlTree));
    expect(mockRouter.navigate).not.toHaveBeenCalled();
    expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/login']);
  });

  it('should redirect to login page for logged out user', () => {
    // Mock behavior
    (mockService.isUserLoggedIn as jasmine.Spy).and.returnValue(false);

    const routeMock: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot; // Mock ActivatedRouteSnapshot

    const result = guard.canActivate(routeMock, {} as RouterStateSnapshot);

    expect(result).toEqual(jasmine.any(UrlTree));
    expect(mockRouter.navigate).not.toHaveBeenCalled();
    expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/login']);
  });
});
