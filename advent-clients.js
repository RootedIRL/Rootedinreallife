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
  'tiana': { pw: 'tiana2026', tier: 'sessions', journal: 'tiana-journal.pdf', worksheet: 'tiana-goal-worksheet.pdf', portrait: 'tiana-soul-portrait.pdf',
    goals: ["Know how the Lord sees me, and receive His love, so that my cup can overflow to others.",
            "Spend guided time with the Lord each day, without distractions and obligations crowding it out.",
            "Prepare myself for the Lord's birth, and let Him prepare us for a new baby."],
    scores: {
      glance: [['Melancholic','Phlegmatic'],['Fear & Control','Pride'],['Teaching','Encouragement'],['The Judge','Hyper-Achiever']],
      temperament: { max: 40, top: 1, items: [['Melancholic',31],['Phlegmatic',26],['Choleric',23],['Sanguine',15]] },
      fault:       { max: 20, top: 1, items: [['Fear & Control',16],['Pride',13],['Vanity',7],['Spiritual Sloth',7],['Sensuality',7],['Anger & Resentment',6]] },
      charism:     { max: 15, top: 4, items: [['Teaching',10],['Encouragement',9],['Mercy',9],['Wisdom / Discernment',9],['Hospitality',8],['Administration',7],['Prophecy',6],['Intercession',6]] },
      saboteur:    { max: 15, top: 2, items: [['The Judge',13],['Hyper-Achiever',10],['The Controller',10],['The Avoider',10],['Hyper-Rational',10],['The Victim',6],['The Pleaser',4]] }
    } },
  'caitlin': { pw: 'caitlin2026', tier: 'self', journal: 'caitlin-journal.pdf', worksheet: 'caitlin-goal-worksheet.pdf', portrait: 'caitlin-soul-portrait.pdf',
    goals: ["Let the Lord into the wound with my mother, even though I do not yet know exactly where it is.",
            "Move my body more, and make room for silence.",
            "Entrust my mother to the Lord, because I cannot heal her and He can."],
    scores: {
      glance: [['Choleric','Melancholic'],['Pride','Anger & Resentment'],['Prophecy','Administration'],['The Judge','The Controller']],
      temperament: { max: 25, top: 2, items: [['Choleric',20],['Melancholic',14],['Sanguine',13],['Phlegmatic',8]] },
      fault:       { max: 15, top: 2, items: [['Pride',10],['Anger & Resentment',7],['Sensuality',6],['Fear & Control',6],['Vanity',5],['Spiritual Sloth',4]] },
      charism:     { max: 10, top: 3, items: [['Prophecy',9],['Administration',9],['Hospitality',9],['Encouragement',8],['Teaching',7],['Wisdom / Discernment',7],['Intercession',3],['Mercy',2]] },
      saboteur:    { max: 10, top: 2, items: [['The Judge',10],['The Controller',9],['The Hyper-Achiever',7],['The Avoider',4],['The Pleaser',2],['The Victim',2],['The Hyper-Rational',2]] }
    } },
  'samira': { pw: 'samira2026', tier: 'self', journal: 'samira-journal.pdf', worksheet: 'samira-goal-worksheet.pdf', portrait: 'samira-soul-portrait.pdf',
    goals: ["Let go of my own barriers and insufficiencies, and give it all to Him.",
            "Set aside time for myself: once a week in adoration and at least fifteen minutes of silence at home each day, giving my anger and lack of gentleness to our Lord.",
            "Offer up the little chores I can accomplish at home, like laundry, cleaning and putting laundry away."],
    scores: {
      glance: [['Melancholic','Sanguine'],['Anger & Resentment','Sensuality'],['Encouragement','Intercession'],['The Judge','The Avoider']],
      temperament: { max: 25, top: 2, items: [['Melancholic',19],['Sanguine',19],['Phlegmatic',13],['Choleric',10]] },
      fault:       { max: 15, top: 2, items: [['Anger & Resentment',10],['Sensuality',9],['Vanity',8],['Pride',6],['Fear & Control',6],['Spiritual Sloth',4]] },
      charism:     { max: 10, top: 3, items: [['Encouragement',9],['Intercession',8],['Hospitality',8],['Wisdom / Discernment',8],['Teaching',7],['Administration',6],['Mercy',5],['Prophecy',4]] },
      saboteur:    { max: 10, top: 2, items: [['The Judge',9],['The Avoider',9],['The Pleaser',8],['The Hyper-Achiever',6],['The Controller',5],['The Victim',5],['The Hyper-Rational',2]] }
    } },
  // 'firstname': { pw: 'firstname2026', tier: 'self', journal: '', worksheet: '', portrait: '' },
};

/* Program settings. Leave a value '' and the portal simply leaves it out. */
window.ADVENT_CONFIG = {
  assessmentUrl:  'https://youareknown.netlify.app/',  // where she takes her assessments
  assessmentsDue: '',   // e.g. 'Wednesday, November 18'
  worksheetDue:   '',   // e.g. 'Friday, November 20'
  journalReady:   '',   // e.g. 'Friday, November 27'
  welcomeVideoId: '',   // YouTube ID of your Advent welcome video (the part after youtu.be/)
  weekVideoIds:   { prep: 'mb8Pbtek0PU', hope: 'UuOJHhkdlqo', peace: 'R_b2UgE2M30', joy: 'Vprjlz1of9I', love: 'SUIv2A1bvT0' }  // weekly lesson video IDs
};
