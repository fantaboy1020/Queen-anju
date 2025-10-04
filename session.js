//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUR6anE0a2hGU2RDcm9pZmwrVTIzU0ZGWUpUQ3JOc1hoN3MyV1VlVm9XUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieExINFdtY05tcVRTa1lyMXhMa2ZCbGx1VWY3bGUwTDlod0xhd2FVNkJCZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQnBac05CeE5tQTZZaE9IU09IUmtxb1laaHRoQ0t0cTBDY0RZQ2pJTVg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTY3VaVzJDOHg4NXFUV2NzWjVhRU1xNEFjNXpieDgwQXRLNjNtL0I3dEdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHTGxVYWNjNkhsckltOVVzTDFEV2tQL0NEb2s0TExhQ3R5UG9aVkZCa1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ5M1ltWGhSS2NLNVc3Y0VOdldzd05PSjY4VFdZaFBDdGhZU2o4Q3lQRVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05ydnExT0ZRQ2U1WFpzaTRWdG1RUWZ3N0tLbmF4OVM5ZkxwSm9wYjBFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTRwc05zNVFqb3JrSjFod2QwaW01L3VJS0tObUI4L3YvUk9kdnRUSFVIND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllXY1U3LzhRRStPZW9CR2tzSmlwQUlYUXR3UnZRTzVvQlVmcHFsemg4N252TEI5N3dQa0NHd0dMRHR5NnZjay9YbEIvV3NuSWsxa0VTMkNhWlpyekJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6Ikxmc0NPQUpvVkp6NzlIdlRGem5tSTlSd01MUktMczE0QTZaQ01qUXF3T0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5ibWY3QV95VDVpMm9ITEhmbHZpY2ciLCJwaG9uZUlkIjoiNDIzN2U1MDMtODZhZC00ODU0LTljMWEtMDU3ZDQyNzhiMTZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FSG40NGtVT2d5QzhDVm0zR0dEZ2JTMG85QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPK01GNXYrUWUzb2Y3b2NSTmgwZ2RUS2lSdmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUTRMODhOSEQiLCJtZSI6eyJpZCI6Ijk0NzYyNjUyMDQzOjYyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjE3NDg3NjE2MzI4MzI6NjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdjI4UVlRcTRPRHh3WVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrSndJNzZoTGM2dTJqcHd1SW9SRXhCUEJ4Y3MvUXB2WnJWdVZ6RDFFNlJrPSIsImFjY291bnRTaWduYXR1cmUiOiI3TjUxMlVkVWRWQTNIRDZBYXBxa2kzNHdrRUZNVytCWXdBbkdaZFp0M2ZjOUxYVmp5SEVoMVZ1SU0xWFgveElBK3BBZThrL2t3MDJGd0dhU1czUHJEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMEd5TE4wcHJDbDhpR3hRU2UyMy9iaXd0VSs0UXNXcEJSVnc3ZzZGcTRkVVBOMitSZVkrekFLN2ZUUUtYd25lc0c5NzJwcHRWZjNDZzNITktwUkczQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MjY1MjA0Mzo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmaWNDTytvUzNPcnRvNmNMaUtFUk1RVHdjWExQMEtiMmExYmxjdzlST2taIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk1NjAxMjAsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCWnkifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94763582647",
  PASSWORD: 
    process.env.PASSWORD || ".Shehan Mayuranga 2006",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94762652043", "94788743696"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
