import { Component, OnInit } from '@angular/core';
import {Meal} from '../entities/meal.model';
import {Status} from '../entities/Status';
import {NgForm} from '@angular/forms';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent implements OnInit {
  loggedInUser = 'pncQ6toOoBYpLuiV8jzOf7J4gdx1';
  newMeal: Meal;
  mealsCol: AngularFirestoreCollection<Meal>;
  mealsObj: Meal[];

  constructor(private afs: AngularFirestore) {
    this.newMeal = new Meal('', '', '', '', '', Status.available, this.loggedInUser);
    delete this.newMeal.id;
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newMeal);
    this.afs.collection('meal').add({...this.newMeal});
  }
}
