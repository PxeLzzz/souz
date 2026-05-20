/* ═══════════════════════════════════════════════════════════════
   EduTrack — School Uniform Violation Tracking System
   script.js — Complete application logic
   ═══════════════════════════════════════════════════════════════ */

'use strict';

// ─────────────────────────────────────────────────────────────────
// CONSTANTS & INITIAL DATA
// ─────────────────────────────────────────────────────────────────

const DEFAULT_CLASSES = ['4-1','5-1','5-2','7-1','7-2','8-1','9-1','10-1','10-2','11-1','11-2','11-3','12-1'];

const VIOLATION_TYPES = {
  1: 'Дүрэмт хувцасгүй',
  2: 'Хэсэгчилсэн зөрчил',
  3: 'Давтан зөрчил'
};

const WEEK_LABELS = {1:'1-р 7 хоног',2:'2-р 7 хоног',3:'3-р 7 хоног',4:'4-р 7 хоног'};

// Sample data from the provided list
const SAMPLE_STUDENTS = [
  {id:'s1',name:'Zoljargal',class:'10-1',group:'',register:'',date:'2026-04-27',week:2,type:2,note:'',phone:'',image:''},
  {id:'s2',name:'Uuriintsolmon',class:'10-1',group:'',register:'',date:'2026-04-27',week:2,type:2,note:'',phone:'',image:''},
  {id:'s3',name:'Dulguun',class:'10-1',group:'',register:'',date:'2026-04-27',week:2,type:2,note:'',phone:'',image:''},
  {id:'s4',name:'Sodbilguun',class:'10-1',group:'',register:'',date:'2026-04-27',week:2,type:2,note:'',phone:'',image:''},
  {id:'s5',name:'Sod-Uilsten',class:'10-1',group:'',register:'',date:'2026-04-27',week:2,type:2,note:'',phone:'',image:''},
  {id:'s6',name:'Enhsanaa',class:'10-1',group:'',register:'',date:'2026-04-27',week:1,type:1,note:'',phone:'',image:''},
  {id:'s7',name:'Gantsooj',class:'10-1',group:'',register:'',date:'2026-04-27',week:2,type:2,note:'',phone:'',image:''},
  {id:'s8',name:'Javhlanbaatar',class:'10-1',group:'',register:'',date:'2026-04-27',week:2,type:2,note:'',phone:'',image:''},
  {id:'s9',name:'Naransolongo',class:'10-1',group:'',register:'',date:'2026-04-27',week:2,type:2,note:'',phone:'',image:''},
  {id:'s10',name:'Aldar',class:'10-1',group:'',register:'',date:'2026-04-27',week:2,type:2,note:'',phone:'',image:''},
  {id:'s11',name:'Egshig',class:'10-1',group:'',register:'',date:'2026-04-27',week:1,type:1,note:'',phone:'',image:''},
  {id:'s12',name:'Nomin-Erdene',class:'10-1',group:'',register:'',date:'2026-04-27',week:1,type:1,note:'',phone:'',image:''},
  {id:'s13',name:'Haliun',class:'10-1',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s14',name:'Huslen',class:'10-1',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s15',name:'Bilguundalai',class:'10-1',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s16',name:'Bymbatsogt',class:'10-1',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s17',name:'Hatanbaatar',class:'10-1',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s18',name:'Munh-ochir',class:'11-2',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s19',name:'Batbilguun',class:'11-2',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s20',name:'Tuguldur',class:'11-2',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s21',name:'Altantulga',class:'11-2',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s22',name:'Binderya',class:'11-2',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s23',name:'Jargalan',class:'11-1',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s24',name:'Khulan',class:'11-1',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s25',name:'Buynbadrah',class:'11-1',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s26',name:'Sanchir',class:'11-1',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s27',name:'Munhsuuri',class:'11-1',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s28',name:'Erdenebayr',class:'11-1',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s29',name:'Telmuunbaatar',class:'11-1',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s30',name:'Munhtsatsral',class:'11-1',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s31',name:'Hash-Erdene',class:'11-1',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s32',name:'Badamtsetseg',class:'11-1',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s33',name:'Anujin',class:'11-1',group:'',register:'',date:'2026-04-28',week:1,type:1,note:'',phone:'',image:''},
  {id:'s34',name:'Maralgoo',class:'11-3',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s35',name:'Enkhtenger',class:'11-3',group:'',register:'',date:'2026-04-28',week:3,type:3,note:'',phone:'',image:''},
  {id:'s36',name:'Telmuun',class:'11-3',group:'',register:'',date:'2026-04-28',week:3,type:3,note:'',phone:'',image:''},
  {id:'s37',name:'Irmuun',class:'11-3',group:'',register:'',date:'2026-04-28',week:3,type:3,note:'',phone:'',image:''},
  {id:'s38',name:'Amgalanbaatar',class:'11-3',group:'',register:'',date:'2026-04-28',week:2,type:2,note:'',phone:'',image:''},
  {id:'s39',name:'Bilguuntugs',class:'12-1',group:'',register:'',date:'2026-04-29',week:1,type:1,note:'',phone:'',image:''},
  {id:'s40',name:'Khulan',class:'12-1',group:'',register:'',date:'2026-04-29',week:1,type:1,note:'',phone:'',image:''},
  {id:'s41',name:'Chinguun',class:'12-1',group:'',register:'',date:'2026-04-29',week:1,type:1,note:'',phone:'',image:''},
  {id:'s42',name:'B.Huslen',class:'12-1',group:'',register:'',date:'2026-04-29',week:2,type:2,note:'',phone:'',image:''},
  {id:'s43',name:'Sarangerel',class:'12-1',group:'',register:'',date:'2026-04-29',week:1,type:1,note:'',phone:'',image:''},
  {id:'s44',name:'Amirlan',class:'7-1',group:'',register:'',date:'2026-04-29',week:2,type:2,note:'',phone:'',image:''},
  {id:'s45',name:'E.Tselmuun',class:'7-1',group:'',register:'',date:'2026-04-29',week:2,type:2,note:'',phone:'',image:''},
  {id:'s46',name:'B.Tselmuun',class:'7-1',group:'',register:'',date:'2026-04-29',week:2,type:2,note:'',phone:'',image:''},
  {id:'s47',name:'Temuulen',class:'7-1',group:'',register:'',date:'2026-04-29',week:1,type:1,note:'',phone:'',image:''},
  {id:'s48',name:'Enhriilen',class:'7-1',group:'',register:'',date:'2026-04-29',week:2,type:2,note:'',phone:'',image:''},
  {id:'s49',name:'Bilguun',class:'7-1',group:'',register:'',date:'2026-04-29',week:2,type:2,note:'',phone:'',image:''},
  {id:'s50',name:'Anu',class:'7-1',group:'',register:'',date:'2026-04-29',week:2,type:2,note:'',phone:'',image:''},
  {id:'s51',name:'Amina',class:'8-1',group:'',register:'',date:'2026-04-29',week:1,type:1,note:'',phone:'',image:''},
  {id:'s52',name:'Erdenetsogt',class:'8-1',group:'',register:'',date:'2026-04-29',week:1,type:1,note:'',phone:'',image:''},
  {id:'s53',name:'Dorjsambuu',class:'9-1',group:'',register:'',date:'2026-04-29',week:1,type:1,note:'',phone:'',image:''},
  {id:'s54',name:'Davagdorj',class:'9-1',group:'',register:'',date:'2026-04-29',week:1,type:1,note:'',phone:'',image:''},
  {id:'s55',name:'Temuulen',class:'9-1',group:'',register:'',date:'2026-04-29',week:2,type:2,note:'',phone:'',image:''},
  {id:'s56',name:'Maral',class:'11-1',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s57',name:'Munhbayr',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s58',name:'Enh-iredui',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s59',name:'Amin-Erdene',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s60',name:'Anand',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s61',name:'Maralmaa',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s62',name:'Michidmaa',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s63',name:'Ariunjargal',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s64',name:'Minjinsor',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s65',name:'Davaamandah',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s66',name:'Nomuun',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s67',name:'Sodbileg',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s68',name:'Dulguun',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s69',name:'Tsogbadrah',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s70',name:'Hangai',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s71',name:'Badmaarag',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s72',name:'Ninjin',class:'10-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s73',name:'Enhtsetseg',class:'7-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s74',name:'Azhuur',class:'7-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s75',name:'Ariunhuur',class:'7-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s76',name:'Anu',class:'7-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s77',name:'Anudari',class:'7-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s78',name:'Chinguun',class:'7-2',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s79',name:'Nomin-Erdene',class:'8-1',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s80',name:'Sondor',class:'8-1',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s81',name:'Erdenebat',class:'8-1',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s82',name:'Ijilmurun',class:'8-1',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s83',name:'Gangardalai',class:'11-3',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s84',name:'Tuvshin',class:'11-3',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s85',name:'Tuvshinsaihan',class:'11-3',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s86',name:'Oyundavaa',class:'11-3',group:'',register:'',date:'2026-04-30',week:3,type:3,note:'',phone:'',image:''},
  {id:'s87',name:'Bold-Erdene',class:'11-3',group:'',register:'',date:'2026-04-30',week:3,type:3,note:'',phone:'',image:''},
  {id:'s88',name:'Enh-uulen',class:'11-3',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s89',name:'Hulan',class:'11-3',group:'',register:'',date:'2026-04-30',week:1,type:1,note:'',phone:'',image:''},
  {id:'s90',name:'Tsegts',class:'11-2',group:'',register:'',date:'2026-05-01',week:2,type:2,note:'',phone:'',image:''},
  {id:'s91',name:'Azjargal',class:'11-2',group:'',register:'',date:'2026-05-01',week:2,type:2,note:'',phone:'',image:''},
  {id:'s92',name:'Namuun',class:'10-1',group:'',register:'',date:'2026-05-01',week:1,type:1,note:'',phone:'',image:''},
  {id:'s93',name:'Ariunhuslen',class:'10-1',group:'',register:'',date:'2026-05-01',week:1,type:1,note:'',phone:'',image:''},
  {id:'s94',name:'Tserentsogt',class:'11-1',group:'',register:'',date:'2026-05-01',week:1,type:1,note:'',phone:'',image:''},
  {id:'s95',name:'Enhbaatar',class:'11-1',group:'',register:'',date:'2026-05-01',week:1,type:1,note:'',phone:'',image:''},
  {id:'s96',name:'Sainjargal',class:'11-1',group:'',register:'',date:'2026-05-01',week:1,type:1,note:'',phone:'',image:''},
  {id:'s97',name:'Халиунаа',class:'5-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s98',name:'Билгүүндалай',class:'10-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s99',name:'Энх үүлэн',class:'11-3',group:'',register:'',date:'2026-05-20',week:3,type:1,note:'',phone:'',image:''},
  {id:'s100',name:'Содбилгүүн',class:'10-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s101',name:'Содбилэг',class:'10-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s102',name:'Лувсандамба',class:'12-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s103',name:'Энхтөгөлдөр',class:'5-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s104',name:'Халиунаа',class:'5-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s105',name:'Хувь заяа',class:'5-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s106',name:'Цэрэнтогтох',class:'11-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s107',name:'Бөртэ үжин',class:'4-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s108',name:'Цолмон',class:'5-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s109',name:'Түмэн баяр',class:'11-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s110',name:'Саран гэрэл',class:'12-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s111',name:'Хаш эрдэнэ',class:'11-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s112',name:'Чингүүн',class:'9-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s113',name:'Бямба Цогт',class:'10-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s114',name:'Хулан',class:'11-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s115',name:'Азжаргал',class:'11-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s116',name:'Өлзий бат',class:'12-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s117',name:'Хантүшиг',class:'11-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s118',name:'Амгалан баатар',class:'11-3',group:'',register:'',date:'2026-05-20',week:3,type:1,note:'',phone:'',image:''},
  {id:'s119',name:'Энхтөгөлдөр',class:'11-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s120',name:'Алтантулга',class:'11-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s121',name:'Ирмүүн',class:'11-3',group:'',register:'',date:'2026-05-20',week:3,type:1,note:'',phone:'',image:''},
  {id:'s122',name:'Энх тэнгэр',class:'11-3',group:'',register:'',date:'2026-05-20',week:3,type:1,note:'',phone:'',image:''},
  {id:'s123',name:'Энх улирал',class:'11-2',group:'',register:'',date:'2026-05-20',week:2,type:1,note:'',phone:'',image:''},
  {id:'s124',name:'Эгшиглэн',class:'11-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s125',name:'Буянбадрах',class:'11-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s126',name:'Мөнх очир',class:'11-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s127',name:'Марал',class:'11-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''},
  {id:'s128',name:'Төгөлдөрзул',class:'12-1',group:'',register:'',date:'2026-05-20',week:1,type:1,note:'',phone:'',image:''}
];

// ─────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────
let state = {
  students: [],
  classes: [],
  currentPage: 1,
  perPage: 15,
  sortKey: 'date',
  sortDir: 'desc',
  filterClass: '',
  filterWeek: '',
  filterType: '',
  filterSearch: '',
  activeWeekTab: 'all',
  editId: null,
  deleteId: null,
  deleteIds: [],
  editClassId: null,
  selectedIds: new Set(),
  notifications: [],
  charts: {}
};

// ─────────────────────────────────────────────────────────────────
// STORAGE HELPERS
// ─────────────────────────────────────────────────────────────────
function loadData() {
  const s = localStorage.getItem('edutrack_students');
  const c = localStorage.getItem('edutrack_classes');
  state.students = s ? JSON.parse(s) : JSON.parse(JSON.stringify(SAMPLE_STUDENTS));
  state.classes = c ? JSON.parse(c) : [...DEFAULT_CLASSES];
  if (!s) saveData();
}

function saveData() {
  localStorage.setItem('edutrack_students', JSON.stringify(state.students));
  localStorage.setItem('edutrack_classes', JSON.stringify(state.classes));
}

// ─────────────────────────────────────────────────────────────────
// AUTH
// ─────────────────────────────────────────────────────────────────
const CREDENTIALS = { admin: 'admin123' };

function doLogin() {
  const u = document.getElementById('loginUsername').value.trim();
  const p = document.getElementById('loginPassword').value.trim();
  const rem = document.getElementById('rememberMe').checked;
  if (CREDENTIALS[u] && CREDENTIALS[u] === p) {
    if (rem) localStorage.setItem('edutrack_user', u);
    sessionStorage.setItem('edutrack_user', u);
    document.getElementById('sidebarUsername').textContent = u;
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    init();
  } else {
    showToast('Нэвтрэх нэр эсвэл нууц үг буруу!', 'error');
    document.getElementById('loginPassword').value = '';
  }
}

function doLogout() {
  localStorage.removeItem('edutrack_user');
  sessionStorage.removeItem('edutrack_user');
  document.getElementById('app').classList.add('hidden');
  document.getElementById('loginPage').classList.remove('hidden');
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
}

function togglePassword() {
  const inp = document.getElementById('loginPassword');
  const icon = document.querySelector('.toggle-pass i');
  if (inp.type === 'password') { inp.type = 'text'; icon.className = 'fa-solid fa-eye-slash'; }
  else { inp.type = 'password'; icon.className = 'fa-solid fa-eye'; }
}

document.getElementById('loginPassword').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

// Auto login
window.addEventListener('load', () => {
  const saved = localStorage.getItem('edutrack_user') || sessionStorage.getItem('edutrack_user');
  if (saved && CREDENTIALS[saved]) {
    document.getElementById('sidebarUsername').textContent = saved;
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    init();
  }
});

// ─────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────
function init() {
  loadData();
  updateDateDisplay();
  populateClassDropdowns();
  renderAll();
  setInterval(updateDateDisplay, 60000);
  registerKeyboardShortcuts();
}

function renderAll() {
  updateBadge();
  renderViolationsTable();
  updateDashboard();
  renderClassGrid();
  populateParentClassFilter();
}

function updateDateDisplay() {
  const now = new Date();
  const opts = { year:'numeric', month:'long', day:'numeric', weekday:'short' };
  const el = document.getElementById('topbarDate');
  if (el) el.textContent = now.toLocaleDateString('mn-MN', opts);
}

// ─────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────
const PAGE_TITLES = {
  dashboard: 'Хяналтын самбар',
  violations: 'Зөрчил бүртгэл',
  weekly: '7 хоногийн харагдац',
  classes: 'Ангиуд',
  analytics: 'Аналитик',
  parent: 'Эцэг эхийн харагдац'
};

function navigate(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  // Show target
  const target = document.getElementById('page-' + page);
  if (target) { target.classList.remove('hidden'); target.classList.add('active'); }
  const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navItem) navItem.classList.add('active');
  document.getElementById('breadcrumb').textContent = PAGE_TITLES[page] || page;
  // Close sidebar on mobile
  if (window.innerWidth < 900) closeSidebar();
  // Page-specific render
  if (page === 'dashboard') updateDashboard();
  if (page === 'violations') renderViolationsTable();
  if (page === 'weekly') renderWeeklyPage();
  if (page === 'classes') renderClassGrid();
  if (page === 'analytics') renderAnalytics();
  if (page === 'parent') parentSearchFn();
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sb.classList.contains('open')) { sb.classList.remove('open'); overlay.classList.remove('open'); }
  else { sb.classList.add('open'); overlay.classList.add('open'); }
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

// ─────────────────────────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeIcon').className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  localStorage.setItem('edutrack_theme', isDark ? 'light' : 'dark');
  // Re-render charts to pick up new colors
  setTimeout(() => { updateDashboard(); if (!document.getElementById('page-analytics').classList.contains('hidden')) renderAnalytics(); }, 100);
}

// Load saved theme
(function() {
  const t = localStorage.getItem('edutrack_theme');
  if (t) {
    document.documentElement.setAttribute('data-theme', t);
    if (t === 'dark') document.getElementById('themeIcon').className = 'fa-solid fa-sun';
  }
})();

// ─────────────────────────────────────────────────────────────────
// CLASS MANAGEMENT
// ─────────────────────────────────────────────────────────────────
function populateClassDropdowns() {
  const selects = ['filterClass', 'fClass'];
  selects.forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    const first = sel.options[0]?.text;
    sel.innerHTML = '';
    if (id === 'filterClass') sel.appendChild(new Option('Бүх анги', ''));
    state.classes.sort().forEach(c => sel.appendChild(new Option(c, c)));
    if (id === 'filterClass' && !state.classes.includes(first)) {}
  });
}

