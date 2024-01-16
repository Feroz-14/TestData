import { LightningElement } from 'lwc';

export default class Lwc_eventspart2 extends LightningElement {
    vol =0;
    increseVolume()
    {
        this.vol=this.vol+1;
    }
    decreseVolume()
    {
          if(this.vol > 0)
          {
              this.vol=this.vol-1;
          }
    }
}