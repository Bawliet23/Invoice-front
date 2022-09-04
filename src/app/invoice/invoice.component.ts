import { Component, Inject, Injectable, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { InvoiceService } from '../services/invoice.service';
import { FormArray } from '@angular/forms';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';
import { A11yModule } from '@angular/cdk/a11y';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {



  invoiceList:any;
  listData: any;
  url: any;
  msg = "";


  selectFile(event: any) {
    if(!event.target.file[0] || event.target.file[0].length == 0){
        this.msg = 'You must select an image';
        return;
    }

    let mimeType = event.target.file[0].type;

    if (mimeType.match(/image\/*/) == null) {
        this.msg = "Only images are supported";
        return;
    }

    let reader = new FileReader();

    reader.readAsDataURL(event.target.file[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
    }

  }

  download(){
      this.invoiceService.download(7).then(()=>console.log("success")).catch(err=>console.log(err))
  }

// anytime the user clicks on add new row a new row should apear under the old one.

  addNewRow(){

      this.listData.push(this.invoiceForm.value);
      this.invoiceForm.reset();
  }

  Reset(){
      this.invoiceForm.reset();
  }

  Delete(_element: any){
        this.listData.forEach((value: any,index: any)=>{
          if(value == _element)
          this.listData.splice(index, 1);
        });


  }



  ngOnInit(): void {
    this.invoiceList = this.invoiceList.getInvoices().subscribe((_data: any) => {
      this.invoiceList = _data;
    })
  }
  _dateAdapter!: DateAdapter<Date, any>;

  // invoiceForm = new FormGroup ({
  //   recipient: new FormControl('', Validators.required),
  //   reciever: new FormControl('', Validators.required),
  //   address: new FormControl(''),
  //   // start: new FormControl<Date | null>(null),
  //   // end: new FormControl<Date | null>(null),
  //   description: new FormControl(''),
  //   quantity: new FormControl(''),
  //   tot1: new FormControl(''),

  // });

  invoiceForm:  FormGroup;

  constructor(private fb:FormBuilder,private invoiceService :InvoiceService) {
    this.invoiceForm = this.fb.group ({
      recipient: ['',Validators.required],
      reciever: ['',Validators.required],
      address: ['',Validators.required],
      description: ['',Validators.required],
      quantity: ['',Validators.required],
      tot1: ['',Validators.required],
      remarque:[''],
      terms:[''],
      tax:[''],
      redux:[''],
      livraison:[''],
      MontantPayee:[''],
    })
  }


  // invoiceForm = this.FormBuilder.group({
  //   description: ['',  Validators.required],
  //   quantity: [''],
  //   tot1: ['']
  // })




  // showPreview(event: { target: { files: string | any[]; }; }) {
  //   if(event.target.files.length > 0){
  //     let src = URL.createObjectURL(event.target.files[0]);
  //     let preview = document.getElementById("file-ip-1-preview") as HTMLImageElement ;
  //     preview.src = src;
  //     preview.style.display = "block";
  //   }
  // }









  prix = 0;
  input1= 1;
  somme = 0;
  tx = 0;
  redx = 0;
  livr = 0;
  montPayee = 0;

  montantPayee(): number {
    return this.montPayee;
  }

  montant(): number{
    let x:number = this.somme = this.prix * this.input1;
   return x;
  };

  sold(): number{
    const Tax = (this.somme)*(this.tx/100);
    const Redux = (this.somme)*(this.redx/100);
    let solution:number = (this.somme) - Redux  + Tax  + (this.livr);

    return solution;
  }


  // ngOnInit(): void {
  // }

  // handlePrint() {
  //   window.print();
  // }

  get recipient(){
    return this.invoiceForm.get('recipient');
  }

  get reciever(){
    return this.invoiceForm.get('reciever');
  }

  get address(){
    return this.invoiceForm.get('address');
  }

  get description(){
    return this.invoiceForm.get('description');
  }

  get quantity(){
    return this.invoiceForm.get('quantity');
  }

  get tot1(){
    return this.invoiceForm.get('tot1');
  }

  get tax(){
    return this.invoiceForm.get('tax');
  }

  get redux(){
    return this.invoiceForm.get('redux');
  }

  get livraison(){
    return this.invoiceForm.get('livraison');
  }

  get MontantPayee(){
    return this.invoiceForm.get('MontantPayee');
  }

  get remarque(){
    return this.invoiceForm.get('remarque');
  }

  get terms(){
    return this.invoiceForm.get('terms');
  }





}



