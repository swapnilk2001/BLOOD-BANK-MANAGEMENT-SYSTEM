import { UserGuard } from './user.guard';
import { Router } from '@angular/router';
import { ServiceService } from './service.service'; // Adjust the path as per your service location

describe('UserGuard', () => {
  let guard: UserGuard;
  let mockRouter: Router;
  let mockService: ServiceService;

  beforeEach(() => {
    mockRouter = {} as Router; // Mock Router instance
    mockService = jasmine.createSpyObj('ServiceService', [
      'isUserLoggedIn',
      'userType',
    ]); // Creating a spy object for ServiceService

    guard = new UserGuard(mockRouter, mockService);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });
});
