import { LightningElement,track } from 'lwc';

export default class Lwc_dispatchevent extends LightningElement {

    @track volume =0
    volincrese()
    {
          this.volume=this.volume+1;
    }
    voldec()
    {
        if(this.volume>0)
        {
            this.volume=this.volume-1;
        }
    }
}