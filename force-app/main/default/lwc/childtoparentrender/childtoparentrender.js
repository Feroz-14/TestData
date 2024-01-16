import { LightningElement } from 'lwc';
import firstTemplate from './childtoparentrender.html';
import secondTemplate from './children.html';

export default class Childtoparentrender extends LightningElement {

    templatename='temp1';

    callme()
    {
        console.log('this is onchange');
        if(this.templatename==='temp1')
        {
            this.templatename ='temp2'
        }
        else
        {
            this.templatename ='temp1';
        }
    }
    render()
        {
           console.log('inside render method');
           if(this.templatename === 'temp1')
           {
               return firstTemplate;
           }
           else{
            return secondTemplate;
           }
        }
    
}