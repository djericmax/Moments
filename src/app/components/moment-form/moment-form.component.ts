import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  standalone: false,

  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit {
  btn_text = '';
  constructor(){}

  ngOnInit(): void {
  }

}
