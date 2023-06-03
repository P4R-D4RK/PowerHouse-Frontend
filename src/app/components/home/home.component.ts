import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: Product[] = [
    {
      _id: '1',
      brand: 'Samsung',
      category: 'Brown Line',
      date: new Date(),
      description: 'Una televisión excelente',
      existence: 47,
      name: 'Pantalla LED Samsung 50" Ultra HD 4K Smart TV',
      providerPrice: 7000,
      unitPrice: 9500,
      image: 'https://m.media-amazon.com/images/I/81gA3wnHMEL.jpg'
    },
    {
      _id: '2',
      brand: 'Playstation',
      category: 'Brown Line',
      date: new Date(),
      description: 'Consola de videojuegos de la nueva generación',
      existence: 26,
      name: 'Consola PlayStation 5 825 GB',
      providerPrice: 9000,
      unitPrice: 11089,
      image: 'https://sm.ign.com/t/ign_latam/screenshot/default/ps5-vertical_t85p.1280.jpg'
    },
    {
      _id: '3',
      brand: 'Majority',
      category: 'Brown Line',
      date: new Date(),
      description: 'Reproductor de DVD multiregión: este reproductor de DVD región libre reproduce múltiples formatos de disco incluyendo DVD',
      existence: 73,
      name: 'Majority Scholars - Reproductor de DVD',
      providerPrice: 250,
      unitPrice: 490,
      image: 'https://m.media-amazon.com/images/S/aplus-media/sc/ff3a74f6-c16c-4027-ac7c-a9e0ef2e1559.__CR0,0,970,600_PT0_SX970_V1___.jpg'
    },
    {
      _id: '4',
      brand: 'Samsung',
      category: 'White Line',
      date: new Date(),
      description: 'El microondas convencional Samsung 1.1 pies cúbicos espejo será el mejor complemento que podrás tener en tu hogar, ya que con este increíble electrodoméstico podrás hacer más fácil y práctica tu estancia en la cocina.',
      existence: 80,
      name: 'Horno de microondas convencional Samsung',
      providerPrice: 3000,
      unitPrice: 4199,
      image: 'https://elektra.vtexassets.com/arquivos/ids/3767089-800-450?v=638128604623470000&width=800&height=450&aspect=true'
    },
    {
      _id: '5',
      brand: 'Hsense',
      category: 'White Line',
      date: new Date(),
      description: ' Lavasecadora Hisense de 15 kg, cuenta con un sistema Auto-dosign que detecta en automático la carga de lavado y distribuye la cantidad exacta de detergente, podrás disfrutar de tus prendas por más tiempo, ya que garantiza dejar tu ropa impecable, seca,',
      existence: 62,
      name: 'Lavasecadora Hisense electrónica 15 kg',
      providerPrice: 23200,
      unitPrice: 24499,
      image: 'https://ss634.liverpool.com.mx/xl/1113018981.jpg'
    },
    {
      _id: '6',
      brand: 'LG',
      category: 'White Line',
      date: new Date(),
      description: 'Las bebidas son más frías y la comida se mantiene más fresca con el desempeño uniforme y más rápido de DoorCooling.',
      existence: 105,
      name: 'Refrigerador Dúplex LG 28 pies cúbicos',
      providerPrice: 35340,
      unitPrice: 39999,
      image: 'https://ss634.liverpool.com.mx/xl/1109638508.jpg'
    },
    {
      _id: '7',
      brand: 'KitchenAid',
      category: 'Others',
      date: new Date(),
      description: ' Rendimiento excepcional: Motor de alta eficiencia diseñado para funcionar durante más tiempo. Engranajes totalmente metálicos diseñados para una operación larga. 10 Velocidades de mezcla. Diseño duradero: Bowl elevable del bowl de 7 cuartos.',
      existence: 30,
      name: 'Set batidora KitchenAid 10 velocidades',
      providerPrice: 13250,
      unitPrice: 15499,
      image: 'https://ss625.liverpool.com.mx/xl/1134578501.jpg'
    },
    {
      _id: '8',
      brand: 'Fullstar',
      category: 'Others',
      date: new Date(),
      description: ' Rebanadora de mandolina de múltiples cuchillas: ¿busca una forma poderosa de mejorar sus resultados de cocción? La cortadora de mandolina de Fullstar con acabado de acero inoxidable hace que cortar frutas y verduras sea más fácil y seguro que nunca y se ve elegante en cualquier cocina.',
      existence: 47,
      name: 'Fullstar 7-in-1 Mandoline Slicer for Kitchen,Vegetable Slicer, Veggie Chopper & Cheese Grater',
      providerPrice: 858,
      unitPrice: 615,
      image: 'https://i5.walmartimages.com/asr/84a99eb9-98a2-477a-af29-39c967dfa1bd.215ec7590273ad0cb4cea7a569925266.jpeg'
    },
    {
      _id: '9',
      brand: 'Cuisinart',
      category: 'Others',
      date: new Date(),
      description: ' La wafflera vertical Cuisinart te permitirá disfrutar en sencillos pasos de extraordinarios waffles con puntos precisos de cocción.',
      existence: 98,
      name: 'Wafflera vertical Cuisinart',
      providerPrice: 1340,
      unitPrice: 1699,
      image: 'https://ss625.liverpool.com.mx/xl/1077878625.jpg'
    },
  ];

  quantity = new FormControl<number>(0, [
    Validators.required,
    Validators.min(1),
  ]);

  shoppingCart: any[] = [];

  filterProducts(category: string) {
    const filteredProducts = this.products.filter(product => {
      return product.category == category;
    })

    return filteredProducts;
  }

  addToShoppingCart(id: string) {
    if(this.quantity.getRawValue()! <= 0) {
      alert('Cantidad inválida') 
      return;
    }
    this.shoppingCart.push([id, this.quantity.getRawValue()])
    console.log(this.shoppingCart);
    alert('Agregado al carrito!');
  }


}
