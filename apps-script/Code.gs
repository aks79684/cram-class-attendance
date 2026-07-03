const SHEETS = {
  STUDENTS: 'Students',
  SESSIONS: 'Sessions',
  ATTENDANCE: 'Attendance',
  MESSAGES: 'Messages',
  HOME_CARDS: 'HomeCards',
  ANNOUNCEMENTS: 'Announcements',
  MOCK_INTENTS: 'MockIntent',
};

const ADMIN_PASSWORD = 'admin115';
const TIME_ZONE = 'Asia/Taipei';
const DEFAULT_YEAR = 2026;
const TEXT_COLUMNS = ['student_id', 'session_key'];
const ALLOWED_STATUSES = ['attend', 'absent'];
const SESSION_FIELDS = ['date', 'day', 'time', 'subject', 'teacher', 'type', 'classroom', 'notes', 'visible'];
const INFO_ONLY_SESSION_KEYS = ['0708', '0725', '0726', '0727', '0728'];
const HIGHLIGHT_ONLY_SESSION_KEYS = ['0726', '0727'];
const MOCK_EXAM_SESSION_KEYS = ['0711', '0712', '0718', '0719'];
const DEFAULT_MOCK_INTENTS = [
  ['\u6797\u7469\u6a3a', 'H1309002', true, true],
  ['\u9673\u6881\u60df\u5a77', 'H1309009', true, true],
  ['\u5f35\u7407\u60e0', 'H1309010', true, true],
  ['\u5289\u7fd4\u5b87', 'H1309011', true, true],
  ['\u5f35\u535a\u6587', 'H1309012', true, true],
  ['\u67ef\u67cf\u7fbd', 'H1309013', true, true],
  ['\u9ec3\u90c1\u7407', 'H1309015', true, true],
  ['\u8a31\u80b2\u5091', 'H1309026', true, true],
  ['\u4ec7\u8587\u6674', 'H1309027', true, true],
  [' \u6f58\u4fe1\u5b8f', 'H1309031', true, true],
  ['\u694a\u671d\u4efb', 'H1309033', true, false],
  ['\u984f\u59a4\u5982', 'H1309035', true, true],
  ['\u5f35\u535a\u502b', 'H1309036', true, true],
  ['\u5433\u5efa\u5ef7', 'H1309037', true, true],
  ['\u53e4\u73a5\u85b0', 'H1309039', true, true],
  ['\u937e\u6770\u885b', 'H1309048', true, true],
  ['\u9673\u5104\u5146', 'H1309051', true, true],
  ['\u8463\u666f\u83ef', 'H1309052', true, true],
  ['\u838a\u7693\u5d34', 'H1309053', true, true],
  ['\u6731\u4fca\u8afa', 'H1309055', true, true],
  ['\u738b\u51a0\u5141', 'H1309057', true, true],
  ['\u9ec3\u8a69\u82b8', 'H1309058', true, true],
  ['\u694a\u627f\u7ff0', 'H1309059', true, true],
  ['\u6797\u5b5f\u79c0', 'H1309067', true, true],
  ['\u6797\u6c76\u6b23', 'H1309071', true, true],
  ['\u842c\u4e43\u7db8', 'H1309075', true, true],
  ['\u9ec3\u6e24\u7d18', 'H1309076', true, true],
  ['\u7c21\u5609\u8c6a', 'H1309085', true, true],
  ['\u838a\u5a55\u4f36', 'H1309091', true, true],
  ['\u5ed6\u8056\u4e30', 'H1309097', true, true],
  ['\u674e\u4fca\u5112', 'H1309100', true, true],
];
const DEFAULT_HOME_MESSAGES = [
  ['1', '每天前進一點點', '國考不是一天衝完，是每天多記住一題、多練熟一步。', true, 1],
  ['2', '記得回覆出席', '老師不是要抓人，是要先幫大家準備位置、器材和冷氣。', true, 2],
  ['3', '把錯題當線索', '錯題不是失敗紀錄，是提醒你下一次會更穩的路標。', true, 3],
];
const DEFAULT_HOME_IMAGE_CARD = [
  ['main', '課表', '點選圖片可放大查看。', 'assets/schedule-web-20260703.webp', '', true],
];
const DEFAULT_ANNOUNCEMENTS = [
  ['1', '請同學完成出席填寫，方便老師統計人數與準備教室。', true, 1],
  ['2', '課表若有異動，會以老師公告及系統內容為準。', true, 2],
];

