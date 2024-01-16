import { LightningElement } from 'lwc';

export default class Lwc_lightningcard extends LightningElement {
    callme(event)
    {
        const declar =new CustomEvent('notify',{detail:'Feroz',bubbles:true,composed:true});
        this.dispatchEvent(declar);
    }
}