public with sharing class DriverHandler {
    
    @AuraEnabled(cacheable=true)
    public static List<Driver__c> getDrivers(){
        List<Driver__c> driverList = [SELECT First_Name__c, Last_Name__c, Driver_Email__c FROM Driver__c];
        return driverList;
    }
    
}