
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Program {
    public static String FizzBuzz(int number) {

        //------Variables-------//
        //Array of results to be returned.
        String[] outputs = {"FizzBuzz", "Fizz", "Buzz"};
        //Check if number is divisible by 3.
        boolean isDivisibleBy3 = number % 3 == 0; 
        //Check if number is divisible by 5.
        boolean isDivisibleBy5 = number % 5 == 0;
        //Check if number is divisible by 3 & 5. 
        boolean isDivisibleBy3And5 = isDivisibleBy3 && isDivisibleBy5; 

        //------Logic-------//
        //Return output depending on FizzBuzz Ruleset. 
        if (isDivisibleBy3And5) {
            return outputs[0];
        } else if (isDivisibleBy3) {
            return outputs[1];
        } else if (isDivisibleBy5) {
            return outputs[2];
        } else {
            return String.valueOf(number);
        }

    }
} 
