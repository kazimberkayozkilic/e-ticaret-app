import { Component } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { CategoryModel } from './models/category.model';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories: CategoryModel[] = [];

  constructor(
    private _toastr: ToastrService,
    private _category: CategoryService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._category.getAll((res) => (this.categories = res));
  }
}
