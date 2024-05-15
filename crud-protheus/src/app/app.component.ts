import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person'

import {
  PoMenuItem,
  PoMenuModule,
  PoModule,
  PoPageModule,
  PoTableAction,
  PoTableColumn,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    HttpClientModule,
    PoTemplatesModule,
    PoModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly title: string = 'Crud Protheus Title';

  readonly tableColumns: PoTableColumn[] = [
    {
      label: 'Código',
      property: 'id',
      width: '20%'
    },
    {
      label: 'Nome',
      property: 'name',
      width: '40%'
    },
    {
      label: 'Sexo',
      property: 'gender',
      type: 'label',
      width: '20%',
      labels: [
        {
          label: 'Masculino',
          value: 'M',
          color: 'color-01'
        },
        {
          label: 'Feminino',
          value: 'F',
          color: 'color-07'
        }
      ]
    },
    {
      label: 'Idade',
      property: 'age',
      type: 'number',
      width: '20%'
    }
  ];

  readonly tableActions: PoTableAction[] = [
    {
      label: 'Alterar',
      icon: 'po-icon-edit',
      action: this.edit.bind(this)
    },
    {
      label: 'Visualizar',
      icon: 'po-icon-eye',
      action: this.view.bind(this)
    },
    {
      label: 'Excluir',
      icon: 'po-icon-delete',
      type: 'danger',
      action: this.delete.bind(this)
    }
  ]

  tableItems: Person[] = [
    {
      id: '001',
      name: 'Aluno 001',
      gender: 'M',
      age: 36
    },
    {
      id: '002',
      name: 'Aluno 002',
      gender: 'F',
      age: 28
    },
    {
      id: '003',
      name: 'Aluno 003',
      gender: 'F',
      age: 65
    }];

  readonly menus: PoMenuItem[] = [
    { label: 'Home', action: this.onClick.bind(this) },
  ];

  loadingMore: boolean = false;
  showMoreDisabled: boolean = false;

  test: number = 0;

  private onClick() {
    alert('Clicked in menu item');
  }

  insert(){

  }

  edit(person: Person) {
    console.log(person.name);
  }
  view(person: Person) {
    console.log(person.name);
  }
  delete(person: Person) {
    console.log(person.name);
  }

  async showMore() {
    this.loadingMore = true;

    await new Promise(f => setTimeout(f, 1000));
    
    this.tableItems.push({
      id: 'ABC',
      name: 'Aluno ABC',
      gender: 'M', 
      age: 10
    })

    this.loadingMore = false;

    this.test = this.test + 1;

    if (this.test > 3) {
      this.showMoreDisabled = true;
    }
  }
}
