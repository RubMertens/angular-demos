import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchValue: string, ...args: unknown[]): any[] {
    if (!searchValue) { return value; }
    return value.filter(item => {
      const keys = Object.keys(item);
      const anyPropContainsSearch = keys
        .filter(key => this.keyContains(item, key, searchValue))
        .length > 0;
      return anyPropContainsSearch;
    });

  }

  private keyContains(obj: any, key: string, searchValue: string) {
    return (obj[key].toString() as string)
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  }

}
