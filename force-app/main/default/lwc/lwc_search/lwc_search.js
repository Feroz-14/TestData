import { LightningElement ,track,wire} from 'lwc';
import ACCOUNT_DETAILS from '@salesforce/apex/lwc_search.getAccountDetails';
export default class Lwc_search extends LightningElement {

    @track searchId;
    @track error;
    @wire(ACCOUNT_DETAILS,{searchKey:'$searchId'})account;
    searchme(event)
    {
       this.searchId=event.target.value;
    }
}