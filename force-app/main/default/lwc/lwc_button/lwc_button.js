import { LightningElement } from 'lwc';

export default class Lwc_button extends LightningElement {
    callme(event)
    {
        this.dispatchEvent(new CustomEvent('button',{detail:'Feroz',bubbles:true,composed:true}));
    }
}