import { Legislation } from '../master/common-models/legislation';
import { Entity } from '../master/common-models/entity';
import { Penalty } from '../master/common-models/penalty';
import { RecordModel } from '../record-model-abstract';

/**
 * AdministrativePenalty NRCED data model.
 *
 * @export
 * @class AdministrativePenaltyNRCED
 */
export class AdministrativePenaltyNRCED extends RecordModel {
  _epicProjectId: string;
  _epicMilestoneId: string;
  unlistedMine: string;
  unlistedMineType: string;

  dateIssued: Date;
  issuingAgency: string;
  author: string;
  legislation: Legislation[];
  issuedTo: Entity;
  penalties: Penalty;
  documents: object[];

  summary: string;

  datePublished: Date;
  publishedBy: string;

  constructor(obj?: any) {
    super(obj);

    this._schemaName = 'AdministrativePenaltyNRCED';

    this._epicProjectId = (obj && obj._epicProjectId) || '';
    this._epicMilestoneId = (obj && obj._epicMilestoneId) || '';
    this.unlistedMine = (obj && obj.unlistedMine) || '';
    this.unlistedMineType = (obj && obj.unlistedMineType) || '';

    this.dateIssued = (obj && obj.dateIssued) || null;
    this.issuingAgency = (obj && obj.issuingAgency) || '';
    this.author = (obj && obj.author) || '';
    this.legislation = (obj && obj.legislation && obj.legislation.length &&
      obj.legislation.map(legislation => new Legislation(legislation))) || null;
    this.issuedTo = (obj && obj.issuedTo && new Entity(obj.issuedTo)) || null;
    this.penalties =
      (obj && obj.penalties && obj.penalties.length && obj.penalties.map(penalty => new Penalty(penalty))) || null;
    this.documents = (obj && obj.documents) || [];

    this.summary = (obj && obj.summary) || null;

    this.datePublished = (obj && obj.datePublished) || null;

    this.publishedBy = (obj && obj.publishedBy) || '';
  }
}
