export class Message {
   constructor(
      public id: number,
      public date: Date,
      public content: string,
      public author: string
   ) { }
}