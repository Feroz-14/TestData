public with sharing class lwc_0718_apexwire {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactDetails()
    {

        return [SELECT Id, FirstName, LastName, Phone, Email FROM Contact LIMIT 10];
    }
}