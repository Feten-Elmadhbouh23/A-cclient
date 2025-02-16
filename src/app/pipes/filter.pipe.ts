import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter', // Nom du pipe
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.address.toLowerCase().includes(searchText) ||
        item.status.toLowerCase().includes(searchText)
      );
    });
  }
}
