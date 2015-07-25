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
        return Math.floor((Math.random() * (1 + max - min) + min));
    }

    $("#newEmployeeButton").on("click", function(event){
        event.preventDefault();

        var employeeList=[];

    function Employee(min, max){
            this.firstName = firstName[randomEmployee(0,18)];;
            this.lastName = lastName[randomEmployee(0,10)];;
            this.num = randomEmployee(0,3500);
            this.employeetitle = newemployeeTitle[randomEmployee(0,7)];
            this.reviewNum = randomEmployee(1,5);;
            this.salary = randomEmployee(35000, 550000);;
    };

        var firstName =["Leonardo", "Bryan", "William", "Orion", "Michael", "Flora", "Aurora", "Angelita", "Belle", "Verona", "Catabriea", "Erin", "Fabrisha", "Sandriea", "Lisa", "Matthew", "Smaug", "Frodo"];
        var lastName =["White", "Muellerleile", "Fontanilla", "Kruse", "Parvin", "Villanueva", "Petty", "Sandoval", "Cefalu", "Mortela"];
        var newemployeeTitle =["Baker", "Cashier", "Delivery", "Maintenance", "Operator", "Manager", "Decorator"];           
        var newRandomEmployee = new Employee();
        var reviewNum =(1, 2, 3, 4, 5);
        employeeArray.push(newRandomEmployee);
        randomAddToList(newRandomEmployee.firstName, newRandomEmployee.lastName, newRandomEmployee.employeetitle, newRandomEmployee.num, newRandomEmployee.reviewNum, newRandomEmployee.salary);

  
    function randomAddToList(first, last, num, title, review, salary){
        var reviewNum= "review"+review;
        $("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
            +first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
            "</p><p>"+salary+" </p><button id='removeButton'>Remove This Employee</button></div>");
    }

    console.log(employeeArray);
    });

});
//finallyfigured out wy my random employee wouldn't fire - cassie pointed out that my randomEmployee was randomemploee on some - fixed it and it worked...the undefineds were coming up from line 74 when i didn't call reviewNum and num properly
