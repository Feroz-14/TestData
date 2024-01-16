import { LightningElement,wire ,track} from 'lwc';
import getContactDetails from '@salesforce/apex/lwc_recordupdateusingwire.getContactDetails';
import { updateRecord } from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex';

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

const design =[{label:"FIRSTNAME",fieldName:"FirstName", editable:true },
               {label:"LASTNAME",fieldName:"LastName",editable:true},
               {label:"EMAIL",fieldName:"Email",editable:true},
              ];
export default class Lwc_recordupdateusingwire extends LightningElement {
    @track col=design;
    @track error;
    @track draftValues;
    @track handleSave;
    @wire(getContactDetails)contact;


    handleSave(event)
    {
         alert('HandleSaveIsStarted');
         const fields ={};
         fields[ID_FIELD.fieldApiName]=event.detail.draftValues[0].Id;
         fields[FIRSTNAME_FIELD.fieldApiName]=event.detail.draftValues[0].FirstName;
         fields[LASTNAME_FIELD.fieldApiName]=event.detail.draftValues[0].LastName;
         
         alert('FieldApiNames are Called'+fields);
         const inputvalues={fields};
        
         updateRecord(inputvalues).then(() =>{
            alert('RecordUpdatedSuccessfully');
            this.draftValues=[];
            return refreshApex(this.contact);
        }).catch(error =>{
            alert('Error');
        })
    }
}