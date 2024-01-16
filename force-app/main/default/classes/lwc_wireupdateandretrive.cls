public with sharing class lwc_wireupdateandretrive {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllContacts()
    {
        return [select FirstName,LastName,Email from Contact limit 10];
    }
    
}