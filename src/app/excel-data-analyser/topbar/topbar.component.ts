import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  topBardata: any;
  isDataAnalysis: boolean;
  isDataIngestion: boolean;
  isDataMapping: boolean;

  @Input('topBarData') set topBarData(data: string) {
      this.topBardata = data;
      if(this.topBardata==='dataAnalysis'){
        this.isDataAnalysis = true;
      } if(this.topBardata==='dataMapping'){
        this.isDataMapping = true;
      }if(this.topBardata===''){
        this.isDataIngestion = true;
      }

  }

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToDataMapping() {
    this.router.navigate(['../dataMapping'], { relativeTo: this.route });
  }
  navigateToDataIngestion() {
    this.router.navigate(['']);
  }
  navigateToDataAnalysis() {
    this.router.navigate(['../dataAnalysis'], { relativeTo: this.route });
  }
}
