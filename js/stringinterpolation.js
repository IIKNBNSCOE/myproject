var employees = [
    {
        name:"ravi",
        reporting_manager:"kiran",
        "discussion_date":"27Feb 2022"
    },
    {
        name:"Anil",
        reporting_manager:"Ram",
        "discussion_date":"28Feb 2022"
    },
    {
        name:"Rajesh",
        reporting_manager:"Nikhil",
        "discussion_date":"25Feb 2022"
    },
    {
        name:"Ram",
        reporting_manager:"Lokesh",
        "discussion_date":"24Feb 2022"
    }
]
for(var i=0;i<employees.length;i++)
{
    console.log(`  Hello ${employees[i].name},


    Your discussion on Hike will be on ${employees[i].discussion_date} with your 
    reporting manager ${employees[i].reporting_manager}

Thanks,
HR`);
}



