import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ChartsModule } from "ng2-charts";
import { FileUploadModule } from "ng2-file-upload";
import { SharedModule } from "./../../shared/shared.module";
import { SharedMaterialModule } from "app/shared/shared-material.module";

import { OthersRoutes } from "./others.routing";
import { AppHvacComponent } from "./app-hvac/app-hvac.component";
import { AppPasseggeriComponent } from "./app-passeggeri/app-passeggeri.component";
import { AppCuscinettiComponent } from "./app-cuscinetti/app-cuscinetti.component";
import { AppPorteComponent } from "./app-porte/app-porte.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    ChartsModule,
    FileUploadModule,
    SharedModule,
    RouterModule.forChild(OthersRoutes)
  ],
  declarations: [
    AppHvacComponent,
    AppPasseggeriComponent,
    AppCuscinettiComponent,
    AppPorteComponent
  ]
})
export class OthersModule {}
