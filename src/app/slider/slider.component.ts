import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  {

  slideIndex: number = 1;

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    let i: number;
    let slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
    let captionText: HTMLElement | null = document.getElementById("caption");

    if (captionText) {
      if (n > slides.length) { this.slideIndex = 1; }
      if (n < 1) { this.slideIndex = slides.length; }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      if (slides[this.slideIndex - 1]) {
        slides[this.slideIndex - 1].style.display = "block";
      }

      if (dots[this.slideIndex - 1]) {
        dots[this.slideIndex - 1].className += " active";
      }

      if (captionText && dots[this.slideIndex - 1]) {
        captionText.innerHTML = dots[this.slideIndex - 1].getAttribute("alt") || "";
      }
    }
  }
}
