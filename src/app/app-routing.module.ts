import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { QuestionsComponent } from "./questions/questions.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ResultComponent } from "./result/result.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "quiz", component: QuestionsComponent, pathMatch: "full" },
  { path: "quiz/result", component: ResultComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
