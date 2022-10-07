import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.page.html',
  styleUrls: ['./add-character.page.scss'],
})
export class AddCharacterPage implements OnInit {

  characterForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private characterService: CharacterService,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.characterForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.characterForm = this.formBuilder.group({
      real_name: ['', [Validators.required]],
      alias: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      status: ['', [Validators.required]],
      origin: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.characterForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.characterForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.characterService.createCharacter(this.characterForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/list-characters");
      })
    }
  }
}
