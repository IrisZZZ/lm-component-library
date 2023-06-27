import { Component, OnInit,Input,Output,EventEmitter,NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime ,distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'lib-lm-search-bar',
  templateUrl: './lm-search-bar.component.html',
  styleUrls: ['./lm-search-bar.component.css']
})
export class LmSearchBarComponent implements OnInit {
  @Input() placeholder: string = 'Search here...';
  @Output() searchEvent = new EventEmitter<string>();
  private searchInput: Subject<string> = new Subject<string>();
  searchTerm: string = '';
  constructor() { 
    this.searchInput.pipe(
      debounceTime(300))
      .subscribe((searchTerm: string) => {
        this.searchEvent.emit(searchTerm);
    });
  }
  ngOnInit(): void {
  }

  onSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchInput.next(value);
  }
}