const DEFAULT_SESSIONS = [
  ['0630', '06/30', '二', '下午 13:00-16:00', '局部活動義齒技術學', '謝承勛', 'tutoring', 'C205 正課教室', '', true],
  ['0701', '07/01', '三', '全天班 (09:00-16:00)', '全口義齒排列(術科)', '林聖傑 (傑)', 'tutoring', 'G703 實作教室', '請同學務必帶齊全口排列工具及黏土。', true],
  ['0702', '07/02', '四', '全天班 (09:00-16:00)', '牙技法規與倫理', '張正君', 'tutoring', 'C205 正課教室', '', true],
  ['0703', '07/03', '五', 'AM 固定義齒 / PM 牙體形雕', '固定義齒技術學 & 牙體形態雕刻', '薛亞銘 / 董國龍', 'tutoring', 'C205 / G703', '下午形雕課請帶紅色與藍色雕刻蠟塊。', true],
  ['0704', '07/04', '六', '上午 09:00-12:00', '口腔生理學', '陳竣鋒', 'tutoring', 'C205 正課教室', '', true],
  ['0705', '07/05', '日', '09:00-16:00', '在職專班第一次模擬考', '系上監考老師', 'exam', 'C205 / G703', '請準時於 08:45 前至 C205 教室簽到，遲到依國考規範處理。', true],
  ['0706', '07/06', '一', 'AM 牙科陶瓷 / PM 全口義齒(朱)', '牙科陶瓷技術學 & 全口義齒排列', '林莉淳 / 朱柏霖', 'tutoring', 'C205 / G703', '', true],
  ['0707', '07/07', '二', 'AM 牙科材料* / PM 牙體形雕(崧)', '牙科材料學* & 牙體形態雕刻', '陳慈徽 / 許洛菘', 'tutoring', 'C205 / G703', '', true],
  ['0708', '07/08', '三', '視簡章規定時間', '聯合免試 (無常規課輔)', '全體自主行程', 'event', '校外/自主', '此日期只在月曆標記，不需要回覆參加 / 不參加。', true],
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
  ['0726', '07/26', '日', '正式考試 (第一天)', '牙體技術師國家考試 - 學科與術科', '考選部', 'national_exam', '考選部指定試場', '第 1 節：預備 8:40，考試 9:00-10:00，牙體技術學（一）\n第 2 節：預備 10:30，考試 10:40-11:40，牙體技術學（二）\n第 3 節：預備 12:50，考試 13:00-14:00，牙體技術學（三）\n第 4 節：預備 14:30，考試 14:40-15:40，牙體技術學（四）', true],
  ['0727', '07/27', '一', '正式考試 (第二天)', '牙體技術師國家考試 - 學科與術科', '考選部', 'national_exam', '考選部指定試場', '第 5 節：預備 8:40，考試 9:00-12:00，全口活動義齒排列\n第 6 節：預備 13:40，考試 14:00-15:00，牙體解剖形態雕刻', true],
  ['0728', '07/28', '二', '考後處理與討論', '返校疑議處理', '系上專業團隊', 'national_exam', '系辦公室', '對試題答案有疑慮者，請攜帶佐證資料到系辦公室填寫疑議表。', true],
];

const DEFAULT_STUDENTS = [];
// 預設測試學生名單已移除：新試算表只會建立欄位，不會自動產生測試學生。

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

function doPost(e) {
  const params = e && e.parameter ? e.parameter : {};

  try {
    const result = routeAction(params);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, data: result }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error.message || error) }))
      .setMimeType(ContentService.MimeType.JSON);
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
    case 'getHomeMessages':
      return { messages: homeMessages_(), homeImageCard: homeImageCard_(), announcements: announcements_() };
    case 'updateAttendance':
      return updateAttendance(params.student_id, params.password, params.session_key, params.status);
    case 'updateAllAttendance':
      return updateAllAttendance(params.student_id, params.password);
    case 'updateStudentProfile':
    case 'updateStudent':
    case 'updateProfile':
    case 'saveStudentProfile':
      return updateStudentProfile(params);
    case 'adminLogin':
      verifyAdmin(params.password);
      return { authenticated: true };
    case 'adminSummary':
      verifyAdmin(params.password);
      return adminSummary();
    case 'adminExportData':
      verifyAdmin(params.password);
      return adminExportData();
    case 'adminUpdateSession':
      verifyAdmin(params.password);
      return adminUpdateSession(params);
    case 'adminUpdateStudentPassword':
      verifyAdmin(params.password);
      return adminUpdateStudentPassword(params.student_id, params.new_password);
    case 'adminUpdateHomeMessages':
      verifyAdmin(params.password);
      return adminUpdateHomeMessages(params.messages);
    case 'adminUpdateHomeImageCard':
      verifyAdmin(params.password);
      return adminUpdateHomeImageCard(params.card);
    case 'adminUpdateAnnouncements':
      verifyAdmin(params.password);
      return adminUpdateAnnouncements(params.announcements);
    default:
      throw new Error('Unknown action.');
  }
}

function ensureSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const students = getOrCreateSheet_(ss, SHEETS.STUDENTS, ['student_id', 'name', 'password_hash', 'year', 'type', 'created_at', 'status']);
  const sessions = getOrCreateSheet_(ss, SHEETS.SESSIONS, ['session_key', 'date', 'day', 'time', 'subject', 'teacher', 'type', 'classroom', 'notes', 'visible']);
  const messages = getOrCreateSheet_(ss, SHEETS.MESSAGES, ['message_id', 'title', 'body', 'visible', 'sort_order']);
  const homeCards = getOrCreateSheet_(ss, SHEETS.HOME_CARDS, ['card_id', 'title', 'body', 'image_url', 'link_url', 'visible']);
  const announcements = getOrCreateSheet_(ss, SHEETS.ANNOUNCEMENTS, ['announcement_id', 'body', 'visible', 'sort_order', 'created_at']);
  ensureSheetHeaders_(announcements, ['announcement_id', 'body', 'visible', 'sort_order', 'created_at']);
  const mockIntents = getOrCreateSheet_(ss, SHEETS.MOCK_INTENTS, ['name', 'student_id', 'week1', 'week2']);
  getOrCreateSheet_(ss, SHEETS.ATTENDANCE, ['student_id', 'session_key', 'status', 'updated_at']);

  if (students.getLastRow() === 1 && DEFAULT_STUDENTS.length > 0) {
    const now = now_();
    students.getRange(2, 1, DEFAULT_STUDENTS.length, 7).setValues(
      DEFAULT_STUDENTS.map((student) => [student[0], student[1], hash_(student[2]), student[3], student[4], now, 'active'])
    );
  }

  if (sessions.getLastRow() === 1) {
    sessions.getRange(2, 1, DEFAULT_SESSIONS.length, 10).setValues(DEFAULT_SESSIONS);
  }

  if (messages.getLastRow() === 1) {
    messages.getRange(2, 1, DEFAULT_HOME_MESSAGES.length, 5).setValues(DEFAULT_HOME_MESSAGES);
  }

  if (homeCards.getLastRow() === 1) {
    homeCards.getRange(2, 1, DEFAULT_HOME_IMAGE_CARD.length, 6).setValues(DEFAULT_HOME_IMAGE_CARD);
  }

  if (announcements.getLastRow() === 1) {
    announcements.getRange(2, 1, DEFAULT_ANNOUNCEMENTS.length, 5).setValues(DEFAULT_ANNOUNCEMENTS.map((row) => row.concat([''])));
  }

  if (mockIntents.getLastRow() === 1) {
    mockIntents.getRange(2, 1, DEFAULT_MOCK_INTENTS.length, 4).setValues(DEFAULT_MOCK_INTENTS);
  }

}

function loginStudent(studentId, password) {
  const student = findActiveStudent_(studentId, password);
  return { student, sessions: sessionPayloadForStudent_(student.student_id) };
}

