import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  result: number;
  constructor() {}

  getScore(num: number) {
    this.result = num;
  }
}
