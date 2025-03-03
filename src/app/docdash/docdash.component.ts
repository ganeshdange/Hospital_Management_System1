import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {

  patients:Patient[]=[];
  constructor(private patientService : PatientService, private router : Router, private docAuth : DocauthService){}

  ngOnInit():void{
    this.getPatient();
  }

  getPatient(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

  update(id:number){
    this.router.navigate(['update-patient',id]);
  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatient();
    })
  }

  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

  logout(){
    this.docAuth.logout();
    this.router.navigate(['home']);
  }
}
