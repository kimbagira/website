import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { Website } from '../website-class/website';
import { WebsiteService } from '../website-service/website.service';
import { WebsiteRequestService } from '../website-http/website-request.service';

@Component({
  selector: 'app-website-form',
  templateUrl: './website-form.component.html',
  styleUrls: ['./website-form.component.css']
})
export class WebsiteFormComponent implements OnInit {
web:string;
webb:Website;
  constructor(websiteService:WebsiteService, private websiteRequestService:WebsiteRequestService) { }

  ngOnInit() {
    
  }
funcsubmit(){
  this.websiteRequestService.websiteRequest(this.web)

  this.webb= this.websiteRequestService.website
  console.log(this.webb)
}


}
