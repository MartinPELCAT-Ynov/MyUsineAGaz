import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
  @Input() number!: number;
  @Input() color!: string;

  @Output() killedEvent: EventEmitter<number> = new EventEmitter<number>();

  killed = false;

  killMeNow() {
    this.killed = true;
    setTimeout(() => {
      this.killedEvent.emit(this.number);
    }, 900);
  }

  ngOnInit(): void {}
}
