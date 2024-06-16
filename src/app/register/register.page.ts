import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string ='';
  password: string ='';

  constructor(private authService: AuthService, private router: Router,private navCtrl: NavController) {}

  async register() {
    try {
      await this.authService.signUpWithEmail(this.email, this.password);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Erro ao registrar:', error);
      alert(' Erro, Não foi possivel realizar o cadastro')
    }
  }

  voltar() {
    this.navCtrl.navigateForward('login')
  }


}
