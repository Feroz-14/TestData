import { LightningElement,track, wire } from 'lwc';
import contactDetails from '@salesforce/apex/lwc_wireupdateandretrive.getAllContacts';
import { updateRecord } from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex';

import ID from '@salesforce/schema/Contact.Id';
import FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import LASTNAME from '@salesforce/schema/Contact.LastName';


const design =[{label:'FSTNAME',fieldName:'FirstName',type:'text',editable:true},
               {label:'LSTNAME',fieldName:'LastName',type:'text',editable:true},
               {label:'EMAIL',fieldName:'Email',type:'email',editable:true},
              ];
export default class Lwc_wireupdateandretrive extends LightningElement {

    @track col =design;
    
    @track draftValues;
    @track handlesave;
    @track error;
    @wire(contactDetails)contact;

    handlesave(event)
    {
         alert('HandleSaveIsStarted');
         const fields ={};
         fields[ID.fieldApiName]=event.detail.draftValues[0].Id;
         fields[FIRSTNAME.fieldApiName]=event.detail.draftValues[0].FirstName;
         fields[LASTNAME.fieldApiName]=event.detail.draftValues[0].LastName;
         
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