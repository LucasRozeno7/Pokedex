import { Component, EventEmitter, OnInit, Output, ViewChild, } from '@angular/core';
import { HttpService } from '../services/http.service';
import { IonContent, NavController } from '@ionic/angular';

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.page.html',
  styleUrls: ['./kanto.page.scss'],
})
export class KantoPage implements OnInit {
  @Output() public emmitSearch: EventEmitter<String> = new EventEmitter();
  public search(value: string) {
    const filter = this.setAllpokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    })
    this.getAllpokemons = filter;
  }

  private setAllpokemons: any;
  public getAllpokemons: any;

  constructor(private httpService: HttpService,
    private navCtrl: NavController
  ) { }


  @ViewChild(IonContent) content!: IonContent;


  ngOnInit(): void {
    this.httpService.apiListAllPokemons.subscribe(
      res => {
        this.setAllpokemons = res.results;
        this.getAllpokemons = this.setAllpokemons
        console.log(this.getAllpokemons)
      }
    );
  }

  showHome() {
    this.navCtrl.navigateForward('home')
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }


  public brilhante: boolean = true
  change(){
   return
  }
 
  public genero: boolean = true
  mudar(){
   return
  }

}
