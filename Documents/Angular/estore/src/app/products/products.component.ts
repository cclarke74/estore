import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product} from 'src/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] =[
    new Product(101,"Adidas Alphabounce Shoe", 3000, 4.5),
    new Product(201,"Samsung Led TV", 30000, 5.0),
    new Product(301,"Cadbury 5 Star", 20, 4.5),
    new Product(401,"Apple iPhone 11", 53000, 4.8),
    new Product(501,"Samsung Fold", 73000, 4.3)
  ];
   
showProducts = true;

categories = [
 { title: "Select Category", total: 1000},
 { title: "Home & Kitchen", total: 30},
 { title: "Furniture", total: 300},
 { title: "Clothing", total: 12300}
]

productForm = new FormGroup(
  {
    pid: new FormControl(0),
    name: new FormControl(''),
    price: new FormControl(0),
    ratings: new FormControl(0),
    categories: new FormControl(this.categories[0])
  }
)

addProductToDB():void{

}
}


  
