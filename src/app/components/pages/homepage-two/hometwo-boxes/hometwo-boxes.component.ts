import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-boxes',
    templateUrl: './hometwo-boxes.component.html',
    styleUrls: ['./hometwo-boxes.component.scss']
})
export class HometwoBoxesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleBoxesItem: BoxItem[] = [
        {
            icon: 'assets/img/icon/icon1.png',
            title: 'SaaS Applications',
            paragraphText: 'SaaS business is booming! We are here to help you to make your next SaaS idea up and running without hassle.',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: '#'
        },
        {
            icon: 'assets/img/services/icon2.png',
            title: 'Mobile Apps',
            paragraphText: 'Every body has smart phones these days, so lets make apps together to get most out of it. Just imagine how many things we can build!',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: '#'
        },
        {
            icon: 'assets/img/services/icon3.png',
            title: 'Web Apps',
            paragraphText: 'You think about a web app for your business or a personal website to just have something special, do not worry we got you covered for it too!',
            btnIcon: 'flaticon-right',
            btnText: 'Read More',
            link: '#'
        }
    ]

}
class BoxItem {
    icon : string;
    title : string;
    paragraphText : string;
    btnIcon : string;
    btnText : string;
    link : string;
}
