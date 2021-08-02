import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constructor } from 'src/app/definitions';
import { ConstructorsService } from 'src/app/shared/services/constructors.service';
import { ImagesService } from 'src/app/shared/services/images.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit {

  season: string;
  constructorsList: Constructor[] = [];

  constructor(
    private route: ActivatedRoute,
    private images: ImagesService,
    private constructors: ConstructorsService, 
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.season = params.season;
      this.constructors.getConstructorsBySeason(this.season).subscribe((response: any) => {
        this.constructorsList = response.MRData.ConstructorTable.Constructors;
      });
    });
  }

}