function populateParentClassFilter() {
  const sel = document.getElementById('parentClassFilter');
  if (!sel) return;
  sel.innerHTML = '<option value="">Бүх анги</option>';
  state.classes.sort().forEach(c => sel.appendChild(new Option(c, c)));
}

function renderClassGrid() {
  const grid = document.getElementById('classGrid');
  if (!grid) return;
  document.getElementById('classDetail').classList.add('hidden');
  grid.classList.remove('hidden');
  grid.innerHTML = '';

  state.classes.sort().forEach(cls => {
    const students = state.students.filter(s => s.class === cls);
    const total = students.length;
    const weekCounts = {1:0,2:0,3:0,4:0};
    students.forEach(s => weekCounts[s.week] = (weekCounts[s.week]||0)+1);

    const card = document.createElement('div');
    card.className = 'class-card animate-in';
    card.innerHTML = `
      <div class="class-card-header">
        <span class="class-name">${cls}</span>
        <div class="class-card-actions">
          <button class="btn-action btn-edit" onclick="event.stopPropagation();editClass('${cls}')" title="Засах"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-action btn-del" onclick="event.stopPropagation();deleteClassConfirm('${cls}')" title="Устгах"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
      <div class="class-stat"><span class="class-stat-num">${total}</span><span class="class-stat-label">&nbsp;зөрчил</span></div>
      <div class="class-week-breakdown">
        ${Object.entries(weekCounts).filter(([,v])=>v>0).map(([w,c])=>`<span class="week-chip">${w}-р 7х: ${c}</span>`).join('')}
      </div>`;
    card.addEventListener('click', () => showClassDetail(cls));
    grid.appendChild(card);
  });
}

