const SHEETS = {
  STUDENTS: 'Students',
  SESSIONS: 'Sessions',
  ATTENDANCE: 'Attendance',
};

const ADMIN_PASSWORD = 'admin115';
const TIME_ZONE = 'Asia/Taipei';
const DEFAULT_YEAR = 2026;
const TEXT_COLUMNS = ['student_id', 'session_key'];

const DEFAULT_SESSIONS = [
  ['0630', '06/30', '二', '下午 13:00-16:00', '局部活動義齒技術學', '謝承勛', 'tutoring', 'C205 正課教室', '', true],
  ['0701', '07/01', '三', '全天班 (09:00-16:00)', '全口義齒排列(術科)', '林聖傑 (傑)', 'tutoring', 'G703 實作教室', '請同學務必帶齊全口排列工具及黏土。', true],
  ['0702', '07/02', '四', '全天班 (09:00-16:00)', '牙技法規與倫理', '張正君', 'tutoring', 'C205 正課教室', '', true],
  ['0703', '07/03', '五', 'AM 固定義齒 / PM 牙體形雕', '固定義齒技術學 & 牙體形態雕刻', '薛亞銘 / 董國龍', 'tutoring', 'C205 / G703', '下午形雕課請帶紅色與藍色雕刻蠟塊。', true],
  ['0704', '07/04', '六', '上午 09:00-12:00', '口腔生理學', '陳竣鋒', 'tutoring', 'C205 正課教室', '', true],
  ['0705', '07/05', '日', '09:00-16:00', '在職專班第一次模擬考', '系上監考老師', 'exam', 'C205 / G703', '請準時於 08:45 前至 C205 教室簽到，遲到依國考規範處理。', true],
  ['0706', '07/06', '一', 'AM 牙科陶瓷 / PM 全口義齒(朱)', '牙科陶瓷技術學 & 全口義齒排列', '林莉淳 / 朱柏霖', 'tutoring', 'C205 / G703', '', true],
  ['0707', '07/07', '二', 'AM 牙科材料* / PM 牙體形雕(崧)', '牙科材料學* & 牙體形態雕刻', '陳慈徽 / 許洛菘', 'tutoring', 'C205 / G703', '', true],
  ['0708', '07/08', '三', '視簡章規定時間', '聯合免試 (無常規課輔)', '全體自主行程', 'event', '校外/自主', '', true],
  ['0709', '07/09', '四', 'AM 兒童牙科 / PM 牙體形態學', '兒童牙科技術學 & 牙體形態學', '邱香婷 / 簡裕庭', 'tutoring', 'C205 正課教室', '', true],
  ['0711', '07/11', '六', '五專 & 在職 仿真模擬', '第一次仿真模擬考 (第一天)', '仿真考小組', 'exam', 'C205 / G703', '仿真全套學術科模擬，請著實驗衣並備齊所有器械。', true],
  ['0712', '07/12', '日', '五專 & 在職 仿真模擬', '第一次仿真模擬考 (第二天)', '仿真考小組', 'exam', 'C205 / G703', '', true],
  ['0713', '07/13', '一', '全天班 (09:00-16:00)', '牙科矯正技術學', '邱香婷', 'tutoring', 'C205 正課教室', '', true],
  ['0714', '07/14', '二', 'AM 牙體形雕(董) / PM 局部活動義齒', '牙體形態雕刻 & 局部活動義齒技術', '董國龍 / 謝承勛', 'tutoring', 'C205 / G703', '', true],
  ['0715', '07/15', '三', '全天班 (09:00-16:00)', '全口義齒排列(術科)', '林聖傑 (傑)', 'tutoring', 'G703 實作教室', '', true],
  ['0716', '07/16', '四', '全天班 (09:00-16:00)', '全口活動義齒技術學', '黃菁芳', 'tutoring', 'C205 正課教室', '', true],
  ['0718', '07/18', '六', '五專 & 在職 仿真模擬', '第二次仿真模擬考 (第一天)', '仿真考小組', 'exam', 'C205 / G703', '考前最後大模考，成績將作為最終衝刺評估指標！', true],
  ['0719', '07/19', '日', '五專 & 在職 仿真模擬', '第二次仿真模擬考 (第二天)', '仿真考小組', 'exam', 'C205 / G703', '', true],
  ['0720', '07/20', '一', 'AM 牙體形態 / PM 牙體形雕(崧)', '牙體形態學 & 牙體形態雕刻', '簡裕庭 / 許洛菘', 'tutoring', 'C205 / G703', '', true],
  ['0721', '07/21', '二', 'AM 牙科材料* / PM 牙技法規', '牙科材料學* & 牙技法規與倫理', '陳慈徽 / 張正君', 'tutoring', 'C205 正課教室', '', true],
  ['0722', '07/22', '三', '全天班 (09:00-16:00)', '全口義齒排列(術科)', '朱柏霖 (朱)', 'tutoring', 'G703 實作教室', '', true],
  ['0723', '07/23', '四', 'AM 考前事項宣達* / PM 祈福活動', '考前重要宣達事項 & 祈福大會', '班級導師 / 系主任', 'event', 'C205 / 祈福會場', '祈福大會備有包子與粽子，預祝大家金榜題名！', true],
  ['0725', '07/25', '六', '出發日 / 看考場', '北上國考 (交通與考場巡禮)', '帶隊老師', 'national_exam', '北部試區', '遊覽車將於上午 08:30 於校門口準時發車，請勿遲到。', true],
  ['0726', '07/26', '日', '正式考試 (第一天)', '牙體技術師國家考試 - 學科與術科', '考選部', 'national_exam', '考選部指定試場', '記得攜帶身分證、准考證及規定文具器械。', true],
  ['0727', '07/27', '一', '正式考試 (第二天)', '牙體技術師國家考試 - 學科與術科', '考選部', 'national_exam', '考選部指定試場', '', true],
  ['0728', '07/28', '二', '考後處理與討論', '返校疑議處理', '系上專業團隊', 'national_exam', '系辦公室', '對試題答案有疑慮者，請攜帶佐證資料到系辦公室填寫疑議表。', true],
];

