import { TestBed } from '@angular/core/testing';

import { AddFilmService } from './add-film.service';

describe('AddFilmService', () => {
  let service: AddFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
