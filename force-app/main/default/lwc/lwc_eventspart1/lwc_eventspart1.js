import { LightningElement } from 'lwc';

export default class Lwc_eventspart1 extends LightningElement {

    increseVolume(event)
    {
          this.dispatchEvent(new CustomEvent('incre'));
    }
    decreseVolume(event)
    {
       this.dispatchEvent(new CustomEvent('decre'));
    }
}