function showClassDetail(cls) {
  document.getElementById('classGrid').classList.add('hidden');
  const detail = document.getElementById('classDetail');
  detail.classList.remove('hidden');
  const students = state.students.filter(s => s.class === cls);
  const weekCounts = {1:0,2:0,3:0,4:0};
  students.forEach(s => weekCounts[s.week]=(weekCounts[s.week]||0)+1);

  detail.innerHTML = `
    <div class="class-detail-header">
      <button class="back-btn" onclick="renderClassGrid()"><i class="fa-solid fa-arrow-left"></i> Буцах</button>
      <h2 style="font-size:20px;font-weight:800;color:var(--text)">${cls} анги — Дэлгэрэнгүй</h2>
    </div>
    <div class="stats-grid" style="margin-bottom:20px">
      <div class="stat-card glass-card"><div class="stat-icon blue"><i class="fa-solid fa-users"></i></div><div class="stat-info"><div class="stat-value">${students.length}</div><div class="stat-label">Нийт зөрчил</div></div></div>
      ${[1,2,3,4].map(w=>`<div class="stat-card glass-card"><div class="stat-icon purple"><i class="fa-solid fa-calendar-week"></i></div><div class="stat-info"><div class="stat-value">${weekCounts[w]}</div><div class="stat-label">${WEEK_LABELS[w]}</div></div></div>`).join('')}
    </div>
    <div class="table-wrap glass-card">
      <table><thead><tr><th>Нэр</th><th>7 хоног</th><th>Огноо</th><th>Зөрчлийн төрөл</th><th>Тайлбар</th><th>Үйлдэл</th></tr></thead>
      <tbody>${students.length === 0 ? '<tr><td colspan="6" style="text-align:center;color:var(--text-3);padding:32px">Энэ ангид зөрчил бүртгэлгүй</td></tr>' :
        students.map(s=>`<tr>
          <td><div class="student-cell">${avatarHtml(s)}<span class="student-name">${esc(s.name)}</span></div></td>
          <td><span class="week-badge"><i class="fa-solid fa-calendar-week"></i>${WEEK_LABELS[s.week]}</span></td>
          <td>${s.date}</td>
          <td><span class="type-badge type-${s.type}">${VIOLATION_TYPES[s.type]}</span></td>
          <td style="color:var(--text-3);font-size:12px">${esc(s.note)||'—'}</td>
          <td><div class="action-btns">
            <button class="btn-action btn-edit" onclick="openEditModal('${s.id}')"><i class="fa-solid fa-pen"></i></button>
            <button class="btn-action btn-del" onclick="openDeleteModal('${s.id}')"><i class="fa-solid fa-trash"></i></button>
          </div></td>
        </tr>`).join('')}
      </tbody></table>
    </div>`;
}

