import { LightningElement ,api} from 'lwc';

export default class Lwc_lightning_record_editform extends LightningElement {

    @api   recordId   ='0015i000011ryqMAAQ';

     callme()
     {
        const dummy=this.template.querySelectorAll('lightning-input-field');
     }

}