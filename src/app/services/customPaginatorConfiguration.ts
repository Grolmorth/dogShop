import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Liczba produktów na stronie:';
  customPaginatorIntl.nextPageLabel = 'Następna strona';
  customPaginatorIntl.previousPageLabel = 'Poprzednia strona';

  return customPaginatorIntl;
}
