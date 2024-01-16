import { LightningElement } from 'lwc';

export default class Lwc_parentcomponentcomm extends LightningElement {

    name ='RajaRaghuRamSai';

    callme(event)
    {
        this.name=event.target.value;
    }
}