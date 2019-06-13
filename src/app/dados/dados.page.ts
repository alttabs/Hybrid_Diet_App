import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OverlayService } from '../core/services/overlay.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss']
})
export class DadosPage implements OnInit {
  //GroupForm: FormGroup;


  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
   //private fb: FormBuilder
  ) {}

  ngOnInit() {
    //this.createForm();
  }

  private createForm(): void {
   /* this.GroupForm = this.fb.group({
      peso: ['', [Validators.required, Validators.maxLength(3)]],
      altura: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.minLength(2)]]
     // sexo: ['', [Validators.required, Validators.minLength(3)]]
    });*/
  }

 /* get peso(): FormControl {
    return <FormControl>this.GroupForm.get('peso');
  }

  get altura(): FormControl {
    return <FormControl>this.GroupForm.get('altura');
  }

  get idade(): FormControl {
    return <FormControl>this.GroupForm.get('idade');
  }
*/



    //cabeca = this.idade.value + this.altura.value;



  /*get sexo(): FormControl {
    return <FormControl>this.GroupForm.get('sexo');
  }*/

  async onClick(): Promise<void> {
    const loading = await this.overlayService.loading();
    try {
      this.navCtrl.navigateForward('/calculo');
      this.overlayService.toast({
        //message: this.cabeca;
      });
    } catch (e) {
      this.overlayService.toast({
        message: e.message
      });
    } finally {
      loading.dismiss();

    }
  }
}
