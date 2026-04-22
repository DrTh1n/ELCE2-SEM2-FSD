
    var studentdata=[];
    function enterDetails(studentname, studentroll, maths, science,english){
        var student=[studentname, studentroll, maths, science, english];
        studentdata.push(student);
        console.log(studentdata);
    }
    function getDetails(studentname){
            if(studentdata[0]==studentname){
                console.log(studentdata[0]);
                return studentdata[0];
            }
            else{
                console.log("Student not found");
            }
        
    }
