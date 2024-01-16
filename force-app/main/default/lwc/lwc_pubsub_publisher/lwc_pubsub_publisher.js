import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class Lwc_pubsub_publisher extends LightningElement {

    callme()
    {
         let message ={"Name":"Feroz","State":"AndhraPradesh","City":"Nellore"};
         pubsub.fire('notify',message);
         console.log('success');
    }
}