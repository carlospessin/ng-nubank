import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../node_modules/keen-slider/keen-slider.min.css'
  ]
})
export class AppComponent {
  title = 'ng-nubank';

  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>

  @ViewChild('cardSliderRef')
  cardSliderRef!: ElementRef<HTMLElement>

  @ViewChild('discoverSliderRef')
  discoverSliderRef!: ElementRef<HTMLElement>

  slider?: KeenSliderInstance
  cardSlider?: KeenSliderInstance
  discoverSlider?: KeenSliderInstance

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 4.8,
        spacing: 2
      }
    });

    this.cardSlider = new KeenSlider(this.cardSliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 1.5,
        spacing: 14
      }
    });

    this.discoverSlider = new KeenSlider(this.discoverSliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 1.5,
        spacing: 14
      }
    })
  }
}
