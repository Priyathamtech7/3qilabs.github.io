import { Component, OnInit } from '@angular/core';
import { EventEmit } from '../EventHandler';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	
  constructor(private Emitter: EventEmit) { }

  ngOnInit() {
  }
  experimentlist = {
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

  getCorrectId(arg) {
  	console.log(arg)
    let myobj: any = {};
    myobj.key = arg;
    this.Emitter.fire(myobj);
  }
}
