import { Injectable, EventEmitter,OnInit } from '@angular/core';

@Injectable()
export class DbService implements OnInit{
   private data: any[] = [];
   user1 = `{ "id": "1",
        "name": "Asaad Saad",
        "stuID": "12345",
        "email": "asaad@mum.edu"
        }`;
   user2 = `{ "id": "2",
        "name": "Bob",
        "stuID": "22222",
        "email": "bob@mum.edu"
        }`;

    user3 = `{ "id": "3",
        "name": "John",
        "stuID": "33333",
        "email": "john@mum.edu"
        }`;

    user4 = `{ "id": "4",
        "name": "Tim",
        "stuID": "44444",
        "email": "tom@mum.edu"
        }`;

   constructor() { 
      this.addData(  JSON.parse(this.user1));
      this.addData(  JSON.parse(this.user2));
      this.addData(  JSON.parse(this.user3));
      this.addData(  JSON.parse(this.user4));

   }
 

    addData(input: JSON) {
        this.data.push(input);
    }

    getData() {
      //  console.log(this.data);
        return this.data;
    }

    getDataOfUser(id:number) {
        let result = null;
        this.data.forEach(element => {

            if(element.id==id){
               // console.log(element);
                result = element;
            }
            
        });
        return result;
    }

  ngOnInit() {

  }
}
