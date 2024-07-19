import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private selectedItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  selectedItems$: Observable<any[]> = this.selectedItemsSubject.asObservable();

  private sharedObjectSource = new BehaviorSubject<any>(null);
  sharedObject$ = this.sharedObjectSource.asObservable();

  constructor() { }

  setSelectedItems(items: any[]) {
    this.selectedItemsSubject.next(items);
  }  

  updateSharedObject(obj: any) {
    this.sharedObjectSource.next(obj);
  }
}
