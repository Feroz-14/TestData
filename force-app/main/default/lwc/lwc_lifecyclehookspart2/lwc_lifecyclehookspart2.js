import { LightningElement } from 'lwc';

export default class Lwc_lifecyclehookspart2 extends LightningElement {
    
    constructor()
    {
        super();
        
        this.template.addEventListener('hooks',this.handleNotification);
    }
    handleNotification(event)
    {
        const name =event.detail;
        alert('Hi YouInsertedCorrectly');
    }
}