function openClassModal(editId) {
  state.editClassId = editId || null;
  document.getElementById('classModalTitle').textContent = editId ? 'Анги засах' : 'Анги нэмэх';
  document.getElementById('fClassName').value = editId || '';
  openModal('classModal');
}

function editClass(cls) { openClassModal(cls); }

function saveClass() {
  const name = document.getElementById('fClassName').value.trim();
  if (!name) { showToast('Ангийн нэр оруулна уу!', 'error'); return; }
  if (state.editClassId && state.editClassId !== name) {
    // Rename
    state.students.forEach(s => { if (s.class === state.editClassId) s.class = name; });
    const idx = state.classes.indexOf(state.editClassId);
    if (idx !== -1) state.classes[idx] = name;
    showToast(`"${state.editClassId}" → "${name}" болж өөрчлөгдлөө`, 'success');
  } else if (!state.editClassId) {
    if (state.classes.includes(name)) { showToast('Энэ анги аль хэдийн бүртгэлтэй!', 'warning'); return; }
    state.classes.push(name);
    showToast(`"${name}" анги нэмэгдлээ`, 'success');
  }
  saveData();
  populateClassDropdowns();
  populateParentClassFilter();
  closeModal('classModal');
  renderClassGrid();
  addNotification(`Анги "${name}" өөрчлөгдлөө`);
}

function deleteClassConfirm(cls) {
  state.deleteId = null;
  state.deleteIds = [];
  state._deleteClass = cls;
  document.getElementById('deleteMessage').textContent = `"${cls}" ангийг устгах уу? Тухайн ангийн ${state.students.filter(s=>s.class===cls).length} бүртгэл устна!`;
  openModal('deleteModal');
  document.getElementById('deleteModal').querySelector('.btn-danger').onclick = () => {
    state.classes = state.classes.filter(c => c !== cls);
    state.students = state.students.filter(s => s.class !== cls);
    saveData(); populateClassDropdowns(); populateParentClassFilter(); renderClassGrid(); renderAll();
    closeModal('deleteModal');
    showToast(`"${cls}" анги устгагдлаа`, 'success');
  };
}

// ─────────────────────────────────────────────────────────────────
// VIOLATIONS TABLE
// ─────────────────────────────────────────────────────────────────
function getFiltered() {
  let data = [...state.students];
  if (state.filterSearch) {
    const q = state.filterSearch.toLowerCase();
    data = data.filter(s => s.name.toLowerCase().includes(q));
  }
  if (state.filterClass) data = data.filter(s => s.class === state.filterClass);
  if (state.filterWeek) data = data.filter(s => String(s.week) === state.filterWeek);
  if (state.filterType) data = data.filter(s => String(s.type) === state.filterType);
  if (state.activeWeekTab !== 'all') data = data.filter(s => String(s.week) === state.activeWeekTab);
  // Sort
  data.sort((a,b) => {
    let va = a[state.sortKey] || '', vb = b[state.sortKey] || '';
    if (typeof va === 'number') { return state.sortDir === 'asc' ? va-vb : vb-va; }
    return state.sortDir === 'asc' ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
  });
  return data;
}

function renderViolationsTable() {
  const filtered = getFiltered();
  const total = filtered.length;
  const totalPages = Math.ceil(total / state.perPage);
  if (state.currentPage > totalPages) state.currentPage = Math.max(1, totalPages);
  const start = (state.currentPage - 1) * state.perPage;
  const pageData = filtered.slice(start, start + state.perPage);

  const tbody = document.getElementById('tableBody');
  const empty = document.getElementById('emptyState');
  if (!tbody) return;

  if (pageData.length === 0) {
    tbody.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    tbody.innerHTML = pageData.map(s => `
      <tr data-id="${s.id}">
        <td><input type="checkbox" class="row-check" value="${s.id}" onchange="handleRowSelect('${s.id}',this.checked)" ${state.selectedIds.has(s.id)?'checked':''} /></td>
        <td><div class="student-cell">${avatarHtml(s)}<span class="student-name">${esc(s.name)}</span></div></td>
        <td><span class="class-badge">${esc(s.class)}</span></td>
        <td><span class="week-badge"><i class="fa-solid fa-calendar-week"></i>${WEEK_LABELS[s.week]}</span></td>
        <td style="color:var(--text-3);font-size:12px">${s.date}</td>
        <td><span class="type-badge type-${s.type}">${VIOLATION_TYPES[s.type]}</span></td>
        <td style="color:var(--text-3);font-size:12px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(s.note)||'—'}</td>
        <td><div class="action-btns">
          <button class="btn-action btn-edit" onclick="openEditModal('${s.id}')" title="Засах"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-action btn-del" onclick="openDeleteModal('${s.id}')" title="Устгах"><i class="fa-solid fa-trash"></i></button>
        </div></td>
      </tr>`).join('');
  }

  renderPagination(total, totalPages);
  updateBadge();
  document.getElementById('selectAll').checked = false;
}

