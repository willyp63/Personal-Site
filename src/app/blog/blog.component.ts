import { Component } from '@angular/core';

@Component({
  selector: 'wp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  readonly articles = [
    {
      imgUrl: '/assets/images/articles/mock-article-0.jpg',
      title: 'Mock Article 0',
      publishDate: 'APRIL 29 2016',
      teaserText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat facilisis felis, vitae mattis leo finibus...',
    },
    {
      imgUrl: '/assets/images/articles/mock-article-1.jpg',
      title: 'Mock Article 1',
      publishDate: 'MARCH 19 2015',
      teaserText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat facilisis felis, vitae mattis leo finibus...',
    },
    {
      imgUrl: '/assets/images/articles/mock-article-2.jpg',
      title: 'Mock Article 2',
      publishDate: 'MARCH 04 2015',
      teaserText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat facilisis felis, vitae mattis leo finibus...',
    },
    {
      imgUrl: '/assets/images/articles/mock-article-3.jpg',
      title: 'Mock Article 3',
      publishDate: 'FEBRUARY 23 2014',
      teaserText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat facilisis felis, vitae mattis leo finibus...',
    },
  ];

}
