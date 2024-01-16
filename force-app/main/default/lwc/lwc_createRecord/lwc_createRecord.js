import { LightningElement ,track,wire} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';


export default class Lwc_createRecord extends LightningElement {
    @track nam;
    @track ph;
    @track ind;
    @track rat;

    name(event)
    {
        this.nam=event.target.value;
    }
    phone(event)
    {
        this.ph=event.target.value;
    }
    industry(event)
    {
        this.ind=event.target.value;
    }
    rating(event)
    {
        this.rat=event.target.value;
    }
    callme()
    {
       const fields={'Name':this.nam,'Phone':this.ph,'Industry':this.ind,'Rating':this.rat};

        const variableInput ={apiName:'Account',fields};
        
        createRecord(variableInput).then(()=>{ 
                                           alert('AccountCreatedSuccessfully');
                                              }).catch(error =>{
                                                             alert('error in program')
                                                                } );
    }
}