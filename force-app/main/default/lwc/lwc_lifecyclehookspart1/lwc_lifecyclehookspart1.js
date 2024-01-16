import { LightningElement } from 'lwc';

export default class Lwc_lifecyclehookspart1 extends LightningElement {

    callme(event)
    {
        this.dispatchEvent(new CustomEvent('hooks',{detail:Feroz,bubbles:true,composed:true}));
    }
}