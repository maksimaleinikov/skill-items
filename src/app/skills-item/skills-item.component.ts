import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
  @Input() skill;
  @Output() valueChanged = new EventEmitter();
  increasePoint() {
    this.valueChanged.emit(this.skill.value + 1);
  }
  decreasePoint() {
    this.valueChanged.emit(this.skill.value - 1);
  }
   constructor() { }

  ngOnInit() {
  }

}
