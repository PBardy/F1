import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CircuitsService } from 'src/app/shared/services/circuits.service';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.scss']
})
export class CircuitComponent implements OnInit {

  circuitId: string;

  constructor(private route: ActivatedRoute, private circuits: CircuitsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.circuitId = params.circuitId;
      this.circuits.getCircuitById(this.circuitId).subscribe((response: any) => {
        console.log(response);
      });
    });
  }

}
