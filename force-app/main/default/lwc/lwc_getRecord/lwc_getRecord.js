import { LightningElement,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FILDS =['account.Name','account.Phone','account.Industry','account.Rating'];
export default class Lwc_getRecord extends LightningElement {

    @api recordId ='Id';
    
    @wire(getRecord,{recordId:'$recordId',fields:FILDS})account;

    getName()
    {
        return this.account.data.fields.Name.value;
    }
    getPhone()
    {
        return this.account.data.fields.Phone.value;
    }
    getIndustry()
    {
        return this.account.data.fields.Industry.value;
    }
    getrating()
    {
        return this.account.data.fields.Rating.value;
    }
}