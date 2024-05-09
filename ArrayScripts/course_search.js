"use strict"
let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];

// When does the PROG200 course start?
console.log("When does the PROG200 course start");
console.log(findCourseStart("PROG200"));
// What is the title of the PROJ500 course?
console.log("What is the title of the PROJ500 course");
console.log(findCourseTitle("PROJ500"));
// What are the titles of the courses that cost $50 or less?
console.log("What are the titles of the courses that cost $50 or less");
console.log(findCourseUnderPrice(50));
// What classes meet in "Classroom 1"?
console.log("What classes meet in Classroom 1");
console.log(findCoursesThatMeetByLocation("Classroom 1"));


function findCourseStart(inputCourseId){
    
    for(let course of courses){
        if(course.CourseId == inputCourseId){
            return course.StartDate;
        }
    }
}

function findCourseTitle(inputCourseId){
    for(let course of courses){
        if(course.CourseId == inputCourseId){
            return course.Title;
        }
    }
}

function findCourseUnderPrice(price){
    let matchingCourses =[];

    for(let course of courses){
        if(Number(course.Fee) <= price){
            matchingCourses.push(course);
        }
    }
    return matchingCourses;
}

function findCoursesThatMeetByLocation(location){
    let matchingCourses =[];

    for(let course of courses){
        if(course.Location == location){
            matchingCourses.push(course);
        }
    }
    return matchingCourses;
}