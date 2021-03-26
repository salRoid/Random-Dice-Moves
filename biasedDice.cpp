#include <iostream>

using namespace std;

int getRandomNumber() {
    return (rand() % 48 + 7);  
}

int castDice() {
    int randomNumber = getRandomNumber();
    if (randomNumber % 2 == 0) 
        return (randomNumber % 6);
    else 
        return ((randomNumber / 2)  % 6);
}

int main() {
    srand((unsigned) time(0));
    int testCases = 7;
    int evenItems = 0, oddItems = 0;
    while (testCases--) {
        int number = castDice();
        if (number == 0)
            number = 6;
        cout << number << endl;
        if (number % 2 == 0) 
            evenItems++;
        else   
            oddItems++;
    }
        cout << evenItems << " " << oddItems << endl;
    return 0;
}