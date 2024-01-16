import { LightningElement,track } from 'lwc';

export default class Lwc_lightningeventprogramatically extends LightningElement {

 @track volume = 0;
    constructor()
    {
        super();
        console.log('Success');
        this.template.addEventListener('incre',this.handleNotification);
    }
    handleNotification(event)
    {
       this.volume= this.volume+1;
        alert('IncresedVolume'+this.volume);
    }
}