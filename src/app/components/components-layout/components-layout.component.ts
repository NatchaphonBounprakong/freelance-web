import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-components-layout',
  templateUrl: './components-layout.component.html',
  styleUrls: ['./components-layout.component.scss']
})
export class ComponentsLayoutComponent implements OnInit {

  constructor(private dataSevice: DataService) { }

  ngOnInit(): void {
    this.dataSevice.getFakeApi()
    const a = [4, 5, 2, 1, 7, 9]
  }

  sorttt(inputArr: number[]) {
    for (var i = 1; i < inputArr.length; i++) {
      let current = inputArr[i];
      let j = i - 1;
      while ((j > -1) && (current < inputArr[j])) {
        inputArr[j + 1] = inputArr[j];
        j--;
      }
      inputArr[j + 1] = current;
    }

    return inputArr;
  }

}
