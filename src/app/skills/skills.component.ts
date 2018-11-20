import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  items = [
    {
      name: 'doSmth1',
      value: 100,
    },
    {
      name: 'doSmth2',
      value: 20,
    },
    {
      name: 'doSmth3',
      value: 13,
    },
  ];
  onChangeValue(value, index) {
    this.items[index].value = value;
  }
  sum() {
    let result = 0;
    for (let k = 0; k < this.items.length; k++) {
      result += this.items[k].value;
    }
    return result;
  }
  onInputChange(event) {
    for (let j = 0; j < this.items.length; j++) {
      this.items[j].name = event.target.value;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
