import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.scss']
})
export class SingleViewComponent implements OnInit {
  // SingleBlogView;
  single: object;
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.SingleBlog();
  }
  SingleBlog() {
    const blogs = localStorage.getItem('blog');
    console.log(blogs);
    this.apiService.getUserData(blogs).subscribe(response => {
      console.log(response);
      this.single = response;
      this.single = Array.of(this.single);
      // this.single = JSON()
      console.log(this.single);
    });
  }
}
