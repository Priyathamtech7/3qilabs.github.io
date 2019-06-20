import { Component, OnInit } from '@angular/core';
import { EventEmit } from '../EventHandler';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
Detail:any = {};
experimentDetails;
multiselect:any = {};
  constructor(private Emitter: EventEmit) { }

  ngOnInit() {
  	this.experimentDetails = {
    "experiments": [
        {
            "artifact_location": "/mlruns/elasticnet",
            "lifecycle_stage": "active",
            "name": "elasticnet_wine",
            "experiment_id": "1"
        },
        {
            "artifact_location": "/mlruns/elasticnet",
            "lifecycle_stage": "active",
            "name": "elasticnet_wine1",
            "experiment_id": "2"
        },
        {
            "artifact_location": "/mlruns/elasticnet",
            "lifecycle_stage": "active",
            "name": "elasticnet_wine3",
            "experiment_id": "3"
        },
        {
            "artifact_location": "./mlruns/0",
            "lifecycle_stage": "active",
            "name": "Default",
            "experiment_id": "0"
        }
    ]
}
  	this.Emitter.on().subscribe(message => {
	      if (message) {
	        for (var i = 0; i < this.experimentDetails.experiments.length; i++) {
	        	if(this.experimentDetails.experiments[i].experiment_id ===  message.key){
	        		this.Detail = this.experimentDetails.experiments[i]
	        	}
	        }
	        console.log(this.Detail)
	      }
	    })
  }

  
	  
}
