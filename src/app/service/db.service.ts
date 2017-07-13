import { Injectable, EventEmitter,OnInit } from '@angular/core';

class User {
  constructor(public id:number, public name:string,stuID:number,email:string){}
}
@Injectable()
export class DbService implements OnInit{
   private data: User[] = [];
   constructor() { 
      this.addData(new User(1, 'Asaad Saad',12345,'asaad@mum.edu'));
      this.addData(new User(2, 'Bob',22222,'bob@mum.edu'));
      this.addData(new User(3, 'John',33333,'john@mum.edu'));
      this.addData(new User(4, 'Tom',44444,'tom@mum.edu'));
   }
 

    addData(input: User) {
        this.data.push(input);
    }

    getData() {
       // console.log(this.data);
        return this.data;
    }

  ngOnInit() {

  }
}
