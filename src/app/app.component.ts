import { Component, OnInit } from '@angular/core';
declare var FroalaEditor: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private bordersVisible: boolean = true;
  public tablePresent: boolean = false;

  ngOnInit() {
    new FroalaEditor('#froala', {
      events: {
        'contentChanged': () => {
          this.checkForTables();
        },
        'initialized': () => {
          this.checkForTables();
        },
        'table.inserted': () => {
          this.checkForTables();
        },
        'table.removed': () => {
          this.checkForTables();
        }
      }
    });
  }

  /**
   * Toggles table borders
   */
  public toggleTableBorders() {
    this.bordersVisible = !this.bordersVisible;
    const editorContent = document.querySelector('#froala .fr-view');
    if (editorContent) {
      const tables: any = editorContent.querySelectorAll('table');
      tables.forEach((table) => {
        table.style.border = this.bordersVisible ? '1px solid #ddd' : 'none';
        const cells = table.querySelectorAll('td, th');
        cells.forEach((cell) => {
          cell.style.border = this.bordersVisible ? '1px solid #ddd' : 'none';
        });
      });
    }
  }

  /**
   * Checks for tables
   */
  private checkForTables() {
    const editorContent = document.querySelector('#froala .fr-view');
    if (editorContent) {
      const tables = editorContent.querySelectorAll('table');
      this.tablePresent = tables.length > 0;
    } else {
      this.tablePresent = false;
    }
  }
}
