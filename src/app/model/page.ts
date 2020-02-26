export class Page<T> {
    _embedded: {
      items: T[];
    };
    page: {
      totalPages: number;
      totalElements: number;
      size: number ;
      number: number ;
    };
}
