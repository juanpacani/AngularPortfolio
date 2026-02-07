import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'mol-profile-knowledge',
  imports: [NgFor],
  templateUrl: './profile-knowledge.html',
  styleUrl: './profile-knowledge.scss'
})
export class ProfileKnowledge {
  //Contenido de los knowledge 
  knowledgeDataMap = {
    1: [
      "multimedia/images/knowledge/languages/typescript.svg",
      "multimedia/images/knowledge/languages/javascript.svg",
      "multimedia/images/knowledge/languages/dart.svg",
      "multimedia/images/knowledge/languages/java.svg",
    ],
    2: [
      "multimedia/images/knowledge/frameworks/angular.svg",
      "multimedia/images/knowledge/frameworks/flutter.svg",
      "multimedia/images/knowledge/frameworks/nestjs.svg"
    ],
    3: [
      "multimedia/images/knowledge/db/postgresql.svg",
      "multimedia/images/knowledge/db/mysql.svg",
      "multimedia/images/knowledge/db/mongodb.svg"
    ],
    4: [
      "multimedia/images/knowledge/enviroments&plattforms/docker.svg",
      "multimedia/images/knowledge/enviroments&plattforms/firebase.svg",
      "multimedia/images/knowledge/enviroments&plattforms/linux.svg"
    ],
    5: [
      "multimedia/images/knowledge/developeTools&utilities/git.svg",
      "multimedia/images/knowledge/developeTools&utilities/github.svg",
      "multimedia/images/knowledge/developeTools&utilities/postman.svg",
      "multimedia/images/knowledge/developeTools&utilities/swagger.svg"
    ]
  };
  knowledgeDataArray = Object.values(this.knowledgeDataMap);

  getTechName(path: string): string {
    // Divide por '/' y toma el último elemento
    const fileName = path.split('/').pop() || '';
    // Remueve la extensión .svg
    return fileName.replace('.svg', '');
  }

  //Variables de navegación e instanciado de elementos
  currentSlide: number = 0;
  intervalId: any;

  slider?: HTMLElement;
  slides?: NodeListOf<HTMLElement>;

  sliderNavs?: HTMLElement;
  slidesNavs?: NodeListOf<HTMLButtonElement>;

  //Variables de scroll con click mantenido
  pressed = false;
  startX = 0;
  startScrollLeft = 0;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.slider = this.el.nativeElement.querySelector('#slider') as HTMLElement;
    this.slides = this.slider.querySelectorAll('section');

    this.sliderNavs = this.el.nativeElement.querySelector('#slider-nav');
    this.slidesNavs = this.sliderNavs!.querySelectorAll('button');

    this.slider.addEventListener('scroll', this.onScroll.bind(this));

    this.updateActiveNav();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  //Eventos de scroll con click mantenido
  onMouseDown(event: MouseEvent) {
    this.slider = this.el.nativeElement.querySelector('#slider') as HTMLElement;
    this.pressed = true;
    this.startX = event.pageX;
    this.startScrollLeft = this.slider.scrollLeft;
  }

  onMouseMove(event: MouseEvent) {
    this.slider = this.el.nativeElement.querySelector('#slider') as HTMLElement;
    if (!this.pressed) return;

    const dx = event.pageX - this.startX;
    this.slider.scrollLeft = this.startScrollLeft - dx;
  }

  onMouseUp() {
    this.pressed = false;
  }

  onMouseLeave() {
    this.pressed = false;
  }

  //Eventos de detección de scroll del mousepad
  onScroll() {
    if (!this.slider || !this.slides) return;

    const scrollLeft = this.slider.scrollLeft;
    const slideWidth = this.slider.clientWidth;
    const index = Math.round(scrollLeft / slideWidth);

    // ROUND redondea hacia abajo, ceil redondea hacia arriba
    if (index !== this.currentSlide) {
      this.currentSlide = index;
      this.updateActiveNav();
    }
  }


  //Eventos de navegación con botones
  goToSlide = (n: number) => {
    this.currentSlide = (n - 1 + this.slides!.length) % this.slides!.length;
    const slide = this.slides![this.currentSlide] as HTMLElement;
    this.slider!.scrollLeft = slide.offsetLeft;
    this.updateActiveNav();
  }

  nextSlide = () => this.goToSlide(this.currentSlide + 2);


  //Eventos de actualización de pantalla
  updateActiveNav() {
    const buttons = Array.from(this.slidesNavs || []);
    buttons.forEach(btn => btn.classList.remove('nav-active'));
    const navSlide = buttons[this.currentSlide];
    if (navSlide) navSlide.classList.add('nav-active');
  }
}