import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  users: any[]=[]
  names: any[] = []

  constructor(private api: ApiDataService) { }

  ngOnInit(): void {
  }
  
  addUser(name: String, mail: String, password: String) {
    if (name != null && mail != null && password != null) {
      window.alert("Registro correcto")
      this.api.insertUser(name, mail, password).subscribe();
    } else {
      window.alert("Registro incorrecto porfavor vuelva a intentarlo")
    }


    
  }

}
