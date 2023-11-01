import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id==id)!;
  }
  getAllFoodByTag(tag:string) :Foods[]{
    return tag == "All" ?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
 
  }
    

  getAllTag():Tag[]{
    return [
      {name:'All',count:12},
      {name:'FastFood',count:9},
      {name:'SlowFood',count:3},
      {name:'Pizza',count:4},
      {name:'Burger',count:2},
      {name:'Soup',count:2},
      {name:'ColdCoffee',count:1},
      {name:'Maggi',count:2},
      {name:'Momo',count:1},
    ];
  } 
  getAll(): Foods[]{
    return [
      { 
         id: 1,
         name: 'Veggie Pizza',
         cookTime: '10-20',
         price: 10,
         favorite: false,
         origins: ['italy'],
         star: 4.5,
         imageUrl: '/assets/images/food1.jpeg',
         tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id:2,
        name:'Cheese Pizza',
        cookTime:'20-30',
        price:11,
        favorite:true,
        origins:['persia'],
        star:4.5,
        imageUrl:'/assets/images/food2.jpeg',
        tags:['FastFood','Pizza','Lunch'],
     },
     {
      id:3,
      name:'Margherita Pizza',
      cookTime:'10-15',
      price:9,
      favorite:false,
      origins:['germany'],
      star:4.5,
      imageUrl:'/assets/images/food3.png',
      tags:['FastFood','Pizza','Lunch'],
   },
   {
    id:4,
    name:'Pappereni Pizza',
    cookTime:'10-15',
    price:12,
    favorite:true,
    origins:['Indian'],
    star:2.1,
    imageUrl:'/assets/images/food4.png',
     tags:['FastFood','Pizza','Lunch'],
 },
 {
  id:5,
  name:'Allo Tikki Burger',
  cookTime:'20-30',
  price:5,
  favorite:false,
  origins:['US'],
  star:5,
  imageUrl:'/assets/images/food5.jpeg',
  tags:['FastFood','Burger','Lunch'],
},
{
  id:6,
  name:'Salmon Burger',
  cookTime:'10-15',
  price:7,
  favorite:true,
  origins:['france'],
  star:3.3,
  imageUrl:'/assets/images/food6.jpeg',
  tags:['FastFood','Burger','Lunch'],
},
{
  id:7,
  name:'ColdCoffee Normal',
  cookTime:'10-20',
  price:4,
  favorite:false,
  origins:['germany'],
  star:3.2,
  imageUrl:'/assets/images/food7.jpeg',
  tags:['SlowFood','ColdCoffee'],
},
{
  id:8,
  name:'Veg Soup',
  cookTime:'10-20',
  price:6,
  favorite:true,
  origins:['Indian'],
  star:4,
  imageUrl:'/assets/images/food8.jpg',
  tags:['SlowFood','Soup'],
},
{
  id:9,
  name:'Tomato Soup',
  cookTime:'10-20',
  price:8,
  favorite:true,
  origins:['france'],
  star:4.5,
  imageUrl:'/assets/images/food9.jpeg',
  tags:['SlowFood','Soup'],
},
{
  id:10,
  name:'Chilli Maggi',
  cookTime:'10-20',
  price:4,
  favorite:true,
  origins:['france'],
  star:4.5,
  imageUrl:'/assets/images/food10.jpg',
  tags:['FastFood','Maggi'],
},
{
  id:11,
  name:'Egg Maggi',
  cookTime:'10-20',
  price:8,
  favorite:true,
  origins:['france'],
  star:4.5,
  imageUrl:'/assets/images/food11.jpg',
  tags:['FastFood','Maggi'],
},
{
  id:12,
  name:'Momo',
  cookTime:'10-20',
  price:7,
  favorite:true,
  origins:['france'],
  star:4.5,
  imageUrl:'/assets/images/food12.jpg',
  tags:['FastFood','Momo'],
}

 ];
}
}

