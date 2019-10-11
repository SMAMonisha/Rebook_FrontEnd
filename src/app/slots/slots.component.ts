import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray} from '@angular/forms';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  slotForms : FormArray =this.fb.array([]);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addSlotsForm();
  }
  addSlotsForm(){
    this.slotForms.push(this.fb.group({
      SlotNo : [0],
      start_time : [''],
      end_time : ['']
    }))
  }

}
