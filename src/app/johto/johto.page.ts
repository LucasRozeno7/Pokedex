import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-johto',
  templateUrl: './johto.page.html',
  styleUrls: ['./johto.page.scss'],
})
export class JohtoPage implements OnInit {

  @Output() public emmitSearch: EventEmitter<String> = new EventEmitter();
  public search(value: string) {
    const filter = this.setAllpokemons2.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    })
    this.getAllpokemons2 = filter;
  }

  private setAllpokemons2: any;
  public getAllpokemons2: any;
 

  constructor(private httpService: HttpService,
    private navCtrl: NavController
  ) { }


  @ViewChild(IonContent) content!: IonContent;


  ngOnInit(): void {
    this.httpService.apiListAllPokemons2.subscribe(
      res => {
        this.setAllpokemons2 = res.results;
        this.getAllpokemons2 = this.setAllpokemons2
        console.log(this.getAllpokemons2)
      }
    );
  }

  showHome() {
    this.navCtrl.navigateForward('home')
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

}