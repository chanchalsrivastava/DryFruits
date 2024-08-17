import { Component, OnInit } from '@angular/core';

import { CategoryModule } from './category.module';
// import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//   categoryObj: CategoryModule = { category_id: 2, category_name: '' };
//   data: CategoryModule[] = [];
//  user:any;
//  constructor(private api: ApiService) {}

 
 ngOnInit(): void {
     
//   this.get_all_categories(); 
//   const categoryId = 2;
//   const updatedData = { };

//  }
//  get_all_categories() {
//   this.api.get_all_categories().subscribe(
//     (response: any) => {
//       console.log('API Response:', response,response.data,'data');
//       this.data = response.data; 
//     },
//     (error: any) => {
//       console.error('API Error:', error);
//     }
//   );
// }
// addCategory() {
//   console.log(this.categoryDetail.value)
//   this.userService.addCategory(this.categoryObj).subscribe(
//     (res: any) => {
//       console.log('Category added successfully:', res);
//       this.getAllCategories();
//     },
//     (error: any) => {
//       console.error('Error adding category:', error);
//     }
//   );

  
}
 

}
