// Configurar base de cada Page Object Model (POM) para las páginas de texto
import { Page, expect } from '@playwright/test'; 
export class ButtonPage {
    constructor(private page: Page) {}

    //escribimos el método del Pages
    
    
    //click en enviar
    async ClickEnviar() {
        await this.page.getByRole('button', { name: 'Enviar' }).click();
    }


}
