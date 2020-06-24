import { Component, OnInit } from '@angular/core';
import { UserSettings }  from '../data/user-settings';
import { NgModel, NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: 'Dave',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are example notes'
  }

  singleModel ="On";

  userSettings : UserSettings = { ...this.originalUserSettings} ;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


  onBlur(field: NgModel){
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.value);


    
  }
}
