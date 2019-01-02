import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { IHero } from '../hero';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  public heroId;
  heroes: IHero[] = [];
  @Input() hero: IHero;
  public heroName;

  constructor(private route: ActivatedRoute, private router: Router, private _heroService: HeroService) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.heroId = id;
    //   const squareOdd = this.heroes
    // .pipe(
    //   filter(c => c.id == this.heroId)
    // );

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.heroId = id;
    });

    //this._heroService.getHeroes().subscribe(data => this.hero = (data.find(c => c.id = this.heroId)), error => console.log(error));
    this._heroService.getHero(this.heroId).subscribe(data => this.hero = data);
  }

  goPrevious() {
    let previousId = this.heroId - 1;
    this.router.navigate(['/detail', previousId]);
  }

  goNext() {
    let nextId = this.heroId + 1;
    this.router.navigate(['/heroes', nextId]);
  }

  goBack() {
    let selectedId = this.heroId ? this.heroId : null;
    this.router.navigate(['/dashboard', { id: selectedId }]);
    //this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }
  save() {
    this._heroService.updateHero(this.hero).
    subscribe(() => this.goBack());

  }

}