function renderPagination(total, totalPages) {
  const pag = document.getElementById('pagination');
  if (!pag) return;
  if (totalPages <= 1) { pag.innerHTML = ''; return; }
  let html = '';
  html += `<button class="page-btn" onclick="goPage(${state.currentPage-1})" ${state.currentPage===1?'disabled':''}>‹</button>`;
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - state.currentPage) <= 1) {
      html += `<button class="page-btn ${i===state.currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
    } else if (Math.abs(i - state.currentPage) === 2) {
      html += `<span class="page-btn" style="pointer-events:none">…</span>`;
    }
  }
  html += `<button class="page-btn" onclick="goPage(${state.currentPage+1})" ${state.currentPage===totalPages?'disabled':''}>›</button>`;
  pag.innerHTML = html;
}

function goPage(p) {
  const filtered = getFiltered();
  const totalPages = Math.ceil(filtered.length / state.perPage);
  if (p < 1 || p > totalPages) return;
  state.currentPage = p;
  renderViolationsTable();
}

function applyFilters() {
  state.filterSearch = document.getElementById('searchInput').value.trim();
  state.filterClass = document.getElementById('filterClass').value;
  state.filterWeek = document.getElementById('filterWeek').value;
  state.filterType = document.getElementById('filterType').value;
  state.currentPage = 1;
  renderViolationsTable();
  updateAutocomplete();
}

function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterClass').value = '';
  document.getElementById('filterWeek').value = '';
  document.getElementById('filterType').value = '';
  state.filterSearch = state.filterClass = state.filterWeek = state.filterType = '';
  state.currentPage = 1;
  renderViolationsTable();
  hideAutocomplete();
}

function setWeekTab(el, week) {
  document.querySelectorAll('#page-violations .week-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  state.activeWeekTab = week;
  state.currentPage = 1;
  renderViolationsTable();
}

function sortTable(key) {
  if (state.sortKey === key) state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
  else { state.sortKey = key; state.sortDir = 'asc'; }
  renderViolationsTable();
}

function updateBadge() {
  const el = document.getElementById('totalBadge');
  if (el) el.textContent = state.students.length;
}

// AUTOCOMPLETE
function updateAutocomplete() {
  const q = state.filterSearch.toLowerCase();
  const box = document.getElementById('autocompleteBox');
  if (!q || q.length < 1) { hideAutocomplete(); return; }
  const matches = [...new Set(state.students.filter(s => s.name.toLowerCase().startsWith(q)).map(s=>s.name))].slice(0,6);
  if (matches.length === 0) { hideAutocomplete(); return; }
  box.innerHTML = matches.map(m => `<div class="autocomplete-item" onmousedown="selectAutocomplete('${m}')">${m}</div>`).join('');
  box.classList.remove('hidden');
}
function hideAutocomplete() { document.getElementById('autocompleteBox').classList.add('hidden'); }
function selectAutocomplete(name) {
  document.getElementById('searchInput').value = name;
  state.filterSearch = name;
  hideAutocomplete();
  renderViolationsTable();
}
document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) hideAutocomplete(); });

// ─────────────────────────────────────────────────────────────────
// SELECTION
// ─────────────────────────────────────────────────────────────────
function handleRowSelect(id, checked) {
  if (checked) state.selectedIds.add(id);
  else state.selectedIds.delete(id);
  updateBulkBar();
}

function toggleSelectAll() {
  const allChecked = document.getElementById('selectAll').checked;
  const filtered = getFiltered();
  const start = (state.currentPage-1)*state.perPage;
  const pageData = filtered.slice(start, start+state.perPage);
  pageData.forEach(s => { if(allChecked) state.selectedIds.add(s.id); else state.selectedIds.delete(s.id); });
  document.querySelectorAll('.row-check').forEach(cb => cb.checked = allChecked);
  updateBulkBar();
}

function updateBulkBar() {
  const bar = document.getElementById('bulkBar');
  const cnt = document.getElementById('bulkCount');
  if (state.selectedIds.size > 0) {
    bar.classList.remove('hidden');
    cnt.textContent = `${state.selectedIds.size} сурагч сонгогдсон`;
  } else {
    bar.classList.add('hidden');
  }
}

function clearSelection() {
  state.selectedIds.clear();
  document.querySelectorAll('.row-check').forEach(cb => cb.checked = false);
  document.getElementById('selectAll').checked = false;
  updateBulkBar();
}

function bulkDelete() {
  if (state.selectedIds.size === 0) return;
  document.getElementById('deleteMessage').textContent = `${state.selectedIds.size} бүртгэлийг устгах уу? Буцаах боломжгүй!`;
  state.deleteIds = [...state.selectedIds];
  state.deleteId = null;
  openModal('deleteModal');
}

// ─────────────────────────────────────────────────────────────────
// CRUD MODALS
// ─────────────────────────────────────────────────────────────────
function openAddModal() {
  state.editId = null;
  document.getElementById('modalTitle').textContent = 'Зөрчил нэмэх';
  clearForm();
  document.getElementById('fDate').value = new Date().toISOString().split('T')[0];
  openModal('studentModal');
}

function openEditModal(id) {
  const s = state.students.find(x => x.id === id);
  if (!s) return;
  state.editId = id;
  document.getElementById('modalTitle').textContent = 'Бүртгэл засах';
  document.getElementById('fName').value = s.name;
  document.getElementById('fClass').value = s.class;
  document.getElementById('fGroup').value = s.group || '';
  document.getElementById('fRegister').value = s.register || '';
  document.getElementById('fDate').value = s.date;
  document.getElementById('fWeek').value = s.week;
  document.getElementById('fType').value = s.type;
  document.getElementById('fNote').value = s.note || '';
  document.getElementById('fPhone').value = s.phone || '';
  if (s.image) {
    document.getElementById('imagePreview').src = s.image;
    document.getElementById('imagePreview').classList.remove('hidden');
    document.getElementById('imageUploadPlaceholder').classList.add('hidden');
  } else {
    document.getElementById('imagePreview').classList.add('hidden');
    document.getElementById('imageUploadPlaceholder').classList.remove('hidden');
  }
  openModal('studentModal');
}

function clearForm() {
  ['fName','fGroup','fRegister','fNote','fPhone'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('fWeek').value = '1';
  document.getElementById('fType').value = '1';
  document.getElementById('imagePreview').src = '';
  document.getElementById('imagePreview').classList.add('hidden');
  document.getElementById('imageUploadPlaceholder').classList.remove('hidden');
  if (state.classes.length) document.getElementById('fClass').value = state.classes[0];
}

function saveStudent() {
  const name = document.getElementById('fName').value.trim();
  const cls = document.getElementById('fClass').value;
  const date = document.getElementById('fDate').value;
  const week = parseInt(document.getElementById('fWeek').value);
  if (!name || !cls || !date) { showToast('Заавал талбаруудыг бөглөнө үү!', 'error'); return; }

  const data = {
    name, class: cls,
    group: document.getElementById('fGroup').value.trim(),
    register: document.getElementById('fRegister').value.trim(),
    date, week,
    type: parseInt(document.getElementById('fType').value),
    note: document.getElementById('fNote').value.trim(),
    phone: document.getElementById('fPhone').value.trim(),
    image: document.getElementById('imagePreview').src.includes('data:') ? document.getElementById('imagePreview').src : ''
  };

  if (state.editId) {
    const idx = state.students.findIndex(s => s.id === state.editId);
    if (idx !== -1) { state.students[idx] = { ...state.students[idx], ...data }; }
    showToast(`"${name}" бүртгэл шинэчлэгдлээ`, 'success');
    addNotification(`"${name}" бүртгэл засагдлаа`);
  } else {
    const newS = { id: 's' + Date.now(), ...data };
    state.students.unshift(newS);
    showToast(`"${name}" бүртгэгдлээ`, 'success');
    addNotification(`"${name}" (${cls}) шинэ зөрчил бүртгэлтэй`);
  }
  saveData();
  closeModal('studentModal');
  renderAll();
}

function openDeleteModal(id) {
  state.deleteId = id;
  state.deleteIds = [];
  const s = state.students.find(x => x.id === id);
  document.getElementById('deleteMessage').textContent = `"${s?.name}" бүртгэлийг устгах уу? Буцаах боломжгүй!`;
  openModal('deleteModal');
  document.getElementById('deleteModal').querySelector('.btn-danger').onclick = confirmDelete;
}

function confirmDelete() {
  if (state.deleteIds.length > 0) {
    state.students = state.students.filter(s => !state.deleteIds.includes(s.id));
    showToast(`${state.deleteIds.length} бүртгэл устгагдлаа`, 'success');
    state.selectedIds.clear();
    updateBulkBar();
  } else if (state.deleteId) {
    const s = state.students.find(x => x.id === state.deleteId);
    state.students = state.students.filter(x => x.id !== state.deleteId);
    showToast(`"${s?.name}" устгагдлаа`, 'success');
  }
  saveData();
  closeModal('deleteModal');
  renderAll();
}

function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('imagePreview').src = e.target.result;
    document.getElementById('imagePreview').classList.remove('hidden');
    document.getElementById('imageUploadPlaceholder').classList.add('hidden');
  };
  reader.readAsDataURL(file);
}

function avatarHtml(s) {
  if (s.image) return `<div class="student-avatar"><img src="${s.image}" alt="${esc(s.name)}" /></div>`;
  return `<div class="student-avatar">${s.name.charAt(0).toUpperCase()}</div>`;
}

function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─────────────────────────────────────────────────────────────────
// WEEKLY PAGE
// ─────────────────────────────────────────────────────────────────
let activeWeeklyTab = 1;
function renderWeeklyPage() {
  renderWeeklyContent(activeWeeklyTab);
}
function setWeeklyTab(el, week) {
  document.querySelectorAll('#page-weekly .week-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  activeWeeklyTab = week;
  renderWeeklyContent(week);
}
function renderWeeklyContent(week) {
  const container = document.getElementById('weeklyContent');
  if (!container) return;
  const weekStudents = state.students.filter(s => s.week == week);
  const byClass = {};
  weekStudents.forEach(s => { if (!byClass[s.class]) byClass[s.class] = []; byClass[s.class].push(s); });
  const classes = Object.keys(byClass).sort();

  container.innerHTML = `
    <div class="weekly-week">
      <div class="weekly-week-header">
        <h3><i class="fa-solid fa-calendar-week"></i> ${WEEK_LABELS[week]}</h3>
        <span class="wcount">${weekStudents.length} <small style="font-size:13px;opacity:.7">нийт</small></span>
      </div>
      ${classes.length === 0 ? '<div class="empty-state glass-card"><div class="empty-icon"><i class="fa-solid fa-folder-open"></i></div><p>Мэдээлэл байхгүй</p></div>' :
        classes.map(cls => `
        <div class="glass-card" style="margin-bottom:12px;overflow:hidden">
          <div style="padding:12px 16px 0;display:flex;justify-content:space-between;align-items:center">
            <span style="font-weight:700;font-size:15px;color:var(--text)">${cls} анги</span>
            <span class="nav-badge">${byClass[cls].length}</span>
          </div>
          <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse;min-width:500px">
              <thead><tr>
                <th style="padding:10px 14px;font-size:11px;font-weight:600;color:var(--text-3);text-align:left;border-bottom:1px solid var(--border)">Нэр</th>
                <th style="padding:10px 14px;font-size:11px;font-weight:600;color:var(--text-3);text-align:left;border-bottom:1px solid var(--border)">Огноо</th>
                <th style="padding:10px 14px;font-size:11px;font-weight:600;color:var(--text-3);text-align:left;border-bottom:1px solid var(--border)">Зөрчлийн төрөл</th>
                <th style="padding:10px 14px;font-size:11px;font-weight:600;color:var(--text-3);text-align:left;border-bottom:1px solid var(--border)">Тайлбар</th>
              </tr></thead>
              <tbody>${byClass[cls].map(s=>`
                <tr style="border-bottom:1px solid var(--border)">
                  <td style="padding:10px 14px;font-size:13px;font-weight:600;color:var(--text)">${esc(s.name)}</td>
                  <td style="padding:10px 14px;font-size:12px;color:var(--text-3)">${s.date}</td>
                  <td style="padding:10px 14px"><span class="type-badge type-${s.type}">${VIOLATION_TYPES[s.type]}</span></td>
                  <td style="padding:10px 14px;font-size:12px;color:var(--text-3)">${esc(s.note)||'—'}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>`).join('')}
    </div>`;
}

// ─────────────────────────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────────────────────────
function updateDashboard() {
  const data = state.students;
  const w1 = data.filter(s=>s.week===1).length;
  const w2 = data.filter(s=>s.week===2).length;
  const uniqueClasses = new Set(data.map(s=>s.class)).size;

  animateCounter('statTotal', data.length);
  animateCounter('statWeek1', w1);
  animateCounter('statWeek2', w2);
  animateCounter('statClasses', uniqueClasses);

  renderRecentFeed();
  renderBarChart();
  renderPieChart();
  renderLineChart();
}

function animateCounter(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = Math.ceil(target / 30);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(interval);
  }, 30);
}

