import { Component, computed, inject, OnInit, signal } from '@angular/core';
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
import { map, switchMap, tap } from 'rxjs';
import { UpdateOneVideoGame } from '../../services/update-one-video-game';
import { VideoGame } from '../../../models/video-games';
import { GetOneVideoGame } from '../../services/get-one-video-game';

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
  private readonly getOneService = inject(GetOneVideoGame);
  private readonly updateService = inject(UpdateOneVideoGame);
  protected readonly isLoading = signal(false);  //TODO: Devrait être dans un service dédié
  private readonly setVideoGame$ = this.route.params.pipe(tap(()=>this.isLoading.set(true)),
    map<{ [key: string | symbol]: any }, number>((params) => params['id']),
    switchMap((id) => this.getOneService.getOne(id)),
    tap(()=>this.isLoading.set(false))
  );

  protected readonly videoGameFormGroup = this.formBuilder.nonNullable.group({
    label: ['', [Validators.required, Validators.minLength(3)]],
    year: [
      new Date().getFullYear(),
      [Validators.required, Validators.max(new Date().getFullYear())],
    ],
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
    // this.route.params
    //   .pipe(
    //     map<{ [key: string | symbol]: any }, number>(params => params['id']),
    //     switchMap(id => this.getOneService.getOne(id))
    //   )
      this.setVideoGame$.subscribe({
        next: (item) => {
          this.videoGameFormGroup.patchValue(item);
        },
      });
  }
  saveOne(): void {
    const videoGame: VideoGame = {
      label: '',
      year: 0,
    };
    if (this.videoGameFormGroup.value.label) {
      videoGame.label = this.videoGameFormGroup.value.label;
    }
    if (this.videoGameFormGroup.value.year) {
      videoGame.year = this.videoGameFormGroup.value.year;
    }
    this.updateService.updateOne(videoGame).subscribe();
    console.log('Save One', this.videoGameFormGroup.valid);
  }
}
