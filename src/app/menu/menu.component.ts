import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Meal} from '../entities/meal.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mealsCol: AngularFirestoreCollection<Meal>;
  mealsObj: Meal[];

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.mealsCol = this.afs.collection('meal', ref => ref.where('userid', '==', 'pncQ6toOoBYpLuiV8jzOf7J4gdx1'));

    this.mealsCol.snapshotChanges().subscribe(data => {
      this.mealsObj = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Meal;
      });
    });
  }

  delete(meal: Meal) {
    const mealId = meal.id;
    delete meal.id;
    this.afs.doc('meal/' + mealId).delete();
  }

  addNewMeal() {

  }
}
