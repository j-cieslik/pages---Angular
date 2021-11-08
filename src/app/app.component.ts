import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	currentPage = 0;

	images = [
		{
			title: 'At the Beatch',
			url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80'
		},
		{
			title: 'Morning run',
			url: 'https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
		},
		{
			title: 'Good coffee',
			url: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'
		},
		{
			title: 'Learning French',
			url: 'https://images.unsplash.com/photo-1551866442-64e75e911c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
		},
		{
		title: 'At the Beatch',
		url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80'
		},
		{
			title: 'Morning run',
			url: 'https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
		},
		{
			title: 'Good coffee',
			url: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'
		},
		{
			title: 'Learning French',
			url: 'https://images.unsplash.com/photo-1551866442-64e75e911c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
		},
		{
			title: 'At the Beatch',
			url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80'
		},
		{
			title: 'Morning run',
			url: 'https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
		},
		{
			title: 'Good coffee',
			url: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'
		},
		{
			title: 'Learning French',
			url: 'https://images.unsplash.com/photo-1551866442-64e75e911c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
		},
		{
		title: 'At the Beatch',
		url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80'
		},
		{
			title: 'Morning run',
			url: 'https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
		},
		{
			title: 'Good coffee',
			url: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80'
		},
		{
			title: 'Learning French',
			url: 'https://images.unsplash.com/photo-1551866442-64e75e911c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
		},
	];

	checkWindowIndex(index: number){
		return Math.abs(this.currentPage - index) < 5;
	}

}