const DEFAULT_STUDENTS = [
  ['115001', '張育誠', '115', '115級 (2026)', '在職專班'],
  ['115002', '陳映婕', '115', '115級 (2026)', '五專部'],
  ['115003', '林楷瀚', '115', '115級 (2026)', '在職專班'],
  ['115004', '黃歆雅', '115', '115級 (2026)', '五專部'],
  ['115005', '徐志傑', '115', '115級 (2026)', '在職專班'],
];

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  const callback = sanitizeCallback(params.callback || 'callback');

  try {
    const result = routeAction(params);
    return jsonp(callback, { ok: true, data: result });
  } catch (error) {
    return jsonp(callback, { ok: false, error: String(error.message || error) });
  }
}

function routeAction(params) {
  ensureSetup();

  switch (params.action) {
    case 'loginStudent':
      return loginStudent(params.student_id, params.password);
    case 'registerStudent':
      return registerStudent(params);
    case 'listStudentSessions':
      return listStudentSessions(params.student_id, params.password);
    case 'updateAttendance':
      return updateAttendance(params.student_id, params.password, params.session_key, params.status);
    case 'adminLogin':
      verifyAdmin(params.password);
      return { authenticated: true };
    case 'adminSummary':
      verifyAdmin(params.password);
      return adminSummary();
    case 'adminExportData':
      verifyAdmin(params.password);
      return adminExportData();
    default:
      throw new Error('Unknown action.');
  }
}

function ensureSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const students = getOrCreateSheet_(ss, SHEETS.STUDENTS, ['student_id', 'name', 'password_hash', 'year', 'type', 'created_at', 'status']);
  const sessions = getOrCreateSheet_(ss, SHEETS.SESSIONS, ['session_key', 'date', 'day', 'time', 'subject', 'teacher', 'type', 'classroom', 'notes', 'visible']);
  getOrCreateSheet_(ss, SHEETS.ATTENDANCE, ['student_id', 'session_key', 'status', 'updated_at']);

  if (students.getLastRow() === 1) {
    const now = now_();
    students.getRange(2, 1, DEFAULT_STUDENTS.length, 7).setValues(
      DEFAULT_STUDENTS.map((student) => [student[0], student[1], hash_(student[2]), student[3], student[4], now, 'active'])
    );
  }

  if (sessions.getLastRow() === 1) {
    sessions.getRange(2, 1, DEFAULT_SESSIONS.length, 10).setValues(DEFAULT_SESSIONS);
  }

}

