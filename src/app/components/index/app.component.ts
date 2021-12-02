import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Student Management";

  // Add few students for initial listing
  studentsList = [
    {
      id: 1,
      first_name: "Arun",
      last_name: "sharma",
      email: "arun@yopmail.com",
      phone: 9632587412,
      department: "Math",
    },
    {
      id: 2,
      first_name: "leena",
      last_name: "sharma",
      email: "leena@yopmail.com",
      phone: 8521463258,
      department: "Commerce",
    },
    {
      id: 3,
      first_name: "Tina",
      last_name: "dhillon",
      email: "tina@yopmail.com",
      phone: 9632514222,
      department: "Math",
    },
    {
      id: 4,
      first_name: "Ammy",
      last_name: "kaur",
      email: "ammy@yopmail.com",
      phone: 9675579748,
      department: "Arts",
    },
    {
      id: 5,
      first_name: "Timmy",
      last_name: "pal",
      email: "timmy@yopmail.com",
      phone: 8599853547,
      department: "Engineering",
    },
  ];

  constructor() {
    // Save students to localStorage
    localStorage.setItem("students", JSON.stringify(this.studentsList));
  }
}
