
let classes = [
  {name: "Play School", students: ["Gagan Kuri (BK)", "Nandashree R", "Raghav", "Dhanya Ramesh Chakravarthi", "Virat Yadav K N (BK)", "Annu Kmari", "Divya Bharati", "Danvik", "Samarth S", "Mohamed Mozamil", "Anu"], attendance: {} },
  
  { name: "Class LKG", students: ["Arhan Barbuiya", "Niharika Yadav J","Dishanth KL","John S" ,"Ghanikha","Rithvik S","Bindhushree","Shivanya","Kishanth","Shreshta N", "Siya Sharma","Arbina Taj","Tharun", "Mohammed Shafin Shariff","Achyuth M","Raksha N"  ,"Ravitejas S","Vindhya","Abdul Rahim","Advith D", "Keshav Raj V K","Vedanth H","Yuvaraj Kumar","Chandan R  Janani","Preetham","Nuthan Reddy K","Suraksha Kumbar","Alex","Phinehas","Rishab Krishna" ,"Safa Mariyam","Joya","Arjun Kumar","Dakshata M" ,"A Harini Vedha"  ,"Srinivas G R","Anika Kumari", "Divishath"], attendance: {} },
  { name: "Class UKG", students: ["Chinmayi Shi Jakathi", "Rithvika NC", "Lakshman M", "Jameela Khatun", "Keerthana K (BK)", "Nishu Tanwar", "Jeevan Gowda N", "Srinivas M", "Dhanush S", "Manishyachari", "Mohammed Fazal", "Telukuntla Kevin", "Poorna Chandra CS", "Bi Bi Muskan", "Amit", "Sirisha A Gowda", "Aaira Afreen", "Nandisha", "Linsha M", "Ullas H Nayak", "Shreyas K M", "Vandana N", "Adithya Singh", "Saniya Begam", "Deekshith B (BK)", "Srushti H", "Alina Kouser", "Sourav Kumar Pandit", "Isaac K", "Harsha Vardhan", "Shivansh Pandey", "Kushank Kumar", "Adarsha", "Kruthikal", "Modith Surya", "Aradhana", "Suman BS", "Janavi", "Nisha Kumari", "Levati Kavitha", "vishawanath", "Thrishal", "Simran kumari", "Rajath Gowda"], attendance: {} },
 { name: "Class 1" ,students:["Aayra", "Mohammed Mudassir", "Srushti S", "Amrutha A", "Mohammed Aalam", "Mohammed Riyaz", "Nanditha Mallik", "Mohammed Zaiyan", "Sabenaj", "Tarunya S", "Jayanth Chavan", "Tarun Kumar", "Abishek Kumar", "Prasanna Kuri", "Akhil Yunus Shaikh", "Deepthi H", "Adit Kumar", "Nurjahan Parwin", "Manvith Santhosh Yarnal", "Ujwal M", "Krithan Purvik", "Aryan Kumar", "Punarvi K V", "Riyan Hussain", "Vishnavi", "Manvitha", "Yaduveer Nayaka", "Aprameya", "Dhruvanth G", "Ansh Pandey", "Simran Kumari", "Mohammed Taqi", "Riyan Hussain", "Kishore Kumar"],attendance: {} },
  { name: "Class 2" ,students:["Nandhith Shi Tayati", "Nisha Kumari", "Rachel YS", "Rishik S", "Rajesh", "S Dev Darshan", "Pranathi A", "Suba nuri(sd)", "Yaseen Pasha", "Shravani", "Faizan Ahmed", "Shabaz Baig", "Mohammed Nahid", "Riya Gupta", "Shobha Kumari", "Deekshitha R", "Sugan V", "Samrudha Bandari", "Rachitha", "Tamizh Selvan", "Abinesh", "Ganavika", "Bhuvan KS", "Mannath Singh", "Tanu", "Preetham yadav", "Anushka", "Mukunda V", "Jaid Khan", "Yogitha", "Punith", "Mohammed Hamza", "James", "Manu S", "Karina Kumari", "Mansi Kumari", "Kamali", "Vijay Kumar", "Ayush R", "Preetham Kumar MN", "Levati Mohanth", "Pruthvika", "Neha R", "Yoseph", "Jancy Kiruba", "Preetham Gowda", "Mohammed Kaab", "Aryan Singh", "Dhanyashree", "Mohammed Zain", "Manish", "Impana", "Shivam Kumar", "Varun Kumar", "Milan Ray", "Dhanushree"],attendance: {} },
  { name: "Class 3" ,students:["Atharva N", "Maseera S", "Ganavi S", "Vidhu Praveen M", "Bushra Fathima", "Cherith M", "Narendra Das", "Angel", "Ranjith Kiran", "Vandana", "Navaneeth", "Greeshma", "Sai Sharma", "Mohsina Taj", "Theertha Prasad", "Vijay Nuthan", "Vidyashree", "Sanjay Sandeep", "Telukuntla Afreen Angel", "Sonika", "Deekshith DS", "Nissan Buddha", "Abhinaya", "Maruthi H", "Ibrahim Shanu", "Muskan", "Arshitha", "Manishwaran", "Vincent Raj", "Chinmay Kumar", "Meghana", "Laxmi Kumari"],attendance: {} },
  { name: "Class 4" ,students:["Sai Krishna", "Abdul Rehaman", "Manvi Parmar", "Mo Samir", "Sahana H", "Krishna Yadav", "Preetham K", "Dev Takur", "Pritham Roy",   "Prem Kumar", "Lavanya ", "Sanjeev V (RTE)", "Akshatha M (RTE)", "Puneeth L", "Kushi N ", "Dilip ", "Mohammed Anwar", "Sunilkumar", "Nikil V", "Charan Gowda", "Deekshith", "Rishik Yadav", "Manob Ali", "Dhanush S", "Yakruth B ", "Guruprasad ", "Bhoomika", "Umair", "Vindhya Kumari", "Bupendar", "Niveditha K","Kanika", "Himanshu ", "Ayush Y","Aarya"],attendance: {} },
  { name: "Class 5" ,students:["Ayesha Banu", "Umme Kulsum", "S Mohammed Siddiq", "Mohammed Fahad", "Md. Khushi Praweein", "Prasanna", "Samarth", "Sakeeb Ahmed", "Pratham G", "Vandana R", "Himanshu Kumar", "Huda Kulsum", "Aryan", "Mohammed Ayaan", "Madan Nayaka V", "Shreya KS", "Shwetha R", "Adiba Kulsum", "Harivansh L", "Harikrishna", "Manushree", "Rohan Behera", "Jeevith G", "Mahalakshmi C N", "Sumanth", "Hamshika DS", "Lakshmishree S", "Abhishek", "Prajwal C Poojar", "Monika", "Annapurneshwari R", "Anitha S", "Shravya", "Robert Raj", "Joyce Kiruba", "S Pawan Kalyan", "Aina Mariyam", "Keerthana", "Nayana mahara"],attendance: {} },
 { name: "Class 6" ,students:["Daksh Kumar", "Anup Mallik", "Aakib Ahmed", "Tohid Yunus Shaikh", "Prince Kumar", "Musa Kaleem Ulla", "Alisha Parwin", "Karan Raj", "Syed Izma Bukhari", "Vedanth HJ", "Dhanushree", "Soujanya", "Parvathi S Choudhari", "Manoj R", "Vikas T P", "Syed Jillani", "Bi Bi Aliya", "Chethan M.", "Ajmal", "Nishanth Gowda", "Sanjan Ram", "Gunapriya", "Sujal S", "Priyanka M", "Payal", "Dipika", "Nandisha B.R", "Dhanush Yadav", "Pushpa C Pujer"],attendance: {} },
  
  { name: "Class 7" ,students:["Ranjitha V S", "Shravani V S", "R Prabha Karan", "Bi Bi Mehek", "Akash R", "Manoj", "Gowtham K", "Alok Kumar", "Pallavi P", "Shreya L", "Vijaydas Swarnakar", "Roshini", "Fathima Tul Rehana", "Bhoomika", "Pallavi M", "Manjula", "Poorvi", "Manjunath A J", "Kismath", "Mohammed Yusuf", "Sopan", "Meghana", "Poorvika", "Adithya M", "Tejashwini D S", "Chidhanandha H.N", "Ruturaj Barik", "Ragav", "Hemanth",  "Mousam kumari", "Fathima khanum", "Sudeep Mahara", "Mohammed Khaza"] ,attendance: {} },
   { name: "Class 8" ,students:["Lohith K", "Sadiya Khanum", "Pavan Kumar R", "Zuber Yunus Shaikh", "Shivni Kumari", "Syed Arbaan Bukhari", "Sulthana Banu", "Hemanth S", "Pooja Devi", "Likitha P", "Hemapriya", "Shreyas", "Anthara Begam", "Muskan", "Swapna", "Mahzavi", "Shubhashree", "Anushka", "Sufiya", "Ranganath", "Shashank", "Niranjan Singh", "Jeevanth K P"] ,attendance: {} },
  
   { name: "Class 9" ,students:["Dhakshay L", "Ismail Zabiulla", "Sulaimaan Shariff", "Anusha N", "R Bhuvana", "Ashok S", "Reema S", "Irtiza", "Chethan B", "Afreen", "Paresh", "Saresh", "Vikram", "Varun D K", "Tilak", "Shilpashree", "Bhargavi Nayak", "Anjan M R", "Lavanya K V", "Venkatesh", "Shrushti M", "Naveen Yadav", "Harshitha", "Pramod S"] ,attendance: {} },
  
  { name: "Class 10" ,students:["Sameer Alam", "Muskan", "Sayal Yunus Shaikh", "Syed Usman Tharum Bukhari", "Harish Gowda", "Hussain Ali", "Manu Mallik", "Varshitha L", "Lohith M", "Mahesh S", "Dharani", "Syed Aftab", "Syed Nawazulla", "Divya U", "Deeksha U", "Deekshitha R", "Dikshya S", "Manoj L",  "Syed Ibrahim", "Likith K", "Srujan Gowda M", "Meghana R", "Sahana T", "Nandan K V", "Jyothi", "Gowtami Shetty", "Madumita S", "Nikitha Karunya", "Roshan Kumar"] ,attendance: {} },
 
];

