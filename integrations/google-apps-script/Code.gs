/**
 * Thượng Nguyên Studio — Google Sheets webhook
 * Spreadsheet: Thượng Nguyên Studio – Quản lý khách hàng website
 * Sheet ID: 1NLGU-wTLKL0e1WTb87Q92CgaRFTTXh1b95U3t4_YpaU
 */

const SPREADSHEET_ID = "1NLGU-wTLKL0e1WTb87Q92CgaRFTTXh1b95U3t4_YpaU";
const SHEET_NAME = "LEADS";
const TIME_ZONE = "Asia/Ho_Chi_Minh";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);

  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");

    if (!expectedSecret || data.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return jsonResponse({ ok: false, error: "Missing LEADS sheet" });
    }

    const leadId = safeCell(data.leadId);
    if (!leadId) {
      return jsonResponse({ ok: false, error: "Missing leadId" });
    }

    // Chống ghi trùng khi Worker hoặc mạng tự gửi lại request.
    const lastRow = sheet.getLastRow();
    if (lastRow >= 2) {
      const existing = sheet
        .getRange(2, 1, lastRow - 1, 1)
        .createTextFinder(leadId)
        .matchEntireCell(true)
        .findNext();

      if (existing) {
        return jsonResponse({ ok: true, duplicate: true, leadId: leadId });
      }
    }

    const receivedAt = data.receivedAtUtc ? new Date(data.receivedAtUtc) : new Date();
    if (isNaN(receivedAt.getTime())) {
      return jsonResponse({ ok: false, error: "Invalid receivedAtUtc" });
    }

    const syncedAt = new Date();
    const dateVN = Utilities.formatDate(receivedAt, TIME_ZONE, "dd/MM/yyyy");
    const timeVN = Utilities.formatDate(receivedAt, TIME_ZONE, "HH:mm:ss");
    const fullTimeVN = Utilities.formatDate(receivedAt, TIME_ZONE, "dd/MM/yyyy HH:mm:ss");
    const syncTimeVN = Utilities.formatDate(syncedAt, TIME_ZONE, "dd/MM/yyyy HH:mm:ss");

    const source = [data.utmSource, data.utmMedium]
      .map(safeCell)
      .filter(Boolean)
      .join(" / ");

    const requirement = [
      safeCell(data.message),
      data.timeline ? "Thời gian mong muốn: " + safeCell(data.timeline) : "",
    ]
      .filter(Boolean)
      .join("\n");

    const row = [
      leadId,
      dateVN,
      timeVN,
      fullTimeVN,
      receivedAt.toISOString(),
      safeCell(data.fullName),
      phoneCell(data.phone),
      safeCell(data.email),
      safeCell(data.service),
      safeCell(data.budget),
      requirement,
      safeCell(data.sourceUrl),
      source,
      safeCell(data.utmCampaign),
      "Mới",
      "Đã đồng bộ",
      syncTimeVN,
    ];

    sheet.getRange(lastRow + 1, 1, 1, row.length).setValues([row]);

    return jsonResponse({
      ok: true,
      leadId: leadId,
      receivedAtUtc: receivedAt.toISOString(),
      syncedAtUtc: syncedAt.toISOString(),
    });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function safeCell(value) {
  const text = String(value == null ? "" : value).trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function phoneCell(value) {
  const text = String(value == null ? "" : value).trim();
  return text ? "'" + text : "";
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
