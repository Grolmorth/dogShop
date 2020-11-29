import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {

  navlink = [
    ['Karma', 'karma', [['Karma Sucha', 'karma-sucha'], ['Karma mokra', 'karma-mokra'], ['Przekąski i napoje', 'przekaski-i-napoje'], ['BARF/karma mrożona', 'barf-karma-mrozona'], ['Suplementy i hodowla', 'suplementy-i-hodowla']]],
    ['Miejsca do spania dla psów', 'miejsca-do-spania-dla-psow', [['Legowiska', 'legowiska'], ['Poduszki', 'poduszki'], ['Materace', 'materace'], ['Koce', 'koce'], ['Kosze', 'kosze'], ['Budy', 'budy']]]
  ]




  constructor() {

  }

}
