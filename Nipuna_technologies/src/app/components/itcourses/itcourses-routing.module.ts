import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedjavaComponent } from './advancedjava/advancedjava.component';
import { AndroidComponent } from './android/android.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { AutomationTestingComponent } from './automation-testing/automation-testing.component';
import { AWSComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';
import { CLanguageComponent } from './c-language/c-language.component';
import { CoreJavaComponent } from './core-java/core-java.component';
import { CplusplusComponent } from './cplusplus/cplusplus.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { DevopsComponent } from './devops/devops.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { GcpCourseComponent } from './gcp-course/gcp-course.component';
import { ItcoursesmainpageComponent } from './itcoursesmainpage/itcoursesmainpage.component';
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


const routes: Routes = [
  { path: 'mule-soft-training-institute-guntur', component: MulesoftComponent,
  data: {
    title: "Best Mule Training Institute in Guntur.",
    description : "Build your career with MuleSoft Training in Guntur. Learn in-demand skills from experts and earn industry-recognized certifications through personalised learning  "
  } },
  { path: 'java-fullstack-training-institute-guntur', component: JavaComponent,
  data: {
    title: "Best Java Fullstack Training Institute in Guntur",
    description : "Are you looking for the best Java Course Training Institute in Guntur? Nipuna Technologies provides Full Stack Java Course in Guntur with 100% placement assistance. Learn the advanced concepts of Core Java and Advanced Java classes in Guntur."
  } },
  { path: 'angular-js-training-institute-guntur', component: AngularjsComponent,
  data: {
    title: "Best AngularJs Training Institute in Guntur",
    description : "Best AngularJS Training in Guntur offered by Nipuna Technologies. Live project based angularjs training course with unlimited... To provide you with the knowledge and skill-set specific to Angular JS, that will come in handy while searching for a job in this domain."
  } },

  { path: 'python-with-coreandadvance', component: PythoncoreandadvanceComponent,
  data: {
    title: "Best Python Training Institute in Guntur ",
    description : "Python Training in Guntur Offered by Certified experts at 25% Discount Build your Career in Python Programming. It’s a Right time to learn Python Course, Nipuna Technologies provides Best Python Training in Guntur with placement."
  } },
  { path: 'advanced-java-training-institute-guntur', component: AdvancedjavaComponent,
  data: {
    title: "Advanced Java Training Institute Guntur | Online Classes Avaliable ",
    description : "Our advanced Java course in Guntur at Nipuna Technologies. Gain Extensive knowledge on advanced Java programming concepts and popular frameworks."
  } },
  { path: 'c-language-training-institute-guntur', component: CLanguageComponent,  data: {
    title: "Best c language training institute",
    description : "Nipuna Technologies is the Best C Language Coaching Centre & Training Institute in Guntur. Get advanced training of object-oriented C programming language in Guntur."
  } },
  { path: 'php-mysql-training-institute-guntur', component: PhpMySqlComponent,
  data: {
    title: "Best php mysql training",
    description : "Take an advanced PHP MySQL Course in Guntur at Nipuna Technologies. We Rated as Best PHP/MySQL Training Institute in Guntur. Our online PHP/MySQL Training in Guntur lets you gain proficiency in PHP language and MySQL database management system with our Industry Experts Trainers."
  } },
  { path: 'Python-training-institute-guntur', component: PythonComponent,
  data: {
    title: "Best Python training training institute guntur",
    description : "Best Online/Offline Full Stack with Python Django Training Institute in Guntur. Learn from industry experts. 100% placement Oriented, Learn Full Stack Development Training institute in Guntur, Free demo available."
  } },

  { path: 'webdesign-training-institute-guntur', component: WebdesiginingComponent,
  data: {
    title: "Best Webdesign Training Institute guntur",
    description : "Learn the best web designing course in Guntur with 100% Placement Assistance at Nipuna Technologies. Upgrade your knowledge and skills with our web designing training Institute in Guntur. In Web Designing classes we will train you Photoshop, Flash, HTML5, CSS3, Java Script, JQUERY, Bootstrap, WordPress Trainings under industry expert trainers."
  } },
  { path: 'dot-net-training-institute-guntur', component: DotnetComponent,
  data: {
    title: "Best Dot net training training institute guntur",
    description : "Nipuna Technologies is best .net Training Institute in Guntur Best Dotnet MVC (C#), ASP Core, Core MVC Training In Guntur. 100% Realtime and JOB Oriented Dot Net Course Training."
  } },
  {path: 'Android-training-institute-guntur',component: AndroidComponent,
  data: {
    title: "Best Android training training institute-guntur",
    description : "Learn Android App Development course in Guntur at Nipuna technologies in Affordable Fees from Best Android App Development Training Institute in Guntur with 100% placement assistance."
  }},
  { path: 'msoffice-training-institute-guntur', component: MsofficeComponent,
  data: {
    title: "Best msoffice training institute guntur",
    description : "Learn how to master in MS Office Course with in Two Moths. Master the entire Microsoft Office suite, Excel, Word, PowerPoint, Outlook in Guntur, Nipuna Technologies."
  } },
  { path: 'ManualTesting-training-institute-guntur', component: ManualtestingComponent,
  data: {
    title: "Best ManualTesting training institute guntur",
    description : "Nipuna Technologies provides the Best Manual Testing Training in Guntur with 100% placement assistance. #1 Manual Testing Online Course from Real-time expert trainer. "
  } },
  { path: 'microsoft-azure-training-institute-guntur', component: AzureComponent,
  data: {
    title: "Best microsoft azure training institute-guntur",
    description : "Take Azure training in Guntur from Microsoft authorized training partner. Nipuna Technologies have an expert for Azure certification training delivery.... In the age of the Internet the cloud computing is the key to Success. Microsoft Azure Training in Guntur."
  } },
  { path: 'core-java-training-institute-guntur', component: CoreJavaComponent,
  data: {
    title: "Best core Java training institute guntur",
    description : "Our Core Java Course in Guntur at Nipuna Technologies is the right place to learn the Java programming languages with recent frameworks that are available in the market. 100% Job Assistance."
  } },
  { path: 'devops-training-institute-guntur', component: DevopsComponent,
  data: {
    title: "Best devops training institute guntur",
    description : "Nipuna is the best Online/Offline DevOps Training Institute in Guntur, Providing DevOps Training using Real-Time Projects Scenarios. Enroll Globally accredited DevOps course in Guntur with certification & 100% placement"
  } },
  { path: 'oracle-sql-plsql-training-institute-guntur', component: OracleComponent,
  data: {
    title: "Best oracle sql plsql training institute guntur" ,
    description : "Start your Career with Oracle SQL/PlSQL Course Training Institute in Guntur at Nipuna Technologies. Our Oracle SQL/PlSQL Training offers Oracle database and other advanced RDBMS concepts."
   } },
  { path: 'react-js-training-institute-guntur', component: ReactJsComponent,
  data: {
    title: "Best react js training institute guntur",
    description : "Nipuna Technologies Offers React Js Development Course by Expert Trainers. This course will help you become React JS Professional in Two months. React JS is the most demanding skill with a lot of popularity among tech companies worldwide."
  } },
  { path: 'tableau-training-institute-guntur', component: TableauComponent,
  data: {
    title: "Best tableau training-institute-guntur",
    description : "Enrol Tableau training in Guntur at Nipuna Technologies provides Tableau online courses on managing data, creating visualisations, and creating dashboards to help you make better business decisions."
  } },
  { path: 'power-bi-training-institute-guntur', component: PowerBIComponent,
  data: {
    title: "Best power bi training institute guntur",
    description : "Power BI training in Guntur at Nipuna Technologies helps you master the Power BI Course advanced concepts. Our Power BI Online Certification course in Guntur Offers Real-Time Projects with Expert Trainers."
  } },
  { path: 'aws-training-institute-guntur', component: AWSComponent,
  data: {
    title: "Best aws training institute guntur",
    description : "Learn AWS Web Services (AWS) Training in Guntur from Nipuna Technologies. Best AWS Course for solution architect with Certification. Amazon Web Services has been the world’s most comprehensive and broadly adopted cloud platform"
  } },
  { path: 'datascience-training-institute-guntur', component: DatascienceComponent,
  data: {
    title: "Best datascience training institute guntur",
    description : "Data Science Course in Guntur at Nipuna Technologies and get trained on Live projects with expert trainers & 100% Placements"
  } },
  { path: 'Python-with-Django-training-institute-guntur', component: PythonDjangoComponent,
  data: {
    title: "Best Python with Django training institute guntur",
    description : "Django with Python Training in Guntur. Learn Django web framework, Django framework projects, MVT architecture, and build a Django web application. Python Django course Training helps you master Django web & REST framework"
  } },
  { path: 'Python-with-machine-learning-datascience', component: PythonMachineLearningAndDatascienceComponent,
  data: {
    title: "Best Python with machine learning training institute-guntur",
    description : "Become a professional Data Scientist and learn how to use NumPy, Pandas, Machine Learning Algorithms. Learn Python for Data Science & ML from Nipuna Technologies. hands-on course you’ll learn how to program using Python with ML."
  } },
  { path: 'it-courses-training-institute-guntur', component: ItcoursesmainpageComponent,
  data: {
    title: "Best it courses training guntur",
    description : "Nipuna Technologies offers IT Software Course Training in Guntur on various technologies like Python, Java, Web Designing, AWS, .NET, Azure with placements for Fresher’s and Experienced Professionals."
  } },
  { path: 'gcp-training-institute-guntur', component: GcpCourseComponent,
  data: {
    title: "Best gcp training institute guntur",
    description : "Are you looking for GCP Course Training Institute in Guntur. Join Nipuna for the Best GCP Certification & Training in Guntur. Get In-Depth Google Cloud Platform training with Live Projects. Best GCP Course Training in Guntur."
  } },
  { path: 'c++-training-institute-guntur', component: CplusplusComponent,
  data: {
    title: "Best c++ training training institute guntur",
    description : "Nipuna Technologies is the Best C++ Language Coaching Centre & Training Institute in Guntur. C, C ++ is a basic building block for each and every programming language, to develop programming techniques."
  } },
  { path: 'automation-testing-training-institute-guntur', component: AutomationTestingComponent,
  data: {
    title: "Best automation testing training institute guntur",
    description : "Learn Automation Testing Course in Guntur at Nipuna Technologies is one of the best  Automation testing Training Institute in Guntur with 100% placement support. We also offer an Automation Testing Online Course."
  } },




 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ITCOURSESRoutingModule { }
