import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from '../list/list.entity';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
  }

  SendData() {
    let data: Model = {
      Id: 1,
      Description: 'desaa',
      Name: 'nameme'
    };
    this.service.updateData(data);
    this.router.navigateByUrl('/list');
  }
}
