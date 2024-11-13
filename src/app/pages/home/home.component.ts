import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FormsModule } from '@angular/forms';
import { ReqresApiService } from '../../service/reqres-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string = '';
  password: string = '';

  constructor(private apiReqres: ReqresApiService) { }
  
  login(user:string, password:string) {
    // user será el tipó de usuario, correo, etc.
    // console.log(`Usuario: ${ user }\nContraseña: ${ password }`);
    this.apiReqres.login(user, password).subscribe(
      res => {
        alert("Login successful! " + res.token);
        console.log(res.token);
      },
      err => {
        alert('Login failed!: ' + err.error.error); 
        console.log(err.error.error);
      }
    )
  }

}