function renderRecentFeed() {
  const feed = document.getElementById('recentFeed');
  if (!feed) return;
  const recent = [...state.students].sort((a,b) => new Date(b.date)-new Date(a.date)).slice(0,10);
  if (recent.length === 0) { feed.innerHTML = '<p style="color:var(--text-3);font-size:13px;text-align:center;padding:20px">Мэдээлэл байхгүй</p>'; return; }
  feed.innerHTML = recent.map(s => `
    <div class="feed-item">
      ${avatarHtml(s)}
      <div class="feed-info">
        <span class="feed-name">${esc(s.name)}</span>
        <span class="feed-meta">${esc(s.class)} • ${s.date}</span>
      </div>
      <span class="feed-badge badge-${s.type}">${VIOLATION_TYPES[s.type]}</span>
      <span class="week-badge" style="font-size:10px"><i class="fa-solid fa-calendar-week"></i>${WEEK_LABELS[s.week]}</span>
    </div>`).join('');
}

function getChartColors() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  return {
    text: isDark ? '#94A3B8' : '#64748B',
    grid: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    bg: isDark ? 'rgba(15,23,42,0.0)' : 'rgba(255,255,255,0.0)'
  };
}

function renderBarChart() {
  const ctx = document.getElementById('barChart');
  if (!ctx) return;
  if (state.charts.bar) { state.charts.bar.destroy(); }
  const classCounts = {};
  state.classes.sort().forEach(c => classCounts[c] = 0);
  state.students.forEach(s => { classCounts[s.class] = (classCounts[s.class]||0)+1; });
  const labels = Object.keys(classCounts);
  const vals = Object.values(classCounts);
  const colors = getChartColors();
  state.charts.bar = new Chart(ctx, {
    type:'bar',
    data:{labels,datasets:[{
      label:'Зөрчлийн тоо',
      data:vals,
      backgroundColor:'rgba(37,99,235,0.75)',
      borderColor:'rgba(37,99,235,1)',
      borderWidth:1,borderRadius:6,borderSkipped:false
    }]},
    options:{responsive:true,plugins:{legend:{display:false}},scales:{
      x:{ticks:{color:colors.text,font:{size:11}},grid:{color:colors.grid}},
      y:{ticks:{color:colors.text,font:{size:11},stepSize:1},grid:{color:colors.grid},beginAtZero:true}
    },animation:{duration:800,easing:'easeOutQuart'}}
  });
}

