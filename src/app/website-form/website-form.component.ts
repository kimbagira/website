import { Component, OnInit } from '@angular/core';
// import { User } from '../user';
// import { Repository } from '../repository';
import { Website } from '../website-class/website';
import { WebsiteService } from '../website-service/website.service';
import { WebsiteRequestService } from '../website-http/website-request.service';
import { website } from 'src/polyfills';

@Component({
  selector: 'app-website-form',
  templateUrl: './website-form.component.html',
  styleUrls: ['./website-form.component.css']
})
export class WebsiteFormComponent implements OnInit {
userInput:string;
webb:Website;
repo:[];
  constructor( private websiteRequestService:WebsiteRequestService) { }

  ngOnInit() {
    
  }
funcsubmit(){
  this.websiteRequestService.userRequest(this.userInput)

  this.webb= this.websiteRequestService.website
  console.log(typeof(this.webb))
  // console.log(this.userInput)
  this.websiteRequestService.repoRequest(this.userInput)
  this.repo=this.websiteRequestService.repos
  console.log(this.repo)

}


}
