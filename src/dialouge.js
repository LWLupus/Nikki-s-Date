const script = {
  start: {
    text: "The restaurant is dead silent. No music playing, no staff. She has not blinked since you sat down.",
    say: "I am so glad we get to finally have a night completely to ourselves. I made sure there would not be any... distractions.",
    options: [
      { label: "You look beautiful, Nikki.", next: 'compliment' },
      { label: "Where is everyone? Is it closed?", next: 'look_around' },
      { label: "I have to go.", next: 'try_to_leave' },
    ],
  },

  compliment: {
    text: "She smiles but too wide too uncanny. She leans forward, her elbows on the table.",
    say: "I wore the perfume you like. The one you smelled on that girl at the coffee shop last Friday at 8:14 AM. I want to be everything you want.",
    options: [
      { label: "How did you know about that?", next: 'the_truth' },
      { label: "That's... really thoughtful of you.", next: 'appeasement' },
    ],
  },

  look_around: {
    text: "You look around there is no one here.",
    say: "I convinced them to leave. Just for you.",
    options: [
      { label: "You... What did you do. You can't 'convince' people.", next: 'convince' },
      { label: "That's a bit extreme, isn't it?", next: 'confrontation' },
    ],
  },

  convince: {
    text: "You look into her eyes waiting for an answer. She chuckles.",
    say: "You know me already. You see how close we are already? You are right I did not convince them.",
    options: [
        { label: "You are right. We are close.", next: 'appeasement'},
        { label: "NO WHY DID YOU DO THAT!!", next: 'ending_locked_in'},
    ]
  },

  the_truth: {
    text: "She pulls a thick notebook from her bag and places it gently on the table. It's bulging with photographs.",
    say: "I watch you when you sleep. You look so peaceful when you don't know I'm standing by your bed.",
    options: [
      { label: "You've been in my house?!", next: 'confrontation' },
      { label: "Reach for your phone to call for help.", next: 'phone_check' },
      { label: "Look at the notebook.", next: 'the_scrapbook' },
    ],
  },

  appeasement: {
    text: "She reaches across the table, her fingernails digging slightly into the back of your hand. Her skin is ice cold.",
    say: "I knew you'd understand that you are mine.",
    options: [
      { label: "I am yours.", next: 'ending_delusion' },
      { label: "Let's just eat, okay?", next: 'the_food' },
      { label: "Pull your hand away.", next: 'confrontation' },
    ],
  },

  the_scrapbook: {
    text: "You open the book. It's filled with hundreds of photos of you. Sleeping, eating, taking out the trash. Some of the photos are taken from inside your closet.",
    say: "Do you like it? I made it so we can always look back on how our love blossomed. Even before you knew my name.",
    options: [
      { label: "Slam the book shut. I'm leaving.", next: 'try_to_leave' },
      { label: "This is beautiful, Nikki.", next: 'ending_delusion' },
    ],
  },

  the_food: {
    text: "She eagerly pushes a plate toward you. It's your childhood favorite meal, down to the exact brand of seasoning your mother used.",
    say: "I broke into your mom's house while she was at work to read her recipe cards. Go on. Take a bite. Tell me I'm better than her.",
    options: [
      { label: "Take a bite.", next: 'ending_trapped' },
      { label: "I'm not eating this.", next: 'confrontation' },
    ],
  },

  confrontation: {
    text: "The warmth instantly drains from her face. Her features go completely slack, her eyes turning into empty voids as she stares through you.",
    say: "Why are you being like this? I fixed everything for you. I removed all the obstacles. Do you know how hard it was to get rid of Sarah?",
    options: [
      { label: "What did you do to Sarah?!", next: 'ending_meltdown' },
      { label: "Nikki, please, calm down.", next: 'appeasement' },
      { label: "Stand up and run.", next: 'try_to_leave' },
    ],
  },

  phone_check: {
    text: "You reach into your pocket, but it's empty. Nikki slowly pulls your phone out of her own purse. She's already shattered the screen.",
    say: "Who are you going to call? The police? we both know you wont do that. And I already texted everyone in your contacts that we fell in love and moved out of state. They're so happy for us.",
    options: [
      { label: "NIKKI! I dont love you.", next: 'ending_meltdown' },
      { label: "Make a run for the door.", next: 'try_to_leave' },
    ],
  },

  try_to_leave: {
    text: "You shoot up from your chair. Nikki doesn't flinch. She just calmly takes a sip of her water.",
    say: "Where are you going? The doors are locked.",
    options: [
      { label: "Check the front doors anyway.", next: 'ending_locked_in' },
      { label: "Scream for help.", next: 'ending_meltdown' },
    ],
  },

  ending_delusion: {
    text: "You force a smile, accepting your fate. Her eyes light up with a terrifying, childlike glee. She moves her chair to sit right next to you, resting her head on your shoulder.",
    say: "I knew you would get it eventually. We're going to be together forever. And ever. And ever. Now, finish your dinner sweetheart.",
    options: [],
  },

  ending_trapped: {
    text: "The food turns to ash in your mouth, but you swallow it. She claps her hands together silently, practically vibrating with excitement. You realize with a sinking horror that you are never going home.",
    say: "Good boy. Now we can finally start our life. I've already packed your bags and moved them to my house.",
    options: [],
  },

  ending_meltdown: {
    text: "She suddenly screams, sweeping everything off the table in a violent crash of glass and plates. She grabs the heavy steak knife, her face red and streaked with mascara tears.",
    say: "IF I CAN'T HAVE YOU, NOBODY GETS TO HAVE YOU! YOU MADE ME DO THIS! YOU MADE ME LOVE YOU!",
    options: [],
  },

  ending_locked_in: {
    text: "You sprint to the front entrance of the restaurant. You try to open the door the door does not budge. You look back. Nikki is standing just inches behind you in the dark.",
    say: "I told you. There's no one else left in the world. Just you and me. Let's go back to the table.",
    options: [],
  },
};

export { script };