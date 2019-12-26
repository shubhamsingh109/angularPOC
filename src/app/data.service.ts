import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from './list/list.entity';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  public listData: Model[] = [];
  getList(): Observable<Model[]> {
    if (this.listData.length == 0) {
      return this.http.get<Model[]>('/assets/data.json');
    } else {
      return of(this.listData);
    }
    // 

  }


  setList(data){
    this.listData = data;
  }
  
  updateData(data) {
    console.log(data);
    debugger;
    let Idx = this.listData.findIndex(x => x.Id == data.Id);
    this.listData[Idx] = data;
  }
}
