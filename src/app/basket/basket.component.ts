import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Meal} from '../entities/meal.model';
import {Status} from '../entities/Status';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  mealsCol: AngularFirestoreCollection<Meal>;
  mealsObj: Meal[];
  loggedInUser = 'pncQ6toOoBYpLuiV8jzOf7J4gdx1';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.mealsCol = this.afs.collection('meal', ref => {
        return ref
          .where('byWho', '==', 'pncQ6toOoBYpLuiV8jzOf7J4gdx1')
          .where('status', '==', Status.available);
      }
    );

    this.mealsCol.snapshotChanges().subscribe(data => {
      this.mealsObj = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Meal;
      });
    });
  }

  reserve(meal: Meal) {
    //  i po kliknięciu reserve: byWho z pustego na nasze, i status na "Zarezerwowane"
    meal.byWho = this.loggedInUser;
    meal.status = Status.reserved;

    const mealId = meal.id;
    // delete meal.id;
    this.afs.doc('meal/' + mealId).update(meal);
  }
}
