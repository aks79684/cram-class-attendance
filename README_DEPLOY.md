# 115 牙體技術師國考衝刺班出席統計部署說明

這個版本使用 GitHub Pages 發佈前端，並用 Google Sheets + Apps Script 集中保存學生、課程與出席資料。

## 檔案

- `index.html`: 正式上線用網頁。
- `apps-script/Code.gs`: Google Apps Script 後端 API。
- `apps-script/appsscript.json`: Apps Script manifest，限制 OAuth 權限只存取目前試算表。
- `code_artifact.html`: 舊版本機 localStorage 頁面，保留作為備份參考。

## 1. 建立 Google Sheet

1. 到 Google Drive 建立一個新的 Google 試算表。
2. 檔名可設為 `115牙技國考衝刺班出席統計`。
3. 不需要手動建表。第一次執行 Apps Script 時，系統會自動建立：
   - `Students`
   - `Sessions`
   - `Attendance`

預設會自動匯入目前 HTML 內的課表與 5 位測試學生。若要換成正式名單，可在 `Students` 工作表改資料，或清空後重新貼上正式資料。

## 2. 建立 Apps Script

1. 在 Google Sheet 內點選 `擴充功能` -> `Apps Script`。
2. 刪除預設內容，貼上 `apps-script/Code.gs` 的全部內容。
3. 儲存專案。
4. 在 Apps Script 編輯器中執行一次 `ensureSetup`，授權它存取目前試算表。

第一次建立後的預設管理密碼在 `apps-script/Code.gs` 內：

```text
admin115
```

若要修改管理密碼，請修改 `Code.gs` 最上方：

```javascript
const ADMIN_PASSWORD = 'admin115';
```

改完後重新部署 Web App。

學生預設密碼目前由 `DEFAULT_STUDENTS` 帶入，測試學生都是 `115`。正式上線前請在 `Students` 工作表調整。

## 3. 部署 Apps Script Web App

1. 在 Apps Script 右上角點 `部署` -> `新增部署作業`。
2. 類型選 `網頁應用程式`。
3. `執行身分` 選 `我`。
4. `誰可以存取` 選 `任何人`。
5. 部署後複製 Web App URL，格式通常會像：

```text
https://script.google.com/macros/s/AKfycb.../exec
```

## 4. 設定前端 API URL

打開 `index.html`，找到：

```javascript
const APPS_SCRIPT_URL = 'PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';
```

把字串換成剛剛複製的 Apps Script Web App URL。

## 5. 發佈 GitHub Pages

1. 建立 GitHub repository。
2. 上傳這個資料夾內的檔案。
3. 到 repository 的 `Settings` -> `Pages`。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/root`。
6. 儲存後等待 GitHub Pages 產生網址。

完成後，學生使用 GitHub Pages 網址登入；資料會集中寫回 Google Sheet。

## 6. 驗收清單

- 學生用測試帳號 `115001` / `115` 可以登入。
- 登入後只顯示明天與未來課程可修改。
- 修改出席狀態後，重新整理頁面仍讀得到同一份資料。
- 新同學可登記，重複學號會被拒絕。
- 管理員用管理密碼可登入。
- 管理端可看到每堂課的出席、待定、不出席名單。
- 管理端可複製 LINE 通報文字。
- 管理端可匯出 CSV。

## 注意事項

- GitHub Pages 只是靜態網頁，不能自己存資料；資料集中保存靠 Apps Script 與 Google Sheet。
- 這個版本使用 JSONP 呼叫 Apps Script，避免 GitHub Pages 跨網域限制。
- 學生密碼在 Google Sheet 內以 SHA-256 雜湊保存；管理密碼只放在 Apps Script 後端檔案，不在前端保存。
- 因為 JSONP 會把參數放在網址 query string，請務必使用 Apps Script 的 HTTPS 網址，不要把密碼設成高敏感度通用密碼。

## 如果 Google 顯示「系統已封鎖這個應用程式」

這通常是 OAuth 權限或 Google 帳戶安全政策造成的封鎖。請依序處理：

1. 確認 Apps Script 是從 Google Sheet 內的 `擴充功能` -> `Apps Script` 建立，不是獨立專案。
2. 在 Apps Script 左側點 `專案設定`，開啟 `在編輯器中顯示 appsscript.json 資訊清單檔案`。
3. 新增或打開 `appsscript.json`，貼上本專案 `apps-script/appsscript.json` 的內容。
4. 儲存後重新整理 Apps Script 編輯器。
5. 再執行一次 `ensureSetup` 授權。
6. 若仍被封鎖，代表目前 Google 帳戶或學校網域禁止未驗證 Apps Script 授權；請改用一般個人 Google 帳戶建立試算表，或請網域管理員允許這個 Apps Script 專案。
