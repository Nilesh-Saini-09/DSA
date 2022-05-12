const a = 20;
{
    const a = 100;
    {
        console.log(a);
        const a = 200;
    }

    console.log(a);
}