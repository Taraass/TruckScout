import { LightningElement, wire, api } from 'lwc';
import getDrivers from '@salesforce/apex/DriverHandler.getDrivers';
import FIRSTNAME from '@salesforce/schema/Driver__c.First_Name__c';
import LASTNAME from '@salesforce/schema/Driver__c.Last_Name__c';
import EMAIL from '@salesforce/schema/Driver__c.Driver_Email__c';

const columns = [
    { label: 'First Name', fieldName: FIRSTNAME.fieldApiName },
    { label: 'Last Name', fieldName: LASTNAME.fieldApiName },
    { label: 'Email', fieldName: EMAIL.fieldApiName},
];

export default class DriversList extends LightningElement {
    @api driverData;  
    columns = columns;
    
    @wire(getDrivers)
    wireGetDriver({data, error}){
        if(data) {
            this.driverData = data;
        } else if(error) {
            console.log(error);
        }
    }
}