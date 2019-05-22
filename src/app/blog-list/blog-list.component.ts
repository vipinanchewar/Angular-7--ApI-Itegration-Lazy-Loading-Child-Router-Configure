import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public blogs = [];
  public errorMsg;
  constructor(private blogsservice: BlogsService) { }
    ngOnInit() {
    this.blogsservice.getBlogs()
      .subscribe(data => this.blogs = data,
                error => this.errorMsg = error); 
               }
}
