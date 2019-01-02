import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IHero } from '../hero';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public heroes = [];
  public selectedId;
  public hero: IHero;
  constructor(private _heroService: HeroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._heroService.getHeroes()
      .subscribe(data => this.heroes = data);

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      let id = parseInt(paramMap.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(hero) {
    this.router.navigate(['/detail', hero.id]);
  }

  isSelected(hero) {
    this.hero = hero;
    return hero.id === this.selectedId;
  }

delete(hero){
  this.heroes = this.heroes.filter(h => h !== hero);
  this._heroService.deleteHero(hero).subscribe();
}

add(name: string){
  this._heroService.addHero( {name} as IHero).subscribe(data => this.heroes.push(data));
}
}
