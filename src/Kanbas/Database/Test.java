
public class Test {
public char mostCommon(String s){
    int count2 = 0;
    char test = ' '; 
    for(int i = 0; s.length() > i; i++){
        int count = 0;
        for(int j = 0; s.length() > j; j++){
            if(s.charAt(j) == s.charAt(i)){
                count++;
            }
            if(count > count2){
                count2 = count;
                test = s.charAt(i);
            }
        } 
    }
    System.out.println(mostCommon("Harvard"));
    return test;
}
}