function renderPieChart() {
  const ctx = document.getElementById('pieChart');
  if (!ctx) return;
  if (state.charts.pie) { state.charts.pie.destroy(); }
  const classCounts = {};
  state.students.forEach(s => { classCounts[s.class] = (classCounts[s.class]||0)+1; });
  const sorted = Object.entries(classCounts).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const palette = ['#2563EB','#7C3AED','#F97316','#10B981','#F59E0B','#EF4444','#0EA5E9','#6366F1'];
  state.charts.pie = new Chart(ctx, {
    type:'doughnut',
    data:{labels:sorted.map(e=>e[0]),datasets:[{data:sorted.map(e=>e[1]),backgroundColor:palette,borderWidth:2,borderColor:'transparent',hoverBorderColor:'white',hoverBorderWidth:3}]},
    options:{responsive:true,cutout:'65%',plugins:{legend:{position:'right',labels:{color:getChartColors().text,font:{size:11},padding:10,boxWidth:12,boxHeight:12}}},animation:{duration:800}}
  });
}

function renderLineChart() {
  const ctx = document.getElementById('lineChart');
  if (!ctx) return;
  if (state.charts.line) { state.charts.line.destroy(); }
  const weekData = [1,2,3,4].map(w => state.students.filter(s=>s.week===w).length);
  const colors = getChartColors();
  state.charts.line = new Chart(ctx, {
    type:'line',
    data:{labels:['1-р 7 хоног','2-р 7 хоног','3-р 7 хоног','4-р 7 хоног'],datasets:[{
      label:'Зөрчлийн тоо',data:weekData,borderColor:'#2563EB',
      backgroundColor:'rgba(37,99,235,0.08)',fill:true,tension:.4,
      pointBackgroundColor:'#2563EB',pointRadius:5,pointHoverRadius:8
    }]},
    options:{responsive:true,plugins:{legend:{display:false}},scales:{
      x:{ticks:{color:colors.text,font:{size:12}},grid:{color:colors.grid}},
      y:{ticks:{color:colors.text,font:{size:11},stepSize:1},grid:{color:colors.grid},beginAtZero:true}
    },animation:{duration:900,easing:'easeOutQuart'}}
  });
}

// ─────────────────────────────────────────────────────────────────
// ANALYTICS PAGE
// ─────────────────────────────────────────────────────────────────
function renderAnalytics() {
  renderAnalyticsBar();
  renderAnalyticsPie();
  renderAnalyticsLine();
  renderAnalyticsSummaryTable();
}

function renderAnalyticsBar() {
  const ctx = document.getElementById('analyticsBar');
  if (!ctx) return;
  if (state.charts.abar) state.charts.abar.destroy();
  const classCounts = {};
  state.classes.sort().forEach(c => classCounts[c]=0);
  state.students.forEach(s=>{classCounts[s.class]=(classCounts[s.class]||0)+1});
  const sorted = Object.entries(classCounts).sort((a,b)=>b[1]-a[1]);
  const colors = getChartColors();
  state.charts.abar = new Chart(ctx,{
    type:'bar',data:{labels:sorted.map(e=>e[0]),datasets:[
      {label:'Нийт зөрчил',data:sorted.map(e=>e[1]),backgroundColor:'rgba(37,99,235,0.8)',borderRadius:6,borderWidth:0}
    ]},
    options:{responsive:true,plugins:{legend:{labels:{color:colors.text}}},scales:{
      x:{ticks:{color:colors.text,font:{size:11}},grid:{color:colors.grid}},
      y:{ticks:{color:colors.text,font:{size:11},stepSize:1},grid:{color:colors.grid},beginAtZero:true}
    }}
  });
}

function renderAnalyticsPie() {
  const ctx = document.getElementById('analyticsPie');
  if (!ctx) return;
  if (state.charts.apie) state.charts.apie.destroy();
  const typeCounts = {1:0,2:0,3:0};
  state.students.forEach(s=>{typeCounts[s.type]=(typeCounts[s.type]||0)+1});
  const colors = getChartColors();
  state.charts.apie = new Chart(ctx,{
    type:'pie',
    data:{labels:Object.values(VIOLATION_TYPES),datasets:[{
      data:Object.values(typeCounts),
      backgroundColor:['rgba(249,115,22,0.8)','rgba(37,99,235,0.8)','rgba(239,68,68,0.8)'],
      borderWidth:2,borderColor:'transparent'
    }]},
    options:{responsive:true,plugins:{legend:{position:'bottom',labels:{color:colors.text,font:{size:12},padding:14}}}}
  });
}

function renderAnalyticsLine() {
  const ctx = document.getElementById('analyticsLine');
  if (!ctx) return;
  if (state.charts.aline) state.charts.aline.destroy();
  // Group by date
  const dateMap = {};
  state.students.forEach(s=>{dateMap[s.date]=(dateMap[s.date]||0)+1});
  const dates = Object.keys(dateMap).sort();
  const counts = dates.map(d=>dateMap[d]);
  const colors = getChartColors();
  state.charts.aline = new Chart(ctx,{
    type:'line',data:{labels:dates,datasets:[{
      label:'Өдрийн зөрчил',data:counts,borderColor:'#7C3AED',
      backgroundColor:'rgba(124,58,237,0.08)',fill:true,tension:.4,
      pointBackgroundColor:'#7C3AED',pointRadius:4,pointHoverRadius:7
    }]},
    options:{responsive:true,plugins:{legend:{labels:{color:colors.text}}},scales:{
      x:{ticks:{color:colors.text,font:{size:10},maxRotation:45},grid:{color:colors.grid}},
      y:{ticks:{color:colors.text,font:{size:11},stepSize:1},grid:{color:colors.grid},beginAtZero:true}
    }}
  });
}

