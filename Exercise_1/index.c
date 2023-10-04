#include <stdio.h>

void main()
{
    int i;

    for (i = 1; i <= 100; i++)
    {
        if (i % 3 == 0)
        {
            printf("Hello, ");
        }
        else if (i % 5 == 0)
        {
            printf("World, ");
        }
        else if (i % 7 == 0)
        {
            printf("Yoo, ");
        }
        else
        {
            printf("%d, ", i);
        }
    }
}