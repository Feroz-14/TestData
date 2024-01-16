import { LightningElement } from 'lwc';
import ACCOUNT_DETAILS from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name';
import PHONE from '@salesforce/schema/Account.Phone';
import FAX from '@salesforce/schema/Account.Fax';
import RATING from '@salesforce/schema/Account.Rating';


export default class Lwc_lightningRecordProgramming extends LightningElement {

    recordId ='0015i000011s1XYAAY';
    acc = ACCOUNT_DETAILS;
    myfield =[NAME,PHONE,FAX,RATING];
}