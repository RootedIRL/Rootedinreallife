/* ============================================================
   PREPARE THE PATH · ROSTER + SETTINGS
   One file, shared by client-portal.html and advent-portal.html.
   Add each Advent woman here when she enrolls. Her login on
   client-portal.html will then take her to the Advent portal.
   ============================================================ */

/* Her first name (lowercase) : her settings
     pw        her access code (not case-sensitive)
     tier      'self'      = $37 self-guided
               'sessions'  = $147 with two 1:1 sessions
     journal   link or file name for her personalized journal PDF ('' until ready)
     worksheet link or file name for her goal worksheet PDF ('' until ready)
     portrait  link or file name for her Soul Portrait PDF ('' until ready)       */
window.ADVENT_CLIENTS = {
  // Preview login so you can look around. Delete this line when you are done.
  'preview': { pw: 'advent2026', tier: 'sessions', journal: '', worksheet: '', portrait: '' },
   'caitlin': { pw: 'caitlin2026', tier: 'sessions', journal: '', worksheet: '', portrait: '' },
  // 'firstname': { pw: 'firstname2026', tier: 'self', journal: '', worksheet: '', portrait: '' },
};

/* Program settings. Leave a value '' and the portal simply leaves it out. */
window.ADVENT_CONFIG = {
  assessmentUrl:  'https://youareknown.netlify.app/',  // where she takes her assessments
  assessmentsDue: '',   // e.g. 'Wednesday, November 18'
  worksheetDue:   '',   // e.g. 'Friday, November 20'
  journalReady:   '',   // e.g. 'Friday, November 27'
  welcomeVideoId: '',   // YouTube ID of your Advent welcome video (the part after youtu.be/)
  weekVideoIds:   { prep: '', hope: '', peace: '', joy: '', love: '' }  // weekly lesson video IDs
};
