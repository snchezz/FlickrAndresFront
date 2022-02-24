import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any[]=[]
  names: any[] = []

  constructor(private api: ApiDataService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.api.getData().subscribe(users => {
      this.users = users

    })
  }

  addUser(name: String, mail: String, password: String) {
    this.api.insertUser(name, mail, password).subscribe(() => {
      this.getUsers();
    });
  }



  searchByNameAndPassword(mail: String, password: String) {
    this.api.searchByMailAndPass(mail, password).subscribe((user) => {
      console.log(user)
      if (user != null) {
        //window.open("/home")
        window.alert("Login correcto")
      } else {
        window.alert("Login incorrecto")
      }
    })
  }

  searchByName(name: String) {
    this.api.searchByName(name).subscribe((res) => {
      console.log(res)
      if (res.length != 0) {
        console.log("Usuario encontrado")
        this.names = res
      } else {
        console.log("usuario no encontrado")
        this.names = []
      }
    })
  }

}
