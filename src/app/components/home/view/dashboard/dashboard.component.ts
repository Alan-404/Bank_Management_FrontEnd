import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private bannerService: BannerService) { }


  bannerResposne: any = {banners: []}
  ngOnInit(): void {
    this.bannerService.getAll().subscribe(response => {
      this.bannerResposne = response;
    })
  }

}
