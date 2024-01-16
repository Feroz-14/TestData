import { LightningElement } from 'lwc';

export default class Lwc_eventsdecandprog extends LightningElement {
    
    constructor()
    {
        super();

        this.template.addEventListener('notify',this.showme);
    }
    showme(event)
    {
      const name=event.detail;
      alert('Hi '+name+' youSuccessfullyClickTheButton'); 
    }
}