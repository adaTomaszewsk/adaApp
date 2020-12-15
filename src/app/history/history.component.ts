import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Meal} from '../entities/meal.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Status} from '../entities/Status';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  mealsCol: AngularFirestoreCollection<Meal>;
  mealsObj: Meal[];
  loggedInUser = 'pncQ6toOoBYpLuiV8jzOf7J4gdx1';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.mealsCol = this.afs.collection('meal', ref => {
        return ref.where('byWho', '==', this.loggedInUser)
          .where('status', '==', Status.created);
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

  return(meal: Meal) {
    // History-> "Wykonane" userid nasz
    meal.byWho = this.loggedInUser;
    meal.status = Status.reserved;

    const mealId = meal.id;
    delete meal.id;
    this.afs.doc('meal/' + mealId).update(meal);
  }
}
