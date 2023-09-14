// import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CapacitorHttp, HttpOptions} from '@capacitor/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  public src?: string;

  @Input() name?: string;

  constructor() {}

  ngOnInit(): void {
    this.loadLargeFile();
  }

  public async loadLargeFile(): Promise<void> {
    // this.http
    //   .get(
    //     '/assets/test.pdf',
    //     { responseType: 'blob' }
    //   )
    //   .subscribe((res) => this.src = res);

      const options: HttpOptions = {
        url: 'http://localhost:8100/assets/test.pdf',
        responseType: 'blob'
      };

      const response = await CapacitorHttp.get(options);
      this.src = response.data;
  }

}
