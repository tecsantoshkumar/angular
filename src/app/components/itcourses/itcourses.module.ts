import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ITCOURSESRoutingModule } from './itcourses-routing.module';
import { AdvancedjavaComponent } from './advancedjava/advancedjava.component';
import { AndroidComponent } from './android/android.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { AWSComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';
import { CLanguageComponent } from './c-language/c-language.component';
import { CoreJavaComponent } from './core-java/core-java.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { DevopsComponent } from './devops/devops.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { JavaComponent } from './java/java.component';
import { ManualtestingComponent } from './manualtesting/manualtesting.component';
import { MsofficeComponent } from './msoffice/msoffice.component';
import { MulesoftComponent } from './mulesoft/mulesoft.component';
import { OracleComponent } from './oracle/oracle.component';
import { PhpMySqlComponent } from './php-my-sql/php-my-sql.component';
import { PowerBIComponent } from './power-bi/power-bi.component';
import { PythonDjangoComponent } from './python-django/python-django.component';
import { PythonMachineLearningAndDatascienceComponent } from './python-machine-learning-and-datascience/python-machine-learning-and-datascience.component';
import { PythonComponent } from './python/python.component';
import { PythoncoreandadvanceComponent } from './pythoncoreandadvance/pythoncoreandadvance.component';
import { ReactJsComponent } from './react-js/react-js.component';
import { TableauComponent } from './tableau/tableau.component';
import { WebdesiginingComponent } from './webdesigining/webdesigining.component';


import { AccordionModule } from 'ngx-accordion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import { TabsModule } from 'ngx-tabset';
import { AppModule } from 'src/app/app.module';
import { CommonsModule } from '../common/common.module';
import { ItcoursesmainpageComponent } from './itcoursesmainpage/itcoursesmainpage.component';
import { GcpCourseComponent } from './gcp-course/gcp-course.component';
import { CplusplusComponent } from './cplusplus/cplusplus.component';
import { AutomationTestingComponent } from './automation-testing/automation-testing.component';
import { Meta } from '@angular/platform-browser';
import { RelatedcoursesComponent } from './relatedcourses/relatedcourses.component';


@NgModule({
  declarations: [CLanguageComponent,
    AngularjsComponent,
   
    DatascienceComponent,
    PythonMachineLearningAndDatascienceComponent,
    JavaComponent,
    MulesoftComponent,
    PhpMySqlComponent,
    PythonComponent,
    WebdesiginingComponent,
    DotnetComponent,
    MsofficeComponent,
    ManualtestingComponent,

    AzureComponent,
    CoreJavaComponent,
    DevopsComponent,
    OracleComponent,
    ReactJsComponent,
    TableauComponent,
    PowerBIComponent,

    AWSComponent,
    
    PythonDjangoComponent,
    PythonMachineLearningAndDatascienceComponent,
    PythoncoreandadvanceComponent,
    AdvancedjavaComponent,
    AndroidComponent,
    ItcoursesmainpageComponent,
    GcpCourseComponent,
    CplusplusComponent,
    AutomationTestingComponent,
    RelatedcoursesComponent
  
  
  ],
  imports: [
    CommonModule,
    ITCOURSESRoutingModule,TabsModule, AccordionModule,
    NgxScrollTopModule, CarouselModule,CommonsModule
  ], 
  providers:[Meta]
})
export class ITCOURSESModule { }
