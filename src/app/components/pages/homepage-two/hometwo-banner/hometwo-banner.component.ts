import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bannerContent: Content[] = [
        {
            title: 'Software for the people, not for clients',
            paragraphText: 'We develop software by living it. Our passion is to work hard and deliver unique softwares for the people. Your imagination to code without stress!',
            // paragraphText: 'World leading reliable research & AI based Data Analytics solutions for Big Data companies and consumer business products. Drive your success without stress!',
            defaultBtnIcon: 'flaticon-structure',
            defaultBtnText: 'About Us',
            defaultBtnLink: '#',
            videoBtnIcon: 'flaticon-google-play',
            videoBtnText: 'Watch Video',
            videoBtnLink: '#'
        }
    ]

}
class Content {
    title : string;
    paragraphText : string;
    defaultBtnIcon : string;
    defaultBtnText: string;
    defaultBtnLink : string;
    videoBtnIcon : string;
    videoBtnText: string;
    videoBtnLink : string;
}
