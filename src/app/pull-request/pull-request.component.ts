import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';
import * as Interfaces from '../interfaces';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.css']
})
export class PullRequestComponent implements OnInit {




  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
  }

}
