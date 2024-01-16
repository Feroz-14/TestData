public with sharing class lwc_search {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountDetails(String searchKey)
    {
        String sk ='%'+searchKey+'%';
        return[select id,Name from Account where Name like:sk];
    }
}