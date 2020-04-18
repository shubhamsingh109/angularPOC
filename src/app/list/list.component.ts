import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Model } from './list.entity';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: DataService,private router : Router) { }

  public listData: Model[] = [];
  fileToUpload: File = null;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getList().subscribe(data => {
      console.log('data', data);
      this.service.setList(data);
      this.listData = data;
    });
  }


  handleFileInput(files: FileList) {
    debugger;
    this.fileToUpload = files.item(0);
    var reader = new FileReader();
    reader.readAsArrayBuffer(this.fileToUpload);
    reader.onloadend = e => {
      console.log(reader.result);
      // const blob = new Blob(reader.result);
      const url = window.URL.createObjectURL(this.fileToUpload);
      window.open(url);
    }
  }
}
