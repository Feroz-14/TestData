import { LightningElement ,api,track,wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS =['acc.Name','acc.Fax','acc.Phone']
export default class Lwc_wireusingget extends LightningElement {

    @api recordId ='Id';
   
   @wire(getRecord,{recordId:'$recordId',fields:FIELDS})acc;

   get name()
   {
      return this.acc.data.fields.Name.value;
   }
   get fax()
   {
    return this.acc.data.fields.Fax.value;
   }
   get phone()
   {
    return this.acc.data.fields.Phone.value;
   }
}