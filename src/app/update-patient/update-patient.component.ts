import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent {

  id:number=0;
  constructor(private rote : ActivatedRoute, private patientService : PatientService, private router : Router){}
  patient : Patient = new Patient();

  ngOnInit():void{
    this.id=this.rote.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient=data;
    })
  }
  
  onSubmit(){
    this.patientService.updatePatient(this.id, this.patient).subscribe(data=>{
      console.log(data);
      this.goToDocdash();
    })
  }

  goToDocdash(){
    this.router.navigate(['docdash']);
  }
}
