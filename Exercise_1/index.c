#include <stdio.h>

void main()
{
    int i;

    for (i = 1; i <= 100; i++)
    {
        if (i % 3 == 0)
        {
            printf("Hello, \n");
        }
        else if (i % 5 == 0)
        {
            printf("World, \n");
        }
        else if (i % 7 == 0)
        {
            printf("Yoo, \n");
        }
        else
        {
            printf("%d", i);
            printf("\n");
        }
    }
}