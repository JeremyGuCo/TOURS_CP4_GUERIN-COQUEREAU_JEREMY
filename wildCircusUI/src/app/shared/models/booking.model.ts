export class Booking {
   constructor(
      public id: number,
      public date: Date,
      public name: string,
      public number: number,
      public price: number,
      public place: string,
      public show_id: number
   ) { }
}