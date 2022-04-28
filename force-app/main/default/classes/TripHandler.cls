public with sharing class TripHandler {
    
    @AuraEnabled(cacheable = true)
    public static List<Trip__c> getTrips(){
        List<Trip__c> tripList = [SELECT Name,Arrival_City__c,Departune_City__c,Driver__c,Price__c FROM Trip__c];
        return tripList;
    }
}
