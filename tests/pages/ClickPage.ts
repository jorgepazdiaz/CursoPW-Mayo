// Configurar base de cada Page Object Model (POM) para las páginas de texto
import { Page, expect } from '@playwright/test'; 
export class ClickPage {
    constructor(private page: Page) {}

    //escribimos el método del Pages
    
    
    //click en pasatiempo
    async ClickPasatiempo() {
        await this.page.getByRole('checkbox', { name: 'Deportes' }).check();
    }

    //click en genero
    async ClickGenero() {
        await this.page.locator('label[for="male"]').click();
    }

    //click informacion
    async ValidarInformacion() {
        await this.page.getByRole('heading', { name: 'Información Personal' }).click();
    }

}
