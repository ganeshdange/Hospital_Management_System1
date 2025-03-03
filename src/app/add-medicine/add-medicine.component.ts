import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent {

  constructor(private medicineService : MedicineService, private router : Router){}

  medicine:Medicine = new Medicine();

  onSubmit(){
    this.saveMedicine();
  }

  saveMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data => {
      console.log(data);
      this.goToMedicines();
    })
  }

  goToMedicines(){
    this.router.navigate(['/medicinelist'])
  }
}
