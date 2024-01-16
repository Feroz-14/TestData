import { LightningElement,track } from 'lwc';

import createRecord from 'lightning/uiRecordApi';


export default class Lwc_createwirecomponent extends LightningElement {

    @track name;
    @track phone;
    @track rating;
    @track industry;

    accname(event)
    {
      this.name=event.target.value;
    }
    accphone(event)
    {
      this.phone=event.target.value;
    }
    accrating(event)
    {
      this.rating=event.target.value;
    }
    accindustry(event)
    {
      this.industry=event.target.value;
    }
    callme()
    {
        const fields={'Name':this.name,'Phone':this.phone,'Rating':this.rating,'Industry':this.industry};
        const recordinputs ={apiName:'Account',fields};
        createRecord(recordinputs).then(()=>{
                                            alert('InsertedSuccessfully');
                                            }).catch(error => {alert('ErrorOccered');})
        
    }
}