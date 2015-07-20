$(document).ready(function(){
    console.log("Employee Page is go for launch!");//at least this works
    var employeeArray=[];


    $("body").on("click", "#removeButton", function(){
        var deletedEmployee = parseInt($(this).closest("#employeeChart").find(".employee").text());   
        for(var i=0; i<employeeArray.length; i++){
            if (deletedEmployee == employeeArray[i].employeeNumber){
                employeeArray[i]=employeeArray[employeeArray.length-1];
            } // for loops are now my friend
        }
        employeeArray.pop();
        $(this).closest(".employee").remove();

    }); 

    console.log(employeeArray);
    $("#employeeInformation").submit(function(event){
        event.preventDefault();

        var $inputs = $("#employeeInformation :input");
        var employeeList={};
        $inputs.each(function(){
            employeeList[this.name] = $(this).val();
        });
        var firstName = employeeList.firstName;
        var lastName = employeeList.lastName;
        var employeeNumber = employeeList.employeeNumber;
        var employeeTitle = employeeList.employeeTitle;
        var lastReviewScore = employeeList.lastReviewScore;
        var salary = employeeList.salary;
        addToList(firstName, lastName, employeeNumber, employeeTitle, lastReviewScore, salary);
//this function drove me nuts!



    function addToList(first, last, num, title, review, salary){
        var reviewNum= "review"+employeeList.lastReviewScore;

        $("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
            +first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
            "</p><p>"+salary+" </p><button id='removeButton'>Remove This Employee</button></div>");
    }

    employeeArray.push(employeeList);
    console.log(employeeList);
    console.log(employeeArray);
    });
    function randomEmployee (min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    $("#newEmployeeButton").on("click", function(event){
        event.preventDefault();

        var employeeList={};
    function Employee(){
            this.firstName = firstName[randomemployee(0,17)];;
            this.lastName = lastName[randomemployee(0,10)];;
            this.num = randomemployee(1, 1000);
            this.employeeTitle = newEmployeeTitle[randomemployee(0,7)];;
            this.newEmployeeReviewScore = randomemployee(1,5);;
            this.salary = randomemployee(35000, 550000);;
    };

        var firstName =["Leonardo", "Bryan", "William", "Orion", "Michael", "Flora", "Aurora", "Angelita", "Belle", "Verona", "Catabriea", "Erin", "Fabrisha", "Sandriea", "Lisa", "Matthew", "Smaug", "Frodo"];
        var lastName =["White", "Muellerleile", "Fontanilla", "Kruse", "Parvin", "Villanueva", "Petty", "Sandoval", "Cefalu", "Mortela"];
        var newEmployeeTitle =["Baker", "Cashier", "Delivery", "Maintenance", "Operator", "Manager", "Decorator"];           
        var newRandomEmployee = new Employee();
        employeeArray.push(newRandomEmployee);
        randomAddToList(newRandomEmployee.firstName, newRandomEmployee.lastName, newRandomEmployee.employeetitle, newRandomEmployee.num, newRandomEmployee.newemployeereviewscore, newRandomEmployee.salary);

  
    function randomAddToList(first, last, num, title, review, salary){
        var reviewNum= "review"+review;
        $("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
            +first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
            "</p><p>"+salary+" </p><button id='removeButton'>Remove This Employee</button></div>");
    }

    console.log(employeeArray);
    });
});

//why wont random employee fire? I defined it...frustrating!

