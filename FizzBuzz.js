/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

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
