import { LightningElement } from 'lwc';

export default class Lwc_event_constructer extends LightningElement {
    volumeIncrese(event)
    {
        this.dispatchEvent(new CustomEvent('incre',{detail:'Demo', bubbles:true ,composed:true}));
    }
    volumeDecerese()
    {
           const dec=new CustomEvent('decre',{detail:'Demoo', bubbles:true ,composed:true});
           this.dispatchEvent(dec);
    }
}