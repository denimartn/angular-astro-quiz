import { Component, OnInit } from "@angular/core";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"],
})
export class ResultComponent implements OnInit {
  constructor(private serverData: SharedService) {}
  res: number;
  ngOnInit() {
    this.res = this.serverData.result;
  }
}
