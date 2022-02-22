class Employee
{
    constructor(eid,name,salary)
    {
        this.eid=eid;
        this.name=name;
        this.salary=salary;
    }
    showEmployee()
    {
        return(`Employee id=${this.eid} Employee name=${this.name} Salary=${this.salary}`);
    }
}
class Manager extends Employee{
    constructor(eid,name,salary,department)
    {
        super(eid,name,salary);
        this.dept=department;
    }
    showManager()
    {
        console.log(super.showEmployee()+`  Department=${this.dept}`);
    }
}
const obj=new Manager(10,"abc",20000,"HR");
obj.showManager();