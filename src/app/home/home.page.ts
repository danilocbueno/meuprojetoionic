import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public numero1: number;
  public numero2: number;
  public operacao: string;

  constructor(public alertController: AlertController) {}
  
  async vaiFormulario() {
      console.log(this.operacao);
      //template strings!
      let total = this.numero1 + this.numero2;
      const texto = `O valor total da conta é de ${total}`;

      const alert = await this.alertController.create({
        header: 'Alerta!',
        message: texto,
        buttons: ['Vai']
      });
      await alert.present();
    }
}
