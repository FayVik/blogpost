import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  blogData;
  constructor(private router: Router, public apiService: ApiService) {}

  ngOnInit() {
    this.getAllBlog();
  }
  getAllBlog() {
    this.apiService.getBlog().subscribe(response => {
      console.log(response);
      this.blogData = response;
    });
  }
  blockUser(blog) {
    this.apiService.getSingle(blog).subscribe(data => {
      console.log(data);
      this.router.navigate(['single-view']);
      localStorage.setItem('blog', blog);
    });
  }
  next() {
    this.apiService.nextUser().subscribe(data => {
      console.log(data);
      if (data) {
        this.blogData = data;
      }
    });
  }
  previous() {
    this.apiService.previousUser().subscribe(data => {
      console.log(data);
      if (data) {
        this.blogData = data;
      }
    });
  }
}
