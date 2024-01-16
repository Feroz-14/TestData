public class Demo {

    public static void hello()
    {
        List<Account> acc=new List<Account>();        
        for(Integer i=0;i<=5;i++)
        {
            Account a=new Account(Name ='TestData:'+i);
            acc.add(a);
        }
        System.debug(acc);
    }
}