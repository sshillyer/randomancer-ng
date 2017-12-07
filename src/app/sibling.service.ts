import { SupplementalTableService } from './supplemental-table.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SiblingService {

  constructor(
    private supplementalTableService: SupplementalTableService
  ) { }

  getRandomSiblings(numberOfSiblings: number): string[] {
    let siblings: string[] = new Array<string>();
    for (let i = 0; i < numberOfSiblings; i++) {
      const occupation = this.supplementalTableService.getRandomOccupation();
      const alignment = this.supplementalTableService.getRandomAlignment();
      // const status = this.getRandomStatus();
      // const relationship = this.getRandomRelationship();
      const sibling = `A ${alignment} ${occupation}`;
      siblings[i] = sibling;
    }
    return siblings;
  }

  // getRandomOccupation(): string {

  // }

}