function loginStudent(studentId, password) {
  const student = findActiveStudent_(studentId, password);
  return { student, sessions: sessionPayloadForStudent_(student.student_id) };
}

function registerStudent(params) {
  const studentId = clean_(params.student_id);
  const name = clean_(params.name);
  const password = String(params.password || '');
  const year = clean_(params.year || '115級 (2026)');
  const type = clean_(params.type || '在職專班');

  if (!studentId || !name || !password) {
    throw new Error('學號、姓名與密碼都必填。');
  }

  const studentsSheet = sheet_(SHEETS.STUDENTS);
  const students = sheetObjects_(studentsSheet);
  if (students.some((student) => String(student.student_id) === studentId)) {
    throw new Error('此學號已經登記。');
  }

  studentsSheet.appendRow([studentId, name, hash_(password), year, type, now_(), 'active']);
  return loginStudent(studentId, password);
}

function listStudentSessions(studentId, password) {
  const student = findActiveStudent_(studentId, password);
  return { student, sessions: sessionPayloadForStudent_(student.student_id) };
}

function updateAttendance(studentId, password, sessionKey, status) {
  const student = findActiveStudent_(studentId, password);
  const allowedStatuses = ['attend', 'tentative', 'absent'];
  if (!allowedStatuses.includes(status)) {
    throw new Error('出席狀態格式錯誤。');
  }

  const session = findSession_(sessionKey);
  if (!session.visible) {
    throw new Error('此課程目前未開放。');
  }
  if (!isEditableSession_(session)) {
    throw new Error('只能修改明天與未來課程。');
  }

  upsertAttendance_(student.student_id, session.session_key, status);
  return { student, sessions: sessionPayloadForStudent_(student.student_id) };
}

function adminSummary() {
  const students = sheetObjects_(sheet_(SHEETS.STUDENTS)).filter((student) => student.status === 'active');
  const sessions = visibleSessions_();
  const attendance = sheetObjects_(sheet_(SHEETS.ATTENDANCE));

  return {
    students,
    sessions: sessions.map((session) => summarizeSession_(session, students, attendance)),
  };
}

function adminExportData() {
  const summary = adminSummary();
  const rows = [];
  rows.push(['學號', '姓名', '畢業年份', '班別'].concat(summary.sessions.map((session) => `${session.date} ${session.subject}`)));

  summary.students.forEach((student) => {
    rows.push([
      student.student_id,
      student.name,
      student.year,
      student.type,
    ].concat(summary.sessions.map((session) => {
      const found = session.attendance.find((item) => item.student_id === student.student_id);
      return statusLabel_(found ? found.status : 'absent');
    })));
  });

  return { rows };
}

function summarizeSession_(session, students, attendance) {
  const rows = students.map((student) => {
    const found = attendance.find((item) => item.student_id === student.student_id && item.session_key === session.session_key);
    return {
      student_id: student.student_id,
      name: student.name,
      type: student.type,
      status: found ? found.status : 'absent',
      updated_at: found ? found.updated_at : '',
    };
  });

  return Object.assign({}, session, {
    editable: isEditableSession_(session),
    attendance: rows,
    counts: {
      attend: rows.filter((row) => row.status === 'attend').length,
      tentative: rows.filter((row) => row.status === 'tentative').length,
      absent: rows.filter((row) => row.status === 'absent').length,
    },
  });
}

function sessionPayloadForStudent_(studentId) {
  const attendance = sheetObjects_(sheet_(SHEETS.ATTENDANCE)).filter((row) => row.student_id === studentId);
  return visibleSessions_().map((session) => {
    const found = attendance.find((row) => row.session_key === session.session_key);
    return Object.assign({}, session, {
      status: found ? found.status : 'absent',
      editable: isEditableSession_(session),
      is_tomorrow: isTomorrow_(session),
    });
  });
}

