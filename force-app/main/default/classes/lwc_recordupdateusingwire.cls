public with sharing class lwc_recordupdateusingwire {
    

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactDetails()
    {
        return[select id,FirstName,LastName,Email from Contact limit 10];
    }
}