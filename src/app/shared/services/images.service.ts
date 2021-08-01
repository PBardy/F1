import flags from './data/flags.json';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  nationalityFlagLookupTable: NationalityFlagLookupTable = flags;

  constructor() { }

  getFlagByNationality(nationality: string, size: number = 32): string {
    const code = this.nationalityFlagLookupTable[nationality];
    const flagUrl = `https://www.countryflags.io/${code}/flat/${size}.png`;

    return flagUrl.toLowerCase();
  }

}

export interface NationalityFlagLookupTable {
  [key: string]: string;
}