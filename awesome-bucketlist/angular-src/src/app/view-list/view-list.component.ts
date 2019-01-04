import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/List';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  private lists: List[] = [];

  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.getAllLists();
  }

  public onAddList(newList) {
    this.lists = this.lists.concat(newList);
  }

    // Get all lists from server and update the lists property

    getAllLists(): void {
      this.listServ.getAllLists()
      .subscribe(lists => this.lists = lists);
    }



    // deleteList. The deleted list is being filtered out using the .filter method
    public deleteList(list: List) {
      this.listServ.deleteList(list._id).subscribe(
        response => this.lists = this.lists.filter(lists => lists !== list), );
      }

}
