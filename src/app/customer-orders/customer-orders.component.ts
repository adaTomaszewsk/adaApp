import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Meal} from '../entities/meal.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Status} from '../entities/Status';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  mealsCol: AngularFirestoreCollection<Meal>;
  mealsObj: Meal[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.mealsCol = this.afs.collection('meal', ref => {
        return ref.where('userid', '!=', 'pncQ6toOoBYpLuiV8jzOf7J4gdx1')
          .where('status', '==', Status.reserved);
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

  resign(meal: Meal) {
  //  resign: status "Dostępny", i byWho ""
    meal.byWho = '';
    meal.status = Status.available;

    const mealId = meal.id;
    delete meal.id;
    this.afs.doc('meal/' + mealId).update(meal);
  }

  done(meal: Meal) {
    // done "Wykonane"
    meal.status = Status.created;
    const mealId = meal.id;
    delete meal.id;
    this.afs.doc('meal/' + mealId).update(meal);
  }
}