function registerStudent(params) {
  const studentId = normalizeStudentId_(params.student_id);
  const name = clean_(params.name);
  const password = String(params.password || '');
  const year = clean_(params.year || '115級 (2026)');
  const type = clean_(params.type || '甲班');

  if (!studentId || !name || !password) {
    throw new Error('學號、姓名與密碼都必填。');
  }

  const studentsSheet = sheet_(SHEETS.STUDENTS);
  const students = sheetObjects_(studentsSheet);
  if (students.some((student) => normalizeStudentId_(student.student_id) === studentId)) {
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
  if (!ALLOWED_STATUSES.includes(status)) {
    throw new Error('出席狀態格式錯誤。');
  }

  const session = findSession_(sessionKey);
  if (!session.visible) {
    throw new Error('此課程目前未開放。');
  }
  if (isInfoOnlySession_(session)) {
    throw new Error('此日期只在月曆標記，不需要回覆參加 / 不參加。');
  }
  if (!isEditableSession_(session)) {
    throw new Error('只能修改明天與未來課程。');
  }

  return upsertAttendance_(student.student_id, session.session_key, status);
}

function updateAllAttendance(studentId, password) {
  const student = findActiveStudent_(studentId, password);
  const sessions = visibleSessions_().filter((session) => isEditableSession_(session) && !isInfoOnlySession_(session));
  const attendanceSheet = sheet_(SHEETS.ATTENDANCE);
  const values = attendanceSheet.getDataRange().getValues();
  const id = normalizeStudentId_(student.student_id);
  const now = now_();
  const existingByKey = {};
  const dataRows = values.slice(1);

  dataRows.forEach((row, index) => {
    if (normalizeStudentId_(row[0]) === id) {
      existingByKey[normalizeKey_(row[1])] = index;
    }
  });

  const newRows = [];
  const updated = sessions.map((session) => {
    const key = normalizeKey_(session.session_key);
    const existingIndex = existingByKey[key];
    if (existingIndex !== undefined) {
      dataRows[existingIndex] = [id, key, 'attend', now];
    } else {
      newRows.push([id, key, 'attend', now]);
    }
    return { session_key: key, status: 'attend', updated_at: now };
  });

  if (dataRows.length) {
    attendanceSheet.getRange(2, 1, dataRows.length, 4).setValues(dataRows.map((row) => [
      normalizeStudentId_(row[0]),
      normalizeKey_(row[1]),
      normalizeStatus_(row[2]),
      row[3],
    ]));
  }
  if (newRows.length) {
    attendanceSheet.getRange(attendanceSheet.getLastRow() + 1, 1, newRows.length, 4).setValues(newRows);
  }

  return { updated };
}

function updateStudentProfile(params) {
  const currentPassword = String(params.password || '');
  const student = findActiveStudent_(params.student_id, currentPassword);
  const id = normalizeStudentId_(student.student_id);
  const name = clean_(params.name);
  const year = clean_(params.year);
  const type = clean_(params.type);
  const newPassword = String(params.new_password || '').trim();

  if (!name) {
    throw new Error('請填寫姓名。');
  }
  if (!year) {
    throw new Error('請選擇畢業年份。');
  }
  if (!type) {
    throw new Error('請選擇班別。');
  }

  const studentsSheet = sheet_(SHEETS.STUDENTS);
  const values = studentsSheet.getDataRange().getValues();
  const headers = values[0].map(String);
  const idIndex = headers.indexOf('student_id');
  const nameIndex = headers.indexOf('name');
  const passwordIndex = headers.indexOf('password_hash');
  const yearIndex = headers.indexOf('year');
  const typeIndex = headers.indexOf('type');

  if ([idIndex, nameIndex, passwordIndex, yearIndex, typeIndex].some((index) => index === -1)) {
    throw new Error('Students 欄位設定不完整。');
  }

  for (let i = 1; i < values.length; i += 1) {
    if (normalizeStudentId_(values[i][idIndex]) !== id) continue;

    studentsSheet.getRange(i + 1, idIndex + 1).setValue(id);
    studentsSheet.getRange(i + 1, nameIndex + 1).setValue(name);
    studentsSheet.getRange(i + 1, yearIndex + 1).setValue(year);
    studentsSheet.getRange(i + 1, typeIndex + 1).setValue(type);
    if (newPassword) {
      studentsSheet.getRange(i + 1, passwordIndex + 1).setValue(hash_(newPassword));
    }

    return loginStudent(id, newPassword || currentPassword);
  }

  throw new Error('找不到此學生。');
}

function adminSummary() {
  const students = sheetObjects_(sheet_(SHEETS.STUDENTS)).filter((student) => student.status === 'active');
  const sessions = visibleSessions_();
  const attendance = sheetObjects_(sheet_(SHEETS.ATTENDANCE));

  return {
    students,
    sessions: sessions.map((session) => summarizeSession_(session, students, attendance)),
    attendanceCategories: attendanceCategories_(students, sessions, attendance),
    messages: homeMessages_(),
    homeImageCard: homeImageCard_(),
    announcements: announcements_(),
  };
}

function attendanceCategories_(students, sessions, attendance) {
  const tutoringKeys = sessions
    .filter((session) => session.type === 'tutoring' && !isInfoOnlySession_(session))
    .map((session) => normalizeKey_(session.session_key));
  const mockKeys = sessions
    .filter((session) => MOCK_EXAM_SESSION_KEYS.includes(normalizeKey_(session.session_key)))
    .map((session) => normalizeKey_(session.session_key));
  const oldIntent = mockIntentByStudent_();
  const categories = {
    tutoring_only: { label: '只去衝刺班課程', count: 0, students: [] },
    mock_only: { label: '只有參加仿真模擬考', count: 0, students: [] },
    both: { label: '兩個都參加', count: 0, students: [] },
  };

  students.forEach((student) => {
    const id = normalizeStudentId_(student.student_id);
    const nameKey = normalizeName_(student.name);
    const studentRows = attendance.filter((row) => normalizeStudentId_(row.student_id) === id);
    const hasTutoring = studentRows.some((row) => tutoringKeys.includes(normalizeKey_(row.session_key)) && normalizeStatus_(row.status) === 'attend');
    const mockRows = studentRows.filter((row) => mockKeys.includes(normalizeKey_(row.session_key)));
    const hasSystemMockResponse = mockRows.length > 0;
    const hasSystemMockAttend = mockRows.some((row) => normalizeStatus_(row.status) === 'attend');
    const oldMockAttend = Boolean(oldIntent.byId[id] || oldIntent.byName[nameKey]);
    const hasMock = hasSystemMockResponse ? hasSystemMockAttend : oldMockAttend;
    const summaryStudent = {
      student_id: id,
      name: student.name,
      year: student.year,
      type: student.type,
      registered: true,
    };

    if (hasTutoring && hasMock) categories.both.students.push(summaryStudent);
    else if (hasTutoring) categories.tutoring_only.students.push(summaryStudent);
    else if (hasMock) categories.mock_only.students.push(summaryStudent);
  });

  const addedUnregistered = {};
  oldIntent.records.forEach((record) => {
    const id = normalizeStudentId_(record.student_id);
    const nameKey = normalizeName_(record.name);
    const recordKey = id || nameKey;
    if (!recordKey || addedUnregistered[recordKey]) return;
    const matched = students.some((student) => {
      const studentId = normalizeStudentId_(student.student_id);
      const studentName = normalizeName_(student.name);
      return (id && studentId === id) || (nameKey && studentName === nameKey);
    });
    if (matched) return;
    addedUnregistered[recordKey] = true;
    categories.mock_only.students.push({
      student_id: id,
      name: record.name,
      year: '未註冊',
      type: '未註冊',
      registered: false,
    });
  });

  Object.keys(categories).forEach((key) => {
    categories[key].count = categories[key].students.length;
  });
  categories.mock_intent_error = oldIntent.error || '';
  return categories;
}

function mockIntentByStudent_() {
  const result = { byId: {}, byName: {}, records: [], error: '' };
  try {
    const rows = sheetObjects_(sheet_(SHEETS.MOCK_INTENTS));
    rows.forEach((row) => {
      const attend = isTrue_(row.week1) || isTrue_(row.week2);
      if (!attend) return;
      const id = normalizeStudentId_(row.student_id);
      const rawName = clean_(row.name);
      const name = normalizeName_(rawName);
      const record = {
        student_id: id,
        name: rawName,
        week1: isTrue_(row.week1),
        week2: isTrue_(row.week2),
      };
      if (id) result.byId[id] = record;
      if (name) result.byName[name] = record;
      result.records.push(record);
    });
  } catch (error) {
    result.error = `舊模擬考表單讀取失敗：${String(error.message || error)}`;
    return result;
  }
  return result;
}

function homeMessages_() {
  return sheetObjects_(sheet_(SHEETS.MESSAGES))
    .filter((message) => message.visible === true || String(message.visible).toLowerCase() === 'true')
    .sort((a, b) => Number(a.sort_order || 0) - Number(b.sort_order || 0))
    .map((message) => ({
      message_id: clean_(message.message_id),
      title: clean_(message.title),
      body: clean_(message.body),
      visible: true,
      sort_order: Number(message.sort_order || 0),
    }))
    .filter((message) => message.title || message.body);
}

function adminUpdateHomeMessages(messagesJson) {
  const messages = JSON.parse(String(messagesJson || '[]'));
  if (!Array.isArray(messages)) {
    throw new Error('輪播文案格式錯誤。');
  }

  const rows = messages
    .map((message, index) => ({
      message_id: clean_(message.message_id || String(index + 1)),
      title: clean_(message.title),
      body: clean_(message.body),
      visible: message.visible === true || String(message.visible).toLowerCase() === 'true',
      sort_order: Number(message.sort_order || index + 1),
    }))
    .filter((message) => message.title || message.body)
    .slice(0, 8)
    .map((message, index) => [message.message_id || String(index + 1), message.title, message.body, message.visible, index + 1]);

  if (!rows.length) {
    throw new Error('至少保留一則輪播文案。');
  }

  const messagesSheet = sheet_(SHEETS.MESSAGES);
  if (messagesSheet.getLastRow() > 1) {
    messagesSheet.getRange(2, 1, messagesSheet.getLastRow() - 1, 5).clearContent();
  }
  messagesSheet.getRange(2, 1, rows.length, 5).setValues(rows);
  return adminSummary();
}

function homeImageCard_() {
  const cards = sheetObjects_(sheet_(SHEETS.HOME_CARDS));
  const card = cards.find((item) => clean_(item.card_id) === 'main') || cards[0] || {};
  return {
    card_id: clean_(card.card_id || 'main'),
    title: clean_(card.title),
    body: clean_(card.body),
    image_url: clean_(card.image_url),
    link_url: clean_(card.link_url),
    visible: card.visible === true || String(card.visible).toLowerCase() === 'true',
  };
}

function adminUpdateHomeImageCard(cardJson) {
  const card = JSON.parse(String(cardJson || '{}'));
  const row = [
    'main',
    clean_(card.title),
    clean_(card.body),
    clean_(card.image_url),
    clean_(card.link_url),
    card.visible === true || String(card.visible).toLowerCase() === 'true',
  ];

  const sheet = sheet_(SHEETS.HOME_CARDS);
  if (sheet.getLastRow() > 1) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, 6).clearContent();
  }
  sheet.getRange(2, 1, 1, 6).setValues([row]);
  return adminSummary();
}

