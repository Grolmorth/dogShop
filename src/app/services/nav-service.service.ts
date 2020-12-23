import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {

  navlink = [
    ['Karma', 'karma', [['Karma Sucha', 'karma-sucha'], ['Karma mokra', 'karma-mokra'], ['Przekąski i napoje', 'przekaski-i-napoje'], ['BARF-karma mrożona', 'barf-karma-mrozona'], ['Suplementy i hodowla', 'suplementy-i-hodowla']]],
    ['Miejsca do spania', 'miejsca-do-spania', [['Legowiska', 'legowiska'], ['Poduszki', 'poduszki'], ['Materace', 'materace'], ['Koce', 'koce'], ['Kosze', 'kosze'], ['Budy', 'budy']]],
    ['Pielęgnacja i higiena', 'pielegnacja-i-higiena', [['Pielęgnacja sierści', 'pielegnacja-siersci'], ['Pielęgnacja zębów', 'pielegnacja-zebow'], ['Bandaże i kołnierze ochronne', 'bandaze-i-kolnierze-ochronne'], ['Środki odstraszające pchły i kleszcze', 'srodki-odstraszajace-pchly-i-kleszcze'], ['Pieluchy i higiena', 'pieluchy-i-higiena'], ['Maszynki do strzyżenia', 'maszynki-do-strzyzenia'], ['Pielęgnacja oczu i uszu', 'pielegnacja-oczu-i-uszu'], ['Środki uspokajające', 'srodki-uspokajajace']]],
    ['Zabawki', 'zabawki', [['Inteligentne zabawki', 'inteligentne-zabawki'], ['Zabawki dla szczeniąt', 'zabawki-dla-szczeniat'], ['Piłki', 'pilki'], ['Frisbee i zabawki do rzucania', 'frisbee-i-zabawki-do-rzucania'], ['Pluszowe zabawki', 'pluszowe-zabawki'], ['Zabawki wodne', 'zabawki-wodne'], ['Basen', 'basen']]],
  ]




  constructor() {

  }

}
