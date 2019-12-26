import { Component, OnInit } from '@angular/core';
import { Model } from './list.entity';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: DataService) { }

  public listData: Model[] = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getList().subscribe(data => {
      console.log('data',data);
      this.service.setList(data);
      this.listData = data;
    });
  }

}
