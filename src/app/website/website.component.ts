import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../website-service/website.service';
import { HttpClient } from '@angular/common/http';
import { Website } from '../website-class/website';


@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
   website:Website;

  constructor( WebsiteService:WebsiteService,private http:HttpClient) { }

  ngOnInit() {

    // interface ApiResponse{
    // username:string;
    // profilephoto:string;
    // repository:string;
    // repositoryname:string;
    // description:string;
    // date:Date;
    // }

    // this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
    //   // Succesful API request
    //   this.website = new Website(data.username, data.profilephoto, data.repository, data.repositoryname, data.description, data.date)
    //   console.log("An error occurred")
    // })
  }

}
