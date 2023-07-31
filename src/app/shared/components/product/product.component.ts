import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productName: string = "samsung";
  public productId : number = 10;
  team = ["Rohit Sharma", "Sachin Tendulkar", "Virat Kohli", "Suresh Raina", "mahendra Singh Dhoni"]
  skills =["Javascript", "TypeScript", "AngularJS", "node"];
  members = ["Priya", "Nikita", "Monika", "Shilpa"];
  leaders =["Dr Babasaheb Ambedkar", "Lokmanay Tilak", "Lal Bahadur Shastri", "Mahatma Gandhi"]
  brands = ["Apple", "Micromax", "RedMi", "Realmi", "Oppo", "Vivo" ]

  constructor() { }

  ngOnInit(): void {
  }

}
