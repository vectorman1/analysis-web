import { TestBed } from '@angular/core/testing';
import { SymbolsService } from './services/symbols.service';


describe('SymbolsService', () => {
  let service: SymbolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymbolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
