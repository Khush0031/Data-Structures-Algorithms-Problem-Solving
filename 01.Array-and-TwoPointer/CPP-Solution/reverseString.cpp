// C++ Code

#include <vector>
using namespace std;

void reverseString(vector<char> &s)
{
    int n = s.size();
    int i = 0;
    int j = n - 1;
    while (i <= j)
    {
        // swapping the values
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        // move to the next positions
        i++;
        j--;
    }
}
