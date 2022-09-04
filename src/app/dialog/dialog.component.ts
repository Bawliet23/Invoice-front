import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup , FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productForm !: FormGroup;
  actionBtn:string= "Save";
  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName:['', Validators.required],
      price:['',Validators.required ],
    });
    if (this.editData){
      this.actionBtn = "Update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['price'].setValue(this.editData.price);
    }

  }

  addProduct(){
      console.log(this.productForm.value);
      // post then get date about product in services, example :
    // if(this.productForm.valid){
    //   this.api.postProduct(this.productForm.value)
    //     .subscribe({
    //       next:(res)=>{
    //         alert("Product added succesfully");
    //            this.productForm.reset();
    //       },
    //       error:() => {
    //         alert("Error while adding the product")
    //       }
    //     })
    // }
  }

}
