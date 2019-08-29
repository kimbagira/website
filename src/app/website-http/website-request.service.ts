import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Website } from '../website-class/website';
import {environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WebsiteRequestService {
  website:Website;

  constructor(private http:HttpClient) { 
    this.website = new Website("","","","","",new Date())
  }

  websiteRequest(name){
    
    interface ApiResponse{
      login:string;
      avatar_url:string;
    //  repository:string;
    //  repositoryname:string;
    //  description:string;
     created_at:Date;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+name+"?access_token="+environment.apiKey).toPromise().then(response=>{
        this.website.username = response.login
        this.website.profilephoto = response.avatar_url
        // this.website.repository = response.repository
        // this.website.repositoryname = response.repositoryname
        // this.website.description = response.description
        this.website.date = response.created_at
        console.log(response)
        resolve()
      },
      error=>{
        this.website.username =""
        this.website.profilephoto = ""
        // this.website.repository = ""
        // this.website.repositoryname =""
        // this.website.description=""
        this.website.date =new Date()

        reject(error)
      })
    })
    return promise
  }


  // WebsiteRequest(repi){
    
  //   interface ApiResponse{
  //    repository:string;
  //    repositoryname:string;
  //    description:string;
  //   }
  //   let promise = new Promise((resolve,reject)=>{
  //     this.http.get<ApiResponse>("https://api.github.com/repos"+repi+"?access_token="+environment.apiKey).toPromise().then(response=>{
      
  //       this.website.repository = response.repository
  //       this.website.repositoryname = response.repositoryname
  //       this.website.description = response.description
  //       console.log(response)
  //       resolve()
  //     },
  //     error=>{
  //       this.website.repository = ""
  //       this.website.repositoryname =""
  //       this.website.description=""

  //       reject(error)
  //     })
  //   })
  //   return promise
  // }






}
