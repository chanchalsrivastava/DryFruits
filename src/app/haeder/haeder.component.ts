import { Component } from '@angular/core';

@Component({
  selector: 'app-haeder',
  templateUrl: './haeder.component.html',
  styleUrls: ['./haeder.component.css']
})
export class HaederComponent {
  searchTerm: string = '';
  searchResults: string[] = []; 

  onSearch() {
    
    const allResults: string[] = [];
    
    this.searchResults = allResults.filter(result =>
      result.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  searchActive: boolean = false;

  toggleSearch() {
    this.searchActive = true;
  }

  cancelSearch() {
    this.searchActive = false;
  }
}

