import { TestBed } from '@angular/core/testing';
import { TestBedHelper, ActivatedRouteStub } from '../../../../../../common/src/app/spec/spec-utils';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalModule, StoreService } from 'nrpti-angular-components';
import { RecordDetailDirective } from '../../../records/utils/record-detail.directive';
import { DatePipe } from '@angular/common';
import { CommonModule } from '../../../../../../common/src/app/common.module';
import { DocumentAuthenticatedReadOnlyComponent } from '../../../documents/document-authenticated-read-only/document-authenticated-read-only.component';
import { S3SignedUrlAnchorComponent } from '../../../documents/s3-signed-url-anchor/s3-signed-url-anchor.component';
import { FactoryService } from '../../../services/factory.service';
import { EventEmitter } from '@angular/core';
import { MinesAdministrativePenaltyDetailComponent } from './mines-administrative-penalty-detail.component';

describe('AdministrativePenaltyDetailComponent', () => {
  const testBedHelper = new TestBedHelper<MinesAdministrativePenaltyDetailComponent>
    (MinesAdministrativePenaltyDetailComponent);

  // component constructor mocks
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);
  const mockActivatedRoute = new ActivatedRouteStub();

  const mockFactoryService = jasmine.createSpyObj(
    'FactoryService',
    ['userInLngRole', 'userInBcmiRole', 'userInNrcedRole', 'userOnlyInLimitedRole', 'userInRole']
  );
  mockFactoryService.userInLngRole.and.returnValue(true);
  mockFactoryService.userInBcmiRole.and.returnValue(true);
  mockFactoryService.userInNrcedRole.and.returnValue(true);

  const mockStoreService = {
    getItem: () => {
      return ['item'];
     },
    stateChange: new EventEmitter()
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, GlobalModule, CommonModule],
      declarations: [
        MinesAdministrativePenaltyDetailComponent,
        RecordDetailDirective,
        DocumentAuthenticatedReadOnlyComponent,
        S3SignedUrlAnchorComponent
      ],
      providers: [
        DatePipe,
        { provide: Router, useValue: mockRouter },
        { provide: StoreService, useValue: mockStoreService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: FactoryService, useValue: mockFactoryService }
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    const component = testBedHelper.createComponent();
    expect(component).toBeTruthy();
  });
});
