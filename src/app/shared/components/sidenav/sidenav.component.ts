import { Component, OnInit, Input } from "@angular/core";
import { DataSaverService } from "app/views/data-saver.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.template.html",
  styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent {
  @Input("items") public menuItems: any[] = [];
  @Input("hasIconMenu") public hasIconTypeMenuItem: boolean;
  @Input("iconMenuTitle") public iconTypeMenuTitle: string;

  constructor(private data: DataSaverService) {}
  ngOnInit() {}

  // Only for demo purpose
  addMenuItem() {
    this.menuItems.push({
      name: "ITEM",
      type: "dropDown",
      tooltip: "Item",
      icon: "done",
      state: "material",
      sub: [
        { name: "SUBITEM", state: "cards" },
        { name: "SUBITEM", state: "buttons" }
      ]
    });
  }
}
