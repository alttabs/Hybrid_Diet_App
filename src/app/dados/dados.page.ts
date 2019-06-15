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
  formulario: FormGroup;
  cabeca: number;


  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    // private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = new FormGroup({
      peso: new FormControl(''),
    });

    /*this.formulario = this.fb.group({
      peso: [''],
    });*/
  }


  async onClick(): Promise<void> {
    const loading = await this.overlayService.loading();
    try {
      this.navCtrl.navigateForward('/calculo');
      this.overlayService.toast({
        // message: this.cabeca;
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
