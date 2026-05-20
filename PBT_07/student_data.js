const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;
let maxAvg = -1, minAvg = 11;
let svMax = "", svMin = "";
let sumMath = 0, sumPhysics = 0, sumCs = 0;
let sumMale = 0, countMale = 0, sumFemale = 0, countFemale = 0;

console.log("| STT | Tên | TB | Xếp loại |");
console.log("|-----|-----|----|----------|");

for (let i = 0; i < students.length; i++) {
    let s = students[i];
    
    let avg = (s.math * 0.4) + (s.physics * 0.3) + (s.cs * 0.3);
    avg = Math.round(avg * 10) / 10; // Làm tròn 1 chữ số thập phân

    let rank = "";
    if (avg >= 8.0) { rank = "Giỏi"; countGioi++; }
    else if (avg >= 6.5) { rank = "Khá"; countKha++; }
    else if (avg >= 5.0) { rank = "Trung bình"; countTB++; }
    else { rank = "Yếu"; countYeu++; }

    console.log(`| ${i + 1} | ${s.name} | ${avg} | ${rank} |`);

    if (avg > maxAvg) { maxAvg = avg; svMax = s.name; }
    if (avg < minAvg) { minAvg = avg; svMin = s.name; }

    sumMath += s.math; sumPhysics += s.physics; sumCs += s.cs;

    if (s.gender === "M") { sumMale += avg; countMale++; }
    else { sumFemale += avg; countFemale++; }
}

console.log("\n4. Số lượng mỗi loại: Giỏi:", countGioi, "Khá:", countKha, "TB:", countTB, "Yếu:", countYeu);
console.log("5. Cao nhất:", svMax, `(${maxAvg})`, "| Thấp nhất:", svMin, `(${minAvg})`);
console.log("6. TB môn: Math:", (sumMath/students.length).toFixed(1), "Phys:", (sumPhysics/students.length).toFixed(1), "CS:", (sumCs/students.length).toFixed(1));
console.log("7. TB theo giới tính: Nam:", (sumMale/countMale).toFixed(1), "Nữ:", (sumFemale/countFemale).toFixed(1));