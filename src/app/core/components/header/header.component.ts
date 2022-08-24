import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean=false

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.isLogged=(localStorage.getItem("isLogged")=="true")
  }

  logout():void{    
    localStorage.removeItem("isLogged");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.reload()
    // this.route.navigate(['portfolio'])

    
  }

}
