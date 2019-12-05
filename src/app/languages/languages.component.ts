import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  public langages: any[] = [
    {nom: 'BASH', desc: 'desc', cover: 'assets/langages/bash-cours.png'},
    {nom: 'GIT', desc: 'desc', cover: 'assets/langages/git-cours.jpg'},
    {nom: 'HTML', desc: 'desc', cover: 'assets/langages/html-cours.jpg'},
    {nom: 'CSS', desc: 'desc', cover: 'assets/langages/css-cours.jpg'},
    {nom: 'JS', desc: 'desc', cover: 'assets/langages/javascript-cours.png'},
    {nom: 'JQUERY', desc: 'desc', cover: 'assets/langages/jquery-cours.png'},
    {nom: 'PHP', desc: 'desc', cover: 'assets/langages/php-cours.png'},
    {nom: 'MYSQL', desc: 'desc', cover: 'assets/langages/mysql-cours.png'}
    
  ];

  public height: string = "130";


  constructor() { }

  ngOnInit() {
  }

}
