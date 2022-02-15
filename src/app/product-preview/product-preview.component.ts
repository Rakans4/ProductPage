import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  images: string[] = [];
  thumbnails: string[] = [];
  selectedImage: string = '';

  @Input() modalOpen!: boolean;
  @Output() onOpenModal = new EventEmitter<any>();
  @Output() onCloseModal = new EventEmitter<any>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.images = this.productService.product.images;
    this.thumbnails = this.productService.product.thumbnails;
    this.selectedImage = this.images[0]? this.images[0] : '';
    console.log(this.modalOpen);
  }
  
  selectImage(image: string): void {
    console.log(image)
    this.selectedImage = image.replace('-thumbnail', '');
    console.log(this.selectedImage)
  }

  openModal(): void {
    this.onOpenModal.emit(true);
  }

  closeModal(): void {
    this.onCloseModal.emit(false);
  }

  nextImage(): void {
    let index = this.images.indexOf(this.selectedImage);
    this.selectedImage = index + 1 > this.images.length-1? this.images[index] : this.images[index+1]
    console.log(this.selectedImage.substring(0,this.selectedImage.length-4));
  }

  previousImage() {
    let index = this.images.indexOf(this.selectedImage);
    this.selectedImage = index - 1 < 0? this.images[index] : this.images[index-1]
  }

}
