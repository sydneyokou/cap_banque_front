import { Injectable } from '@angular/core';
import { Topic } from '../component/topic/topic';
import { map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userList } from './user-provider';
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl: string = "http://localhost:8080/api/topics/";

  // TOPICS: Topic[] = [
  //   {
  //     id: 1,
  //     title: 'Article1',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
  //     created_at: new Date('05/05/2020'),
  //     updated_at: new Date('05/05/2020'),
  //     author: userList[0],
  //     category: {
  //       id: 1,
  //       name: "category1"
  //     },
  //     comments: []
  //   },
  //   {
  //     id: 2,
  //     title: 'Article2',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
  //     created_at: new Date('05/05/2020'),
  //     updated_at: new Date('05/05/2020'),
  //     author: userList[0],
  //     category: {
  //       id: 2,
  //       name: "category2"
  //     },
  //     comments: []

  //   },
  //   {
  //     id: 3,
  //     title: 'Article3',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
  //     created_at: new Date('05/05/2020'),
  //     updated_at: new Date('05/05/2020'),
  //     author: userList[0],
  //     category: {
  //       id: 2,
  //       name: "category2"
  //     },
  //     comments: []

  //   },
  //   {
  //     id: 4,
  //     title: 'Article4',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
  //     created_at: new Date('05/05/2020'),
  //     updated_at: new Date('05/05/2020'),
  //     author: userList[0],
  //     category: {
  //       id: 3,
  //       name: "category3"
  //     },
  //     comments: []

  //   },
  //   {
  //     id: 5,
  //     title: 'Article5',
  //     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis a temporibus fuga, quod eius voluptates praesentium mollitia ipsa autem eos commodi exercitationem quae ex iste, eveniet voluptas eaque sed aliquid eum illum quibusdam? Atque suscipit alias eligendi ex officia magni recusandae ducimus praesentium facilis. Vitae at ipsum modi odio eos, quisquam, dolorem, vel nihil accusantium minima fuga suscipit voluptatum consequuntur eius doloribus. Autem itaque eum placeat asperiores pariatur nostrum excepturi in velit qui maiores totam unde, exercitationem neque recusandae necessitatibus fugit dolor provident corporis doloremque consequuntur? Et tenetur aut repellendus repellat, doloremque neque, iusto deleniti eius quasi vero architecto illum, facere vel. Eligendi vel cum accusamus ipsum? Laboriosam sunt, maxime est veritatis rem incidunt voluptates nesciunt officia. Fugiat, accusantium.',
  //     created_at: new Date('05/05/2020'),
  //     updated_at: new Date('05/05/2020'),
  //     author: userList[0],
  //     category: {
  //       id: 2,
  //       name: "category2"
  //     },
  //     comments: []

  //   },


  // ]

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<any>(this.apiUrl).pipe<Topic[]>(map(data => data['hydra:member']));
  }

  getTopic(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + id);
  }

  getByCategory(id: number): Observable<Topic[]> {
    // let topics = this.TOPICS.filter(topics => topics.category.id === id);
    // return of(topics);
    return of();
  }

}