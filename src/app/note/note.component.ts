import { Component, OnInit } from '@angular/core';
import { info } from  './../data/json';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {


  inf:Array<any>=info;
  constructor() { }

  ngOnInit() {
  }

}