function announcements_() {
  return sheetObjects_(sheet_(SHEETS.ANNOUNCEMENTS))
    .filter((announcement) => announcement.visible === true || String(announcement.visible).toLowerCase() === 'true')
    .sort((a, b) => {
      const aCreated = clean_(a.created_at);
      const bCreated = clean_(b.created_at);
      if (aCreated && bCreated) return bCreated.localeCompare(aCreated);
      if (aCreated) return -1;
      if (bCreated) return 1;
      return Number(a.sort_order || 0) - Number(b.sort_order || 0);
    })
    .map((announcement) => ({
      announcement_id: clean_(announcement.announcement_id),
      body: clean_(announcement.body),
      visible: true,
      sort_order: Number(announcement.sort_order || 0),
      created_at: clean_(announcement.created_at),
    }))
    .filter((announcement) => announcement.body);
}

function adminUpdateAnnouncements(announcementsJson) {
  const announcements = JSON.parse(String(announcementsJson || '[]'));
  if (!Array.isArray(announcements)) {
    throw new Error('公告格式錯誤。');
  }

  const existingById = {};
  const existingByBody = {};
  sheetObjects_(sheet_(SHEETS.ANNOUNCEMENTS)).forEach((announcement) => {
    const createdAt = clean_(announcement.created_at);
    if (!createdAt) return;
    const id = clean_(announcement.announcement_id);
    const body = clean_(announcement.body);
    if (id) existingById[id] = createdAt;
    if (body) existingByBody[body] = createdAt;
  });

  const rows = announcements
    .map((announcement, index) => ({
      announcement_id: clean_(announcement.announcement_id || String(index + 1)),
      body: clean_(announcement.body),
      visible: announcement.visible === true || String(announcement.visible).toLowerCase() === 'true',
      sort_order: Number(announcement.sort_order || index + 1),
      created_at: clean_(announcement.created_at),
    }))
    .filter((announcement) => announcement.body)
    .slice(0, 10)
    .map((announcement, index) => [
      announcement.announcement_id || String(index + 1),
      announcement.body,
      announcement.visible,
      index + 1,
      announcement.created_at || existingById[announcement.announcement_id] || existingByBody[announcement.body] || now_(),
    ]);

  if (!rows.length) {
    throw new Error('至少保留一則公告。');
  }

  const announcementsSheet = sheet_(SHEETS.ANNOUNCEMENTS);
  if (announcementsSheet.getLastRow() > 1) {
    announcementsSheet.getRange(2, 1, announcementsSheet.getLastRow() - 1, 5).clearContent();
  }
  announcementsSheet.getRange(2, 1, rows.length, 5).setValues(rows);
  return adminSummary();
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
      if (isInfoOnlySession_(session)) return '僅月曆標記';
      const found = session.attendance.find((item) => item.student_id === student.student_id);
      return statusLabel_(found ? found.status : 'absent');
    })));
  });

  return { rows };
}

