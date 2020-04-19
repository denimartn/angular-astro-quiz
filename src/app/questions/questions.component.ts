import { Component, OnInit } from "@angular/core";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"],
})
export class QuestionsComponent implements OnInit {
  Q1 = "";
  Q2 = "";
  Q3 = "";
  Q4 = "";
  Q5 = "";
  Q6 = "";
  Q7 = "";
  correctAnswers = 0;
  score = "";
  step = 0;
  constructor(private serviceData: SharedService) {}

  onClick() {
    this.step = this.step + 1;
  }
  ngOnInit() {}

  onClick1($event) {
    this.Q1 = $event.target.value;
  }
  onClick2($event) {
    this.Q2 = $event.target.value;
  }
  onClick3($event) {
    this.Q3 = $event.target.value;
  }
  onClick4($event) {
    this.Q4 = $event.target.value;
  }
  onClick5($event) {
    this.Q5 = $event.target.value;
  }
  onClick6($event) {
    this.Q6 = $event.target.value;
  }
  onClick7($event) {
    this.Q7 = $event.target.value;
  }

  onSubmit() {
    if (this.Q1 === "300000 km/s") {
      this.correctAnswers++;
    }

    if (this.Q2 === "jupiter") {
      this.correctAnswers++;
    }

    if (this.Q3 === "cold") {
      this.correctAnswers++;
    }

    if (this.Q4 === "1g") {
      this.correctAnswers++;
    }
    if (this.Q5 === "a star explosion") {
      this.correctAnswers++;
    }
    if (this.Q6 === "expansion of space") {
      this.correctAnswers++;
    }
    if (this.Q7 === "no") {
      this.correctAnswers++;
    }

    this.score = "you got " + this.correctAnswers + " correct answers out of 7";
    this.serviceData.getScore(this.correctAnswers);
    this.correctAnswers = 0;
  }
}
