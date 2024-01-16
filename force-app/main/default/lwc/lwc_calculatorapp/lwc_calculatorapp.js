import { LightningElement,track } from 'lwc';

export default class Lwc_calculatorapp extends LightningElement {
    @track firstnum;
    @track secondnum;
    result;
    firstNumber(event)
    {
       this.firstnum =parseInt(event.target.value);
    }
    secondNumber(event)
    {
        this.secondnum=parseInt(event.target.value);
    }
    addme()
    {
        this.result=this.firstnum + this.secondnum;
    }
    mul()
    {
        this.result=this.firstnum * this.secondnum;
    }
    divsion()
    {
        this.result=this.firstnum % this.secondnum;
    }
    sub()
    {
        this.result=this.firstnum - this.secondnum;
    }  

}