function renderAnalyticsSummaryTable() {
  const wrap = document.getElementById('analyticsTable');
  if (!wrap) return;
  const classCounts = {};
  state.classes.sort().forEach(c=>{
    classCounts[c] = {total:0,w1:0,w2:0,w3:0,w4:0};
  });
  state.students.forEach(s=>{
    if(!classCounts[s.class]) classCounts[s.class]={total:0,w1:0,w2:0,w3:0,w4:0};
    classCounts[s.class].total++;
    classCounts[s.class][`w${s.week}`]++;
  });
  const sorted = Object.entries(classCounts).sort((a,b)=>b[1].total-a[1].total);
  const max = sorted[0]?.[1]?.total || 1;
  wrap.innerHTML = `<div class="analytics-table-wrap"><table class="analytics-summary-table">
    <thead><tr><th>Анги</th><th>Нийт</th><th>1-р 7х</th><th>2-р 7х</th><th>3-р 7х</th><th>4-р 7х</th><th>Эзлэх хувь</th></tr></thead>
    <tbody>${sorted.map(([cls,d])=>`<tr>
      <td><strong>${cls}</strong></td>
      <td><strong style="color:var(--primary)">${d.total}</strong></td>
      <td>${d.w1}</td><td>${d.w2}</td><td>${d.w3}</td><td>${d.w4}</td>
      <td><div class="rank-bar-wrap"><div class="rank-bar" style="width:${Math.round(d.total/max*120)}px"></div><span style="font-size:11px;color:var(--text-3)">${Math.round(d.total/Math.max(state.students.length,1)*100)}%</span></div></td>
    </tr>`).join('')}
    </tbody></table></div>`;
}

// ─────────────────────────────────────────────────────────────────
// PARENT VIEW
// ─────────────────────────────────────────────────────────────────
function parentSearchFn() {
  const q = (document.getElementById('parentSearch')?.value || '').toLowerCase();
  const cls = document.getElementById('parentClassFilter')?.value || '';
  const week = document.getElementById('parentWeekFilter')?.value || '';
  let data = [...state.students];
  if (q) data = data.filter(s => s.name.toLowerCase().includes(q));
  if (cls) data = data.filter(s => s.class === cls);
  if (week) data = data.filter(s => String(s.week) === week);

  const container = document.getElementById('parentResults');
  if (!container) return;
  if (data.length === 0) {
    container.innerHTML = '<div class="parent-empty"><i class="fa-solid fa-user-magnifying-glass"></i><p>Сурагч олдсонгүй</p></div>';
    return;
  }

  // Group by student name+class (unique student)
  const byStudent = {};
  data.forEach(s => {
    const key = `${s.name}__${s.class}`;
    if (!byStudent[key]) byStudent[key] = {student:s,violations:[]};
    byStudent[key].violations.push(s);
  });

  container.innerHTML = Object.values(byStudent).map(({student:s,violations:vs})=>`
    <div class="parent-card">
      <div class="parent-card-header">
        ${s.image?`<div class="parent-avatar"><img src="${s.image}" alt="${esc(s.name)}"></div>`:`<div class="parent-avatar">${s.name.charAt(0).toUpperCase()}</div>`}
        <div>
          <div class="parent-name">${esc(s.name)}</div>
          <div class="parent-meta">${esc(s.class)} анги${s.phone?` • ${esc(s.phone)}`:''}</div>
        </div>
        <span class="nav-badge" style="margin-left:auto">${vs.length}</span>
      </div>
      <div class="parent-violations">
        ${vs.map(v=>`<div class="parent-violation-row">
          <span class="type-badge type-${v.type}">${VIOLATION_TYPES[v.type]}</span>
          <span class="pv-week">${WEEK_LABELS[v.week]}</span>
          <span class="pv-date">${v.date}</span>
        </div>`).join('')}
      </div>
    </div>`).join('');
}

// ─────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────
function exportExcel() {
  const filtered = getFiltered();
  const rows = [['Нэр','Анги','7 хоног','Огноо','Зөрчлийн төрөл','Тайлбар','Утас']];
  filtered.forEach(s => rows.push([s.name, s.class, WEEK_LABELS[s.week], s.date, VIOLATION_TYPES[s.type], s.note||'', s.phone||'']));
  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Зөрчил');
  XLSX.writeFile(wb, 'zorchil_burtgel.xlsx');
  showToast('Excel файл татагдлаа!', 'success');
}

function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation:'landscape', unit:'mm', format:'a4' });
  doc.setFontSize(16);
  doc.text('Дүрэмт хувцасны зөрчил бүртгэл', 14, 16);
  doc.setFontSize(10);
  const filtered = getFiltered();
  let y = 28;
  const headers = ['Нэр','Анги','7 хоног','Огноо','Зөрчлийн төрөл'];
  const cols = [50,20,30,30,50];
  let x = 14;
  headers.forEach((h,i) => { doc.text(h, x, y); x += cols[i]; });
  y += 6;
  doc.setFontSize(9);
  filtered.slice(0,80).forEach(s => {
    if (y > 190) { doc.addPage(); y = 16; }
    x = 14;
    [s.name, s.class, WEEK_LABELS[s.week], s.date, VIOLATION_TYPES[s.type]].forEach((v,i) => {
      doc.text(String(v||'').substring(0,20), x, y);
      x += cols[i];
    });
    y += 7;
  });
  doc.save('zorchil_burtgel.pdf');
  showToast('PDF файл татагдлаа!', 'success');
}

function printReport() { window.print(); }

// ─────────────────────────────────────────────────────────────────
// NOTIFICATIONS
// ─────────────────────────────────────────────────────────────────
function addNotification(msg) {
  state.notifications.unshift({ msg, time: new Date().toLocaleTimeString('mn-MN') });
  document.getElementById('notifDot').style.display = 'block';
  renderNotifications();
}

function renderNotifications() {
  const list = document.getElementById('notifList');
  if (!list) return;
  if (state.notifications.length === 0) {
    list.innerHTML = '<div class="notif-empty"><i class="fa-solid fa-bell-slash"></i><br>Мэдэгдэл байхгүй</div>';
    return;
  }
  list.innerHTML = state.notifications.slice(0,10).map(n=>`<div class="notif-item"><strong>${n.msg}</strong><br><span style="font-size:11px;color:var(--text-3)">${n.time}</span></div>`).join('');
}

function clearNotifications() {
  state.notifications = [];
  document.getElementById('notifDot').style.display = 'none';
  renderNotifications();
}

function toggleNotificationCenter() {
  const nc = document.getElementById('notifCenter');
  nc.classList.toggle('hidden');
  if (!nc.classList.contains('hidden')) {
    document.getElementById('notifDot').style.display = 'none';
    renderNotifications();
  }
}
document.addEventListener('click', e => {
  const nc = document.getElementById('notifCenter');
  if (!e.target.closest('.notification-btn') && !e.target.closest('.notif-center')) {
    nc?.classList.add('hidden');
  }
});

// ─────────────────────────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────────────────────────
function showToast(msg, type='info') {
  const icons = {success:'fa-check-circle',error:'fa-circle-xmark',info:'fa-circle-info',warning:'fa-triangle-exclamation'};
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fa-solid ${icons[type]}"></i><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 320);
  }, 3200);
}

// ─────────────────────────────────────────────────────────────────
// MODAL HELPERS
// ─────────────────────────────────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  document.body.style.overflow = '';
  if (id === 'studentModal') { state.editId = null; }
  if (id === 'deleteModal') { state.deleteId = null; state.deleteIds = []; }
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// ─────────────────────────────────────────────────────────────────
// KEYBOARD SHORTCUTS
// ─────────────────────────────────────────────────────────────────
function registerKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => closeModal(m.id));
      document.getElementById('notifCenter').classList.add('hidden');
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
      e.preventDefault();
      openAddModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      navigate('violations');
      setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
    }
  });
}
