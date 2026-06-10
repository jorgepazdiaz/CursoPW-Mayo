// Configurar base de cada Page Object Model (POM) para las páginas de texto
import { Page, expect } from '@playwright/test'; 
export class SelectPage {
    constructor(private page: Page) {}

    //escribimos el método del Pages
    
    
    //seleccionar departamento
    async SelectDepartamento() {
        await this.page.getByLabel('select-department').selectOption('HUANCAVELICA');
    }

    //seleccionar ciudad
    async SelectCiudad() {
        await this.page.getByLabel('select-city').selectOption('HUAYTARA');
    }

    //seleccionar un comando
    async SelectComando() {
        await this.page.getByLabel('Comandos de Selenium').selectOption('Switch Commands');  
    }

}
