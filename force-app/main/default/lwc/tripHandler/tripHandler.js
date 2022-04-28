import { LightningElement,wire,api } from 'lwc';
import getTrips from '@salesforce/apex/TripHandler.getTrips';
import TRIPCODE from '@salesforce/schema/Trip__c.Name';
import ARRIVALCITY from '@salesforce/schema/Trip__c.Arrival_City__c';
import DEPARTUNECITY from '@salesforce/schema/Trip__c.Departune_City__c';
import DRIVER from '@salesforce/schema/Trip__c.Driver__c';
import PRICE from '@salesforce/schema/Trip__c.Price__c';

const columns = [
    {label:"Trip Code",fieldName: TRIPCODE.fieldApiName },
    {label:"Arrival City",fieldName: ARRIVALCITY.fieldApiName },
    {label:"Departune City",fieldName: DEPARTUNECITY.fieldApiName },
    {label:"Driver",fieldName: DRIVER.fieldApiName },
    {label:"Price",fieldName: PRICE.fieldApiName }
];

export default class TripHandler extends LightningElement {
    @api myTrip;
    columns = columns;

    @wire(getTrips)
    wireTrips({data,error}){
        if(data){
            this.myTrip = data;
        } else if(error){
            console.log(error);
        } 
    }
}