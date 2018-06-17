// 3. 영웅목록을 목적으로 만들어진 컴포넌트
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // 기작성된 영웅목록 데이터를 변수에 대입한다.
  heroes:Hero[] = HEROES;
  tests:any[] = [{"hellow_id":"japen","hellow":"こんにちは"},{"hellow_id":"korea","hellow":"안녕하세요."}];

  // 현재 목록에서 선택된 영웅데이터를 대입할 변수.
  selectedHero: Hero;


  constructor() { }

  ngOnInit() {

  }
  //목록 선택시 작동할 함수로 html 에서 엥귤러 문법으로 호출한다.
  onSelect(hero: Hero): void {
    this.selectedHero = hero; // html 에서 보내준 인자값을 대입한다.
  }
}
