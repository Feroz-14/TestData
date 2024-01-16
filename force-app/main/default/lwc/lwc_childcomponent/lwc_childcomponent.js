import { LightningElement,track ,api} from 'lwc';

export default class Lwc_childcomponent extends LightningElement {
 
    upperCaseStringItem;

    @api
     
    get itemName()
    {
        return this.upperCaseStringItem;
    }

    set itemName(value)
    {
        this.upperCaseStringItem =value.toUpperCase(); 
    }

}