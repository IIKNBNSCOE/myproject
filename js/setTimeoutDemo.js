function welcome()
{
    console.log("Welcome to Javascript");
    setTimeout(welcome,2000);
}
welcome();