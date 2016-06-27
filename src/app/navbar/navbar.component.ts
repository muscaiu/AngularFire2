import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  template: `
  <nav>
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/firebase']">FirebaseList</a>
    <a [routerLink]="['/testroute']">TestRoute</a>
  </nav>
  `,
  directives: [ROUTER_DIRECTIVES ] 
})

export class NavbarComponent{}