import { Component, OnInit, ViewChild } from '@angular/core';

declare let lightGallery;
declare let $;
@Component({
	selector: 'app-media',
	templateUrl: './media.component.html',
	styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
	constructor() { }
	@ViewChild("lightbox") lightbox;
	ngOnInit() {
		window.scrollTo(0, 0);
		$(this.lightbox.nativeElement).lightGallery({
			enableTouch: true
		})
	}

}
