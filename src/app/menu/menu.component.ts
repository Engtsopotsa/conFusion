import { Component, OnInit } from '@angular/core';

// import dish interface
import { Dish } from '../shared/dish';

// import dishes constant

// services
import { DishService } from '../services/dish.service';

// moved the dishes property into the constant

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  // hard coded dishes
  dishes!: Dish[];
  selectedDish: Dish = {
    id: '',
    name: '',
    image: '',
    category: '',
    featured: false,
    label: '',
    price: '',
    description: '',
    comments: [],
  };

  onSelect(dish: Dish) {
    this.selectedDish = dish;
    console.log('Selected dish:', dish);
  }

  constructor(private dishService: DishService) {}

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }
}
