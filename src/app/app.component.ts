import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@HostListener("window:scroll", [])

export class AppComponent {
  openForm:FormGroup;
  isSlideChecked: boolean = true;

   max = 10;
  currentTime = 5;
  audioPlayer = {
    rs: 0
  }
  scrolled: boolean = false;
  businessTypes=["3 Months","6 Months","9 Months","12 Months"]
  toggleEvents: any;
  silderValue: any = "100000";
  silderValue2: any="10000";
  // for initialization
  constructor(private fb: FormBuilder) {
    this.scrolled = window.pageYOffset > 48;
  }
slectedValue;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 48;
  }


  ngOnInit() {
    this.openForm = this.fb.group({
      repayment : new FormControl("3 Months"),
      emi: new FormControl(""),
    })
    this.slectedValue = "3 Months"

    this.openForm.controls["emi"].setValue("₹ 15000")
}
toggleChanges($event: MatSlideToggleChange) {
  this.toggleEvents.push("Toggle Event: " + $event.checked)
  this.isSlideChecked = $event.checked;
}
onInputChange(event){
   this.silderValue = event.value
   console.log(this.silderValue)
}
onInputChangesilder2(event){
  this.silderValue2 = event.value

}
}