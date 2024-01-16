import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class Lwc_pubsub_subscriber extends LightningElement {
    message;

     connectedCallback()
     {
        this.hello();
     }
     hello()
     {
        pubsub.register('notify',this.handle.bind(this));
        console.log('hello is working');
    }
     

     handle()
     {

        console.log('YouAreSuccessfullyCompleatedPubsub'+this.message);
        this.message =messageFromEvent ?JSON.stringify(messageFromEvent,null,'\t'):'no message';
     }
}
