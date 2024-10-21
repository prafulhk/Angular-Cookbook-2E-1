import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent implements OnChanges {
  @Input() vName = '';
  logs: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue } = changes['vName'];
    if (changes['vName'].isFirstChange()) {
      this.logs.push(`initial version is ${currentValue.trim()}`);
    } else {
      this.logs.push(`version changed to ${currentValue.trim()}`)
    }
  }
}