function summarizeSession_(session, students, attendance) {
  const infoOnly = isInfoOnlySession_(session);
  const rows = infoOnly ? [] : students.map((student) => {
    const found = attendance.find((item) => item.student_id === student.student_id && item.session_key === session.session_key);
    return {
      student_id: student.student_id,
      name: student.name,
      year: student.year,
      type: student.type,
      status: normalizeStatus_(found ? found.status : 'absent'),
      updated_at: found ? found.updated_at : '',
    };
  });

  return Object.assign({}, session, {
    editable: infoOnly ? false : isEditableSession_(session),
    attendance_required: !infoOnly,
    special_highlight: isHighlightOnlySession_(session),
    attendance: rows,
    counts: {
      attend: rows.filter((row) => row.status === 'attend').length,
      absent: rows.filter((row) => row.status === 'absent').length,
    },
  });
}

function sessionPayloadForStudent_(studentId) {
  const attendance = sheetObjects_(sheet_(SHEETS.ATTENDANCE)).filter((row) => row.student_id === studentId);
  return visibleSessions_().map((session) => {
    const infoOnly = isInfoOnlySession_(session);
    const found = attendance.find((row) => row.session_key === session.session_key);
    return Object.assign({}, session, {
      status: infoOnly ? 'info' : normalizeStatus_(found ? found.status : 'absent'),
      editable: infoOnly ? false : isEditableSession_(session),
      attendance_required: !infoOnly,
      special_highlight: isHighlightOnlySession_(session),
      is_tomorrow: isTomorrow_(session),
    });
  });
}

