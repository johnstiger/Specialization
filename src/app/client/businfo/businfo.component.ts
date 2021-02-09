import { Component, OnInit,Input } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService } from '../../services/buses.service';
import { Router } from '@angular/router';
import axios from 'axios';



@Component({
  selector: 'app-businfo',
  templateUrl: './businfo.component.html',
  styleUrls: ['./businfo.component.css']
})
export class BusinfoComponent implements OnInit {
  
  @Input() bus : any
  buses: Bus[];

  constructor(
    private busesService: BusesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  book(id){
    this.busesService.currentBus = this.bus;
    this.router.navigate(["/userhome/client/booking/"]);
    
  }

  getBuses() {
    return this.busesService.getBuses;
  }



}
