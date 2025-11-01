import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormControl,
  ReactiveFormsModule,
  NgForm,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { map } from 'rxjs';

@Component({
  selector: 'app-edit-video-game',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './edit-video-game.html',
  styleUrl: './edit-video-game.css',
})
export class EditVideoGame implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  protected readonly videoGameFormGroup = this.formBuilder.group({
    label: ['',[Validators.required, Validators.minLength(3)]],
    year: [new Date().getFullYear(), [Validators.required, Validators.max(new Date().getFullYear())]],
  });
  videoGameParamsS = toSignal(this.route.params);
  // Le computed permet à videoGameId de rester synchronisé avec le paramètre id de l'URL,
  // sans que vous ayez à écrire de logique de souscription (subscribe) ou de nettoyage
  // (unsubscribe). Il est performant car il ne recalcule la valeur que si ses dépendances
  // changent.
  videoGameId = computed(() => {
    const params = this.videoGameParamsS();
    return params?.['id'] ?? '0';
  });
  // videoGameId = computed(() => {
  //   let id =0
  //   const params = this.videoGameParamsS()
  //   if(params){
  //     id = params[id];
  //     return id;
  //   }
  //   return;
  // })
  ngOnInit(): void {
    console.info('snapshot', this.route.snapshot.params['id']);
    this.route.params.subscribe({
      next: (item) => {
        console.info(item['id']);
      },
    });
  }
  saveOne(): void {
    console.log('Save One', this.videoGameFormGroup.valid);
  }
}