function findActiveStudent_(studentId, password) {
  const id = normalizeStudentId_(studentId);
  if (!id || !password) {
    throw new Error('請輸入學號與密碼。');
  }

  const students = sheetObjects_(sheet_(SHEETS.STUDENTS));
  const student = students.find((item) => normalizeStudentId_(item.student_id) === id && item.status === 'active');
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
    .map(normalizeSession_)
    .filter((session) => session.visible === true || String(session.visible).toLowerCase() === 'true')
    .sort((a, b) => normalizeKey_(a.session_key).localeCompare(normalizeKey_(b.session_key)));
}

function normalizeSession_(session) {
  const key = normalizeKey_(session.session_key || sessionKeyFromDate_(session.date));
  return Object.assign({}, session, {
    session_key: key,
    date: displayDateForSession_(session, key),
  });
}

function upsertAttendance_(studentId, sessionKey, status) {
  const attendanceSheet = sheet_(SHEETS.ATTENDANCE);
  const values = attendanceSheet.getDataRange().getValues();
  const now = now_();
  const id = normalizeStudentId_(studentId);
  const key = normalizeKey_(sessionKey);
  const normalizedStatus = normalizeStatus_(status);

  for (let i = 1; i < values.length; i += 1) {
    if (normalizeStudentId_(values[i][0]) === id && normalizeKey_(values[i][1]) === key) {
      attendanceSheet.getRange(i + 1, 1, 1, 4).setValues([[id, key, normalizedStatus, now]]);
      return { session_key: key, status: normalizedStatus, updated_at: now };
    }
  }

  attendanceSheet.appendRow([id, key, normalizedStatus, now]);
  return { session_key: key, status: normalizedStatus, updated_at: now };
}

function adminUpdateSession(params) {
  const sessionKey = normalizeKey_(params.session_key);
  if (!sessionKey) {
    throw new Error('缺少課程代碼。');
  }

  const sessionsSheet = sheet_(SHEETS.SESSIONS);
  const values = sessionsSheet.getDataRange().getValues();
  const headers = values[0].map(String);
  const keyIndex = headers.indexOf('session_key');
  if (keyIndex === -1) {
    throw new Error('Sessions 缺少 session_key 欄位。');
  }

  for (let i = 1; i < values.length; i += 1) {
    if (normalizeKey_(values[i][keyIndex]) !== sessionKey) continue;
    const nextKey = params.date ? sessionKeyFromDate_(params.date) : sessionKey;
    if (nextKey && nextKey !== sessionKey) {
      sessionsSheet.getRange(i + 1, keyIndex + 1).setValue(nextKey);
      updateAttendanceSessionKey_(sessionKey, nextKey);
    }
    SESSION_FIELDS.forEach((field) => {
      const columnIndex = headers.indexOf(field);
      if (columnIndex !== -1 && Object.prototype.hasOwnProperty.call(params, field)) {
        let value = params[field];
        if (field === 'visible') {
          value = value === true || String(value).toLowerCase() === 'true';
        }
        sessionsSheet.getRange(i + 1, columnIndex + 1).setValue(value);
      }
    });
    return adminSummary();
  }

  throw new Error('找不到此課程。');
}

