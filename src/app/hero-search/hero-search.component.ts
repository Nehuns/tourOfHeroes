import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IHero } from '../hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  private searchTerm = new Subject<string>();
  public heroes: Observable<IHero[]>;
  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    //this._heroService.searchHero("").subscribe(data => console.log(data));
    this.heroes =
      this.searchTerm.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this._heroService.searchHero(term))
      )
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

}
