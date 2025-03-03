import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent {

  medicines:Medicine[]=[];
  constructor(private medicineService : MedicineService, private route : Router){}

  ngOnInit():void{
    this.getMedicine();
  }

  getMedicine(){
    this.medicineService.getMedicines().subscribe(data=>{
        this.medicines=data;
    })
  }

  update(id:number){
    this.route.navigate(['update-medicine',id])
  }

  delete(id : number){
    this.medicineService.deleteMedicine(id).subscribe(data=>{
      console.log(data);
      this.getMedicine();
    })
  }
}