function updateAttendanceSessionKey_(oldKey, newKey) {
  const attendanceSheet = sheet_(SHEETS.ATTENDANCE);
  const values = attendanceSheet.getDataRange().getValues();
  if (values.length < 2) return;

  for (let i = 1; i < values.length; i += 1) {
    if (normalizeKey_(values[i][1]) === oldKey) {
      attendanceSheet.getRange(i + 1, 2).setValue(newKey);
    }
  }
}

function adminUpdateStudentPassword(studentId, newPassword) {
  const id = normalizeStudentId_(studentId);
  const password = String(newPassword || '');
  if (!id || !password) {
    throw new Error('請輸入學號與新密碼。');
  }

  const studentsSheet = sheet_(SHEETS.STUDENTS);
  const values = studentsSheet.getDataRange().getValues();
  const headers = values[0].map(String);
  const idIndex = headers.indexOf('student_id');
  const passwordIndex = headers.indexOf('password_hash');
  if (idIndex === -1 || passwordIndex === -1) {
    throw new Error('Students 欄位設定不完整。');
  }

  for (let i = 1; i < values.length; i += 1) {
    if (normalizeStudentId_(values[i][idIndex]) === id) {
      studentsSheet.getRange(i + 1, idIndex + 1).setValue(id);
      studentsSheet.getRange(i + 1, passwordIndex + 1).setValue(hash_(password));
      return adminSummary();
    }
  }

  throw new Error('找不到此學生。');
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

function ensureSheetHeaders_(sheet, requiredHeaders) {
  const current = sheet.getLastRow() > 0
    ? sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0].map(String)
    : [];
  requiredHeaders.forEach((header) => {
    if (!current.includes(header)) {
      sheet.getRange(1, current.length + 1).setValue(header);
      current.push(header);
    }
  });
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
      if (header === 'student_id') {
        obj[header] = normalizeStudentId_(row[index]);
      } else if (TEXT_COLUMNS.includes(header)) {
        obj[header] = normalizeKey_(row[index]);
      } else {
        obj[header] = row[index];
      }
    });
    return obj;
  });
}

function isInfoOnlySession_(sessionOrKey) {
  const key = typeof sessionOrKey === 'object' && sessionOrKey !== null
    ? normalizeKey_(sessionOrKey.session_key)
    : normalizeKey_(sessionOrKey);
  return INFO_ONLY_SESSION_KEYS.includes(key);
}

function isHighlightOnlySession_(sessionOrKey) {
  const key = typeof sessionOrKey === 'object' && sessionOrKey !== null
    ? normalizeKey_(sessionOrKey.session_key)
    : normalizeKey_(sessionOrKey);
  return HIGHLIGHT_ONLY_SESSION_KEYS.includes(key);
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

function displayDateForSession_(session, sessionKey) {
  if (Object.prototype.toString.call(session.date) === '[object Date]' && !isNaN(session.date.getTime())) {
    return Utilities.formatDate(session.date, TIME_ZONE, 'MM/dd');
  }

  const text = clean_(session.date);
  const parts = text.split('/');
  if (parts.length >= 2) {
    const month = Number(parts[0]);
    const day = Number(parts[1]);
    if (month > 0 && day > 0) {
      return `${(`0${month}`).slice(-2)}/${(`0${day}`).slice(-2)}`;
    }
  }

  const key = normalizeKey_(sessionKey || session.session_key);
  if (/^\d{4}$/.test(key)) {
    return `${key.slice(0, 2)}/${key.slice(2)}`;
  }
  return text;
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
  if (normalizeStatus_(status) === 'attend') return '參加';
  return '不參加';
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

function normalizeName_(value) {
  return clean_(value).replace(/\s+/g, '');
}

function normalizeKey_(value) {
  const key = clean_(value);
  return /^\d{1,3}$/.test(key) ? (`000${key}`).slice(-4) : key;
}

function normalizeStudentId_(value) {
  return clean_(value).toUpperCase();
}

function normalizeStatus_(value) {
  return value === 'attend' ? 'attend' : 'absent';
}

function isTrue_(value) {
  const text = String(value || '').trim().toLowerCase();
  return text === 'true' || text === 'yes' || text === '1' || text === '是' || text === '參加';
}

function sessionKeyFromDate_(dateText) {
  const parts = String(dateText || '').split('/');
  if (parts.length < 2) {
    return normalizeKey_(String(dateText || '').replace('/', ''));
  }
  return `${(`0${Number(parts[0])}`).slice(-2)}${(`0${Number(parts[1])}`).slice(-2)}`;
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
