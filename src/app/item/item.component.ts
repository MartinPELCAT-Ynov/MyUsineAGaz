import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
  @Input() number!: number;
  @Input() color!: string;

  constructor() {}

  ngOnInit(): void {}
}
