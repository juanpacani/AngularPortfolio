import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile-knowledge',
  imports: [],
  templateUrl: './profile-knowledge.html',
  styleUrl: './profile-knowledge.scss'
})
export class ProfileKnowledge {
  currentSlide: number = 0;
  slideInterval: number = 3000;
  intervalId: any;

  slider?: HTMLElement;
  slides?: NodeListOf<HTMLElement>;

  sliderNavs?: HTMLElement;
  slidesNavs?: NodeListOf<HTMLButtonElement>;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.slider = this.el.nativeElement.querySelector('#slider') as HTMLElement;
    this.slides = this.slider.querySelectorAll('section');

    this.sliderNavs = this.el.nativeElement.querySelector('#slider-nav');
    this.slidesNavs = this.sliderNavs!.querySelectorAll('button');

    this.slider.addEventListener('scroll', this.onScroll.bind(this));

    this.updateActiveNav();
  }

  //EVENTOS DE PRUEBA PARA HACER SCROLL CON EL MOUSE CLICKEANDO
  pressed = false;
  startX = 0;
  startScrollLeft = 0;

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
    this.slider.scrollLeft = this.startScrollLeft - dx; // ← esto dispara onScroll()
  }

  onMouseUp() {
    this.pressed = false;
  }

  onMouseLeave() {
    this.pressed = false;
  }
  //AQUI TERMINAN LOS EVENTOS DE PRUEBA


  onScroll() {
    if (!this.slider || !this.slides) return;

    const scrollLeft = this.slider.scrollLeft;
    const slideWidth = this.slider.clientWidth;
    const index = Math.round(scrollLeft / slideWidth);

    //ROUND redondea hacia abajo ceil hacia arriba
    if (index !== this.currentSlide) {
      this.currentSlide = index;
      this.updateActiveNav();
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  goToSlide = (n: number) => {
    this.currentSlide = (n - 1 + this.slides!.length) % this.slides!.length;
    const slide = this.slides![this.currentSlide] as HTMLElement;
    this.slider!.scrollLeft = slide.offsetLeft;
    this.updateActiveNav();
  }

  nextSlide = () => this.goToSlide(this.currentSlide + 2);


  updateActiveNav() {
    const buttons = Array.from(this.slidesNavs || []);
    buttons.forEach(btn => btn.classList.remove('nav-active'));
    const navSlide = buttons[this.currentSlide];
    if (navSlide) navSlide.classList.add('nav-active');
  }
}