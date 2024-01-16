import { LightningElement,track,wire } from 'lwc';

import getContactDetails from '@salesforce/apex/lwc_0718_apexwire.getContactDetails';
import { updateRecord } from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex';

import FIRESTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';


const design =[{label :'FirstName',fieldName :'FirstName',editable:true},
               {label :'LastName',fieldName :'LastName',editable:true},
               {label :'PhoneField',fieldName :'Phone',type:'phone',editable:true},
               {label :'EmailField',fieldName :'Email',type:'email',editable:true} ];

export default class Lwc_0718_apexwire extends LightningElement {

    @track col =design;
    @track draftValues;
    @track error;

    @wire (getContactDetails) contact;


    handleSave(event)
    {
      alert('SavingHandleEvent');
       const fields ={};

       fields[ID_FIELD.fieldApiName]=event.detail.draftValues[0].Id;
       fields[FIRESTNAME_FIELD.fieldApiName]=event.detail.draftValues[0].FirstName;
       fields[LASTNAME_FIELD.fieldApiName]=event.detail.draftValues[0].LastName;

       const recordValues ={fields};

       updateRecord(recordValues).then(() =>{
                                                alert('RecordUpdatedSuccessfully');
                                                this.draftValues=[];
                                                return refreshApex(this.contact);
                                            }).catch(error =>{
                                                alert('Error');
                                            })
    }
}