import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 주입받을 변수로서 hero 데이터를 전달 받는다.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
