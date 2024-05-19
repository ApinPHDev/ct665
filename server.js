const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const filePath = path.join(process.env.STORY_DIR, "story", "text.txt"); //__dirname

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send(`
  <div style="max-width: fit-content;
  margin-left: auto;
  margin-right: auto;">
    <h2 style="text-align: center;">Apin Phuanglumyai</h2>
    <h3 style="text-align: center;">ID: 65130857</h3>
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t1.6435-9/193658166_2481106505368126_8402832332757520204_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0qSBpKHx1QEQ7kNvgFvYSFZ&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYCrlxB-DY4PWu4sldhBBB95LwMjSUI-4xlSjAZkh1DxtQ&oe=667112AB" style="width: 100%"/>
    <a href="/myresearch" style="text-align: center;">My Research</a> 
    <a href="/myresearchplan" style="text-align: center;">My Research Plan</a> 
   </div>  
    `);
});

app.get("/myresearch", (req, res) => {
  return res.send(`
    <p>Automatic Vehicle License Plate Recognition Based on Yolo(v4) for Smart Parking Management System
    การประยุกต์ใช้การจดจำภาพทำให้ระบบอิเล็กทรอนิกส์มีความชาญฉลาดมากขึ้นเช่น ระบบอัตโนมัติในโรงงานและการขับขี่อัตโนมัติ การจัดเก็บค่าธรรมเนียมระบบจอดรถและการตรวจจับความเร็วบนถนนล้วนระบุตามป้ายทะเบียนรถ  ควบคู่ไปกับการพัฒนาปัญญาประดิษฐ์ (AI) ,The You Only Look Once v 4 (Yolo v4) ใช้เพื่อใช้ระบบจดจำป้ายทะเบียนอัจฉริยะ อัลกอริทึมที่เป็นเครือข่ายประสาทเทียม (CNN)  
    โดยการผสมผสานระหว่างการจดจำป้ายทะเบียนอัตโนมัติและฟังก์ชัน Line ส่วนใหญ่ประกอบด้วยสามส่วนสำหรับระบบนี้ ประการแรก ตำแหน่งของป้ายทะเบียนถูกกำหนดจากภาพ จากนั้นจึงระบุตัวอักษรจากป้ายทะเบียน สุดท้าย ผลการจดจำจะถูกส่งไปยัง LINE Bot และ Line Notify สำหรับการคำนวณค่าจอดรถ
    </p>
    <a href="/">Home</a>
    `);
});

app.get("/researchplan", (req, res) => {
  return res.send(`
    <table border="1"style="border-collapse: collapse;">
    <tr>
      <th>Work</th>
      <th>October</th>
      <th>November</th>
      <th>December</th>
      <th>January</th>
      <th>February</th>
      <th>March</th>
      <th>April</th>
      <th>May</th>
      <th>June</th>
      <th>July</th>
      <th>August</th>

    </tr>
    <tr>
      <td>ศึกษาปัญหา</td>
      <td>start</td>
      <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>literature review</td>  
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ออกแบบโครงสร้างการทดลอง</td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ลงมือ coding สถาปัตยกรรม MVC</td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>
    <tr>
        <td>ลงมือ coding สถาปัตยกรรม Front-end/Back-end</td> 
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบ unit-test ทั้ง 2 แบบ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบการทำงานจริงและบันทึกผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ประเมินผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
    </tr>
    <tr>
        <td>สรุป</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
    </tr>
</tr>
  </table>
  <a href="/">Home</a>
`);
});

app.get("/rest/researchplan", (req, res) => {
  res.status(200).json({
    research: {
      work: {
        problem: "october",
        literature: "november",
        design: "december",
        codingmvc: "january, february",
        codingfrontendbackend: "march, april, may",
        unittest: "june",
        test: "july",
        result: "august",
        conclusion: "august",
      },
    },
  });
});

app.listen(3000);
