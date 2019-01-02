import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { IHero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public heroes = [];
  public selectedId;
  heroId;
  constructor(private _heroService: HeroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._heroService.getHeroes()
    .subscribe(data => this.heroes = data.slice(1,5));

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });

    }

  onSelect(hero){
this.router.navigate(['/detail', hero.id]);
//this.router.navigate([hero.id], {relativeTo: this.route});
  }

}