function submitAttendance() {
  const selectedClass = document.getElementById("class-dropdown").value;
  const students = Array.from(document.querySelectorAll('input[type="checkbox"]')).map(checkbox => checkbox.id.split('-')[1]);
  const currentDateString = new Date().toISOString().split('T')[0];
  if (!classes.find(cls => cls.name === selectedClass).attendance[currentDateString]) {
    classes.find(cls => cls.name === selectedClass).attendance[currentDateString] = {};
  }
  students.forEach(student => {
    const isChecked = document.getElementById(`${selectedClass}-${student}`).checked;
    classes.find(cls => cls.name === selectedClass).attendance[currentDateString][student] = isChecked ? "Present" : "Absent";
  });
  updateAbsentStudents();
  alert("Attendance submitted successfully!");
}

function saveAttendanceToExcel() {
  let csvContent = "data:text/csv;charset=utf-8,Date,Day,Class,Absent Students\n";
  
  classes.forEach(cls => {
    const allDates = Object.keys(cls.attendance);
    allDates.sort(); // Sort dates chronologically
    
    allDates.forEach(date => {
      const absentStudents = Object.entries(cls.attendance[date])
        .filter(([student, status]) => status === "Absent")
        .map(([student, status]) => student);
      
      if (absentStudents.length > 0) {
        const row = [
          date,
          new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
          cls.name,
          absentStudents.join(', ')
        ];
        csvContent += row.join(',') + '\n';
      }
    });
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "attendance.csv");
  document.body.appendChild(link);
  link.click();
}

function updateAbsentStudents() {
  const currentDate = new Date();
  const currentDateISOString = currentDate.toISOString().split('T')[0];
  
  classes.forEach(cls => {
    for (const date in cls.attendance) {
      if (date !== currentDateISOString) {
        for (const student in cls.attendance[date]) {
          if (cls.attendance[date][student] === "Absent") {
            cls.attendance[date][student] = "Absent (Marked)";
          }
        }
      }
    }
  });

  // Save updated attendance data to local storage
  localStorage.setItem('attendanceData', JSON.stringify(classes));
}

function loadClasses() {
  const classDropdown = document.getElementById("class-dropdown");
  classDropdown.innerHTML = '<option value="">Select Class</option>'; // Clear existing options
  
  // Load attendance data from local storage
  const storedData = localStorage.getItem('attendanceData');
  if (storedData) {
    classes = JSON.parse(storedData);
  }

  classes.forEach((cls) => {
    const option = document.createElement("option");
    option.value = cls.name;
    option.textContent = cls.name;
    classDropdown.appendChild(option);
  });
  classDropdown.addEventListener("change", loadStudents);
}

function loadStudents() {
  const selectedClass = document.getElementById("class-dropdown").value;
  const studentList = document.getElementById("student-list");
  if (!selectedClass) {
    studentList.innerHTML = "";
    return;
  }
  studentList.innerHTML = `<h3>${selectedClass} Students:</h3>`;
  classes.find(cls => cls.name === selectedClass).students.forEach((student) => {
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("class", "checkbox-label");
    checkboxLabel.innerHTML = `<input type="checkbox" id="${selectedClass}-${student}">${student}`;
    studentList.appendChild(checkboxLabel);
  });
  document.querySelector('.students').style.display = 'block';
}

function viewAttendance() {
  const content = generateAbsenteesContent();
  openAbsentWindow(content);
}

function generateAbsenteesContent() {
  let absentDetails = {};
  
  classes.forEach(cls => {
    const allDates = Object.keys(cls.attendance);
    allDates.sort(); // Sort dates chronologically
    
    allDates.forEach(date => {
      const absentStudents = Object.entries(cls.attendance[date])
        .filter(([student, status]) => status === "Absent" || status === "Absent (Marked)")
        .map(([student, status]) => student);
      
      if (absentStudents.length > 0) {
        if (!absentDetails[date]) {
          absentDetails[date] = {};
        }
        if (!absentDetails[date][cls.name]) {
          absentDetails[date][cls.name] = [];
        }
        absentDetails[date][cls.name].push(...absentStudents);
      }
    });
  });

  let content = "<h2>Absent Students</h2>";
  for (const date in absentDetails) {
    content += `<h3>Date: ${date}</h3>`;
    for (const clsName in absentDetails[date]) {
      content += `<h4>Class: ${clsName}</h4>`;
      content += `<p>Absent Students: ${absentDetails[date][clsName].join(', ')}</p>`;
    }
  }

  return content;
}

function openAbsentWindow(content) {
  const newWindow = window.open("", "_blank", "width=600,height=400");
  newWindow.document.body.innerHTML = content;
}

document.addEventListener("DOMContentLoaded", () => {
  loadClasses();
});