function findActiveStudent_(studentId, password) {
  const id = clean_(studentId);
  if (!id || !password) {
    throw new Error('請輸入學號與密碼。');
  }

  const students = sheetObjects_(sheet_(SHEETS.STUDENTS));
  const student = students.find((item) => item.student_id === id && item.status === 'active');
  if (!student || student.password_hash !== hash_(String(password))) {
    throw new Error('學號或密碼錯誤。');
  }

  return {
    student_id: student.student_id,
    name: student.name,
    year: student.year,
    type: student.type,
  };
}

function findSession_(sessionKey) {
  const session = visibleSessions_().find((item) => item.session_key === normalizeKey_(sessionKey));
  if (!session) {
    throw new Error('找不到此課程。');
  }
  return session;
}

function visibleSessions_() {
  return sheetObjects_(sheet_(SHEETS.SESSIONS))
    .map((session) => Object.assign({}, session, { session_key: normalizeKey_(session.session_key) }))
    .filter((session) => session.visible === true || String(session.visible).toLowerCase() === 'true')
    .sort((a, b) => normalizeKey_(a.session_key).localeCompare(normalizeKey_(b.session_key)));
}

function upsertAttendance_(studentId, sessionKey, status) {
  const attendanceSheet = sheet_(SHEETS.ATTENDANCE);
  const values = attendanceSheet.getDataRange().getValues();
  const now = now_();

  for (let i = 1; i < values.length; i += 1) {
    if (String(values[i][0]) === studentId && String(values[i][1]) === sessionKey) {
      attendanceSheet.getRange(i + 1, 3, 1, 2).setValues([[status, now]]);
      return;
    }
  }

  attendanceSheet.appendRow([studentId, sessionKey, status, now]);
}

function verifyAdmin(password) {
  if (!password || hash_(String(password)) !== hash_(ADMIN_PASSWORD)) {
    throw new Error('管理密碼錯誤。');
  }
}

function getOrCreateSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
  return sheet;
}

function sheet_(name) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}

function sheetObjects_(sheet) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];

  const headers = values[0].map(String);
  return values.slice(1).filter((row) => row.some((cell) => cell !== '')).map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = TEXT_COLUMNS.includes(header) ? clean_(row[index]) : row[index];
    });
    return obj;
  });
}

function isEditableSession_(session) {
  return sessionDate_(session) >= startOfTomorrow_();
}

function isTomorrow_(session) {
  return sameDate_(sessionDate_(session), startOfTomorrow_());
}

function sessionDate_(session) {
  if (Object.prototype.toString.call(session.date) === '[object Date]' && !isNaN(session.date.getTime())) {
    return new Date(session.date.getFullYear(), session.date.getMonth(), session.date.getDate());
  }

  const parts = String(session.date).split('/');
  return new Date(DEFAULT_YEAR, Number(parts[0]) - 1, Number(parts[1]));
}

function startOfTomorrow_() {
  const now = new Date();
  const todayText = Utilities.formatDate(now, TIME_ZONE, 'yyyy/MM/dd');
  const parts = todayText.split('/');
  const tomorrow = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]) + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow;
}

function sameDate_(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function statusLabel_(status) {
  if (status === 'attend') return '出席';
  if (status === 'tentative') return '待定';
  return '不出席';
}

function hash_(value) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value, Utilities.Charset.UTF_8);
  return bytes.map((byte) => {
    const v = byte < 0 ? byte + 256 : byte;
    return (`0${v.toString(16)}`).slice(-2);
  }).join('');
}

function now_() {
  return Utilities.formatDate(new Date(), TIME_ZONE, 'yyyy-MM-dd HH:mm:ss');
}

function clean_(value) {
  return String(value || '').trim();
}

function normalizeKey_(value) {
  return clean_(value);
}

function sanitizeCallback(callback) {
  const safe = String(callback || '').replace(/[^\w.$]/g, '');
  return safe || 'callback';
}

function jsonp(callback, payload) {
  return ContentService
    .createTextOutput(`${callback}(${JSON.stringify(payload)});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
