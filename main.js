function updateCounter() {
  const startDate = new Date('2023-07-16T00:00:00'); // วันที่เริ่มต้น
  const now = new Date(); // เวลาปัจจุบัน
  const diff = now - startDate; // ความแตกต่างเป็นมิลลิวินาที

  // คำนวณเวลา
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

  // คำนวณจำนวนวันทั้งหมด
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  // คำนวณจำนวนปีและวันที่ที่เหลือ
  const years = Math.floor(totalDays / 365);
  const remainingDays = totalDays % 365;

  // คำนวณจำนวนวันที่เหลือถึงปีถัดไป
  const daysToNextYear = 365 - remainingDays;

  // อัปเดตใน HTML
  document.getElementById('total-days').textContent = totalDays; // แสดงจำนวนวันรวมทั้งหมด
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // แสดงข้อความครบรอบ
  let message = '';
  if (years >= 1) {
    message = `ผ่านไปแล้ว ${years} ปี ${remainingDays} วัน`;
    message += `, อีก ${daysToNextYear} วัน จะครบรอบ ${years + 1} ปี`;
  } else {
    message = `ยังไม่ครบ 1 ปี, ผ่านไปแล้ว ${remainingDays} วัน`;
    message += `, อีก ${daysToNextYear} วัน จะครบรอบ 1 ปี`;
  }

  document.getElementById('next-anniversary').textContent = message;
}

// อัพเดตทุกวินาที
setInterval(updateCounter, 1000);
updateCounter();
