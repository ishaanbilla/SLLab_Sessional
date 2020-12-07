import { Component, OnInit } from '@angular/core';

import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed-create',
  templateUrl: './feed-create.component.html',
  styleUrls: ['./feed-create.component.css']
})
export class FeedCreateComponent implements OnInit {
  feed: string;
  des: string;
  dep: string;
  sub: string;
  date: string;


  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.feedService.submit(this.feed);
    this.feed = '';
  }

}