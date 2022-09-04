import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private authService:AuthService,private api :ApiService,private http:HttpClient) { }

  download(id:number){
    return new Promise(async (resolve, reject) => {
       let headers =new HttpHeaders({
        Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiY2xpZW50In1dLCJzdWIiOiJtb2hhbWVkQGdtYWlsLmNvbSIsImlhdCI6MTY2MTkxMTU3NSwiZXhwIjoxODQxOTExNTc1fQ.a5TmUPEdLYNsoxSYSWueXUbD2iGuyycNyJ2QxJMIx7L6740oShTooPaPxEC8fB2QxiiTpdhU-YPfInVWHmvsSQ",
        Accept: "application/json */*"
      });
       this.api.get("invoice/"+id,{headers, responseType: 'blob'}).then((data:any)=>{
        let blob = new Blob([data], { type: 'application/pdf' });
      let pdfUrl = window.URL.createObjectURL(blob);

      var PDF_link = document.createElement('a');
      PDF_link.href = pdfUrl;
      // window.open(pdfUrl, '_blank');
      PDF_link.download = "invoice.pdf";
      PDF_link.click();
         resolve(data)
       })
       .catch(err=>reject(err));
   })
  
  
  }
 

}
