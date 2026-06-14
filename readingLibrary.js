// =============================================================
//  FOCUS READER — READING LIBRARY
//  15 Passages | Fiction & Non-Fiction
//  Difficulty:  Beginner (1–5) | Intermediate (6–10) | Advanced (11–15)
//  Grade Band:  Grade 3–6  |  Age Band: 8–12
// =============================================================

export const readingLibrary = [

  // ─────────────────────────────────────────────
  // PASSAGE 1 – BEGINNER / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-fiction-001",
    title: "The Dog Who Loved Puddles",
    gradeBand: "Grade 3-4",
    ageBand: "8-10",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 3.5,
    wordCount: 172,
    content: `
Max was a brown and white dog who lived with a girl named Priya. Every time it rained, Max would race to the window and whine until Priya opened the back door. The moment his paws touched the wet grass, he would gallop straight to the biggest puddle he could find and leap right in.

One rainy Tuesday, Priya followed Max outside with her yellow boots on. Max splashed and spun in circles, sending muddy water flying through the air. Priya laughed and jumped in beside him. Soon both of them were completely soaked.

When they came back inside, Mum shook her head and handed them each a big fluffy towel. Max shook himself dry, spraying water all over the kitchen wall.

"That dog!" Mum said, but she was smiling.

That evening, Max curled up at Priya's feet. His tail wagged slowly as he drifted off to sleep, dreaming — Priya was sure — of the next rainy day.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What did Max do as soon as the back door was opened?",
        options: [
          "He hid under the bed",
          "He galloped to the biggest puddle he could find",
          "He barked at the rain",
          "He sat on the wet grass"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage states that the moment Max's paws touched the wet grass, he galloped straight to the biggest puddle he could find."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "Which word best describes Max's personality?",
        options: [
          "Shy and quiet",
          "Grumpy and lazy",
          "Playful and energetic",
          "Careful and tidy"
        ],
        correctAnswerIndex: 2,
        explanation:
          "Max races to puddles, splashes, spins in circles, and shakes water everywhere — all actions that show he is playful and full of energy."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Why do you think Mum shook her head when they came inside?",
        options: [
          "She was angry that they had gone outside",
          "She was surprised that Max could swim",
          "She was not pleased that they were muddy and soaked",
          "She could not find any towels"
        ],
        correctAnswerIndex: 2,
        explanation:
          "Mum shakes her head — a sign of mild disapproval — and immediately hands them towels, suggesting she was unhappy about the mud and wet, though her smile shows she was not truly angry."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'gallop' most nearly mean?",
        options: [
          "Walk slowly and carefully",
          "Run fast with big leaping strides",
          "Crawl quietly",
          "Tiptoe across the grass"
        ],
        correctAnswerIndex: 1,
        explanation:
          "To gallop means to run very fast, often with large bounding steps — the way a horse runs. It shows that Max ran to the puddle with great speed and excitement."
      },
      {
        id: "q5",
        skill: "Prediction",
        question: "Based on the story, what will Max most likely do the next time it rains?",
        options: [
          "Hide inside and refuse to go out",
          "Ignore the rain and sleep",
          "Race outside and find a puddle to jump in",
          "Wait quietly for Mum to invite him out"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The story shows that Max loves puddles every single time it rains, and the ending tells us he is already dreaming of the next rainy day — making it very likely he will repeat the same behaviour."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 2 – BEGINNER / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-nonfiction-001",
    title: "Why Do Leaves Change Colour?",
    gradeBand: "Grade 3-4",
    ageBand: "8-10",
    difficulty: "Beginner",
    category: "Non-Fiction",
    estimatedReadingLevel: 3.8,
    wordCount: 178,
    content: `
Every autumn, many trees put on a dazzling show. Their leaves turn from green to shades of red, orange, yellow, and brown before falling to the ground. Have you ever wondered why?

Leaves are green because they contain a substance called chlorophyll. Chlorophyll helps trees make food from sunlight and water — a process called photosynthesis. During spring and summer there is plenty of sunlight, so trees keep making chlorophyll.

As days grow shorter and temperatures drop in autumn, trees begin to prepare for winter. They slowly stop making chlorophyll. As the green colour fades away, other colours that were hidden in the leaf all along — yellows and oranges — are finally revealed.

The red and purple colours are different. Trees actually make these colours in autumn as they pull useful nutrients back from the leaves into their branches for safekeeping over winter.

Eventually the tree cuts off the water and nutrients going to each leaf completely. The leaf dries out, turns brown, and falls. In spring, the whole cycle begins again when new green leaves grow back.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is this passage mainly about?",
        options: [
          "How to identify different types of trees",
          "Why leaves change colour and fall in autumn",
          "The dangers of cold weather for trees",
          "How trees grow new leaves in spring"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The whole passage is focused on explaining the science behind why leaves change colour in autumn, making that the central or main idea."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "What causes leaves to stop being green in autumn?",
        options: [
          "The tree drinks too much water",
          "Heavy rain washes the colour away",
          "Trees stop making chlorophyll as days get shorter and colder",
          "Insects eat the green colour out of the leaves"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage explains that when days grow shorter and temperatures drop, trees stop producing chlorophyll — and it is the chlorophyll that makes leaves green."
      },
      {
        id: "q3",
        skill: "Literal Recall",
        question: "What is chlorophyll?",
        options: [
          "A type of autumn insect",
          "A substance in leaves that makes them green and helps make food",
          "The process by which leaves fall from trees",
          "A special type of soil nutrient"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage directly states that chlorophyll is a substance in leaves that gives them their green colour and helps the tree make food through photosynthesis."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'revealed' mean as used in this passage?",
        options: [
          "Covered up and hidden",
          "Destroyed completely",
          "Made to appear or become visible",
          "Changed into a new colour"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage says the yellows and oranges were 'revealed' once the green chlorophyll faded — meaning those colours were already there but now became visible."
      },
      {
        id: "q5",
        skill: "Sequence",
        question: "Which of the following happens LAST in the autumn cycle described in the passage?",
        options: [
          "The tree stops making chlorophyll",
          "Red and purple colours are produced",
          "The leaf dries out and falls to the ground",
          "Hidden yellow and orange colours appear"
        ],
        correctAnswerIndex: 2,
        explanation:
          "According to the passage, the final step is that the tree cuts off water and nutrients to the leaf entirely — the leaf dries out, turns brown, and falls. This happens after all the colour changes."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 3 – BEGINNER / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-fiction-002",
    title: "The New Girl",
    gradeBand: "Grade 3-4",
    ageBand: "8-10",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 3.6,
    wordCount: 185,
    content: `
On Monday morning, a girl with two long braids and a green backpack stood alone beside the school gate. Her name was Amara. She had moved from another city just three days ago and did not know anyone at Riverside Primary.

The bell rang and everyone hurried inside. Amara followed quietly and found a seat near the window. During Maths she answered a question correctly and the teacher smiled at her, but nobody else spoke to her.

At break time, Amara sat on a bench and opened her lunchbox. A girl with red trainers walked over.

"Is that puff-puff?" the girl asked, pointing at the small round doughnuts in Amara's box.

"Yes," said Amara, surprised. "Do you know what puff-puff is?"

"My gran makes it!" said the girl. Her name was Siya. "Can I sit here?"

Amara moved her bag and made space on the bench.

By the time the bell rang again, they were still talking. Siya had introduced Amara to two other friends, and all four of them walked back to class together, laughing loudly about nothing in particular.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "Why did Amara not know anyone at Riverside Primary?",
        options: [
          "She had been ill and missed a lot of school",
          "She was very shy and never talked to anyone",
          "She had just moved from another city three days ago",
          "She had started at the school a year late"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage directly states that Amara had moved from another city just three days ago and therefore did not know anyone yet."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "How was Amara probably feeling at the start of break time?",
        options: [
          "Excited and happy",
          "Lonely and uncertain",
          "Angry at her new school",
          "Bored and tired"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Amara sat alone on a bench after a morning in which nobody spoke to her. Sitting alone in a new place after a quiet morning strongly suggests she was feeling lonely and unsure of herself."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "What caused Siya to come and speak to Amara?",
        options: [
          "The teacher asked her to look after the new girl",
          "She recognised the food in Amara's lunchbox",
          "They were in the same Maths class",
          "Amara waved at her from the bench"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Siya noticed the puff-puff in Amara's lunchbox and asked about it — that recognition of the food was the direct cause of her walking over and starting a conversation."
      },
      {
        id: "q4",
        skill: "Character Analysis",
        question: "What kind of person does Siya appear to be in this story?",
        options: [
          "Shy and unfriendly",
          "Boastful and unkind",
          "Friendly and welcoming",
          "Competitive and pushy"
        ],
        correctAnswerIndex: 2,
        explanation:
          "Siya approaches a girl she does not know, starts a friendly conversation, introduces her to other friends, and walks back to class with her — all signs of a friendly, welcoming personality."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the main message of this story?",
        options: [
          "Moving to a new city is always difficult",
          "A simple act of kindness can turn loneliness into friendship",
          "School food is a good way to learn about other cultures",
          "It is hard to make friends when you are good at Maths"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story shows how one small, friendly action — Siya asking about Amara's food — changed Amara's entire day and started a real friendship. The message is that small acts of kindness matter greatly."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 4 – BEGINNER / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-nonfiction-002",
    title: "The Honey Badger: Africa's Fearless Animal",
    gradeBand: "Grade 3-4",
    ageBand: "8-10",
    difficulty: "Beginner",
    category: "Non-Fiction",
    estimatedReadingLevel: 3.9,
    wordCount: 181,
    content: `
The honey badger is one of the most fearless animals in Africa. Despite being roughly the size of a small dog, it is known to stand its ground against animals far larger than itself, including lions and leopards.

Honey badgers are stocky creatures with short legs, long sharp claws, and a thick, loose skin that is very hard to bite through. Their skin is so loose that if a predator grabs them, they can actually twist around inside it to bite back.

Their name comes from their love of honey. Honey badgers will raid beehives to eat the honey and bee larvae inside, ignoring the stings of hundreds of angry bees. A special thick coat of fur helps protect them.

Honey badgers are also incredibly smart. They have been filmed using sticks and stones as tools to escape from enclosures. They are curious, stubborn, and almost impossible to discourage.

The Guinness World Records has officially named the honey badger the world's most fearless animal. People who admire great courage will sometimes say someone is "as brave as a honey badger" — and that is quite a compliment.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is this passage mainly about?",
        options: [
          "How honey badgers steal honey from beehives",
          "The remarkable fearlessness and abilities of honey badgers",
          "Why lions and leopards are afraid of small animals",
          "The different animals that live in Africa"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage covers many different traits of honey badgers — their toughness, their skin, their love of honey, and their intelligence — all of which support the central idea that they are remarkably fearless and capable animals."
      },
      {
        id: "q2",
        skill: "Literal Recall",
        question: "How does a honey badger defend itself when grabbed by a predator?",
        options: [
          "It sprays a bad-smelling liquid",
          "It rolls into a ball",
          "It twists inside its loose skin to bite back",
          "It plays dead until the predator leaves"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage clearly states that the honey badger's skin is so loose that when grabbed, it can twist around inside its own skin to bite the attacker."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "Why are honey badgers not badly hurt by bee stings when raiding hives?",
        options: [
          "They are too fast for the bees to catch",
          "They are protected by a thick coat of fur",
          "They raid hives only at night when bees are asleep",
          "They produce a substance that bees dislike"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage states that a special thick coat of fur helps protect honey badgers from bee stings when they raid beehives."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'stocky' most nearly mean when describing the honey badger's body?",
        options: [
          "Very tall and slender",
          "Short and solidly built",
          "Long and flexible",
          "Thin and lightweight"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Stocky describes something that is broad, solid, and compact in build — short and powerfully built, which matches the description of the honey badger's body in the passage."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "What can you infer about honey badgers from the fact that they have been filmed using tools to escape enclosures?",
        options: [
          "They are dangerous to keep as pets",
          "They are highly intelligent animals that can solve problems",
          "They are always trying to attack other animals",
          "They prefer living inside buildings"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Using tools to escape is a sign of problem-solving ability, which is a mark of high intelligence. The passage itself confirms this by describing honey badgers as 'incredibly smart'."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 5 – BEGINNER / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-fiction-003",
    title: "Grandpa's Radio",
    gradeBand: "Grade 3-4",
    ageBand: "8-10",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 3.7,
    wordCount: 190,
    content: `
On the top shelf of Grandpa Joseph's study sat an old brown radio. It was battered and dusty, with a cracked dial and a small dent on its side. To eight-year-old Kofi, it looked like junk.

"Grandpa, why do you keep that broken thing?" Kofi asked one Saturday afternoon.

Grandpa smiled and lifted the radio down carefully. He wiped it with a soft cloth and turned a knob. At first there was only crackling. Then, faintly, a smooth jazz melody drifted out.

"This radio is not broken," said Grandpa. "It just needs a patient hand."

He sat down and told Kofi how, as a boy, he had saved up for two whole years to buy the radio. Every evening his family would gather around it to listen to the news, to football matches, and to music programmes that made his mother dance in the kitchen.

Kofi picked the radio up carefully now. It felt heavier than he expected. He looked at the dent and wondered what stories it held.

"Can I borrow it sometime?" he asked quietly.

Grandpa laughed warmly. "One day it will be yours," he said.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "How long did Grandpa save up to buy the radio when he was a boy?",
        options: [
          "Six months",
          "One year",
          "Two years",
          "Five years"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage states directly that Grandpa saved up for two whole years to buy the radio."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "Why do you think Kofi picked up the radio 'carefully' after hearing Grandpa's story?",
        options: [
          "He was afraid it would give him an electric shock",
          "He now understood the radio was precious and full of memories",
          "Grandpa told him he must not drop it",
          "He wanted to check if it still worked"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Before the story, Kofi thought the radio was junk. After hearing about Grandpa's savings, his family, and the memories attached to it, Kofi treated it with care — showing he now valued it as something meaningful."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "What caused the radio to produce music after Grandpa turned the knob?",
        options: [
          "Kofi fixed the cracked dial",
          "Grandpa wiped it clean and turned the knob with a patient hand",
          "They put in new batteries",
          "Grandpa plugged it into the wall"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage shows that Grandpa wiped the radio and turned the knob carefully — he himself says it 'just needs a patient hand' — which caused the music to drift out."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'battered' suggest about the radio's appearance?",
        options: [
          "It is shiny and new",
          "It is very expensive",
          "It is worn and damaged from long use",
          "It is painted in a bright colour"
        ],
        correctAnswerIndex: 2,
        explanation:
          "Battered means showing signs of rough or long use — dented, worn, and damaged. The passage confirms this by also mentioning the cracked dial and the dent on its side."
      },
      {
        id: "q5",
        skill: "Character Analysis",
        question: "How does Kofi change between the beginning and the end of the story?",
        options: [
          "He goes from bored to angry",
          "He goes from thinking the radio is worthless to seeing it as something precious",
          "He goes from loving the radio to wanting to throw it away",
          "He goes from shy to very talkative"
        ],
        correctAnswerIndex: 1,
        explanation:
          "At the start, Kofi calls the radio a 'broken thing' and thinks it looks like junk. By the end, he handles it carefully, wonders about its stories, and asks if he can borrow it — a clear change in how he sees its value."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 6 – INTERMEDIATE / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-fiction-004",
    title: "The Cartographer's Daughter",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 5.0,
    wordCount: 220,
    content: `
Elena's father drew maps for a living. Their house was covered in them — maps of mountain ranges, ocean floors, ancient trade routes, and cities that no longer existed. To Elena, each one was a doorway to somewhere else.

One afternoon she discovered a rolled-up map behind a loose board in the study wall. Unlike the others, this one had no labels, no compass rose, and no legend. It showed only a winding path leading to a shape that might have been an island — or perhaps a lake.

"Dad, what's this one?" she asked, unrolling it carefully on the kitchen table.

Her father looked up from his work and went very still. He crossed the room slowly, as though approaching something fragile.

"I drew that when I was about your age," he said quietly. "It's not a real place. It's a place I invented — somewhere I wanted to go when things felt difficult."

Elena looked at the map again. She noticed small details she had missed: a tiny lighthouse on the island's edge, a bridge made of three arches, a forest where the trees were drawn with particular care.

"Did it help?" she asked. "Imagining it?"

Her father smiled — not his usual quick smile, but something slower and more honest.

"It still does," he said.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does the detail that Elena's father 'went very still' and 'crossed the room slowly, as though approaching something fragile' suggest?",
        options: [
          "He was angry that Elena had found the map",
          "The map held deep personal meaning for him",
          "He was worried the map would be damaged",
          "He had forgotten the map existed"
        ],
        correctAnswerIndex: 1,
        explanation:
          "His careful, slow movement and stillness signal that the map is emotionally significant to him — not just a physical object but something connected to private feelings and memories."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What does the invented map reveal about Elena's father as a person?",
        options: [
          "He is a careless and disorganised man",
          "He uses imagination as a way of coping with difficult feelings",
          "He prefers fantasy to real mapmaking",
          "He is secretive and does not trust Elena"
        ],
        correctAnswerIndex: 1,
        explanation:
          "He explains that he drew the imaginary place when things felt difficult and that imagining it still helps him — showing he uses creative imagination as an emotional coping strategy."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "A map's 'legend' is mentioned in the passage. What is a map legend?",
        options: [
          "The title of the map",
          "A key that explains the symbols used on the map",
          "The border or frame around the map",
          "The name of the person who drew the map"
        ],
        correctAnswerIndex: 1,
        explanation:
          "A map legend (also called a key) is the section that explains what the symbols, colours, and markings on the map represent. The passage notes this map had none, making it harder to interpret."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "Where did Elena find the unusual map?",
        options: [
          "In a drawer in the kitchen",
          "Rolled up inside a large atlas",
          "Behind a loose board in the study wall",
          "Folded inside her father's coat pocket"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage states clearly that Elena discovered the map behind a loose board in the study wall."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme of this story?",
        options: [
          "The technical skill required to draw accurate maps",
          "How imagination can be a source of comfort during hard times",
          "The importance of keeping personal belongings private",
          "Why children should learn geography from a young age"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The father's map was not drawn for accuracy but as an imaginary refuge when life was difficult — and he says imagining it still helps him. The story's heart is about imagination as emotional comfort."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 7 – INTERMEDIATE / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-nonfiction-003",
    title: "The Surprisingly Social Life of Trees",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Non-Fiction",
    estimatedReadingLevel: 5.2,
    wordCount: 215,
    content: `
For a long time, scientists believed trees were solitary, silent organisms — rooted in place, competing with one another for light and water. Recent research has dramatically changed that picture.

Beneath the forest floor lies an enormous underground network of fungi that connects the roots of different trees to one another. Scientists have nicknamed this system the "Wood Wide Web." Through this network, trees are able to exchange water, carbon, and nutrients — essentially sharing resources with their neighbours.

What is even more remarkable is that this sharing appears to be deliberate. Studies have shown that older, larger trees — sometimes called "mother trees" — actively send more nutrients to younger, struggling seedlings nearby, particularly to their own offspring. When a mother tree is dying, she has even been observed flooding the network with carbon and defence signals, as though passing on a final inheritance to the next generation.

Trees also communicate above ground. When certain insects begin attacking a tree's leaves, the tree releases chemical signals into the air. Neighbouring trees detect these signals and respond by producing bitter-tasting compounds in their own leaves, making themselves less appealing to the insects before the attack reaches them.

These discoveries suggest that what looks like a silent, still forest is actually a community — one in which trees support, warn, and even nurture one another in ways that scientists are only beginning to understand.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the main argument of this passage?",
        options: [
          "Fungi are the most important organisms in a forest",
          "Trees compete aggressively with each other for survival",
          "Trees communicate and support each other in surprisingly complex ways",
          "Scientists have known for centuries how forests work"
        ],
        correctAnswerIndex: 2,
        explanation:
          "Every section of the passage presents evidence that trees share resources, nurture younger trees, and warn each other of danger — building the overall argument that trees behave as a community, not as isolated competitors."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the word 'solitary' mean as used in the first paragraph?",
        options: [
          "Dangerous and unpredictable",
          "Alone and not connected to others",
          "Very large and difficult to move",
          "Old and slow-growing"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Solitary means existing or living alone, without connection to others. The passage says scientists once believed trees were solitary — isolated and competing, not cooperating."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "What causes neighbouring trees to produce bitter compounds in their leaves?",
        options: [
          "A change in the season triggers chemical production",
          "They detect airborne chemical signals released by an attacked tree",
          "The underground fungal network sends them a warning",
          "They notice insects gathering at the edge of the forest"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage explains that when a tree is attacked by insects it releases chemical signals into the air, and neighbouring trees detect these airborne signals and respond by making their leaves bitter — a direct cause-and-effect chain."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "Why do you think scientists nicknamed the underground fungal network the 'Wood Wide Web'?",
        options: [
          "Because it was discovered by the same person who invented the internet",
          "Because it is a vast, interconnected network through which information and resources travel — similar to the internet",
          "Because it is only found in forests near cities with internet access",
          "Because it can only be studied using computer technology"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The nickname is a play on 'World Wide Web' (the internet). Just as the internet connects millions of computers and allows them to share information, the fungal network connects trees and allows them to share nutrients and signals."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "What do 'mother trees' do when they are dying, according to the passage?",
        options: [
          "They absorb all remaining nutrients from the network",
          "They release toxins that protect the forest from insects",
          "They flood the network with carbon and defence signals for younger trees",
          "They drop their seeds in large quantities to ensure reproduction"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage states that dying mother trees have been observed flooding the underground network with carbon and defence signals — described as passing on a final inheritance to the next generation."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 8 – INTERMEDIATE / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-fiction-005",
    title: "The Spelling Bee",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 4.9,
    wordCount: 228,
    content: `
Marcus had practised every night for three weeks. He had written difficult words on index cards, stuck them to his bedroom mirror, and asked his older sister to quiz him at dinner until she complained that she was tired of the word "conscientious."

The day of the Regional Spelling Bee arrived grey and cold. In the auditorium, Marcus counted fourteen other competitors. He recognised two of them from last year's competition — both had beaten him. He sat in his chair and turned his index cards over in his hands until a teacher gently removed them.

The first few rounds went smoothly. Words fell away like leaves — "reservoir," "melancholy," "exquisite" — and Marcus spelled each one without hesitating. By the fifth round only three competitors remained.

Then came a word Marcus had never seen on any of his cards: "pharisaical."

He asked for the definition. He asked for the language of origin. He asked for it to be used in a sentence. He closed his eyes. He thought about the Greek words his father sometimes used. He thought about the pattern of letters.

"P-H-A-R-I-S-A-I-C-A-L," he said, slowly and clearly.

The pause that followed lasted exactly two seconds. Then the judge nodded.

Marcus did not win the competition that day. But standing at his mirror that evening, he added one new card: "pharisaical." He underlined it twice.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Character Analysis",
        question: "What do Marcus's actions at the end of the story — adding 'pharisaical' to his cards and underlining it twice — reveal about his character?",
        options: [
          "He is bitter about not winning and wants revenge",
          "He is determined and treats setbacks as opportunities to improve",
          "He plans to cheat at the next competition",
          "He has given up on spelling bees altogether"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Rather than discarding his cards in disappointment, Marcus immediately adds the challenging new word and underlines it — showing a determined, growth-focused mindset that turns a difficult experience into a lesson."
      },
      {
        id: "q2",
        skill: "Sequence",
        question: "What did Marcus do immediately after receiving the word 'pharisaical'?",
        options: [
          "He spelled it immediately without hesitation",
          "He asked to be excused from the round",
          "He asked for the definition, language of origin, and a sentence",
          "He looked at his index cards for help"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage lists Marcus's actions in order: he asked for the definition, then the language of origin, then for it to be used in a sentence — all before closing his eyes to think."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "What does the phrase 'words fell away like leaves' suggest about the early rounds of the competition?",
        options: [
          "The words were autumn-themed and nature-related",
          "Marcus found the early words easy and eliminated them without difficulty",
          "The other competitors were all making mistakes",
          "The competition took place outside among trees"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The simile compares the words to falling leaves — something that drops away easily and naturally. It suggests Marcus moved through the early rounds with ease, spelling each word without trouble."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does it mean when the passage says Marcus asked his sister to quiz him until she 'complained she was tired of the word conscientious'?",
        options: [
          "His sister found the word too difficult to spell herself",
          "Marcus had asked her to test him on that word so many times she was exhausted by it",
          "The word kept appearing incorrectly on Marcus's cards",
          "His sister disagreed with the definition of the word"
        ],
        correctAnswerIndex: 1,
        explanation:
          "This is a humorous detail showing that Marcus was so thorough and repetitive in his practice that even his sister grew weary of hearing the same words over and over — emphasising just how hard he had worked."
      },
      {
        id: "q5",
        skill: "Cause and Effect",
        question: "What helped Marcus work out how to spell 'pharisaical' even though it was not on his cards?",
        options: [
          "He had seen the word in a book the night before",
          "He remembered the Greek words his father used and thought about letter patterns",
          "The definition gave away the spelling",
          "He had heard the word spoken on the radio"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage states that Marcus thought about the Greek words his father used and about the pattern of letters — this prior knowledge and reasoning, not memorisation, helped him construct the correct spelling."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 9 – INTERMEDIATE / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-nonfiction-004",
    title: "The Boy Who Mapped the Moon",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Non-Fiction",
    estimatedReadingLevel: 5.1,
    wordCount: 222,
    content: `
In 1609, a young Italian scientist named Galileo Galilei turned a newly improved telescope toward the night sky. What he saw astonished him — and changed science forever.

For centuries, people had believed the Moon was a perfect, smooth sphere. Poets wrote about its flawless surface and philosophers argued it must be geometrically pure because it was a heavenly body. When Galileo looked through his telescope, he saw something very different: mountains, valleys, and craters. The Moon, he realised, was a world — rough and varied, not unlike the Earth.

Galileo made detailed sketches of what he observed over several nights, noting how shadows shifted as the angle of sunlight changed. Using these shadows, he was even able to estimate the height of the lunar mountains. His calculations suggested some were taller than any mountain known on Earth at the time.

He published his findings in a small book called Sidereus Nuncius, or "The Starry Messenger," in 1610. The book caused enormous controversy. Many scholars refused to believe the telescope could be trusted, arguing that its lenses must be distorting reality.

Despite the resistance, Galileo's careful observations — and his willingness to trust evidence over tradition — helped establish a new way of doing science: one based on direct observation rather than inherited belief. That approach, begun with a sketch of a crater on a winter's night, still guides scientists today.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Cause and Effect",
        question: "What caused many scholars to reject Galileo's findings when he published them?",
        options: [
          "Galileo had made mathematical errors in his calculations",
          "The book was written in a language most scholars could not read",
          "They believed the telescope's lenses were distorting what Galileo saw",
          "The Moon looked different to other scientists who used the same telescope"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage states that many scholars refused to accept the telescope as reliable, arguing that its lenses must be distorting reality — this distrust of the instrument was their reason for rejecting Galileo's findings."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "Why is the title 'The Starry Messenger' a fitting name for Galileo's book?",
        options: [
          "The book contained letters written by astronomers to each other",
          "The book delivered new knowledge from the night sky to the world",
          "Galileo wrote the book in the form of a story about a messenger",
          "The book was a collection of poetry about stars"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Galileo's book brought revolutionary new observations from the heavens to readers on Earth — it was literally a 'messenger' carrying news from the stars. The title is poetic and apt for what the book achieved."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does 'controversy' mean as used in the passage?",
        options: [
          "Wide celebration and praise",
          "A prolonged period of confusion",
          "Strong disagreement and public debate",
          "A formal scientific investigation"
        ],
        correctAnswerIndex: 2,
        explanation:
          "Controversy refers to a situation that causes strong disagreement or heated debate among people. The passage shows this: scholars actively argued against Galileo's findings after publication."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "How did Galileo estimate the height of mountains on the Moon?",
        options: [
          "He used a measuring instrument attached to his telescope",
          "He compared them to photographs taken from space",
          "He studied how shadows shifted as the angle of sunlight changed",
          "He calculated their size based on how bright they appeared"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage directly states that Galileo studied the shifting of shadows as the angle of sunlight changed over several nights, and used these shadows to estimate the height of the lunar mountains."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What broader lesson does this passage suggest through the story of Galileo?",
        options: [
          "Telescopes are the most important tools in science",
          "The Moon is more interesting than other planets",
          "Trusting evidence and direct observation over accepted belief drives scientific progress",
          "Italian scientists have contributed more to astronomy than anyone else"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The final paragraph makes this explicit: Galileo's approach — trusting evidence over tradition — helped establish a new way of doing science based on direct observation. The passage uses his story to illustrate this larger principle."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 10 – INTERMEDIATE / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-fiction-006",
    title: "The Lighthouse Keeper's Code",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 5.0,
    wordCount: 230,
    content: `
Every morning that summer, nine-year-old Clara watched the lighthouse from her grandmother's kitchen window. The light had been automated for years — no keeper lived there anymore — but someone had begun leaving objects on the rocks below it: a red stone one morning, three white shells the next, then a piece of blue sea glass.

Clara began writing the sequence down in a notebook. Red. White, white, white. Blue. She stared at the pattern until, one evening, it occurred to her that the colours matched a sequence she had seen somewhere before.

She pulled an old book from her grandmother's shelf — a guide to maritime signal flags. Each colour corresponded to a letter. Red was B. Three whites were E, E, E. Blue was C.

B-E-E-C.

She frowned. That wasn't a word. She rechecked the guide. Then she realised: the three white shells weren't three separate letters. White shells in a cluster meant the letter H in the old harbour code her grandmother had once described.

B-H-C.

Still not a word. She turned to her grandmother, who was reading quietly by the fire.

"Gran, does 'BHC' mean anything to you?"

Her grandmother set down her book very slowly. A complicated expression moved across her face — something between surprise and recognition.

"Where," she said carefully, "did you see that?"

Clara held up her notebook, and her grandmother reached for her coat.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Sequence",
        question: "In what order did Clara work out the meaning of the objects on the rocks?",
        options: [
          "She asked her grandmother first, then checked the signal flag book",
          "She noticed the objects, recorded them, found a signal flag book, decoded the colours, then realised her shell interpretation was wrong and corrected it",
          "She decoded the colours immediately and ran to tell her grandmother",
          "Her grandmother explained the objects to her before she had a chance to investigate"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage follows a clear sequence: Clara observed and recorded the objects → found the maritime signal flag book → decoded the colours → realised her three-shell interpretation was incorrect → corrected it using the harbour code → asked her grandmother."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "What does the grandmother's reaction — setting her book down slowly and her complicated expression — suggest?",
        options: [
          "She is annoyed that Clara has been reading her old books",
          "She is confused by the question and does not understand",
          "She knows exactly what BHC means and it carries significant meaning for her",
          "She is worried Clara has hurt herself on the rocks"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The grandmother's slow, deliberate movement and her expression of 'surprise and recognition' strongly suggest the letters mean something important to her personally — and her immediate move to reach for her coat confirms she intends to act on this knowledge."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'automated' mean in the context of the lighthouse?",
        options: [
          "Damaged and no longer working",
          "Operated by machines without a human keeper",
          "Painted and restored to look new",
          "Locked and closed to all visitors"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Automated means controlled by machines or technology rather than a person. An automated lighthouse runs its light without a human keeper living there — which is why the passage notes that 'no keeper lived there anymore.'"
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "What book did Clara use to begin decoding the coloured objects?",
        options: [
          "A book of local history from the library",
          "Her grandmother's personal diary",
          "A guide to maritime signal flags",
          "A children's encyclopaedia of the sea"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage states clearly that Clara pulled a guide to maritime signal flags from her grandmother's shelf and used it to match the colours to letters."
      },
      {
        id: "q5",
        skill: "Prediction",
        question: "Based on the ending of the story, what is most likely to happen next?",
        options: [
          "Clara's grandmother will tell her to stop investigating and go to bed",
          "Clara and her grandmother will go to the lighthouse rocks to investigate who is leaving the objects",
          "The grandmother will telephone the police about the objects",
          "Clara will return the signal flag book to the library"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The grandmother immediately reaches for her coat after seeing Clara's notebook — a clear physical action suggesting she intends to go somewhere. Given the context (the rocks below the lighthouse), it is strongly implied they will go there to find out who is sending the coded message."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 11 – ADVANCED / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-fiction-007",
    title: "The Last Migration",
    gradeBand: "Grade 5-6",
    ageBand: "10-12",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 6.2,
    wordCount: 255,
    content: `
The geese came every October without fail — forty, sometimes fifty of them — settling on the wide pond at the edge of Miriam's property in a great grey-and-white commotion of wings and noise. She had watched them arrive every year for as long as she could remember, first as a child pressing her face against the cold glass of the farmhouse window, then as an adult standing in the open doorway with a cup of tea going cold in her hands.

This October, she counted eleven.

She stood at the water's edge for a long time, watching them move across the surface with that particular unhurried elegance she had always admired. They seemed unaware — or perhaps indifferent — to their diminished number. There was no obvious grief among them, no hesitation in their movements. They simply continued to be what they were.

It was Miriam who felt the absence. She found herself counting the spaces between the birds, the patches of open water where wings ought to have been cutting the surface. Eleven was not nothing. Eleven was still a flight, still a formation, still a crossing of hundreds of miles. And yet.

She turned back toward the house before the light failed entirely. She would record the number in the notebook she kept on the kitchen shelf — the one that held forty years of arrivals, weather notes, and small observations. She would write eleven. She would not write what she feared.

Some things, she had long since learned, were better witnessed than named.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does the sharp drop from 'forty, sometimes fifty' geese to eleven most likely suggest about the world of the story?",
        options: [
          "The geese have found a more convenient resting place nearby",
          "Miriam has made an error in her counting this year",
          "The goose population has declined significantly, possibly due to environmental change",
          "This particular flock is younger and smaller than usual"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The contrast between the large historical numbers and the current eleven, combined with Miriam's careful record-keeping over forty years and her unspoken fear at the end, strongly implies a significant and troubling decline in the geese population — likely environmental in cause."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the word 'diminished' mean as used in the phrase 'their diminished number'?",
        options: [
          "Increased and expanded",
          "Reduced and made smaller",
          "Changed and rearranged",
          "Celebrated and acknowledged"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Diminished means reduced in size, number, or importance. The passage uses it to describe the fact that the flock is far smaller than it used to be — only eleven where there were once fifty."
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "The passage says the geese seemed 'indifferent to their diminished number' while Miriam 'felt the absence.' What does this contrast reveal?",
        options: [
          "The geese are more intelligent than Miriam realises",
          "Miriam is projecting her own grief onto the natural world, which carries on regardless",
          "The geese are too exhausted from migration to show emotion",
          "Miriam is relieved there are fewer geese to observe this year"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The geese simply continue their behaviour without mourning — nature does not grieve its own losses. It is Miriam, the human observer with forty years of memory and attachment, who feels the weight of what is missing. The contrast highlights that loss is something felt by those who remember, not by those who simply exist in the present."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "What does Miriam keep in the notebook on her kitchen shelf?",
        options: [
          "Letters written to her by family members over the years",
          "Recipes and seasonal farming records",
          "Forty years of goose arrival numbers, weather notes, and small observations",
          "Scientific data on goose migration routes"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage explicitly states that the notebook holds forty years of arrivals, weather notes, and small observations — making it a personal record of Miriam's long relationship with the geese."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the deeper theme of this passage?",
        options: [
          "The scientific study of bird migration patterns",
          "The importance of keeping accurate nature records",
          "The quiet grief of witnessing slow, irreversible loss in the natural world",
          "Why geese choose to migrate in flocks rather than alone"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage is not primarily about geese or record-keeping — it is about Miriam's emotional experience of watching something she has loved slowly disappear. Her decision not to write what she fears, and the final line about witnessing rather than naming, give the story its true theme: the particular sadness of slow, undeniable loss."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 12 – ADVANCED / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-nonfiction-005",
    title: "The Paradox of Silence: How Noise Pollution Harms Wildlife",
    gradeBand: "Grade 5-6",
    ageBand: "10-12",
    difficulty: "Advanced",
    category: "Non-Fiction",
    estimatedReadingLevel: 6.4,
    wordCount: 258,
    content: `
In most of the world's cities, silence has become a rare commodity. Traffic, construction, aircraft, and the constant hum of machinery have created a sonic environment that humans have largely adapted to — treating it as an unremarkable background to daily life. For wildlife, however, the consequences of this unrelenting noise are severe and often invisible to the people who cause it.

Sound is not merely pleasant or unpleasant for animals — it is functional. Many species depend on acoustic communication for survival: to find mates, warn of predators, navigate terrain, and locate food. When human-generated noise overwhelms these signals, the results can be catastrophic. Studies have shown that birds in noisy urban environments alter the pitch and timing of their songs, sometimes to the point where their calls become unrecognisable to potential mates. In several species, this has contributed directly to declining reproductive rates.

Underwater, the situation is arguably more acute. The ocean, once described by the explorer Jacques Cousteau as the "silent world," is in fact saturated with the noise of shipping, sonar, and industrial drilling. Whales and dolphins rely on complex vocalisations — some spanning thousands of kilometres — to communicate and navigate. Exposure to intense underwater noise has been linked to disorientation, strandings, and in some documented cases, internal injuries in marine mammals.

What makes noise pollution particularly insidious is its invisibility. Unlike plastic waste or chemical spills, it leaves no visible mark on a landscape. The harm accumulates quietly, over years, in the altered behaviour and reduced populations of species that cannot voice a complaint — at least not in any language we have yet learned to hear.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Vocabulary",
        question: "What does the word 'insidious' mean as used in the final paragraph?",
        options: [
          "Extremely loud and immediately obvious",
          "Harmful in a gradual, hidden way that is difficult to detect",
          "Completely harmless despite its appearance",
          "Well understood by scientists and policymakers"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Insidious describes something that causes harm slowly and in a way that is not immediately obvious — it proceeds quietly without being noticed until significant damage has been done. The passage uses it to explain why noise pollution is so dangerous: it is invisible and gradual."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "According to the passage, what is one documented effect of noise pollution on birds in urban areas?",
        options: [
          "They migrate earlier in the year to avoid the noisiest periods",
          "They stop singing entirely and communicate only through movement",
          "They alter their songs until they become unrecognisable to potential mates, affecting reproduction",
          "They develop better hearing to compensate for the background noise"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage states that birds in noisy environments change the pitch and timing of their songs, sometimes to the point where potential mates can no longer recognise them — which the passage links directly to declining reproductive rates."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Why is the title 'The Paradox of Silence' ironic, given the passage's content?",
        options: [
          "Because the passage argues that silence is actually harmful to some animals",
          "Because the world is getting noisier yet the damage it causes goes largely unnoticed — a noisy problem that remains effectively silent in public awareness",
          "Because scientists who study noise pollution work in silence",
          "Because the animals described in the passage have all stopped making sounds"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The paradox is that noise pollution — an inherently loud problem — causes harm that is effectively silent: invisible, unnoticed, and unacknowledged by the humans creating it. The final line reinforces this: the affected animals cannot complain 'in any language we have yet learned to hear.' The damage is loud in reality but silent in human consciousness."
      },
      {
        id: "q4",
        skill: "Main Idea",
        question: "What is the central argument this passage makes?",
        options: [
          "Cities should ban all construction work near nature reserves",
          "Jacques Cousteau was wrong to call the ocean a silent world",
          "Human-generated noise causes serious, often unseen harm to wildlife by disrupting the acoustic signals animals depend on for survival",
          "Marine mammals are more seriously affected by noise than land animals"
        ],
        correctAnswerIndex: 2,
        explanation:
          "Every paragraph of the passage builds toward the same central argument: noise pollution disrupts the acoustic communication systems that wildlife depends on, with serious consequences for survival and reproduction — and the harm goes largely unnoticed because it is invisible."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "What explorer is quoted in the passage, and what did he call the ocean?",
        options: [
          "Ernest Shackleton, who called it 'the deep unknown'",
          "Jacques Cousteau, who called it 'the silent world'",
          "Charles Darwin, who called it 'the ancient highway'",
          "Ferdinand Magellan, who called it 'the endless blue'"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage directly names Jacques Cousteau and quotes his description of the ocean as 'the silent world' — a phrase the passage uses ironically, since the ocean is in fact now saturated with human-generated noise."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 13 – ADVANCED / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-fiction-008",
    title: "What the River Remembers",
    gradeBand: "Grade 5-6",
    ageBand: "10-12",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 6.3,
    wordCount: 260,
    content: `
My grandmother spoke to the river the way other people spoke to old friends — not expecting answers, but not entirely surprised when something like one arrived.

She had grown up on its banks when the water ran clear enough to see the stones on the bottom, and she claimed she could tell by its smell whether rain was coming from the north or the east. I believed her. She was not a person who invented things.

By the time I was ten, the river had changed. A processing plant had been built upstream three years earlier, and the water that passed our land now had a yellowish tint and a smell that made the dog step back from the bank. My grandmother still walked down to it every evening after supper, but she stopped speaking on those visits. She simply stood.

I asked her once what she was doing.

"Witnessing," she said, as though that were an entirely sufficient answer.

I didn't understand it then. I was ten, and I wanted action — letters to officials, protests, petitions. My grandmother was patient with my frustration in the way that only very old people and very deep rivers can be.

Years later, studying environmental law, I would think often of her standing at that bank in the evening light. Witnessing, I came to understand, was not passivity. It was the careful, unwavering act of refusing to look away — of holding a record in your body of what a place had been, so that what it had become could never be mistaken for normal.

She taught me that. The river, in its changed way, taught me the rest.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Vocabulary",
        question: "As used in this passage, what does the word 'witnessing' mean beyond its simple dictionary definition?",
        options: [
          "Signing a legal document as an observer",
          "Watching something without any emotional involvement",
          "Deliberately and actively observing something so that its truth is preserved and cannot be forgotten or normalised",
          "Taking photographs and written notes for scientific purposes"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The narrator eventually explains exactly what 'witnessing' means to her grandmother: it is 'the careful, unwavering act of refusing to look away — of holding a record in your body of what a place had been.' It is an active, purposeful, morally charged form of observation, not passive watching."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "How do the grandmother's and the young narrator's responses to the river's pollution differ, and what does this reveal about each of them?",
        options: [
          "The grandmother is angry while the narrator is calm; this shows the narrator is more mature",
          "The grandmother responds with patient, silent witnessing while the narrator wants immediate action; this reflects a difference in wisdom and experience rather than caring",
          "The grandmother ignores the pollution while the narrator takes it seriously; this shows the narrator cares more about the environment",
          "Both respond in the same way and the passage does not suggest any real difference between them"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The grandmother's silent witnessing is not indifference — she simply knows that bearing faithful witness to loss is itself a profound form of response. The young narrator's desire for protests and petitions shows urgency and impatience. The passage ultimately honours both, but shows the narrator growing to understand the grandmother's deeper wisdom."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "What does the detail that the narrator studies environmental law as an adult suggest?",
        options: [
          "The narrator forgot about the river and moved on with her life",
          "The narrator's childhood experience of the polluted river directly shaped her adult choices and career",
          "The narrator became a lawyer to defend the processing plant",
          "Environmental law was simply the most practical career available"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage draws a clear line from the childhood experience at the river, to the grandmother's teaching about witnessing, to the narrator studying environmental law. The final sentence — 'the river, in its changed way, taught me the rest' — confirms that the polluted river was a formative influence on her life's direction."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What caused the river to develop a yellowish tint and an unpleasant smell?",
        options: [
          "A long drought had reduced the water level significantly",
          "Increased boat traffic stirred up sediment from the riverbed",
          "A processing plant had been built upstream three years earlier",
          "Flooding had washed agricultural chemicals into the water"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage directly states that a processing plant had been built upstream three years before the narrator's description of the river's changed condition, establishing it as the cause of the pollution."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central idea that this passage explores?",
        options: [
          "The legal steps required to address industrial water pollution",
          "How grandparents pass on practical survival skills to younger generations",
          "The moral importance of bearing honest witness to loss and change, so that what has been damaged is never mistaken for how things have always been",
          "Why rivers are particularly vulnerable to industrial development"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage builds entirely toward the narrator's adult understanding of 'witnessing' — the act of refusing to look away from damage, holding the memory of what was, so that degradation is never normalised. This is the idea the grandmother embodies, and the river's change is the vehicle through which it is taught."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 14 – ADVANCED / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-nonfiction-006",
    title: "The Science of Mistakes: Why Getting Things Wrong Matters",
    gradeBand: "Grade 5-6",
    ageBand: "10-12",
    difficulty: "Advanced",
    category: "Non-Fiction",
    estimatedReadingLevel: 6.5,
    wordCount: 252,
    content: `
In most classrooms around the world, mistakes are treated as problems to be corrected and, where possible, avoided. Red marks on a page signal failure; a wrong answer is something to be quietly ashamed of. This attitude is understandable — accuracy matters, and careless errors can have real consequences. But a growing body of research in cognitive science suggests that our cultural discomfort with being wrong may actually be undermining the very learning it is designed to protect.

When the brain encounters information it already knows, it does relatively little work — the neural pathway is well-worn, and the knowledge passes through without much effort or consolidation. But when the brain makes a mistake and is then shown the correct answer, something quite different happens. The moment of error creates what neuroscientists call a "prediction error signal" — a kind of cognitive alarm that triggers heightened attention and deeper processing. The brain, surprised by its own wrongness, works harder to encode the correct information. Studies have shown that students who are tested on material before they have studied it — and therefore get many answers wrong — often retain information more effectively than students who study first and are tested afterwards.

This phenomenon has a name: the "hypercorrection effect." It refers to the counter-intuitive finding that people are most likely to remember a correction when they were most confident in their original, wrong answer. Being strongly wrong, it turns out, is often more educationally valuable than being weakly right.

None of this means that accuracy is unimportant, or that errors should go unaddressed. What it does suggest is that mistakes, handled thoughtfully, are not the opposite of learning — they may be among its most powerful engines.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central claim this passage makes about mistakes?",
        options: [
          "Students should not be corrected when they make errors in class",
          "Mistakes, when handled thoughtfully, can be among the most powerful drivers of learning",
          "The traditional classroom approach to error is scientifically sound and should be preserved",
          "Cognitive science has proven that testing is more effective than studying"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The final sentence of the passage states the central claim directly: mistakes, handled thoughtfully, 'may be among [learning's] most powerful engines.' The whole passage builds evidence — from neural processing to the hypercorrection effect — to support this argument."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does 'counter-intuitive' mean as used in the passage?",
        options: [
          "Supported by a large amount of scientific evidence",
          "Opposite to what common sense or instinct would suggest",
          "Difficult to measure accurately in a laboratory",
          "Related to the study of memory and the brain"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Counter-intuitive means going against what one would naturally or instinctively expect. The passage uses it to describe the hypercorrection effect — the surprising finding that being confidently wrong leads to better memory of the correction, which is the opposite of what most people would assume."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "According to the passage, what happens in the brain when it makes a mistake and is then shown the correct answer?",
        options: [
          "The brain reduces activity to protect itself from confusion",
          "The brain produces a prediction error signal that triggers deeper processing and better encoding of the correct information",
          "The brain immediately stores the correct answer without any additional effort",
          "The brain struggles to replace the wrong information and often retains the original error"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage explains that a mistake produces a 'prediction error signal' — a cognitive alarm — that triggers heightened attention and deeper processing, causing the brain to work harder to encode the correct information. This is why post-error learning can be more effective."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "What does the passage imply about the common classroom practice of testing students only after they have studied the material?",
        options: [
          "It is the most effective possible approach to learning",
          "It may be less effective than testing students before study, because it denies the brain the benefits of productive errors",
          "It is effective only for younger students",
          "It should be replaced entirely with pre-testing as the only form of assessment"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage cites research showing that students who are tested before studying — and therefore make many errors — often retain information better than those who study first and are tested afterwards. This implies that the standard study-then-test approach may not be optimal, even though the passage stops short of advocating its complete replacement."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "What is the 'hypercorrection effect'?",
        options: [
          "The tendency of students to over-correct their work and introduce new errors",
          "The finding that people most reliably remember a correction when they were most confident in their original wrong answer",
          "A method teachers use to mark mistakes more efficiently",
          "The brain's tendency to repeat errors even after being corrected"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage defines the hypercorrection effect precisely: people are most likely to remember a correction when they were highly confident in the wrong answer they originally gave — being strongly wrong produces stronger learning of the correction."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 15 – ADVANCED / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g4-fiction-009",
    title: "The Translator",
    gradeBand: "Grade 5-6",
    ageBand: "10-12",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 6.4,
    wordCount: 262,
    content: `
My mother translated things for a living — documents, mostly, but also menus, instruction manuals, and occasionally, when the work was slow, the expressions of strangers at the bus stop. She had grown up speaking four languages and regarded each one as a separate room in which different parts of herself could live.

"In Portuguese," she told me once, "I am funnier. In English I am more precise. In French I am formal in ways I can't quite escape, even when I try not to be."

I spoke only one language well and had always assumed this meant I knew myself in only one room. My mother shook her head at this.

"Knowing one language deeply is not a smaller thing," she said. "The rooms are not the point. The translation is the point."

I asked her what she meant.

She thought for a long time before answering — the way she always did when she wanted to say something exactly right.

"When you translate," she said, "you discover that there are things in one language that do not exist in another. Feelings that one culture named and another did not bother to. And so you must decide: do you find the nearest word and lose some truth, or do you keep the gap open and admit that some things resist being carried across?"

She paused.

"Most people," she said, "do that in only one language their whole lives and never notice they're doing it. Translating between languages just makes the problem visible."

I have been thinking about that conversation for years.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "When the mother says 'the rooms are not the point — the translation is the point,' what is she most likely suggesting?",
        options: [
          "Speaking multiple languages is not as important as being a professional translator",
          "The value lies not in how many languages you know but in the act of moving between different ways of seeing and expressing the world",
          "People who speak only one language cannot truly understand themselves",
          "French is a more formal language than English or Portuguese"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The mother is using 'translation' as a metaphor beyond language itself. Her point is that the meaningful act — in language or in life — is the effort to move between different ways of understanding and expressing things, to negotiate meaning across gaps. The number of languages is incidental."
      },
      {
        id: "q2",
        skill: "Main Idea",
        question: "What broader idea about language and meaning does this passage explore?",
        options: [
          "Professional translators face unique challenges that monolingual people do not",
          "All languages are ultimately equivalent and can express the same ideas",
          "Language shapes how we understand ourselves and the world, and the gaps between languages reveal how much of experience resists simple expression",
          "Children who grow up bilingual are better communicators than those who do not"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage uses the mother's translation work as a lens for examining the relationship between language, identity, and meaning. The central idea — explored through the untranslatable feelings and the question of whether to lose truth or keep the gap — is that language both shapes understanding and reveals its own limits."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the mother mean when she says some things 'resist being carried across'?",
        options: [
          "Some documents are too long to translate accurately",
          "Some words are spelled differently in different languages",
          "Some meanings, feelings, or concepts cannot be fully translated — something is always lost or left behind",
          "Some languages do not have written forms and cannot be used for official translation"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The phrase refers to the limits of translation: some feelings, concepts, or nuances that exist in one language have no true equivalent in another. To 'carry them across' into a new language means accepting that something will be lost — they 'resist' perfect transfer."
      },
      {
        id: "q4",
        skill: "Character Analysis",
        question: "What does the detail that the mother 'thought for a long time before answering — the way she always did when she wanted to say something exactly right' reveal about her?",
        options: [
          "She is slow to understand complex questions",
          "She is uncertain about her own views on translation",
          "She values precision and takes language seriously enough to choose her words with great care",
          "She is reluctant to share her knowledge with her child"
        ],
        correctAnswerIndex: 2,
        explanation:
          "A person who pauses to find exactly the right words before speaking demonstrates a deep respect for precision and meaning. For someone who works with language professionally and regards each language as a separate room of the self, this careful deliberateness is entirely consistent and revealing."
      },
      {
        id: "q5",
        skill: "Cause and Effect",
        question: "According to the mother, what is the effect of translating between languages on problems of meaning that everyone experiences?",
        options: [
          "It eliminates all misunderstandings by providing exact equivalents for every word",
          "It creates new problems of meaning that monolingual people do not face",
          "It makes visible problems of meaning — the gaps and untranslatable things — that all people face in any language but rarely notice",
          "It causes translators to lose fluency in their original language over time"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The mother's final point is that everyone faces the problem of meaning — deciding between approximate words and acknowledged gaps — in their own language, but monolingual people never notice because they never see the contrast. Translation 'makes the problem visible' by exposing it through the encounter with another language."
      }
    ]
  },

  {
    id: "g68-fiction-001",
    title: "The Whispering Oak",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 6.0,
    wordCount: 210,
    content: `Maya loved spending her afternoons in the ancient forest behind her grandmother's cottage. Most trees were ordinary, but the massive, twisted oak at the center of the clearing felt different. Maya swore she could hear it whispering when the wind blew through its thick canopy. One sunny Tuesday, while sitting beneath its heavy branches, she noticed a small brass key wedged deep within a split in the bark. Her heart raced with excitement. She tugged at the cold metal until it finally clicked free, revealing a tiny, hidden compartment carved directly into the trunk. Inside lay a faded leather journal wrapped in blue ribbon. Maya carefully untied the knot and opened the first page, which contained a hand-drawn map of her own village from a hundred years ago. Realizing she had stumbled upon a real mystery, she clutched the book tightly to her chest. She promised herself that she would return every single afternoon until she uncovered who had hidden the journal and why they wanted it kept a secret.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "Where did Maya find the small brass key?",
        options: [
          "Under a large rock",
          "In a split in the oak tree's bark",
          "Inside her grandmother's cottage",
          "Buried under the dirt"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage explicitly states that she noticed a small brass key wedged deep within a split in the bark."
      },
      {
        id: "q2",
        skill: "Sequence",
        question: "What did Maya do immediately after untying the blue ribbon?",
        options: [
          "She ran back to her grandmother's cottage.",
          "She pulled the key out of the trunk.",
          "She opened the first page of the journal.",
          "She examined the map of her village."
        ],
        correctAnswerIndex: 2,
        explanation: "According to the story, Maya carefully untied the knot and then opened the first page, which revealed the map."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'canopy' most nearly mean in this passage?",
        options: [
          "The root system of a young tree",
          "A wooden fence built around a forest",
          "The high, protective covering formed by tree leaves",
          "A dark cave where animals hide"
        ],
        correctAnswerIndex: 2,
        explanation: "In this context, 'canopy' refers to the high, spreading layer of the oak tree's branches and leaves through which the wind blows."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "What does the story suggest about Maya's personality?",
        options: [
          "She is easily frightened by old forests.",
          "She is curious and enjoys adventure.",
          "She is impatient and careless with old items.",
          "She prefers playing video games to being outside."
        ],
        correctAnswerIndex: 1,
        explanation: "Maya's excitement at finding the key, her interest in the old map, and her promise to solve the mystery show she is curious and adventurous."
      },
      {
        id: "q5",
        skill: "Prediction",
        question: "What will Maya most likely do on Wednesday afternoon?",
        options: [
          "Stay home and avoid the ancient forest entirely.",
          "Go to the forest to look for a different tree.",
          "Return to the oak tree to investigate the map further.",
          "Sell the faded leather journal to a store in town."
        ],
        correctAnswerIndex: 2,
        explanation: "The text states she promised herself she would return 'every single afternoon' to uncover the secret, making her return the next day highly likely."
      }
    ]
  },
  {
    id: "g68-nonfiction-002",
    title: "The Silent Hunters of the Night",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Beginner",
    category: "Non-Fiction",
    estimatedReadingLevel: 6.2,
    wordCount: 225,
    content: `Owls are some of nature's most accomplished nocturnal predators, meaning they hunt mainly after the sun goes down. Unlike humans, owls cannot move their eyes inside their sockets. Instead, they must turn their entire heads up to 270 degrees to look around. This unique physical trait helps them spot movement in the dark without shifting their bodies. Furthermore, their feathers are uniquely designed to muffle sound, allowing them to fly completely silently through the air. This stealth catches their prey, such as mice and insects, entirely off guard. Owls also possess incredible hearing; their ears are often placed unevenly on their heads, which helps them pinpoint the exact location of a sound on the ground below. Once an owl detects its target, it dives swiftly and uses its sharp claws, called talons, to capture the animal. Because they keep pest populations under control, owls play an essential role in keeping ecosystems balanced and healthy. Protecting these birds and their woodland habitats ensures that nature's delicate food chains remain intact for generations to come.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the primary focus of this passage?",
        options: [
          "The different types of food that mice eat in the woods",
          "How owls use unique adaptations to hunt successfully at night",
          "The reasons why human eyes can move more than owls' eyes",
          "How to build safe wooden houses for nocturnal birds"
        ],
        correctAnswerIndex: 1,
        explanation: "The entire passage describes the specific physical traits and adaptations—like head rotation, silent feathers, and hearing—that make owls excellent night hunters."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "Why must an owl turn its entire head to look around?",
        options: [
          "Because its feathers are too heavy to move quickly",
          "Because its ears are placed unevenly on its head",
          "Because it cannot move its eyes inside their sockets",
          "Because it needs to make a loud noise to scare prey"
        ],
        correctAnswerIndex: 2,
        explanation: "The text explicitly states: 'Unlike humans, owls cannot move their eyes inside their sockets. Instead, they must turn their entire heads...'"
      },
      {
        id: "q3",
        skill: "Literal Recall",
        question: "What are an owl's sharp hunting claws called?",
        options: [
          "Canopies",
          "Sockets",
          "Canines",
          "Talons"
        ],
        correctAnswerIndex: 3,
        explanation: "The passage explicitly names the sharp claws as 'talons' in the second-to-last paragraph."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'stealth' mean as used in the passage?",
        options: [
          "Incredible speed and strength",
          "Moving in a quiet, secret, and hidden way",
          "Making loud noises to warn others",
          "Bright colors used for camouflage"
        ],
        correctAnswerIndex: 1,
        explanation: "The text connects 'stealth' with flying 'completely silently' and catching prey 'entirely off guard,' which means quiet and hidden movement."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "Based on the passage, what would happen if owls disappeared from a forest?",
        options: [
          "The population of mice and insects would likely increase.",
          "Other birds would learn to fly completely silently.",
          "The trees in the forest would stop growing leaves.",
          "Humans would no longer be able to see at night."
        ],
        correctAnswerIndex: 0,
        explanation: "Since the text notes owls keep 'pest populations under control' by eating mice and insects, their disappearance would cause those populations to rise."
      }
    ]
  },
  {
    id: "g68-fiction-003",
    title: "The Code in the Attic",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Medium",
    category: "Fiction",
    estimatedReadingLevel: 7.2,
    wordCount: 290,
    content: `Leo sighed as dust swirled around the cramped attic. His parents had dragged him along to clear out his late great-uncle’s estate, a chore Leo ranked just below cleaning his own room. He kicked an old, dented metal trunk out of frustration. Instead of a hollow thud, he heard a distinct metallic clink from underneath the floorboards directly beneath the chest. Curious, Leo knelt and pried up a loose plank. Hidden in the recess was an intricate, brass puzzle box covered in strange geometric engravings, accompanied by a faded postcard from Cairo dated August 1922. The top of the box featured four rotating rings, each etched with ancient symbols. Remembering his uncle's profound love for cryptography, Leo realized this wasn't mere junk—it was a challenge. He studied the postcard, noticing that certain letters in the message were underlined with faint blue ink. Writing them down in sequence, they spelled 'N-I-L-E'. With trembling fingers, he aligned the symbols on the box's rings to correspond with those letters. A sharp click echoed through the quiet attic, and the lid sprang open, revealing a glittering, obsidian scarab beetle resting on a bed of decaying velvet. Leo’s irritation vanished instantly, replaced by an intoxicating surge of wonder. This house was no longer a boring chore; it was a labyrinth of secrets waiting to be decoded.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Character Analysis",
        question: "How does Leo's attitude change over the course of the passage?",
        options: [
          "He starts out excited but becomes bored and annoyed by the dusty attic.",
          "He begins the task with resentment but becomes deeply fascinated and intrigued.",
          "He remains consistently frightened by his great-uncle's mysterious house.",
          "He is cheerful at first but grows angry when he cannot open the box."
        ],
        correctAnswerIndex: 1,
        explanation: "Leo begins by sighing and kicking things out of 'frustration' and 'irritation,' but by the end, his bad mood is 'replaced by an intoxicating surge of wonder.'"
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "What caused Leo to discover the loose floorboard?",
        options: [
          "He followed a hand-drawn map his parents gave him.",
          "He noticed a bright light shining from beneath the wood.",
          "He heard an unusual metallic clink after kicking an old trunk.",
          "He dropped his flashlight and it broke through the floor."
        ],
        correctAnswerIndex: 2,
        explanation: "The text states that he kicked the trunk out of frustration and, 'Instead of a hollow thud, he heard a distinct metallic clink from underneath the floorboards...'"
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'cryptography' mean as suggested by the context of the passage?",
        options: [
          "The study of ancient Egyptian burial practices",
          "The art of writing or solving codes and puzzles",
          "The process of cleaning and restoring historic homes",
          "The manufacturing of brass boxes and jewelry"
        ],
        correctAnswerIndex: 1,
        explanation: "The context connects his uncle's love for 'cryptography' with a puzzle box covered in symbols and a hidden code involving underlined letters."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "What object was found inside the brass puzzle box once it opened?",
        options: [
          "A faded postcard dated August 1922",
          "A collection of old letters wrapped in blue ink",
          "An obsidian scarab beetle on velvet",
          "A key to another metal trunk"
        ],
        correctAnswerIndex: 2,
        explanation: "The passage explicitly states that the open lid revealed a 'glittering, obsidian scarab beetle resting on a bed of decaying velvet.'"
      },
      {
        id: "q5",
        skill: "Inference",
        question: "How did Leo figure out the correct combination to unlock the box?",
        options: [
          "He guessed random symbols until the lock accidentally opened.",
          "He looked up the answer using a modern smartphone.",
          "He decoded a hidden word using underlined letters on an old postcard.",
          "He forced the lid open using a loose wooden plank."
        ],
        correctAnswerIndex: 3,
        explanation: "Leo noticed underlined letters on the Cairo postcard that spelled 'NILE' and aligned the symbols on the rotating rings to match those letters."
      }
    ]
  },
  {
    id: "g68-nonfiction-004",
    title: "Deep Ocean Oases: Hydrothermal Vents",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Medium",
    category: "Non-Fiction",
    estimatedReadingLevel: 7.5,
    wordCount: 315,
    content: `For centuries, scientists believed that all life on Earth depended entirely on sunlight. It was assumed that the sunless depths of the ocean floor, thousands of meters down, were barren deserts devoid of living creatures. However, in 1977, oceanographers exploring the Galapagos Rift made a revolutionary discovery: hydrothermal vents. These vents are essentially underwater geysers formed along volcanic ridges where tectonic plates split apart. Cold seawater seeps into ocean crust fractures, becomes superheated by magma beneath the surface, and is expelled back out, loaded with rich minerals. To the scientists' utter amazement, these pitch-black, highly pressurized environments were teeming with bizarre life forms, including giant tube worms, blind shrimp, and pale crabs. Instead of using photosynthesis, which relies on sunlight, the microscopic bacteria at the base of this unique ecosystem utilize a process called chemosynthesis. They convert the toxic chemicals pouring out of the vents, specifically hydrogen sulfide, into usable energy. This groundbreaking discovery completely altered our understanding of biology, proving that complex life can thrive in the most extreme, volatile environments imaginable, completely independent of solar energy. It has even led astrobiologists to speculate that similar life might exist in the hidden, ice-covered oceans of distant moons in our solar system, such as Jupiter's Europa.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "Which statement best expresses the main idea of this text?",
        options: [
          "Hydrothermal vents are dangerous underwater volcanoes that destroy marine life.",
          "The discovery of hydrothermal vents proved that life can thrive without sunlight using chemosynthesis.",
          "Scientists have proven that Jupiter's moon, Europa, contains giant tube worms.",
          "Photosynthesis is the most efficient way for deep-sea creatures to create energy."
        ],
        correctAnswerIndex: 1,
        explanation: "The text focuses on how the discovery of vents challenged the belief that life requires sunlight, introducing chemosynthesis as an alternative energy pathway for deep-sea ecosystems."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the word 'volatile' mean as used to describe the vent environment?",
        options: [
          "Calm, predictable, and safe",
          "Highly unstable, extreme, and subject to rapid change",
          "Cold, frozen, and completely motionless",
          "Shallow and filled with bright sunlight"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage pairs 'volatile' with 'extreme environments' featuring superheated water, toxic chemicals, high pressure, and volcanic activity, indicating instability."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Why can bacteria perform chemosynthesis but not photosynthesis at the bottom of the ocean?",
        options: [
          "Because there is absolutely no sunlight available in the deep ocean",
          "Because deep-sea water is too cold for photosynthesis to work",
          "Based on the fact that tube worms eat all the sunlight",
          "Because bacteria do not possess sharp claws or talons"
        ],
        correctAnswerIndex: 0,
        explanation: "The passage notes that the deep ocean floor is a 'sunless depth' and 'pitch-black.' Since photosynthesis relies on sunlight, it is impossible there."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "In what year did oceanographers discover hydrothermal vents?",
        options: [
          "1922",
          "1977",
          "1995",
          "2026"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage explicitly states: 'However, in 1977, oceanographers exploring the Galapagos Rift made a revolutionary discovery...'"
      },
      {
        id: "q5",
        skill: "Prediction",
        question: "If scientists send a robotic probe to explore the oceans of Jupiter's moon, Europa, what will they likely look for based on this text?",
        options: [
          "Large forests of trees that grow without water",
          "Evidence of hydrothermal vents or chemical energy sources on the seafloor",
          "Animals that use photosynthesis to survive under the ice",
          "Signs of ancient Egyptian artifacts and gold jewelry"
        ],
        correctAnswerIndex: 1,
        explanation: "The text states that the vent discovery led astrobiologists to speculate that similar life might exist on Europa, implying they would look for similar chemical energy environments."
      }
    ]
  },
  {
      id: "g68-fiction-005",
    title: "The Clockwork Symphony",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Hard",
    category: "Fiction",
    estimatedReadingLevel: 8.5,
    wordCount: 380,
    content: `The Grand Automaton Theater had stood derelict for half a century, a looming shadow of brass and crumbling limestone at the edge of New London. Its reclusive creator, Thaddeus Vance, had vanished mid-performance in 1976, leaving behind his masterpiece: a sprawling, mechanical orchestra composed of life-sized clockwork musicians. Helena, an ambitious engineering prodigy, had spent months mapping the theater's structural vulnerabilities. Tonight, beneath the cover of a torrential downpour, she finally bypassed the rusted iron deadbolts. Her objective lay within the orchestra pit. Armed with a specialized toolkit and her grandfather’s handwritten schematics, she approached the mechanical conductor. The figure's porcelain face was hauntingly pristine despite the decades of decay surrounding it. Helena inspected the central housing unit located in the conductor’s thoracic cavity. As she suspected, the brass gears were pristine, but the mainspring had suffered catastrophic structural fatigue, seizing the entire mechanism. To initiate a systemic reboot, she had to execute a precise sequence. First, she lubricated the corroded primary driveshafts with graphite compound. Next, utilizing a specialized tension wrench, she painstakingly replaced the fractured mainspring with a tempered steel counterpart she had forged herself. The critical juncture arrived: she had to manually recalibrate the escapement wheel without snapping the delicate hairspring, an error that would render the entire apparatus permanently inert. Holding her breath, she manipulated the micro-calipers. A rhythmic, metallic heartbeat immediately resonated through the hollow framework of the conductor. Suddenly, the porcelain eyes shifted downward, locking onto hers. Around her, a dozen dormant clockwork musicians shuddered to life, their gears whining as they raised brass violins and silver flutes. A haunting, beautiful melody filled the cavernous space. Helena smiled triumphantly, but her jubilation withered into unease as she noticed a hidden parchment cylinder slowly ejecting from the conductor's opened arm panel. The wax seal bore her grandfather’s personal crest, implying that her family’s connection to this mechanical marvel was far more intricate—and potentially dangerous—than a mere collection of stolen blueprints had ever suggested.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Sequence",
        question: "Which of the following tasks did Helena perform first when repairing the mechanical conductor?",
        options: [
          "She recalibrated the escapement wheel with micro-calipers.",
          "She lubricated the corroded primary driveshafts with a graphite compound.",
          "She replaced the fractured mainspring with a tempered steel one.",
          "She extracted a hidden parchment cylinder from the arm panel."
        ],
        correctAnswerIndex: 1,
        explanation: "The text outlines the precise sequence: 'First, she lubricated the corroded primary driveshafts... Next... she painstakingly replaced the fractured mainspring.'"
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the word 'derelict' mean as used in the opening sentence of the passage?",
        options: [
          "Highly successful, busy, and profitable",
          "Abandoned, neglected, and in a state of ruin",
          "Brightly illuminated and modern",
          "Protected by heavy police security"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage describes the theater as a 'looming shadow' with 'crumbling limestone' and 'rusted iron deadbolts' that had stood for half a century, showing it was abandoned and ruined."
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "What does Helena's ability to fix the mechanical conductor reveal about her character?",
        options: [
          "She is lucky and stumbles upon solutions without preparing.",
          "She is a highly skilled, patient, and prepared technician.",
          "She is easily intimidated by complex machinery and dark places.",
          "She cares more about destroying history than preserving it."
        ],
        correctAnswerIndex: 2,
        explanation: "Helena is described as an 'engineering prodigy' who spent months planning, forged her own replacement part, and executed a highly delicate, technical repair sequence successfully."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What made Helena's initial triumph turn into a feeling of unease?",
        options: [
          "The clockwork musicians refused to play any music.",
          "The roof of the theater began to collapse due to the heavy rain.",
          "She discovered an ejected parchment cylinder bearing her grandfather's crest.",
          "She accidentally broke the delicate hairspring with her wrench."
        ],
        correctAnswerIndex: 2,
        explanation: "The text states her 'jubilation withered into unease as she noticed a hidden parchment cylinder slowly ejecting... The wax seal bore her grandfather’s personal crest...'"
      },
      {
        id: "q5",
        skill: "Inference",
        question: "What does the presence of her grandfather's crest on the hidden cylinder suggest?",
        options: [
          "Her grandfather was secretly Thaddeus Vance, or closely involved with the creation of the automaton theater.",
          "Her grandfather was an ordinary janitor who accidentally dropped his mail inside the robot.",
          "The theater was built by an ancient Egyptian civilization using obsidian.",
          "Helena had completely failed to reboot the mechanical orchestra."
        ],
        correctAnswerIndex: 0,
        explanation: "The text notes the crest implies her family's connection was 'far more intricate—and potentially dangerous,' suggesting a deep, hidden involvement in the creation or history of the automatons."
      }
    ]
  },
  {
    id: "g68-nonfiction-006",
    title: "The Great Green Wall of Africa",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Medium",
    category: "Non-Fiction",
    estimatedReadingLevel: 7.4,
    wordCount: 295,
    content: `At the southern edge of the vast Sahara Desert lies the Sahel, a semi-arid region stretching completely across the African continent. For decades, this fragile area has faced the severe threat of desertification—a process where fertile land degrades into barren desert due to climate change and overusing the soil. To combat this ecological crisis, an ambitious initiative called the Great Green Wall was launched in 2007. Led by the African Union, the original vision was to plant an 8,000-kilometer strip of trees reaching from Senegal in the west to Djibouti in the east. However, the project has since evolved from a simple wall of trees into a dynamic mosaic of sustainable land management practices. Instead of just planting non-native species that struggle to survive, communities are focusing on indigenous water-harvesting techniques and restoring local agriculture. The impacts of this massive undertaking are profoundly interconnected. As vegetation returns, the roots stabilize the soil, reducing the intensity of dust storms and allowing water tables to replenish. This ecological restoration has directly caused an increase in food security and created thousands of green jobs for local youth, offering a vital alternative to migration. Although political instability, funding shortages, and harsh weather conditions continue to slow progress, the Great Green Wall remains a global symbol of hope, demonstrating how collective human action can actively reverse environmental damage and revitalize vulnerable communities.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "Which organization is leading the Great Green Wall initiative?",
        options: [
          "The United Nations",
          "The African Union",
          "The World Wildlife Fund",
          "The Sahel Forestry Department"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage explicitly states that the project is 'Led by the African Union'."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "What is one direct effect of the vegetation returning to the Sahel region?",
        options: [
          "It causes the Sahara Desert to expand much faster.",
          "It stabilizes the soil and reduces dust storm intensity.",
          "It forces local youth to migrate to other continents.",
          "It completely eliminates the need for any financial funding."
        ],
        correctAnswerIndex: 1,
        explanation: "The text notes: 'As vegetation returns, the roots stabilize the soil, reducing the intensity of dust storms...'"
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'indigenous' mean as used to describe the project's techniques?",
        options: [
          "Imported from modern European countries",
          "Expensive and difficult to maintain",
          "Naturally originating or native to a specific local area",
          "Completely experimental and never tested before"
        ],
        correctAnswerIndex: 2,
        explanation: "The context contrasts 'non-native species' with 'indigenous water-harvesting techniques,' meaning methods native or local to the area."
      },
      {
        id: "q4",
        skill: "Main Idea",
        question: "What is the primary objective of the Great Green Wall project?",
        options: [
          "To construct a physical concrete barrier to block heavy desert winds",
          "To combat desertification and restore ecological and economic health to the Sahel",
          "To encourage industrial migration from Senegal to Djibouti",
          "To study how climate change affects the deep ocean currents"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage outlines how the project fights desertification to restore fertile land, bring back food security, and create local jobs."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "Why did the project coordinators change their strategy from simply planting a 'wall of trees' to using a 'dynamic mosaic' of local practices?",
        options: [
          "They realized that a single line of non-native trees would not survive the local climate as well as native methods.",
          "They ran out of tree seeds and had to switch to building concrete structures.",
          "The African Union decided that agricultural restoration was too easy and wanted a harder challenge.",
          "Local youth refused to plant any trees unless they were given different tools."
        ],
        correctAnswerIndex: 0,
        explanation: "The text implies this change occurred 'Instead of just planting non-native species that struggle to survive,' pointing to a realization that local, native-focused practices work better."
      }
    ]
  },
  {
    id: "g68-fiction-007",
    title: "The Echoes of Mount Maroon",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Medium",
    category: "Fiction",
    estimatedReadingLevel: 7.3,
    wordCount: 310,
    content: `Tariq adjusted the heavy straps of his backpack, matching his grandfather's steady, rhythmic stride up the steep incline of Mount Maroon. The afternoon air was crisp, carrying the distinct scent of damp eucalyptus and pine. Tariq’s grandfather, a retired wilderness ranger, moved through the dense undergrowth with a quiet grace that Tariq deeply admired but could rarely replicate. Every few minutes, Tariq would stumble over an exposed root or displace loose shale, sending it rattling down the mountainside. 'Patience, Tariq,' his grandfather murmured without turning around. 'The mountain speaks to those who move softly. If you are too loud, you miss the warnings.' Tariq frowned, exhausted and skeptical about a mountain 'speaking.' However, an hour later, as they neared the rocky ridge line, his grandfather suddenly halted, raising a single weathered hand. Tariq stopped instantly, holding his breath. At first, he heard nothing but the whistling wind. Then, a sharp, repetitive clicking sound echoed from the high crags above. It sounded like stones striking one another in a rapid pattern. 'A rockfall?' Tariq whispered, his heart hammering against his ribs. His grandfather shook his head, pointing toward a narrow ledge. Squinting, Tariq caught sight of a rare mountain goat, its coat blending perfectly with the gray stone, stamping its hooves to signal danger to its hidden herd. Moments later, a cascade of gravel swept down the exact path they had been about to cross. Safe on their side of the ridge, Tariq looked at his grandfather with newfound respect. He realized that listening to the wilderness wasn't just a mystical idea; it was a practical skill that kept you alive.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Character Analysis",
        question: "How does Tariq's perception of his grandfather's advice change during the hike?",
        options: [
          "He begins by ignoring it completely and ends up getting lost on the mountain.",
          "He transitions from skepticism to a deep, practical respect for his grandfather's wisdom.",
          "He is terrified of his grandfather at first but becomes comfortable by the end.",
          "He remains annoyed and wishes he had stayed home instead of hiking."
        ],
        correctAnswerIndex: 1,
        explanation: "Tariq starts out 'skeptical about a mountain speaking,' but after the warning saves them from a rockfall, he looks at his grandfather with 'newfound respect' and understands the practical value of his words."
      },
      {
        id: "q2",
        skill: "Sequence",
        question: "What happened immediately after Tariq's grandfather raised his weathered hand to halt?",
        options: [
          "A massive rockfall buried the main hiking path.",
          "Tariq stumbled over an exposed root and dropped his pack.",
          "Tariq stopped instantly and held his breath in the silence.",
          "The mountain goat ran down the path past them."
        ],
        correctAnswerIndex: 2,
        explanation: "The passage notes: 'Tariq stopped instantly, holding his breath. At first, he heard nothing but the whistling wind.' The clicking sounds and rockfall occurred after this moment."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Why was the mountain goat stamping its hooves?",
        options: [
          "It was trying to break the loose shale to find water.",
          "It was performing a mating ritual for the herd.",
          "It was warning its herd—and inadvertently the hikers—of an imminent rockfall danger.",
          "It was startled by the loud noise Tariq made when he stumbled."
        ],
        correctAnswerIndex: 2,
        explanation: "The text states the goat was 'stamping its hooves to signal danger to its hidden herd,' which occurred right before the gravel cascade swept down."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "What was the grandfather's profession before he retired?",
        options: [
          "A professional mountaineer",
          "A wilderness ranger",
          "A biology professor",
          "A search and rescue pilot"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage explicitly describes Tariq’s grandfather as 'a retired wilderness ranger'."
      },
      {
        id: "q5",
        skill: "Vocabulary",
        question: "What does the word 'replicate' mean as used when comparing Tariq to his grandfather?",
        options: [
          "To understand completely",
          "To copy or duplicate an action",
          "To avoid or run away from",
          "To make fun of"
        ],
        correctAnswerIndex: 1,
        explanation: "The text says his grandfather moved with a quiet grace that Tariq 'admired but could rarely replicate,' meaning Tariq had trouble copying or matching that graceful movement."
      }
    ]
  },
  {
    id: "g68-nonfiction-008",
    title: "The Architecture of an Ant Colony",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Medium",
    category: "Non-Fiction",
    estimatedReadingLevel: 7.2,
    wordCount: 280,
    content: `To the casual observer, an anthill is nothing more than a simple pile of discarded dirt. Beneath the surface, however, lies an astonishingly complex subterranean metropolis engineered with meticulous precision. Harvester ants, for example, build nests that can plunge up to three meters deep into the earth, containing hundreds of specialized chambers linked by an intricate network of vertical shafts and horizontal tunnels. Each chamber within the colony serves a distinct, vital purpose. There are nurseries located deep in the lower levels where moisture and temperature remain perfectly stable, ensuring the fragile larvae and eggs are protected from the volatile weather above. Higher up, closer to the surface, are grain storage rooms where worker ants systematically arrange seeds harvested from the outside world. Fascinatingly, ants have even designed 'trash rooms' positioned far away from the food supplies to prevent the spread of harmful mold and bacteria. The construction itself is a marvel of collective intelligence; as millions of individual ants excavate soil, they mix the dirt with their saliva, creating a natural cement that reinforces the structural integrity of the tunnel walls, preventing catastrophic collapses. Furthermore, the external mound acts as a highly efficient ventilation system. Its precise angle captures solar heat to warm the nest in the morning, while internal tunnels generate a chimney effect, circulating fresh air throughout the underground city. This intricate architecture proves that ants are not just industrious workers, but masterful natural engineers.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the primary focus of this informative passage?",
        options: [
          "The different types of food that harvester ants like to collect",
          "The sophisticated engineering and specialized chambers of an ant colony",
          "The way ants communicate with each other using chemical signals",
          "How to safely remove an anthill from a backyard garden"
        ],
        correctAnswerIndex: 1,
        explanation: "The entire passage describes the structural design, ventilation, and specialized rooms that make up the underground engineering of an ant nest."
      },
      {
        id: "q2",
        skill: "Literal Recall",
        question: "Why are the nurseries placed deep in the lower levels of the colony?",
        options: [
          "To keep them far away from the grain storage areas",
          "Because the soil is softer and easier for larvae to dig through",
          "Because the moisture and temperature remain perfectly stable there",
          "To allow the larvae to easily escape the chimney ventilation effect"
        ],
        correctAnswerIndex: 2,
        explanation: "The text explicitly states: 'There are nurseries located deep in the lower levels where moisture and temperature remain perfectly stable...'"
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "What keeps the ant tunnels from suffering a catastrophic collapse?",
        options: [
          "Ants use tiny twigs to prop up the ceilings of the rooms.",
          "The ants mix excavated soil with their saliva to create a reinforcing cement.",
          "The external mound blocks all wind from shaking the underground dirt.",
          "The queen ant stays in the center to balance the weight of the hill."
        ],
        correctAnswerIndex: 1,
        explanation: "The text explains: '...as millions of individual ants excavate soil, they mix the dirt with their saliva, creating a natural cement that reinforces the structural integrity of the tunnel walls...'"
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'industrious' mean as used in the concluding sentence?",
        options: [
          "Aggressive and dangerous to humans",
          "Hardworking, diligent, and constantly active",
          "Slow-moving and easily distracted",
          "Living completely alone without a group"
        ],
        correctAnswerIndex: 1,
        explanation: "In this context, 'industrious' refers to the classic trait of ants being hardworking and dedicated workers before elevating them to 'masterful natural engineers.'"
      },
      {
        id: "q5",
        skill: "Inference",
        question: "What would most likely happen if the ants placed their trash rooms directly next to their grain storage rooms?",
        options: [
          "The grain would grow faster and provide more food for the larvae.",
          "Harmful mold and bacteria would likely spread to and ruin the food supply.",
          "The ventilation system would stop circulating fresh air through the chimneys.",
          "The worker ants would stop collecting seeds from the outside world."
        ],
        correctAnswerIndex: 1,
        explanation: "The text states that trash rooms are 'positioned far away from the food supplies to prevent the spread of harmful mold and bacteria,' meaning placing them together would likely cause that contamination."
      }
    ]
  },
  {
    id: "g68-fiction-009",
    title: "The Midnight Canvas",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Medium",
    category: "Fiction",
    estimatedReadingLevel: 7.1,
    wordCount: 285,
    content: `Sienna sat staring at the blank canvas on her easel, the glaring white surface mimicking the emptiness in her mind. The annual youth art exhibition was tomorrow morning, and while her classmates had completed vibrant landscapes and intricate sculptures, Sienna had nothing but a clean sheet of woven cotton and an overwhelming sense of self-doubt. She picked up a charcoal stick, balanced it between her fingers, and dropped it out of frustration. It left a jagged, accidental black smudge right down the center of the canvas. Sienna groaned, leaning forward to rub it away with her palm, but her hand only smeared the charcoal into a soft, shadowy gradient. She stopped, tilting her head. The accidental shadow looked remarkably like a stormy night sky breaking over a dark sea. Suddenly inspired, she abandoned her structured plans. She dipped a thick brush into deep indigo acrylic paint and swept it across the smudge with fluid, uncalculated motions. For the next three hours, the quiet room vanished. She splattered stark white paint with an old toothbrush to create constellations and used a palette knife to scrape thick, jagged layers of silver across the bottom, forming cresting waves. When she finally stepped back, her hands were stained and her shoulders ached, but the canvas was alive with an electric, chaotic storm. Looking at her creation, Sienna smiled. She had spent weeks trying to paint something mathematically perfect, only to discover that her best work came from embracing a mistake and letting her true emotions guide the brush.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Sequence",
        question: "What event directly triggered Sienna's artistic inspiration?",
        options: [
          "She looked at her classmates' completed vibrant landscapes.",
          "She accidentally made a jagged charcoal smudge on her blank canvas.",
          "She used an old toothbrush to splatter stark white paint.",
          "She won first prize at the annual youth art exhibition."
        ],
        correctAnswerIndex: 1,
        explanation: "The text shows that dropping the charcoal created an accidental smudge, which she noticed looked like a stormy night sky, sparking her sudden inspiration."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the word 'gradient' mean as used to describe the smeared charcoal?",
        options: [
          "A solid, bright color with no variation",
          "A smooth, gradual transition from one shade or tone to another",
          "A rough, sharp edge that cuts through materials",
          "A chemical used to erase paint from cotton fabrics"
        ],
        correctAnswerIndex: 1,
        explanation: "Sienna smeared the sharp black smudge with her palm into a 'soft, shadowy gradient' resembling a sky, which refers to a smooth, gradual blending of shades."
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "What does the passage reveal about Sienna's initial approach to art before her breakthrough?",
        options: [
          "She was lazy and preferred to let other people do her work.",
          "She tried too hard to achieve mathematical perfection, which blocked her creativity.",
          "She disliked painting and preferred working exclusively with clay sculptures.",
          "She was overly confident and didn't think she needed to practice."
        ],
        correctAnswerIndex: 1,
        explanation: "The final paragraph notes that she 'had spent weeks trying to paint something mathematically perfect,' which explained her initial creative block and self-doubt."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "Why did Sienna use a palette knife while painting the canvas?",
        options: [
          "To clean the dried indigo acrylic paint off her wooden easel",
          "To scrape thick, jagged layers of silver to form cresting waves",
          "To completely erase the accidental charcoal smudge she made earlier",
          "To cut the woven cotton canvas out of its wooden frame"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage explicitly states she 'used a palette knife to scrape thick, jagged layers of silver across the bottom, forming cresting waves.'"
      },
      {
        id: "q5",
        skill: "Prediction",
        question: "Based on the ending of the story, how will Sienna most likely feel when she submits her art to the exhibition tomorrow?",
        options: [
          "Deeply ashamed because her painting isn't perfectly neat and clean.",
          "Proud and relieved, because she created something authentic that she loves.",
          "Terrified that her teacher will punish her for using an old toothbrush.",
          "Indifferent, because she plans to throw the painting away before morning."
        ],
        correctAnswerIndex: 1,
        explanation: "Since she ended the night smiling and realizing her best work came from embracing her true emotions, she is highly likely to feel proud of her authentic artwork at the exhibition."
      }
    ]
  },
  {
    id: "g68-nonfiction-010",
    title: "The Mystery of Monarch Migration",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Medium",
    category: "Non-Fiction",
    estimatedReadingLevel: 7.4,
    wordCount: 310,
    content: `Every autumn, millions of monarch butterflies pull off one of the most staggering feats of endurance in the animal kingdom. Weighing less than a paperclip, these fragile insects embark on a massive journey, flying up to 4,800 kilometers from southeastern Canada and the northern United States all the way to the oyamel fir forests of central Mexico. What makes this migration truly baffling to biologists is that the individual butterflies returning to Mexico have never been there before. The annual migration cycle requires four distinct generations to complete. The monarchs that fly south are the 'super generation,' possessing an expanded lifespan of up to eight months, unlike their parents and grandparents who only live for two to six weeks. To navigate across a vast continent with pinpoint accuracy, monarchs utilize a sophisticated internal compass system. Scientists have discovered that they analyze the position of the sun in the sky combined with a circadian clock in their antennae to maintain a straight southward heading. Additionally, they use the Earth's magnetic field as a secondary guidance mechanism on cloudy days. Unfortunately, this natural wonder is currently facing severe threats. Deforestation in their Mexican wintering grounds destroys the protective canopy they need to survive freezing night temperatures. Concurrently, the widespread use of herbicides in North American agriculture has decimated milkweed populations—the only plant upon which monarch larvae can feed. Conservationists worldwide are urgently urging citizens to plant native milkweed gardens, creating vital highway pit-stops to ensure this spectacular migratory phenomenon does not vanish forever.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What is the only plant that monarch butterfly larvae can eat?",
        options: [
          "Oyamel fir leaves",
          "Native milkweed",
          "Indigo wildflowers",
          "Eucalyptus bark"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage explicitly identifies milkweed as 'the only plant upon which monarch larvae can feed.'"
      },
      {
        id: "q2",
        skill: "Inference",
        question: "Why do scientists refer to the migrating butterflies as the 'super generation'?",
        options: [
          "Because they are much larger and heavier than a standard paperclip",
          "Because they possess a significantly longer lifespan that allows them to complete the long journey south",
          "Because they can fly completely silently without using their wings",
          "Because they are the only generation capable of eating toxic chemicals"
        ],
        correctAnswerIndex: 1,
        explanation: "The text explains they are called the super generation because they possess 'an expanded lifespan of up to eight months, unlike their parents and grandparents who only live for two to six weeks.'"
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'decimated' mean as used in the context of milkweed populations?",
        options: [
          "Greatly reduced or destroyed a large percentage of something",
          "Cultivated and grown successfully in large greenhouse structures",
          "Discovered for the very first time by field biologists",
          "Moved to a different country across the ocean"
        ],
        correctAnswerIndex: 0,
        explanation: "The text notes that herbicide use has 'decimated' the plants, presenting it as a severe threat that limits food availability, indicating destruction or severe reduction."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "How do monarchs navigate effectively on cloudy days when the sun is hidden?",
        options: [
          "They follow the flight paths of migrating mountain goats.",
          "They stop flying completely and wait for the clouds to clear.",
          "They utilize the Earth's magnetic field as a secondary guidance mechanism.",
          "They use their sense of smell to locate the oyamel fir forests."
        ],
        correctAnswerIndex: 2,
        explanation: "The passage explicitly states: 'Additionally, they use the Earth's magnetic field as a secondary guidance mechanism on cloudy days.'"
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the primary theme of this passage?",
        options: [
          "The chemical components found inside the antennae of North American insects",
          "The remarkable migration process of monarch butterflies and the modern threats to their survival",
          "The structural differences between four distinct generations of caterpillars",
          "How to properly use agricultural herbicides without harming domestic livestock"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage describes the extraordinary details of the monarch migration (how they travel, how they navigate) and then details the ecological threats they face, encouraging conservation."
      }
    ]
  },
  {
    id: "g68-fiction-011",
    title: "The Alchemist's Horizon",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Hard",
    category: "Fiction",
    estimatedReadingLevel: 8.6,
    wordCount: 395,
    content: `The air inside the subterranean laboratory was thick with the sulfurous tang of mineral reduction and the sharp, clinical scent of distilled alcohol. For three decades, Master Alchemist Ignatius Vance had pursued the 'Aurelia Matrix'—a legendary liquid compound rumored to permanently transmute base lead into stable, crystalline gold. His apprentice, a precise and observant youth named Kaelen, silently adjusted the flame beneath a blown-glass retort, ensuring the temperature didn't deviate by even a fraction of a degree. Ignatius's hands shook slightly as he prepared the critical additive: an incredibly rare, iridescent powder derived from pulverized meteoric iron. According to the ancient texts, the introduction of this celestial catalyst required flawless timing. If added too prematurely, the volatile mixture would undergo a rapid, exothermic reaction, shattering the delicate glassware and venting highly toxic vapors through the chambers. Conversely, delaying the introduction would render the solution permanently inert, spoiling years of meticulous preparation. Ignatius hesitated, his eyes darting between the bubbling cerulean distillate and the brass hourglass draining on the workbench. Sensing his master's sudden paralysis, Kaelen calculated the expansion rate of the vapor bubbles. 'Now, Master,' Kaelen urged in a low, unwavering whisper. Ignatius dropped the iridescent powder into the vessel. Instantly, the bubbling fluid turned a violent shade of violet before settling into a perfectly still, luminescent emerald green. A dense, silver vapor slowly spilled over the rim of the glass. Ignatius slumped into his wooden chair, tears of relief welling in his eyes as he realized they had succeeded. However, Kaelen's attention was drawn to the residue forming on the interior walls of the retort. The silver condensation was organizing itself into microscopic, geometric patterns that perfectly mirrored the celestial constellations currently visible in the night sky above. This unexpected mutation implied that the Aurelia Matrix was not merely a tool for material wealth, but a physical bridge connecting terrestrial chemistry to cosmic architecture—a revelation far more profound, and dangerous, than simple gold creation.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Sequence",
        question: "According to the passage, what would happen if the iridescent powder was introduced too prematurely?",
        options: [
          "The solution would turn into a harmless luminescent emerald green liquid.",
          "A rapid exothermic reaction would shatter the glassware and release toxic vapors.",
          "The mixture would become permanently inert and ruin the preparation.",
          "The silver condensation would immediately map out the constellations."
        ],
        correctAnswerIndex: 1,
        explanation: "The passage explicitly details that if added too prematurely, 'the volatile mixture would undergo a rapid, exothermic reaction, shattering the delicate glassware and venting highly toxic vapors...'"
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the word 'transmute' most nearly mean as used in the opening paragraph?",
        options: [
          "To clean or purify a dirty surface",
          "To completely alter the form, nature, or substance of something",
          "To transport materials safely across long distances",
          "To measure the exact weight of heavy metals"
        ],
        correctAnswerIndex: 1,
        explanation: "The text context refers to changing 'base lead into stable, crystalline gold,' which defines transmutation as altering one substance into another."
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "How does Kaelen's behavior during the critical moment contrast with Master Ignatius's actions?",
        options: [
          "Kaelen becomes panicked and flees, while Ignatius remains perfectly calm.",
          "Kaelen acts carelessly with the flame, while Ignatius meticulously calculates bubble rates.",
          "Kaelen remains composed and analytical, providing the necessary guidance while Ignatius is paralyzed by hesitation.",
          "Kaelen shows frustration and anger, while Ignatius breaks into tears of joy."
        ],
        correctAnswerIndex: 2,
        explanation: "The text states Ignatius experienced 'sudden paralysis' and 'hesitated,' whereas Kaelen smoothly 'calculated the expansion rate' and provided the clear directive ('Now, Master') in an 'unwavering whisper.'"
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What caused the silver condensation on the interior walls of the retort to form geometric patterns?",
        options: [
          "The extreme heat from the glass blower's furnace melted the outer casing.",
          "An unexpected mutation linked to the cosmic patterns of the night sky.",
          "Ignatius accidentally scraped the glass with a sharp brass tool.",
          "The toxic vapors chemically burned the apprentice's hands."
        ],
        correctAnswerIndex: 1,
        explanation: "The passage notes that the silver residue forming geometric patterns was an 'unexpected mutation' that 'mirrored the celestial constellations,' indicating a cosmic connection caused the design."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "What does the final paragraph imply about the true nature of the 'Aurelia Matrix'?",
        options: [
          "It is completely useless and failed to create any valuable material.",
          "It is an ordinary chemical reaction that any beginner apprentice can perform.",
          "Its implications go far beyond material wealth, holding a deeper cosmic significance that could be dangerous.",
          "It was invented by ancient Egyptian astronomers to build large telescope structures."
        ],
        correctAnswerIndex: 2,
        explanation: "The text explicitly states the mutation implied the matrix was 'a physical bridge connecting terrestrial chemistry to cosmic architecture—a revelation far more profound, and dangerous, than simple gold creation.'"
      }
    ]
  },
  {
    id: "g68-nonfiction-012",
    title: "The Quantum Frontier: Photosynthesis Reimagined",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Hard",
    category: "Non-Fiction",
    estimatedReadingLevel: 8.8,
    wordCount: 385,
    content: `For decades, high school biology textbooks have described photosynthesis as a straightforward chemical assembly line. We teach that chlorophyll molecules absorb photons of sunlight, triggering a chain reaction that converts water and carbon dioxide into glucose and oxygen. While fundamentally accurate, this classic model glosses over a profound physical paradox: the efficiency of energy transfer within the plant's light-harvesting complexes is nearly 100 percent. In classical physics, an energy packet traveling through a dense, chaotic cellular environment should inevitably collide with other molecules, dissipating its energy as useless heat long before reaching the reaction center. To resolve this mystery, a pioneering discipline known as quantum biology has emerged. Researchers have discovered that plants routinely exploit the bizarre principles of quantum mechanics to optimize survival. When a photon strikes a chlorophyll molecule, it creates an energy packet called an exciton. Instead of choosing a single, random pathway toward the reaction center, the exciton enters a state of quantum coherence. This allows it to behave like a wave, simultaneously sampling every single available route through the protein matrix at exactly the same time. The exciton effectively finds the single most efficient, resistance-free path instantaneously. This phenomenon ensures that almost no solar energy is wasted during transit. Understanding how plants achieve this flawless efficiency under highly volatile environmental conditions is not merely an academic exercise. Engineers are currently studying these subatomic botanical mechanisms to revolutionize clean energy technology. By mimicking quantum coherence, scientists hope to develop next-generation organic solar panels and quantum computing systems capable of processing vast amounts of data with minimal power consumption, proving that the secrets to our technological future may be written in the ancient evolutionary history of green leaves.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the primary scientific focus of this informational text?",
        options: [
          "The precise history of how biology textbooks are written and edited",
          "How plants utilize quantum mechanics to achieve nearly flawless energy efficiency during photosynthesis",
          "The environmental dangers of building large-scale organic solar panels",
          "A comparison of glucose production rates across different species of trees"
        ],
        correctAnswerIndex: 1,
        explanation: "The entire passage describes how quantum biology explains the paradox of photosynthetic efficiency, specifically detailing how excitons use quantum coherence to prevent energy loss."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "Why does classical physics fail to fully explain the energy transfer inside a plant cell?",
        options: [
          "According to classical physics, energy packets should lose their power as heat due to molecular collisions in a chaotic environment.",
          "Classical physics states that plants do not require carbon dioxide to create glucose.",
          "It assumes that photons from sunlight are too weak to penetrate the outer layer of a leaf.",
          "It proves that photosynthesis can only occur in a vacuum free of any water."
        ],
        correctAnswerIndex: 0,
        explanation: "The passage notes that 'In classical physics, an energy packet traveling through a dense, chaotic cellular environment should inevitably collide... dissipating its energy as useless heat,' making the observed 100% efficiency a paradox."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the phrase 'quantum coherence' mean based on its description in the text?",
        options: [
          "The process where a cell freezes completely to stop all movement",
          "A state where an energy packet can exist in multiple pathways simultaneously",
          "The chemical breakdown of glucose into carbon dioxide and water",
          "A method used by engineers to clean glass surfaces on solar panels"
        ],
        correctAnswerIndex: 1,
        explanation: "The text explains quantum coherence allows the exciton 'to behave like a wave, simultaneously sampling every single available route... at exactly the same time.'"
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "What name is given to the energy packet created when a photon strikes a chlorophyll molecule?",
        options: [
          "A matrix",
          "An exciton",
          "A catalyst",
          "A retort"
        ],
        correctAnswerIndex: 1,
        explanation: "The text explicitly states: 'When a photon strikes a chlorophyll molecule, it creates an energy packet called an exciton.'"
      },
      {
        id: "q5",
        skill: "Prediction",
        question: "Based on the concluding paragraph, how could studying quantum biology impact future human technology?",
        options: [
          "It will allow humans to live permanently without eating food or drinking water.",
          "It could lead to the invention of highly efficient solar panels and low-power quantum computers.",
          "It will force agricultural companies to completely ban the use of organic greenhouses.",
          "It will help meteorologists perfectly control the global weather patterns."
        ],
        correctAnswerIndex: 1,
        explanation: "The text explicitly predicts that mimicking these mechanisms will help scientists 'develop next-generation organic solar panels and quantum computing systems... with minimal power consumption.'"
      }
    ]
  },
  {
    id: "g68-fiction-013",
    title: "The Sentinel of Vault 7",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Hard",
    category: "Fiction",
    estimatedReadingLevel: 8.5,
    wordCount: 365,
    content: `Commander Varis stood motionless upon the observation gantry, her dark eyes scanning the glowing status arrays of Vault 7. Deep within the sub-glacial research outpost on Europa, the vault housed the 'Aegis Core'—a highly unstable, hyper-dense crystalline artifact recovered from a deep-trench hydrothermal vent. For six months, the core had remained dormant, safely suspended within a complex magnetic containment field. Suddenly, a resonant, low-frequency hum vibrated through the steel floorplates, and the environmental consoles flashed a crimson alert: containment integrity had degraded to 42 percent. A catastrophic thermal surge was imminent. 'Report!' Varis commanded, her voice cutting through the klaxons. Marcus, the station's chief artificial intelligence coordinator, frantically toggled overrides at his terminal. 'The magnetic flux regulators are experiencing systemic cascade failure,' he shouted over the noise. 'The thermal feedback will breach the ice canopy in less than three minutes, vaporizing the entire station!' Varis knew that standard electronic overrides were useless; the manual magnetic dampeners had to be engaged from inside the primary radiation baffle chamber. The procedure required entering a sequence into a mechanical backup console. However, entering that chamber meant exposure to intense, localized electromagnetic distortion that would completely fry any standard cybernetic equipment or simple digital tools. Varis unclipped an archaic, purely mechanical brass stopwatch from her belt—a family heirloom her grandfather had used as a wilderness surveyor. She knew that mechanical gears would be unaffected by the field. 'Marcus, cut power to the primary corridor on my mark. I'll time the ventilation cycles manually using the clockwork mechanism,' she ordered. Without waiting for a response, she plunged into the dark, vibrating baffle chamber. Guided only by the rhythmic ticking of the brass gears in her hand and her memory of the layout, she navigated the shifting hazards, successfully engaged the mechanical dampeners, and secured the vault. When she emerged, the alarms had ceased. Marcus stared at the antique stopwatch with absolute awe, realizing that in an era dominated by advanced digital systems, survival had ultimately hinged on a centuries-old piece of analog craftsmanship.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Character Analysis",
        question: "What key trait enables Commander Varis to successfully resolve the crisis in Vault 7?",
        options: [
          "Her total reliance on modern artificial intelligence networks",
          "Her ability to think creatively under pressure and utilize reliable analog technology",
          "Her extensive training in advanced underwater deep-trench diving",
          "Her physical strength, which allowed her to break the magnetic containment field"
        ],
        correctAnswerIndex: 1,
        explanation: "Varis demonstrates creative problem-solving and adaptability by realizing advanced digital systems would fail in the chamber, choosing instead to trust and use an archaic, mechanical analog stopwatch to time her movements."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "Why were standard electronic overrides completely useless during this specific emergency?",
        options: [
          "The station's chief coordinator had accidentally deleted the software passwords.",
          "The extreme cold of the sub-glacial outpost had frozen all the terminal keyboards.",
          "The radiation chamber was filled with intense electromagnetic distortion that would ruin digital equipment.",
          "The Aegis Core had physically melted all the electrical wiring in the outer corridor."
        ],
        correctAnswerIndex: 2,
        explanation: "The text explicitly states: '...entering that chamber meant exposure to intense, localized electromagnetic distortion that would completely fry any standard cybernetic equipment or simple digital tools.'"
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'imminent' mean as used to describe the thermal surge?",
        options: [
          "Extremely unlikely to ever happen",
          "About to happen or take place very soon",
          "Occurring hundreds of years in the past",
          "Beneficial and helpful to the environment"
        ],
        correctAnswerIndex: 1,
        explanation: "The text notes that containment had dropped drastically and the station would be destroyed 'in less than three minutes,' indicating the surge was about to happen very soon."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "Where was the hyper-dense crystalline artifact originally recovered from?",
        options: [
          "A historical museum in New London",
          "A deep-trench hydrothermal vent",
          "The interior of a volcanic ridge in Cairo",
          "An ancient forest behind her grandmother's cottage"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage explicitly states the Aegis Core was 'recovered from a deep-trench hydrothermal vent.'"
      },
      {
        id: "q5",
        skill: "Sequence",
        question: "What did Varis do immediately after ordering Marcus to cut the power to the primary corridor?",
        options: [
          "She unclipped her mechanical brass stopwatch from her belt.",
          "She plunged into the dark, vibrating radiation baffle chamber.",
          "She entered a sequence into the digital mainframe terminal.",
          "She checked the glowing status arrays on the observation gantry."
        ],
        correctAnswerIndex: 1,
        explanation: "The text states that following her order to Marcus, 'Without waiting for a response, she plunged into the dark, vibrating baffle chamber.' Unclipping the watch occurred just before the order."
      }
    ]
  },
  {
    id: "g68-nonfiction-014",
    title: "The Epigenetic Symphony",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Hard",
    category: "Non-Fiction",
    estimatedReadingLevel: 8.7,
    wordCount: 370,
    content: `For nearly a century after Gregor Mendel’s historic experiments with pea plants, the scientific consensus regarding genetics was rigidly deterministic. It was widely asserted that your DNA sequence was an unalterable blueprint; the genes you inherited from your biological parents dictated your physical traits and health outcomes with absolute finality. However, the emergence of a revolutionary discipline called epigenetics has completely shattered this biological dogma. Epigenetics, which literally translates to 'above genetics,' is the study of how cellular environments and behavioral factors influence gene expression without altering the underlying DNA sequence itself. Think of your genome as a massive library of musical sheet music, and your cells as the musicians. While the notes on the page remain completely unchanged throughout your life, epigenetics determines exactly how that music is performed. It utilizes specialized chemical compounds, such as methyl groups and histones, to act as molecular tags. These tags function like biological volume dials, actively dimming or amplifying specific genes. For instance, high levels of stress, nutritional deficiencies, or environmental toxins can add methyl tags that effectively silence beneficial genes, such as those responsible for suppressing tumors. Conversely, regular physical exercise and balanced nutrition can stimulate chemical modifications that activate protective genes. The most stunning, and controversial, aspect of epigenetic research is its transgenerational nature. Studies show that these molecular tags are not always completely erased during reproduction. This implies that an organism's lifestyle choices and environmental exposures can leave a lingering chemical imprint on the genetic expression of their future offspring, permanently redefining our understanding of heredity.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "Which statement best captures the main idea of this text?",
        options: [
          "Gregor Mendel's experiments proved that DNA sequences can be altered by physical exercise.",
          "Epigenetics reveals that environmental factors and behaviors can control gene expression without changing the DNA sequence.",
          "Methyl groups are dangerous toxic chemicals that should be entirely eliminated from human cells.",
          "Musical sheet music can be used by geneticists to map the physical structure of a human cell."
        ],
        correctAnswerIndex: 1,
        explanation: "The passage focuses entirely on defining epigenetics and explaining how environmental factors and chemical tags modify how genes are expressed without changing the actual DNA sequence."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the word 'dogma' mean in the context of the second paragraph?",
        options: [
          "An old, hand-drawn map used for deep wilderness navigation",
          "A firmly established belief or doctrine held to be authoritative and unchangeable",
          "A microscopic bacteria found near deep ocean volcanic vents",
          "A type of organic solar panel used to process computer data"
        ],
        correctAnswerIndex: 1,
        explanation: "The text pairs 'dogma' with the traditional 'rigidly deterministic' scientific belief that DNA was an unalterable blueprint with absolute finality, indicating an established, authoritative belief."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Using the musical analogy presented in the text, what represents the 'epigenetic tags'?",
        options: [
          "The specific notes written on the paper sheet music",
          "The musicians who play the instruments in the room",
          "The volume dials or adjustments that alter how the music sounds when performed",
          "The structural design of the wooden theater building"
        ],
        correctAnswerIndex: 2,
        explanation: "The text sets up an analogy where the DNA is the sheet music and cells are the musicians, stating that epigenetic tags function like 'biological volume dials, actively dimming or amplifying,' which corresponds to performance volume adjustments."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "What are the two specialized chemical compounds mentioned that act as molecular tags?",
        options: [
          "Chlorophyll and photons",
          "Methyl groups and histones",
          "Hydrogen sulfide and oxylates",
          "Excitons and quartz crystals"
        ],
        correctAnswerIndex: 1,
        explanation: "The text explicitly states: 'It utilizes specialized chemical compounds, such as methyl groups and histones, to act as molecular tags.'"
      },
      {
        id: "q5",
        skill: "Cause and Effect",
        question: "What is one consequence of the transgenerational nature of epigenetics?",
        options: [
          "An organism's lifestyle choices can leave a chemical imprint that affects the gene expression of future generations.",
          "It causes an immediate and permanent change to the core letter sequence of an individual's inherited DNA.",
          "It forces future offspring to completely lose the ability to perform photosynthesis.",
          "It prevents any chemical compounds from attaching to tumor-suppressing genes."
        ],
        correctAnswerIndex: 0,
        explanation: "The final paragraph notes that because tags are not always erased during reproduction, 'an organism's lifestyle choices... can leave a lingering chemical imprint on the genetic expression of their future offspring.'"
      }
    ]
  },
  {
    id: "g68-fiction-015",
    title: "The Ghost of Crimson Ridge",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Hard",
    category: "Fiction",
    estimatedReadingLevel: 8.6,
    wordCount: 375,
    content: `For decades, the maritime community of Blackwood Bay spoke in hushed tones about the 'Ghost of Crimson Ridge'—an anomalous acoustic phenomenon that haunted the jagged cliffs overlooking the northern shipping lanes. Navigators reported a low, mournful wail that mimicking a massive foghorn, yet it occurred exclusively during perfectly clear, windless winter nights. Countless cargo vessels, misled by the phantom signal, had altered their courses, narrowly avoiding catastrophic groundings on the submerged granite reefs below. Dr. Ananya Lin, an acoustic ecologist known for debunking maritime myths, arrived in December determined to isolate the physical source of the sound. She established her listening post in a derelict lighthouse atop the ridge, deploying an array of highly sensitive infrasound microphones along the cliff face. Her initial data sets were baffling. The sound waves lacked the chaotic signature of wind or wildlife; they exhibited a precise, harmonic frequency of 14 Hertz—a pitch beneath the threshold of human hearing, yet powerful enough to cause a deep, visceral vibration in a person's chest. On the third consecutive clear night, the acoustic event manifested. While her assistants panicked, attributing the sudden, heavy vibration to supernatural forces, Ananya calmly cross-referenced the real-time acoustic readings with tidal data from the bay. She noticed an exact correlation: the sound commenced precisely four minutes after peak low tide. Armed with this critical metric, she utilized a thermal imaging drone to scan the base of Crimson Ridge. The drone’s sensor revealed a hidden, subterranean sea cave completely submerged at high tide. Ananya realized that at low tide, the receding water evacuated the cavern, creating a natural Helmholtz resonator. The slight, freezing air currents dropping off the glacial shelf blew across the narrow cave opening like a musician blowing across the top of a flute, producing the powerful low-frequency acoustic oscillation. By exposing the natural mechanics of the cave, Ananya transformed a terrifying maritime ghost story into a predictable geographical feature, ensuring that future captains could navigate the bay safely without fear of deception.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What precise harmonic frequency did Dr. Lin's microphones record during the acoustic event?",
        options: [
          "42 Hertz",
          "14 Hertz",
          "1976 Hertz",
          "270 Hertz"
        ],
        correctAnswerIndex: 1,
        explanation: "The passage explicitly states: 'they exhibited a precise, harmonic frequency of 14 Hertz...'"
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "What physical mechanism actually produced the low-frequency sound at Crimson Ridge?",
        options: [
          "A supernatural ghost blowing through an abandoned maritime foghorn",
          "Freezing air currents blowing across a natural sea cave evacuated by the low tide",
          "The cargo vessels crashing their hulls against the submerged granite reefs",
          "The installation of highly sensitive digital microphones inside the lighthouse"
        ],
        correctAnswerIndex: 1,
        explanation: "The text explains that the cave acted as a resonator when air currents blew across the narrow cave opening as water evacuated at low tide, behaving 'like a musician blowing across the top of a flute.'"
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'anomalous' mean as used to describe the acoustic phenomenon?",
        options: [
          "Highly predictable, common, and easily understood by everyone",
          "Deviating from what is standard, normal, or expected; peculiar",
          "Extremely loud and damaging to human eardrums",
          "Artificially created by modern industrial factories"
        ],
        correctAnswerIndex: 1,
        explanation: "The sound is described as a strange phenomenon that baffled navigators because it occurred on clear, windless nights without an obvious cause, showing it was unusual or peculiar."
      },
      {
        id: "q4",
        skill: "Sequence",
        question: "What step did Dr. Lin take immediately after identifying an exact correlation between the sound and the tidal data?",
        options: [
          "She deployed an array of infrasound microphones along the cliff face.",
          "She utilized a thermal imaging drone to scan the base of the ridge.",
          "She published a biology textbook debunking maritime myths.",
          "She abandoned the derelict lighthouse and returned to town."
        ],
        correctAnswerIndex: 1,
        explanation: "The text shows that once she established the correlation, 'Armed with this critical metric, she utilized a thermal imaging drone to scan...'"
      },
      {
        id: "q5",
        skill: "Character Analysis",
        question: "What does Dr. Lin's reaction to the acoustic event reveal about her scientific character?",
        options: [
          "She is easily influenced by the superstitions and fears of her assistants.",
          "She relies on panic and guesswork when data sets become complicated.",
          "She is a grounded, analytical rationalist who seeks empirical evidence over supernatural explanations.",
          "She is uninterested in practical maritime safety and only cares about micro-calipers."
        ],
        correctAnswerIndex: 2,
        explanation: "While her assistants panicked and blamed 'supernatural forces,' Ananya remained calm, cross-referenced data, used a drone to find physical proof, and looked for empirical geographical facts."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 1 – BEGINNER / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-fiction-001",
    title: "The Night Shift",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 5.5,
    wordCount: 210,
    content: `
Joel's father worked the night shift at the hospital. This meant that for most of Joel's life, his dad had been asleep when he came home from school, and gone by the time he woke up for dinner. They communicated mostly through notes left on the kitchen counter.

"Pasta in the fridge. Don't leave lights on. — Dad."

"Ate the pasta. Left you some. — Joel."

One Thursday evening, Joel's mother had to travel for work. He was thirteen and perfectly capable of being alone, but as midnight approached, the house felt larger than usual. He found himself reading the same page of his book three times without taking in a single sentence.

At 12:15 his phone buzzed. A message from Dad: "You awake? Full moon tonight. Come outside."

Joel pulled on his jacket and stepped onto the back porch. His father was sitting on the top step in his hospital scrubs, holding two mugs of hot chocolate. The moon was enormous — white and close, hanging over the neighbour's oak tree like something that had drifted off course.

They sat without talking for a long time. The mugs went cold.

Later, Joel thought that it was one of the longest conversations he and his father had ever had.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does Joel mean when he says the silent moonlit visit was 'one of the longest conversations he and his father had ever had'?",
        options: [
          "They had actually spoken for hours without Joel realising",
          "Being together in silence felt more meaningful and connecting than their usual brief notes",
          "Joel was exaggerating because he was tired",
          "His father had told him many stories about work that night"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Joel uses 'conversation' figuratively — the shared experience of sitting together, watching the moon, and simply being present communicated something deeper than words. The irony is that genuine connection happened without a single sentence being spoken."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "What caused Joel to have difficulty reading his book that night?",
        options: [
          "The book was too difficult for him",
          "The lights in the house were too dim",
          "Being alone in the large house late at night made him unsettled",
          "He was waiting for a message from his mother"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage says 'the house felt larger than usual' as midnight approached — a sign of unease. His inability to absorb the page he had read three times is a direct result of this unsettled feeling."
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "What do the notes Joel and his father exchange reveal about their relationship?",
        options: [
          "They do not care about each other",
          "They communicate practically but have limited time together due to the father's schedule",
          "Joel is angry at his father for working nights",
          "The father is neglectful and uninterested in Joel's life"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The notes are functional and brief — pasta, lights, leftovers — but they exist at all because both make the effort. They suggest a relationship shaped by circumstance (the night shift) rather than indifference, with connection happening in small, consistent gestures."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the phrase 'like something that had drifted off course' suggest about the moon's appearance?",
        options: [
          "The moon was moving unusually fast across the sky",
          "The moon looked so large and close it seemed almost out of place — as if it had wandered too near to Earth",
          "The moon was partially hidden behind clouds",
          "The moon was a strange colour due to pollution in the air"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The simile gives the moon an almost accidental quality — as though it had strayed closer than it should have. It creates a sense of the moon being unexpectedly large and intimate, adding to the quiet, slightly surreal atmosphere of the scene."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central idea this story explores?",
        options: [
          "The difficulties of being home alone as a teenager",
          "How working night shifts damages family relationships",
          "Meaningful connection between people can happen in unexpected moments and without words",
          "Why fathers and sons find it difficult to communicate"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The story's entire arc moves toward the final line, where Joel recognises that a wordless, shared moment under the moon communicated more than their usual brief, functional notes. The central idea is that genuine connection often arrives quietly and unexpectedly."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 2 – BEGINNER / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-nonfiction-001",
    title: "The Teenage Brain: Why You're Not Imagining It",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Beginner",
    category: "Non-Fiction",
    estimatedReadingLevel: 5.8,
    wordCount: 215,
    content: `
If you have ever felt that your emotions are more intense than those of the adults around you, or that you make decisions you later regret, there is a scientific explanation — and it is not simply a matter of maturity or willpower.

The human brain is not fully developed until the mid-twenties. During adolescence, one of the last regions to mature is the prefrontal cortex — the part of the brain responsible for planning, impulse control, and evaluating long-term consequences. In teenagers, this region is still under construction.

What is already well-developed by adolescence, however, is the limbic system — the brain's emotional processing centre. This creates an imbalance: strong emotional responses are generated, but the mental equipment needed to regulate and reflect on them is not yet fully online.

This is why teenagers often experience emotions more intensely than adults, are more sensitive to peer opinions, and are more drawn to new and risky experiences. It is not recklessness — it is neuroscience. The developing brain is actually designed to push adolescents toward independence and social connection, both of which are essential for healthy development.

Understanding this does not mean that teenagers have no responsibility for their choices. But it does suggest that the turbulence of adolescence has a biological basis — and that the brain going through it is not broken. It is, in fact, doing exactly what it is supposed to.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central argument this passage makes?",
        options: [
          "Teenagers make bad decisions because they do not think about consequences",
          "The emotional and behavioural traits of adolescence have a scientific explanation rooted in brain development",
          "Adults have better brains than teenagers in every way",
          "The prefrontal cortex is the most important part of the human brain"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage argues throughout that what appears to be irrational teenage behaviour is actually the result of an uneven stage of brain development — the emotional limbic system is active while the regulatory prefrontal cortex is still maturing. The conclusion makes this explicit: the brain is 'doing exactly what it is supposed to.'"
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "According to the passage, what causes teenagers to experience emotions more intensely than adults?",
        options: [
          "Teenagers choose to be more dramatic about their feelings",
          "The limbic system is overdeveloped in teenagers compared to adults",
          "The limbic system is active but the prefrontal cortex — which regulates emotions — is not yet fully developed",
          "Hormones completely override the brain's ability to think clearly"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage describes a developmental imbalance: the limbic system (emotions) is well-developed in adolescence, but the prefrontal cortex (regulation and reflection) is still maturing. This gap between emotional intensity and regulatory capacity causes the heightened emotional experience of teenagers."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the phrase 'the mental equipment needed to regulate and reflect on them is not yet fully online' mean?",
        options: [
          "Teenagers cannot access emotional support through the internet",
          "The brain systems responsible for managing and thinking through emotions are not yet fully developed and functional",
          "Teenagers refuse to think before they act",
          "Emotional intelligence is a skill that must be taught in schools"
        ],
        correctAnswerIndex: 1,
        explanation:
          "'Fully online' is a metaphor drawn from technology, meaning fully active and operational. The passage uses it to say that the brain regions which control emotional regulation are not yet working at full capacity — they are still being built."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "According to the passage, at approximately what age is the human brain fully developed?",
        options: [
          "At the end of the teenage years, around age 19",
          "In the early twenties, around age 21",
          "In the mid-twenties",
          "At age 30, when the prefrontal cortex is complete"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage states directly that 'the human brain is not fully developed until the mid-twenties' — making this a straightforward factual recall question."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "Why does the passage say that the teenage brain pushing adolescents toward 'independence and social connection' is essential rather than problematic?",
        options: [
          "Because independence and socialising help teenagers get better exam results",
          "Because these drives serve a developmental purpose — they are necessary steps toward becoming a healthy, functioning adult",
          "Because teenagers who socialise more are less likely to take risks",
          "Because the brain needs social stimulation to fully develop the prefrontal cortex"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage frames independence and social connection not as teenage recklessness but as biologically necessary stages of development. The implication is that without these drives, adolescents would not successfully separate from childhood dependence and build the social skills needed for adult life."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 3 – BEGINNER / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-fiction-002",
    title: "Second Chair",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 5.6,
    wordCount: 220,
    content: `
For two years, Nadia had sat in the second chair of the school orchestra's violin section. First chair belonged to a boy named Daniel, who practised four hours a day and whose parents drove him to lessons in the city every Saturday. Nadia practised for an hour most evenings, between homework and dinner, and she had taught herself mostly by watching videos online.

She did not resent Daniel. He was genuinely excellent, and she appreciated excellent things. But she sometimes wondered what the difference actually was between them — not in skill, which was obvious, but in something harder to name.

One afternoon in rehearsal, Mr. Osei stopped the orchestra mid-piece and pointed his baton at the violin section.

"Someone in the seconds is playing with more feeling than the firsts right now," he said. "I don't know who it is. But don't stop."

Nadia kept her eyes on her music stand. Her cheeks were warm. Beside her, she heard Daniel play the next phrase with noticeably more care.

After rehearsal, he stopped her in the corridor.

"Was that you?" he asked.

"I don't know," she said, which was not entirely true.

Daniel nodded slowly. "I think I practise too much," he said. "I think I've stopped listening."

Nadia considered this for a moment. "You could start again," she said.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Character Analysis",
        question: "What does Daniel's comment — 'I think I practise too much. I think I've stopped listening' — reveal about him?",
        options: [
          "He is complaining that his parents force him to over-practise",
          "He is self-aware enough to recognise that technical discipline without emotional engagement has become a limitation",
          "He is trying to make Nadia feel better about being second chair",
          "He plans to quit the orchestra to reduce his workload"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Daniel's statement shows genuine self-reflection. He recognises that his intensive practice has produced technical skill but may have crowded out the emotional listening that produces feeling in music. This is a mark of real insight rather than complaint."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "Why does Nadia say 'I don't know' when asked if she was the one playing with feeling, when the narration tells us this was 'not entirely true'?",
        options: [
          "She is embarrassed and does not want to seem arrogant by claiming the compliment",
          "She genuinely cannot remember how she played that phrase",
          "She is angry at Daniel for asking",
          "She wants Mr. Osei to identify her publicly"
        ],
        correctAnswerIndex: 0,
        explanation:
          "Nadia's warm cheeks already tell us she knows it was her. Her answer is an act of social modesty — claiming the compliment openly would feel boastful, especially in front of the first-chair player who had just been implicitly compared unfavourably to her."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "Nadia wonders about the difference between herself and Daniel 'not in skill, which was obvious, but in something harder to name.' What quality is she most likely thinking about?",
        options: [
          "Stage confidence and the ability to perform under pressure",
          "The emotional authenticity and feeling she brings to playing — something beyond technical ability",
          "The number of hours each of them practises per week",
          "Her ability to read music more quickly than Daniel"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage establishes that Daniel's technical skill is superior, and the story's central event is Mr. Osei's recognition of feeling over technical precision. The unnamed quality Nadia senses in herself is emotional expressiveness — something that cannot be measured in practice hours."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What effect does Mr. Osei's comment have on Daniel during the rehearsal?",
        options: [
          "He stops playing and waits to speak to Nadia",
          "He immediately plays the next phrase with noticeably more care and attention",
          "He argues with Mr. Osei about the quality of the second violins",
          "He makes no change and continues playing as before"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage directly states that after Mr. Osei's comment, Nadia heard Daniel play the next phrase 'with noticeably more care' — the conductor's observation prompted an immediate, conscious effort from Daniel to play with greater attention."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme of this story?",
        options: [
          "Hard work and practice are the only paths to musical excellence",
          "Technical skill and emotional feeling are both necessary in music, and each can exist without the other",
          "Orchestra teachers should give more encouragement to students in lower chairs",
          "Competition between musicians is unhealthy and should be avoided"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story sets up a contrast between Daniel's technical mastery (built through intensive practice) and Nadia's emotional expressiveness. Mr. Osei's comment and Daniel's self-reflection suggest that skill without feeling is incomplete — just as feeling without skill has its limits. The theme is that both qualities matter, and neither alone is sufficient."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 4 – BEGINNER / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-nonfiction-002",
    title: "The Surprising History of Everyday Numbers",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Beginner",
    category: "Non-Fiction",
    estimatedReadingLevel: 5.7,
    wordCount: 218,
    content: `
The numbers we use every day — 0, 1, 2, 3 — are so familiar that it is easy to assume they have always existed. In fact, the number system most of the world relies on today has a surprisingly recent and well-travelled history.

The numerals we use are called Hindu-Arabic numerals. They were developed in India around the 6th century CE and later carried westward by Arab scholars and traders. Before their arrival in Europe, people across the continent were using Roman numerals — a system that had no symbol for zero and made even basic calculations extraordinarily cumbersome.

Zero is perhaps the most remarkable invention in this story. Many ancient civilisations managed without it, treating the absence of quantity as simply not worth symbolising. Indian mathematicians were the first to treat zero as a number in its own right — one that could be used in calculations, not just a placeholder. This seemingly simple idea transformed mathematics, making algebra, calculus, and eventually computer science possible.

The Hindu-Arabic numerals reached Europe gradually through the medieval period, introduced partly through the work of the Italian mathematician Leonardo of Pisa — better known today as Fibonacci. By the 15th century, they had largely replaced Roman numerals in commerce and science.

Next time you write a date, calculate a price, or type a password, you are using a system assembled across centuries and continents — a quiet collaboration between cultures that most people never think about.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Sequence",
        question: "In what order did Hindu-Arabic numerals travel to Europe, according to the passage?",
        options: [
          "They were invented in Europe and later spread to India and Arabia",
          "They were developed in India, carried westward by Arab scholars and traders, and eventually reached Europe through the medieval period",
          "Fibonacci invented them in Italy after studying Roman numerals",
          "They were developed simultaneously in India and the Arab world"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage traces a clear geographical journey: the numerals originated in India around the 6th century CE, were carried westward by Arab scholars and traders, and arrived in Europe gradually through the medieval period — a sequence the passage follows in order."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "According to the passage, what made the Indian concept of zero so mathematically significant?",
        options: [
          "It allowed people to count beyond the number nine for the first time",
          "It replaced Roman numerals in commercial transactions across Europe",
          "Treating zero as a number in its own right — usable in calculations — made advanced mathematics like algebra and calculus possible",
          "It gave mathematicians a way to represent very large numbers more efficiently"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage explains that the revolutionary step was treating zero not merely as an absence or placeholder, but as a number that could be used in calculations. This conceptual shift opened the door to the advanced mathematics that underpins modern science and technology."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'cumbersome' mean as used in the passage?",
        options: [
          "Elegant and efficient",
          "Difficult to use and awkward",
          "Historically significant",
          "Based on letters rather than symbols"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Cumbersome means slow, unwieldy, and difficult to use effectively. The passage uses it to describe Roman numerals — a system that, without a zero and with its letter-based notation, made even basic calculations very awkward compared to the Hindu-Arabic system."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "Why does the passage end by telling readers to think about the origins of the numbers they use every day?",
        options: [
          "To remind readers that mathematics is a difficult subject with a long history",
          "To suggest that we should give credit to Indian and Arab mathematicians more often",
          "To make the point that something taken for granted as ordinary is actually the product of centuries of cross-cultural intellectual work",
          "To encourage readers to learn more about Fibonacci's contributions to mathematics"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The closing line — 'a quiet collaboration between cultures that most people never think about' — is designed to shift the reader's perspective. The passage wants us to see that what feels entirely ordinary (our number system) is actually a remarkable historical and cultural achievement that spans centuries and continents."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "Who is Leonardo of Pisa, and what role did he play in the story of Hindu-Arabic numerals?",
        options: [
          "He was an Indian mathematician who invented the concept of zero",
          "He was an Arab trader who carried numerals from India to the Arab world",
          "He was an Italian mathematician, better known as Fibonacci, who helped introduce Hindu-Arabic numerals to Europe",
          "He was a Roman scholar who adapted Hindu-Arabic numerals for use with Roman numerals"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage directly identifies Leonardo of Pisa as 'better known today as Fibonacci' and describes his role in the gradual introduction of Hindu-Arabic numerals to Europe through his mathematical work during the medieval period."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 5 – BEGINNER / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-fiction-003",
    title: "The Argument",
    gradeBand: "Grade 6-7",
    ageBand: "11-13",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 5.6,
    wordCount: 225,
    content: `
The argument started over something small — whose turn it was to choose the film — and ended with Priya's best friend, Cassie, walking out of the flat and down the stairs without saying goodbye.

Priya sat on the sofa for a long time, replaying the conversation. She was certain she was right about the film. But she was also aware, somewhere beneath the certainty, that the argument had not really been about the film at all.

Cassie had been quiet for weeks. Not upset-quiet, just absent in a way that Priya hadn't known how to ask about. When Priya had finally made a joke about it — saying, in front of their other friends, "Cassie's been in her own world lately" — she had seen something shift in Cassie's expression. Not hurt, exactly. Something more like resignation.

She picked up her phone and put it down again three times before typing: "I shouldn't have said that in front of everyone."

Cassie replied after eleven minutes: "No. But the film thing was annoying too."

Priya laughed despite herself.

"I know," she typed. "Come back? I'll let you pick."

"I'm already in the lift," Cassie replied.

When the door opened, neither of them said anything about what had happened. They sat on the sofa, chose a film Priya would not have picked herself, and watched it to the end.

It was, Priya thought, a better film than she had expected.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does the final line — 'It was, Priya thought, a better film than she had expected' — suggest beyond its literal meaning?",
        options: [
          "Priya is surprised by Cassie's taste in films",
          "Letting go of the need to be right opened Priya up to something she might otherwise have rejected — in the film, and in the friendship",
          "The argument was entirely resolved and will never happen again",
          "Priya regrets not choosing the film herself"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The film becomes a metaphor for the friendship. By giving up control and letting Cassie choose, Priya receives something unexpectedly good. The line suggests that the act of yielding — of prioritising the relationship over winning — brought a reward she had not anticipated."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What does Cassie's expression of 'resignation' — rather than hurt — suggest about how she had been feeling?",
        options: [
          "She was not bothered by Priya's comment and had already moved on",
          "She had been quietly hurting for a while and had partly given up expecting Priya to notice",
          "She was angry at the other friends for laughing at Priya's joke",
          "She was relieved that Priya had finally addressed the distance between them"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Resignation implies a settled acceptance of something difficult — not fresh hurt, but a wearing-down. Cassie's expression suggests she has been feeling overlooked or unseen for long enough that she no longer expects things to be different. It is quieter and sadder than simple hurt."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "What was the deeper cause of the argument, beyond the question of who chose the film?",
        options: [
          "Priya and Cassie had fundamentally different tastes and interests",
          "Priya had publicly made light of Cassie's emotional withdrawal, making Cassie feel unseen and exposed",
          "Cassie had been spending time with other friends and felt guilty about it",
          "Priya had forgotten an important promise she had made to Cassie"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage makes clear that Cassie had been 'absent' for weeks, and that the wound came when Priya joked about this in front of others — turning something private into public entertainment. The film dispute was the surface; this breach of sensitivity was the real grievance."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "What did Priya type in her first message to Cassie after the argument?",
        options: [
          "She apologised for the whole argument and asked Cassie to come back",
          "She said she shouldn't have made the comment about Cassie in front of everyone",
          "She explained why she thought she was right about the film choice",
          "She asked Cassie what had been wrong with her for the past few weeks"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage quotes Priya's first message directly: 'I shouldn't have said that in front of everyone.' She addresses the deeper issue — the public comment — rather than the film dispute."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central idea this story explores?",
        options: [
          "Best friends will always argue over small things eventually",
          "Genuine apology means identifying the real hurt, not just the surface disagreement",
          "It is important to stand your ground in arguments, even with close friends",
          "Long friendships become boring without occasional conflict to refresh them"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Priya's key act is not apologising for the film argument — it is recognising and apologising for the real hurt: the public comment that exposed Cassie's vulnerability. This distinction — between the surface and the real grievance — is what resolves the conflict and is the story's central idea."
      }
    ]
  },

// ─────────────────────────────────────────────
// PASSAGES 6–10  |  INTERMEDIATE DIFFICULTY
// Age Band: 11–13  |  Grade Band: Grade 6-8
// ─────────────────────────────────────────────

  // ─────────────────────────────────────────────
  // PASSAGE 6 – INTERMEDIATE / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-fiction-004",
    title: "The Exhibit",
    gradeBand: "Grade 7-8",
    ageBand: "11-13",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 6.5,
    wordCount: 255,
    content: `
The photograph had been taken in 1943. It showed a boy of about twelve sitting on the steps of a building that no longer existed, eating what appeared to be an apple, squinting slightly into the sun. Underneath it, the caption read: "Unknown boy, Warsaw, date approximate."

Maya stood in front of it for longer than she had stood in front of anything else in the museum. The other students from her class had moved on to the next room, where she could hear their footsteps and the low murmur of the guide's voice. She didn't follow.

There was something about the photograph that she couldn't organise into thought. The boy was not posed. He had not known he was being photographed. He was just eating an apple in the sun, in 1943, in a city that was at that moment engaged in one of the most catastrophic events of the twentieth century — and his expression held none of it. Not fear, not defiance. Just the ordinary absorption of someone eating something.

She thought: he didn't know what was going to happen.

Then: neither did anyone, ever.

Then, more quietly: I don't know what is going to happen either.

A teacher appeared at her shoulder. "Maya? We're moving on."

She looked at the photograph one more time. The boy was still there, still eating his apple, still squinting into a sun that had set eighty years ago.

"Coming," she said, and meant something by it that she couldn't quite explain.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does the sequence of Maya's three thoughts — ending with 'I don't know what is going to happen either' — reveal about what the photograph has made her feel?",
        options: [
          "She feels frightened about the dangers of modern warfare",
          "She has connected the boy's unknowing ordinariness to her own life — recognising a shared human condition of living without knowledge of what comes next",
          "She feels guilty for standing apart from her classmates",
          "She is frustrated that the photograph has no name or date"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Maya's thoughts move from the specific (the boy didn't know) to the universal (no one ever knows) to the personal (she doesn't know either). The photograph has collapsed the distance between herself and a boy from eighty years ago by revealing something they share: the condition of living in an uncertain present."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the phrase 'the ordinary absorption of someone eating something' suggest about the boy's expression?",
        options: [
          "He appears sad and withdrawn from the world around him",
          "He looks completely caught up in the simple, unremarkable act of eating — present and unselfconscious",
          "He is deliberately ignoring the photographer",
          "He seems aware of the danger around him but is trying to appear calm"
        ],
        correctAnswerIndex: 1,
        explanation:
          "'Absorption' means being fully occupied by something to the exclusion of everything else. Combined with 'ordinary,' it describes a boy entirely caught up in the simple act of eating — not performing, not aware of history, just present in a moment of everyday life."
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "What does Maya's decision to remain in front of the photograph while her class moves on reveal about her?",
        options: [
          "She is disobedient and uninterested in the rest of the exhibit",
          "She is more deeply affected by what she encounters than she can immediately process, and she needs time to sit with difficult feelings",
          "She is showing off her sensitivity to impress her teacher",
          "She is looking for specific historical information that the caption does not provide"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Maya doesn't follow her class because something in the photograph has stopped her in a way she 'couldn't organise into thought.' Her lingering reflects a genuine, unperformed emotional response — she is someone who feels things deeply and doesn't move on before she is ready."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What is it about the photograph specifically that makes it so affecting for Maya?",
        options: [
          "It is the largest and most detailed photograph in the exhibition",
          "The boy's expression shows visible suffering that moves her deeply",
          "The boy was not posed and showed no awareness of the historical catastrophe surrounding him — his ordinary expression makes the contrast unbearable",
          "She recognises the building in the background from her own family's history"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage explicitly notes that the boy was unposed, unaware he was being photographed, and showed 'not fear, not defiance — just ordinary absorption.' It is precisely this ordinariness, set against the knowledge of what was happening in Warsaw in 1943, that creates the photograph's emotional power for Maya."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme of this story?",
        options: [
          "The importance of studying the history of the Second World War",
          "How photography preserves moments that would otherwise be lost to history",
          "Encounters with history can make us suddenly aware of our own fragile, unknowing position in time",
          "Museums are more powerful educational tools than textbooks"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The story uses a historical photograph as a trigger for Maya's realisation that she, like the boy, is living in a present whose future she cannot see. The theme is the strange, unsettling intimacy that opens up when the distance between past and present suddenly collapses."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 7 – INTERMEDIATE / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-nonfiction-003",
    title: "The Deep Ocean: Earth's Last Unexplored Frontier",
    gradeBand: "Grade 7-8",
    ageBand: "11-13",
    difficulty: "Intermediate",
    category: "Non-Fiction",
    estimatedReadingLevel: 6.8,
    wordCount: 248,
    content: `
Humans have mapped the surface of Mars more thoroughly than the floor of our own oceans. Despite covering more than seventy percent of the Earth's surface, the deep sea remains one of the least explored environments on the planet — and what little has been discovered there has repeatedly overturned scientific assumptions about where and how life can exist.

The deep ocean begins at around 200 metres below the surface, where sunlight can no longer penetrate. Below 1,000 metres lies the midnight zone — a region of total darkness, crushing pressure, and near-freezing temperatures. For most of scientific history, this environment was assumed to be essentially lifeless. The discovery of hydrothermal vents in 1977 changed that assumption permanently.

Hydrothermal vents are cracks in the ocean floor where superheated water, rich in minerals, is ejected from the Earth's interior. Around these vents, ecosystems thrive in conditions once thought incompatible with life: no sunlight, extreme heat, and water saturated with chemicals toxic to most organisms. The creatures that live here — tube worms several metres long, ghostly white crabs, eyeless shrimp — do not depend on photosynthesis. Instead, their food chains are built on chemosynthesis: bacteria that convert chemicals from the vents into energy.

This discovery has reshaped thinking far beyond marine biology. If complex life can exist without sunlight in Earth's most hostile environments, the same may be true on other worlds — including Jupiter's moon Europa, which is believed to have a liquid ocean beneath its frozen surface.

The deep sea, it turns out, does not just tell us about Earth. It tells us what life might look like elsewhere.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central argument of this passage?",
        options: [
          "The deep ocean is too dangerous and expensive for humans to explore effectively",
          "Deep-sea discoveries, particularly around hydrothermal vents, have transformed our understanding of life on Earth and its potential existence elsewhere in the universe",
          "Marine biology is the most important scientific field of the 21st century",
          "Hydrothermal vents are the source of most of Earth's mineral resources"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage builds from the unexplored nature of the deep ocean through the discovery of hydrothermal vents to the implication for the search for extraterrestrial life. Every paragraph supports the central argument: deep-sea discoveries have fundamentally expanded what we thought possible about life."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "Why did the discovery of hydrothermal vent ecosystems in 1977 matter beyond marine biology?",
        options: [
          "It provided a new source of minerals that could be harvested for industrial use",
          "It proved that the deep ocean contains more biodiversity than tropical rainforests",
          "It demonstrated that life can exist without sunlight, suggesting life might be possible on other worlds with subsurface oceans",
          "It showed that Earth's oceans were much older than scientists had previously believed"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage explicitly connects the vent discovery to astrobiology: if life can thrive without sunlight in extreme conditions on Earth, similar conditions on moons like Europa could potentially support life. The discovery broke the assumption that sunlight was a prerequisite for complex life."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What is 'chemosynthesis,' as explained in the passage?",
        options: [
          "A process by which deep-sea fish produce their own light in the darkness",
          "The conversion of sunlight into energy by bacteria in the deep ocean",
          "A process by which bacteria convert chemicals from hydrothermal vents into energy, forming the base of deep-sea food chains",
          "The chemical reaction that produces superheated water in hydrothermal vents"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage defines chemosynthesis directly: it is the process used by bacteria around hydrothermal vents to convert chemicals into energy — analogous to photosynthesis, but using chemical energy rather than sunlight. These bacteria form the foundation of deep-sea food chains."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "Why does the passage open with the comparison that humans have mapped Mars more thoroughly than our own ocean floor?",
        options: [
          "To argue that space exploration receives too much funding compared to ocean research",
          "To suggest that astronomers are more skilled than marine biologists",
          "To immediately establish how surprisingly and counterintuitively unknown the deep ocean is, despite being on our own planet",
          "To introduce the connection between ocean research and the search for life on other planets"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The Mars comparison is a rhetorical device designed to shock the reader into recognising something unexpected: a distant planet is better known to us than a vast region of our own world. It establishes the central premise — the deep ocean is remarkably, almost absurdly, unexplored."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "Which moon is mentioned as a potential candidate for extraterrestrial life, and why?",
        options: [
          "Saturn's moon Titan, because it has an atmosphere similar to early Earth",
          "Jupiter's moon Europa, because it is believed to have a liquid ocean beneath its frozen surface",
          "Neptune's moon Triton, because it contains hydrothermal vents similar to those on Earth",
          "Mars's moon Phobos, because it shows evidence of ancient water activity"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage directly names Europa, a moon of Jupiter, and gives the reason: it is believed to have a liquid ocean beneath its frozen surface — conditions that, given what we now know about hydrothermal vent life, could potentially support living organisms."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 8 – INTERMEDIATE / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-fiction-005",
    title: "What We Keep",
    gradeBand: "Grade 7-8",
    ageBand: "11-13",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 6.6,
    wordCount: 260,
    content: `
When Grandmother died, she left behind forty-three years of diaries. They filled an entire shelf in the spare bedroom — slim, identical notebooks, each one labelled in her neat handwriting with the year on the spine.

Nobody in the family had known about them. That was the first surprise. The second was that she had asked, in her will, that they not be read — only kept.

Ellie's mother thought this was eccentric. Her uncle said it was a waste. Ellie, who was twelve, thought she understood.

"She wanted to be known," Ellie said at the kitchen table one evening, "but not looked at."

Her mother frowned. "What's the difference?"

Ellie thought about it. She thought about her own diary — the one she kept not because anyone would ever read it, but because writing things down made them more real. Made her more real. The diary was not a message to anyone. It was evidence that she existed, that things had happened to her, that she had thought and felt and noticed.

"Looking is something other people do to you," she said finally. "Being known is something you do for yourself."

Her mother was quiet for a moment. Then she said, quietly: "I didn't know she kept diaries."

"That's the point," said Ellie.

The notebooks stayed on the shelf, unread. Every few months, Ellie would go and look at the row of spines — the decades lined up in her grandmother's handwriting — and feel something that was not quite grief and not quite comfort, but somewhere in between.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Vocabulary",
        question: "Ellie distinguishes between being 'known' and being 'looked at.' What does she mean by this distinction?",
        options: [
          "Being known means being famous, while being looked at is just physical observation",
          "Being known is a private act of self-definition through writing; being looked at is exposure to another person's interpretation and judgement",
          "She means that her grandmother was shy and disliked being photographed",
          "She means that diaries are more personal than photographs"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Ellie explains that writing in a diary makes things — and oneself — more real, but it is not a message to others. 'Being known' is an internal act of self-witnessing. 'Being looked at' involves submitting to another's gaze and interpretation. Her grandmother wanted the former without the latter — hence the instruction to keep but not read the diaries."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "Why does Ellie's mother say 'I didn't know she kept diaries' in a quiet voice?",
        options: [
          "She is annoyed that her mother kept secrets from the family",
          "She is realising, perhaps for the first time, how much of her mother's inner life she never had access to",
          "She is relieved that she will not have to read forty-three years of notebooks",
          "She is confused by Ellie's explanation of the difference between being known and being looked at"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The quietness of her mother's response — and the fact that Ellie replies 'That's the point' — suggests her mother is sitting with the realisation of how much of her own mother's interior life she never knew. It is a moment of grief for the unknowable."
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "What does Ellie's own diary-keeping reveal about why she understands her grandmother's wish?",
        options: [
          "She understands because she also wants to hide things from her family",
          "She keeps a diary for the same reason her grandmother did — not as a message to others, but as a private act of making herself real to herself",
          "She understands because she has already read some of her grandmother's diaries",
          "She keeps a diary because her grandmother gave her one as a gift"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage shows that Ellie keeps her diary not as communication but as evidence of her own existence — 'that things had happened to her, that she had thought and felt and noticed.' This mirrors what she understands about her grandmother's diaries, giving her an empathy the rest of the family lacks."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What effect does looking at the shelf of notebooks have on Ellie in the months after her grandmother's death?",
        options: [
          "It makes her feel angry that the diaries can never be read",
          "It produces a feeling that is neither purely grief nor comfort — a complex, in-between emotion",
          "It motivates her to start writing her own diary more regularly",
          "It makes her feel close to her grandmother in a way she did not feel when she was alive"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage describes Ellie's recurring feeling when looking at the diaries as 'not quite grief and not quite comfort, but somewhere in between' — a carefully described emotional complexity that reflects the strangeness of being near something intimate and yet permanently inaccessible."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central idea this story explores?",
        options: [
          "The importance of leaving clear instructions in a will to avoid family conflict",
          "Writing can be a private act of self-definition that does not require — and may even be damaged by — the presence of a reader",
          "Keeping secrets from family members causes pain after a person's death",
          "Twelve-year-olds often understand emotional situations more clearly than adults"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story's central idea is carried in Ellie's distinction between being known and being looked at. The grandmother's diaries, and Ellie's own, exist not to communicate but to make the self real to itself. The story argues that writing can serve this private, self-sufficient purpose — and that this is not eccentric, but deeply human."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 9 – INTERMEDIATE / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-nonfiction-004",
    title: "Propaganda: How Governments Shape What People Believe",
    gradeBand: "Grade 7-8",
    ageBand: "11-13",
    difficulty: "Intermediate",
    category: "Non-Fiction",
    estimatedReadingLevel: 6.9,
    wordCount: 252,
    content: `
Propaganda is one of the most powerful tools ever developed for shaping public opinion — and one of the most misunderstood. Many people associate the word exclusively with dictatorships and wartime posters, as though it were a relic of the past. In fact, the techniques of propaganda are older than modern politics and more present in contemporary life than most people recognise.

At its core, propaganda is communication designed not to inform but to persuade — and specifically, to persuade by bypassing critical thinking rather than engaging it. Where a balanced argument presents evidence and invites the audience to draw conclusions, propaganda presents a pre-selected version of reality designed to produce a specific emotional response: fear, pride, hatred, loyalty.

The tools are consistent across centuries and cultures. Repetition — saying something often enough that it begins to feel true — is perhaps the most fundamental. Dehumanisation, which reduces opponents to animals or diseases, has been used to prepare populations to accept violence against groups they might otherwise identify with. Appeals to a glorious past or a threatened future create urgency and bypass the slower processes of rational evaluation.

What makes propaganda particularly difficult to resist is that it rarely announces itself. It tends to work through images, slogans, and stories — forms that feel natural and emotionally immediate rather than argumentative. The emotional pathways it activates are faster and stronger than the analytical ones.

Recognising propaganda is not primarily a political skill — it is a cognitive one. The best protection against it is not a particular set of beliefs, but the habit of asking: what is this trying to make me feel, and why?
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central argument this passage makes about propaganda?",
        options: [
          "Propaganda was a tool of the past and is no longer relevant in democratic societies",
          "Propaganda is a persistent and sophisticated form of communication that works by bypassing rational thinking, and awareness of its techniques is the best defence against it",
          "Governments that use propaganda should be held legally accountable by international courts",
          "Social media has made propaganda more dangerous than at any other point in history"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage argues that propaganda is not a historical relic but an ever-present force, that it works specifically by bypassing critical thinking through emotional pathways, and that the best defence is cognitive awareness — the habit of questioning what a message is designed to make you feel."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "According to the passage, why is propaganda particularly difficult to resist?",
        options: [
          "Because it is produced by experts with large budgets and sophisticated technology",
          "Because it operates through emotionally immediate forms — images, slogans, stories — that activate emotional pathways faster than analytical ones",
          "Because most people are not educated enough to identify false information",
          "Because governments make it illegal to criticise official messages"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage identifies the mechanism of propaganda's power: it uses forms that feel natural and emotionally immediate, activating emotional responses that are faster and stronger than analytical thinking. It works before the critical mind has time to engage."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does 'dehumanisation' mean as described in this passage?",
        options: [
          "The removal of human rights from a particular group by a government",
          "The process of making opponents seem less than human — like animals or diseases — in order to make violence against them more acceptable",
          "A propaganda technique that emphasises individual suffering to provoke sympathy",
          "The use of machines and technology to replace human decision-making in government"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage defines dehumanisation as a propaganda technique that 'reduces opponents to animals or diseases' — making it psychologically easier for a population to accept violence against a group they might otherwise identify with as fellow human beings."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "Why does the passage say that the best protection against propaganda is 'not a particular set of beliefs, but the habit of asking: what is this trying to make me feel, and why'?",
        options: [
          "Because people with strong political beliefs are more likely to create propaganda themselves",
          "Because propaganda can target people of any political persuasion — the defence is a questioning habit of mind, not correct opinions",
          "Because emotional responses are always unreliable and should be ignored",
          "Because asking questions slows down the spread of information on social media"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage implies that propaganda can be crafted to target any ideological group — no set of beliefs is inherently immune. The protection is therefore not ideological alignment but a cognitive habit: interrogating the emotional intent of any persuasive communication, regardless of its political direction."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "According to the passage, what is the most fundamental technique of propaganda?",
        options: [
          "Dehumanisation of political opponents",
          "Appeals to a glorious national past",
          "Repetition — saying something often enough that it begins to feel true",
          "Using images and slogans rather than reasoned argument"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage explicitly identifies repetition as 'perhaps the most fundamental' propaganda technique, explaining that saying something often enough eventually gives it the feeling of truth regardless of its actual accuracy."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 10 – INTERMEDIATE / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-fiction-006",
    title: "The Rules of the Game",
    gradeBand: "Grade 7-8",
    ageBand: "11-13",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 6.7,
    wordCount: 258,
    content: `
The chess club met every Wednesday after school in Room 14. There were eleven members, and then, one Wednesday in October, there were twelve: a new girl called Hana who sat down at the board nearest the window, set up the pieces without being shown how, and beat the club's best player in twenty-two moves.

Nobody said very much. The best player — a boy named Tom who had been regional champion two years running — looked at the board for a long time after the game ended, as though checking for an error that wasn't there.

"Again?" said Hana.

Tom played her again. She won in nineteen moves.

The teacher who supervised the club, Mr. Bakshi, watched from the doorway with his arms folded. He had run the chess club for six years and seen students of all abilities come through it. What struck him about Hana was not her skill — though it was remarkable — but the quality of her attention. Most strong players, in his experience, played their opponent. Hana seemed to play the game itself, as though the person sitting across from her were beside the point.

After the second game, Tom set the pieces up again without being asked.

"You're doing something with the knights in the opening," he said. "I can't see what it is."

"I know," said Hana. "That's the point."

She said it without arrogance. She said it the way someone states a fact about weather.

Tom nodded slowly. Mr. Bakshi unfolded his arms.

Twelve members, he thought. That'll do.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Character Analysis",
        question: "Mr. Bakshi observes that Hana seems to 'play the game itself' rather than her opponent. What does this reveal about her approach?",
        options: [
          "She is antisocial and refuses to engage with the people she plays against",
          "She focuses on the abstract logic and patterns of chess rather than being distracted or influenced by her opponent's personality or reactions",
          "She is not interested in winning and simply enjoys moving the pieces",
          "She has memorised a fixed set of moves that she uses regardless of what her opponent does"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Playing 'the game itself' rather than 'the opponent' suggests Hana is focused on the pure logic of chess — patterns, structure, possibility — rather than being drawn into psychological competition with the individual across from her. This is a mark of exceptional conceptual thinking."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "What does Tom's act of setting up the pieces again after losing twice — without being asked — suggest about his character?",
        options: [
          "He is stubborn and cannot accept defeat gracefully",
          "He is competitive in a way that prevents him from appreciating Hana's skill",
          "His response to being beaten is to study rather than withdraw — he is driven by understanding, not just winning",
          "He hopes that by playing again he can embarrass Hana in front of the other club members"
        ],
        correctAnswerIndex: 2,
        explanation:
          "Rather than leaving or making excuses, Tom immediately resets the board and begins trying to analyse what he cannot yet see. His question about the knights shows intellectual curiosity and a desire to learn — these are the qualities that made him regional champion, and they persist even in defeat."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "The passage says Hana stated her advantage 'without arrogance' — 'the way someone states a fact about weather.' What does this simile suggest about her manner?",
        options: [
          "She is cold and unfriendly toward the other players",
          "She is genuinely indifferent to the social effects of what she says — she is simply being accurate, without any intention to impress or intimidate",
          "She is pretending not to care about winning in order to seem modest",
          "She is bored by chess and only plays to pass the time"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Stating something 'the way someone states a fact about weather' means doing so matter-of-factly — without emotional investment in how it lands. Hana is not boasting; she is simply accurate. The simile marks her as someone unusually free from the social performance that surrounds competitive activities."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What effect does Hana's arrival have on the dynamic of the chess club?",
        options: [
          "It creates conflict and resentment among the existing members",
          "It immediately establishes a new benchmark and, paradoxically, re-energises Tom's engagement with chess rather than diminishing it",
          "It causes several members to leave because they feel outclassed",
          "It prompts Mr. Bakshi to restructure the club around competitive rankings"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Rather than being demoralised, Tom resets the board and begins analysing. Mr. Bakshi's quiet satisfaction — 'Twelve members. That'll do' — signals that Hana's arrival has added something valuable. The effect is energising rather than destructive."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme this story explores?",
        options: [
          "The competitive nature of school chess clubs and the pressure to win",
          "How genuine excellence, encountered with the right attitude, can inspire rather than threaten those around it",
          "The social difficulties faced by new students when they join established groups",
          "Why chess is an effective tool for developing intelligence in young people"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story carefully shows that Tom's and Mr. Bakshi's responses to Hana are not defensive or resentful but curious and appreciative. The theme is that real excellence — offered without performance and met with genuine openness — elevates rather than diminishes those who encounter it."
      }
    ]
  },

// ─────────────────────────────────────────────
// PASSAGES 11–15  |  ADVANCED DIFFICULTY
// Age Band: 11–13  |  Grade Band: Grade 7-9
// ─────────────────────────────────────────────

  // ─────────────────────────────────────────────
  // PASSAGE 11 – ADVANCED / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-fiction-007",
    title: "The Cartographer of Silences",
    gradeBand: "Grade 7-9",
    ageBand: "11-13",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 7.5,
    wordCount: 295,
    content: `
My father lost his voice when I was nine — not to illness, but to a choice. He had been a lecturer in political science at the university, and one morning he delivered a lecture that the administration considered inappropriate. Rather than retract it, he stopped speaking altogether. Not selectively, not with exceptions for family. Altogether.

At first my mother tried to treat it as a phase, the way adults treat inconvenient things as phases. She set a place for conversation at dinner that remained, every evening, decoratively empty. My brother found it funny for about two weeks, then found it frightening, then stopped thinking about it, the way twelve-year-olds sometimes mercifully can.

I was the one who stayed interested.

My father communicated through notes, through gesture, through the arrangement of objects on his desk in configurations I slowly learned to read. A dictionary placed open to a particular page. A newspaper folded so that one headline was visible. A cup of tea left cooling beside my homework — his way, I came to understand, of saying: this matters, keep going.

What I learned, over the years of his silence, was that language is only one system among many for the transmission of meaning — and not always the most precise. My father's silences had weight and texture. Some were warm. Some were a form of argument. His refusal to speak was itself a statement, more durable and more legible than anything the administration could have asked him to retract.

By the time I was seventeen, I had begun to understand something that his colleagues — brilliant, voluble men and women — had not: that the most carefully considered position is sometimes best expressed by the thing you will not say.

He taught me that. In the years of his silence, he was the most articulate person I knew.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does the narrator mean by describing their father as 'the most articulate person I knew' despite his total silence?",
        options: [
          "The father eventually began speaking again and became a celebrated public speaker",
          "The father's silence was itself a highly expressive, deliberately communicated position — more precise and durable than verbal language",
          "The narrator is being ironic and actually means their father became impossible to understand",
          "The father communicated so effectively through writing that he no longer needed speech"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Articulate normally means able to express ideas clearly in words. The narrator uses it deliberately and paradoxically to describe a man who refused to speak, because his silence was itself a carefully structured, highly communicative act. The father's refusal to retract his lecture — expressed through sustained silence — said more than any spoken recantation or defence could have."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "The narrator describes three different responses to the father's silence: the mother's, the brother's, and their own. What do these contrasting responses reveal about the narrator?",
        options: [
          "The narrator was more obedient than their siblings and therefore closer to their father",
          "The narrator's sustained curiosity sets them apart as someone who does not look away from difficulty and who finds meaning where others find inconvenience or fear",
          "The narrator was too young to understand what was happening and so was not troubled by it",
          "The narrator found the silence easier than the others because they spent less time at home"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The mother managed the silence socially (treating it as a phase); the brother cycled through amusement, fear, and forgetting. The narrator 'stayed interested' — an active, searching response. This distinguishes the narrator as someone driven to understand what others find uncomfortable or inconvenient."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'voluble' mean as used in the phrase 'his colleagues — brilliant, voluble men and women'?",
        options: [
          "Highly respected and academically distinguished",
          "Speaking a great deal; tending to use many words",
          "Politically cautious and reluctant to share opinions",
          "Loyal to institutional authority"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Voluble means talking fluently and at length — using many words readily. Its use here is pointed: the colleagues are described as brilliant and verbally prolific, yet they missed something the narrator — shaped by a father's silence — understood. The implication is that verbal fluency is not the same as depth of understanding."
      },
      {
        id: "q4",
        skill: "Main Idea",
        question: "What central idea does this passage explore through the father's silence?",
        options: [
          "Political censorship is a serious threat to academic freedom and must be resisted",
          "Silence, when chosen deliberately, can be a more powerful and precise form of communication than language",
          "Children are better able to cope with difficult family situations than adults expect",
          "Non-verbal communication systems like gesture and object arrangement are superior to spoken language"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage builds toward the father's silence as the most articulate statement available to him — more legible than anything that could be retracted or spoken. The narrator's conclusion, that 'the most carefully considered position is sometimes best expressed by the thing you will not say,' is the passage's central argument."
      },
      {
        id: "q5",
        skill: "Cause and Effect",
        question: "What long-term effect does living with his father's silence have on the narrator?",
        options: [
          "The narrator becomes resentful of the administration that caused their father's silence",
          "The narrator develops a nuanced understanding that language is one system among many for meaning, and that what is withheld can be as significant as what is said",
          "The narrator decides to become a political scientist like their father",
          "The narrator becomes unusually quiet and withdrawn as a result of growing up in a silent household"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The narrator explicitly states what they learned: 'language is only one system among many for the transmission of meaning — and not always the most precise.' The father's silence taught the narrator to read weight, texture, and implication — a sophisticated understanding of communication that shapes how they see the world."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 12 – ADVANCED / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-nonfiction-005",
    title: "The Ethics of Artificial Intelligence: Who Is Responsible When Machines Decide?",
    gradeBand: "Grade 7-9",
    ageBand: "11-13",
    difficulty: "Advanced",
    category: "Non-Fiction",
    estimatedReadingLevel: 7.8,
    wordCount: 290,
    content: `
In 2018, a self-driving car operated by a technology company struck and killed a pedestrian in Arizona. It was the first recorded fatality caused by an autonomous vehicle. In the aftermath, an uncomfortable question emerged — not just for lawyers and engineers, but for anyone who uses or benefits from automated systems: when a machine makes a decision that harms someone, who is responsible?

This question is more difficult than it first appears, because the traditional frameworks we use to assign responsibility assume a human agent at the centre of every decision. A driver who runs a red light bears responsibility. A doctor who misdiagnoses a patient may be held accountable. But an algorithm that processes thousands of variables in a fraction of a second and arrives at a fatal outcome occupies no such clear position in our moral or legal frameworks.

The difficulty is compounded by the nature of machine learning itself. Modern AI systems are not programmed with explicit rules — they learn patterns from vast quantities of data and develop decision-making processes that their designers often cannot fully explain or predict. This creates what researchers call the "black box" problem: even the engineers who built the system may not be able to say precisely why it made a particular decision.

Several approaches to responsibility have been proposed. Some argue that liability should rest with the manufacturers, who profit from deployment. Others suggest that responsibility should be distributed across the entire chain of development — data providers, designers, deployers, and regulators. A third view holds that autonomous systems should not be deployed in high-stakes situations until the black box problem is solved and decisions can be fully audited.

What all these positions share is the recognition that unprecedented technology requires updated frameworks — that moral and legal tools designed for a world of human agents cannot simply be stretched to fit a world in which consequential decisions are increasingly made by machines.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central problem this passage identifies?",
        options: [
          "Self-driving cars are dangerous and should be banned from public roads",
          "The existing moral and legal frameworks for assigning responsibility were designed for human agents and do not adequately address decisions made by autonomous AI systems",
          "Technology companies should be required to pay higher taxes to compensate for the risks their products create",
          "The black box problem means that AI systems are fundamentally untrustworthy"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage consistently returns to the same core problem: our frameworks for responsibility assume a human decision-maker at the centre, but AI systems occupy no clear position in those frameworks. The Arizona fatality is used as a concrete entry point, but the real subject is the broader structural inadequacy of existing moral and legal tools."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What is the 'black box' problem as described in the passage?",
        options: [
          "The physical casing of AI computers that prevents engineers from accessing them for repairs",
          "The fact that AI systems learn from data in ways that produce decision-making processes even their designers cannot fully explain or predict",
          "The legal difficulty of holding technology companies accountable in court",
          "The problem of AI systems making decisions faster than humans can monitor them"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage defines the black box problem precisely: modern AI systems develop their decision-making through machine learning rather than explicit programming, producing outcomes that even their engineers may not be able to fully explain. The system is opaque — a 'black box' — from the inside as well as the outside."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "Why does the nature of machine learning make the question of AI responsibility harder to resolve, according to the passage?",
        options: [
          "Because machine learning systems operate too quickly for humans to intervene",
          "Because AI systems are programmed with too many rules for any individual designer to be held responsible",
          "Because AI systems develop their own decision patterns from data in ways that cannot always be explained — meaning no clear human decision underlies any specific outcome",
          "Because technology companies are legally protected from liability under current international law"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage explains that machine learning systems are not rule-based — they develop decision patterns from data. This means no human made the specific decision that caused harm; the system arrived at it through a process even its designers may not fully understand, making it extremely difficult to locate clear human responsibility."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "What does the passage imply by saying the question of AI responsibility is 'not just for lawyers and engineers, but for anyone who uses or benefits from automated systems'?",
        options: [
          "Ordinary citizens will soon be required to take legal responsibility for AI decisions",
          "The ethical questions raised by AI are shared by all of society, not just technical specialists — everyone who benefits from these systems has a stake in how they are governed",
          "Technology companies are trying to shift legal responsibility from themselves onto consumers",
          "Lawyers and engineers are currently doing a poor job of addressing the problem"
        ],
        correctAnswerIndex: 1,
        explanation:
          "By extending the question to 'anyone who uses or benefits,' the passage frames AI ethics as a collective societal responsibility rather than a specialist domain. This is a deliberate rhetorical move to make the reader feel personally implicated in the problem, not merely an observer of it."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "According to the passage, what do all three proposed approaches to AI responsibility have in common?",
        options: [
          "They all place primary liability on the technology companies that build and deploy AI systems",
          "They all require AI systems to be taken off the market until the black box problem is solved",
          "They all recognise that existing moral and legal frameworks must be updated to address decisions made by autonomous systems",
          "They all propose that a new international regulatory body should oversee the deployment of AI"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage concludes by stating explicitly what the three positions share: 'the recognition that unprecedented technology requires updated frameworks.' Whether liability rests with manufacturers, is distributed across a chain, or deployment is delayed, all three accept that current tools are inadequate."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 13 – ADVANCED / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-fiction-008",
    title: "After the Flood",
    gradeBand: "Grade 7-9",
    ageBand: "11-13",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 7.6,
    wordCount: 298,
    content: `
The town had flooded before — twice in living memory, once in local legend — but this time felt different. This time the water came without the weeks of warning rain that people had learned to read. It came in a single night, in March, when the river that everyone had been assured was manageable quietly exceeded every assurance.

By morning, the lower streets were under a metre of brown water. The community centre, which sat on slightly higher ground, became a shelter. Families arrived with what they had grabbed — documents, medicines, one elderly man with a birdcage containing a single agitated canary.

Ren was sixteen and had been volunteering at the centre since seven in the morning. She had expected chaos and found something more complicated: a kind of exhausted solidarity, in which people who had never spoken to each other were sharing phone chargers and folding blankets and sitting in silence that was not unfriendly. The ordinariness of it surprised her. Disaster, she was discovering, did not look like the films.

What she noticed most was the bureaucracy. Even here, even now, there were forms to fill out, eligibility criteria to establish, databases to cross-reference before assistance could be formally released. She watched a woman in her sixties — wet through, hands shaking — wait forty minutes to be processed before receiving a blanket and a cup of tea.

That evening, Ren wrote in her notebook: The system was built for normal times and normal people. In an emergency it becomes an obstacle. She crossed this out, then wrote it again. Some things needed to be written twice.

Three months later, she submitted a proposal to the regional council for a simplified emergency-response protocol. It was the first thing she had ever written that she intended someone to act on.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does Ren mean when she writes that 'the system was built for normal times and normal people'?",
        options: [
          "She believes the emergency services are understaffed and underfunded",
          "She is observing that bureaucratic systems designed for routine administration become harmful barriers in situations that require immediate human response",
          "She thinks that only extraordinary people should be allowed to design emergency protocols",
          "She is frustrated that the volunteers are not being paid for their work"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Ren is making a structural observation: systems built for normal operating conditions — with their forms, eligibility criteria, and databases — were not designed for the urgency and vulnerability of disaster. In an emergency, these same processes that protect fairness in ordinary life become obstacles to immediate need."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What does the final sentence — 'It was the first thing she had ever written that she intended someone to act on' — reveal about Ren's development through the story?",
        options: [
          "Ren had previously been a poor student who rarely completed written work",
          "The flood experience transformed Ren from an observer and note-taker into someone who takes purposeful action to change what she has witnessed",
          "Ren had previously only written fiction and had never considered non-fiction writing",
          "Ren is surprised to discover that she has a talent for writing formal proposals"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story tracks Ren's movement from observation (watching, noting, volunteering) to agency (writing a proposal she intends to have implemented). The final sentence marks this shift explicitly — it is the moment her understanding becomes action, representing a significant personal development."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "The passage describes 'an exhausted solidarity' among people at the shelter. What does this phrase suggest about the atmosphere?",
        options: [
          "People were too tired to help each other and had given up trying to cooperate",
          "A bond of mutual support existed among strangers, born not of energy or enthusiasm but of shared hardship and necessity",
          "Volunteers were becoming frustrated with the number of people they had to assist",
          "The community had been united by floods so many times that the experience had lost its emotional impact"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Solidarity means unity and mutual support among people facing a common difficulty. 'Exhausted' qualifies this — the solidarity is real but not energetic or performative. It is quiet, worn, and genuine: strangers sharing chargers and folding blankets not out of goodwill speeches but out of shared circumstance."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What specific experience at the shelter causes Ren to identify the problem she eventually addresses in her proposal?",
        options: [
          "Seeing that the community centre did not have enough food and water for all the displaced residents",
          "Watching a soaked, shaking woman wait forty minutes to be processed before receiving a blanket and tea",
          "Discovering that the flood warning systems had not been properly maintained",
          "Noticing that many families had not grabbed essential documents before evacuating"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage identifies this moment precisely: a wet, shaking woman waiting forty minutes through bureaucratic processing before receiving basic aid. This specific, human image of the system's failure crystallises Ren's observation and leads directly to her written proposal."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme this passage explores?",
        options: [
          "Climate change is making floods more frequent and more severe",
          "Witnessing injustice or system failure at close range can be the catalyst that transforms an observer into someone who acts to create change",
          "Emergency volunteers are more effective than professional services in disaster situations",
          "Young people are better equipped than adults to respond to community crises"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story follows Ren from passive observation through active noticing to purposeful action. The flood is the setting, but the theme is what happens when a person with a questioning mind encounters a system failure at close quarters — and chooses not merely to record it but to change it."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 14 – ADVANCED / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-nonfiction-006",
    title: "The Attention Economy: How Your Focus Became a Product",
    gradeBand: "Grade 7-9",
    ageBand: "11-13",
    difficulty: "Advanced",
    category: "Non-Fiction",
    estimatedReadingLevel: 7.9,
    wordCount: 285,
    content: `
In the early days of the internet, the dominant commercial model was straightforward: companies sold products, and the internet was a channel for reaching customers. Over the past two decades, this model has been largely displaced by something more subtle and more consequential: the attention economy.

The attention economy is built on a simple premise: that human attention, once captured, can be converted into revenue through advertising. The more time a user spends on a platform, the more advertisements they see, the more data they generate about their preferences, and the more precisely they can be targeted by future advertising. Attention, in this model, is not merely valuable — it is the product being sold.

What makes this model particularly significant is the incentive structure it creates. A platform whose revenue depends on maximising time-on-site is structurally motivated to design for compulsion rather than satisfaction. Features like infinite scroll, variable reward notifications, and algorithmically curated feeds are not neutral design choices — they are engineering decisions made with the explicit goal of making disengagement difficult. The techniques draw on behavioural psychology, exploiting the same reward mechanisms that make gambling addictive.

The consequences extend beyond individual screen time. When attention is a commercial resource, the content that captures it most effectively is not necessarily the most accurate or the most valuable — it is the most emotionally activating. Research consistently shows that content provoking outrage, fear, or anxiety generates more engagement than content that is calm, nuanced, or complex. Platforms optimised for engagement therefore tend to systematically amplify the most polarising voices and the most extreme positions.

Understanding the attention economy does not require abandoning technology. It requires recognising that when a platform is free, the transaction is not absent — it has simply been relocated. The currency is your focus, and it is being spent whether you are aware of it or not.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central argument this passage makes about the attention economy?",
        options: [
          "Social media companies are deliberately trying to harm their users and should be regulated",
          "Human attention has become a commercial resource, and the incentive structures this creates systematically prioritise compulsion and emotional activation over accuracy and nuance",
          "The internet was more useful and honest before advertising became its dominant revenue model",
          "Young people are the primary victims of the attention economy and need special legal protections"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage builds a systematic argument: attention is the product → platforms are incentivised to maximise time-on-site → this produces design for compulsion → compulsive engagement amplifies extreme and emotionally activating content. The central argument is about the structural consequences of this commercial model, not simply a moral condemnation of technology companies."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the passage mean by 'design for compulsion rather than satisfaction'?",
        options: [
          "Platforms make their interfaces ugly and frustrating so that users keep returning to try to improve their experience",
          "Platforms are engineered to make it psychologically difficult to stop using them, rather than to leave users genuinely fulfilled by the experience",
          "Platform designers are forced by commercial pressure to ignore user feedback",
          "Satisfaction is impossible to measure, so designers focus on usage time instead"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Compulsion means being driven to do something by a force difficult to resist, rather than by genuine desire or fulfilment. The passage argues that features like infinite scroll and variable reward notifications are designed to prevent disengagement — keeping users on the platform through psychological mechanisms rather than because the experience is genuinely rewarding."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "According to the passage, why do platforms optimised for engagement tend to amplify extreme and polarising content?",
        options: [
          "Because technology companies hold extreme political views and promote content that aligns with them",
          "Because users specifically seek out extreme content and platforms have no choice but to supply it",
          "Because content that provokes outrage, fear, or anxiety generates more engagement than calm or nuanced content — and engagement is what the platform's revenue model rewards",
          "Because advertising companies pay more to appear alongside controversial content"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage traces a direct causal chain: engagement metrics drive revenue → emotionally activating content generates more engagement than nuanced content → therefore platforms algorithmically reward and amplify the most emotionally extreme content, regardless of its accuracy or value."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "What does the final line — 'The currency is your focus, and it is being spent whether you are aware of it or not' — imply about the importance of understanding the attention economy?",
        options: [
          "That users should stop using all social media platforms immediately",
          "That awareness itself is a form of agency — understanding the transaction means you can make more conscious choices about how your attention is spent",
          "That technology companies have an obligation to refund users for the attention they have consumed",
          "That focus is a finite resource that can be permanently depleted by overuse"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The line implies that the transaction is happening regardless — awareness does not stop it, but it changes the user's relationship to it. The passage does not call for abandoning technology; it calls for recognition. Knowing that your attention is currency is the first step toward spending it deliberately rather than having it extracted unconsciously."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "According to the passage, which specific design features are mentioned as examples of engineering for compulsion?",
        options: [
          "Pop-up advertisements, sponsored content, and user data collection",
          "Infinite scroll, variable reward notifications, and algorithmically curated feeds",
          "Dark mode settings, autoplay video, and personalised recommendations",
          "Account verification systems, content warnings, and usage time limits"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage explicitly names three features as examples of compulsive design: infinite scroll, variable reward notifications, and algorithmically curated feeds — describing them as 'engineering decisions made with the explicit goal of making disengagement difficult.'"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 15 – ADVANCED / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g6-fiction-009",
    title: "The Concession",
    gradeBand: "Grade 7-9",
    ageBand: "11-13",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 7.7,
    wordCount: 300,
    content: `
The debate competition came down to two students from the same school: Mara, who had won the previous two years, and a boy in the year below her named Callum, who had qualified for the final for the first time.

The motion was: "This house believes that freedom of speech should have limits." Mara had been assigned to argue in favour of limits. Callum was arguing against.

Callum argued brilliantly. He was precise, calm, and structured in a way that Mara had not expected from someone younger, and his closing statement — that the moment we give any authority the power to define the boundary of acceptable speech, we have handed that authority a tool it will inevitably misuse — was one of the most coherent arguments she had heard in three years of competitive debating.

When the judges returned their decision, they awarded the victory to Mara.

She found Callum in the corridor afterwards, still holding his notes.

"Your closing statement was the best argument made today," she said.

He looked at her carefully. "You won, though."

"I know. That's different."

He thought about this. "Are you saying the better argument lost?"

"I'm saying debate competitions aren't always about the better argument. Sometimes they're about who constructs the better performance of certainty." She paused. "I've been doing this for three years. I know how to seem more sure than I am."

Callum was quiet for a moment. Then: "Do you think there should be limits on speech?"

Mara had not expected the question. She considered it honestly.

"I genuinely don't know," she said. "I argued for forty minutes that there should be. I'm still not sure."

Callum looked at his notes, then back at her. "That might be the most honest thing anyone's said to me today."

"Don't tell the judges," said Mara.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does Mara mean when she says debate competitions are 'about who constructs the better performance of certainty' rather than the better argument?",
        options: [
          "She is making excuses for winning unfairly",
          "She is suggesting that competitive debate rewards the convincing performance of confidence over genuine intellectual engagement with difficult questions",
          "She believes that certainty is always more persuasive than nuance in any form of communication",
          "She is advising Callum to appear more confident in future competitions"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Mara is making a sophisticated critique of competitive debating as a form. She has been assigned a position and argued it skillfully — but her skill is in performing conviction, not necessarily in holding it. She is distinguishing between rhetorical effectiveness and intellectual honesty, and implying that the competition rewarded the former."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What does Mara's admission — 'I genuinely don't know' — reveal about her character, particularly given that she has just won a debate arguing the opposite?",
        options: [
          "She is a dishonest person who argued for a position she knew was wrong",
          "She is willing to drop her public performance of certainty in private and engage honestly with genuine uncertainty — a mark of intellectual integrity",
          "She is trying to make Callum feel better about losing by suggesting her victory was undeserved",
          "She lacks conviction in her own views and changes her mind too easily"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Mara won by performing certainty. But in the corridor, with no audience and no judges, she admits genuine uncertainty. This reveals a person capable of separating her public competitive role from her private intellectual honesty — a kind of integrity that her ability to win arguments might otherwise conceal."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "Callum's closing argument warns that giving authority the power to define the limits of acceptable speech hands it 'a tool it will inevitably misuse.' What does 'inevitably' mean in this context, and why is it important to his argument?",
        options: [
          "It means 'possibly' — Callum is suggesting a risk that might or might not occur",
          "It means 'certainly, without exception' — Callum is arguing that misuse is not a risk but a guaranteed outcome, which makes the initial concession of power unjustifiable",
          "It means 'unfortunately' — Callum is acknowledging that misuse is regrettable but unavoidable",
          "It means 'quickly' — Callum is arguing that the misuse would happen very soon after the limits were imposed"
        ],
        correctAnswerIndex: 1,
        explanation:
          "'Inevitably' means it cannot be otherwise — it is certain to happen. This word is crucial to Callum's argument because it shifts the question from risk management (how do we prevent misuse?) to categorical rejection (since misuse is certain, the tool must never be created). The certainty of the word strengthens his position considerably."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What effect does Callum's unexpected question — 'Do you think there should be limits on speech?' — have on the conversation?",
        options: [
          "It irritates Mara, who feels she has already answered this question thoroughly in the debate",
          "It shifts the conversation from a discussion about debating technique to genuine, unscripted intellectual engagement with the actual question",
          "It causes Mara to reconsider her victory and offer to share the award with Callum",
          "It makes Callum seem like a poor loser who cannot accept the judges' decision"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Up to this point, Mara and Callum have been discussing the meta-question of what debates reward. Callum's question cuts through this and asks for her real view — and Mara's honest answer signals a shift from competitive performance to genuine dialogue. The question is what transforms the corridor exchange from a postmortem into an actual conversation."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme this story explores?",
        options: [
          "Competitive debating is a flawed format that should be replaced with open discussion",
          "The performance of certainty that competitive environments reward can be in tension with the intellectual honesty that genuine inquiry requires",
          "Younger and less experienced competitors often have better ideas than those who have been trained for longer",
          "Freedom of speech is a more complex issue than most people acknowledge"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story uses the debate competition as a lens for a broader question: what is the relationship between performing conviction and holding it? Mara wins by performing certainty about a position she is genuinely uncertain about. The corridor conversation — where certainty is abandoned and honesty takes its place — is the story's true resolution, and its theme is the tension between those two modes."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 1 – BEGINNER / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-fiction-001",
    title: "The Interview",
    gradeBand: "Grade 9-10",
    ageBand: "14-17",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 7.0,
    wordCount: 265,
    content: `
The job was at a bookshop. It was part-time, minimum wage, and involved mostly reshelving and operating a till that Noah had been warned was temperamental. He wanted it more than he had wanted anything in recent memory.

He had prepared for the interview the way he prepared for exams: index cards, rehearsed answers, a list of anticipated questions. He had ironed his shirt the night before and set two alarms. On the morning itself, he arrived twelve minutes early and stood outside on the pavement reading the titles in the window display until it was an acceptable time to go in.

The woman who interviewed him was called Janet. She was in her fifties and had reading glasses pushed up on her head and ink on her left hand. She looked at his CV for approximately four seconds, set it down, and said: "What's the last book you read that you didn't have to?"

Noah had not anticipated this question. His rehearsed answers — about reliability, time management, and his passion for the retail sector — became immediately useless.

He thought for a moment, then told her about a book he'd found at a car boot sale the previous summer. He couldn't remember the author. The cover was missing. He'd read it in three days sitting in the garden and hadn't been able to find out what it was called since.

Janet looked at him for a long moment.

"What was it about?" she asked.

He told her.

She said: "I think I know which one that is. Come in on Saturday at nine."

Noah went home and looked up the book. She had been right.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "Why does Janet's question — 'What's the last book you read that you didn't have to?' — immediately make Noah's rehearsed answers useless?",
        options: [
          "Because the question reveals that Janet does not care about professional qualifications",
          "Because it replaces a formal assessment of competence with a genuine test of whether Noah actually loves books — the only thing that matters in that particular job",
          "Because Noah had not read any books recently and had nothing to say",
          "Because the question was designed to trick applicants into revealing their weaknesses"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Janet's question cuts through the performance of a job interview and asks for something real — evidence of authentic engagement with books. A bookshop needs someone who genuinely loves reading, and no rehearsed answer about 'passion for the retail sector' can substitute for that. The question exposes the gap between Noah's prepared persona and his actual self."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What does Noah's pre-interview preparation — index cards, rehearsed answers, an ironed shirt, two alarms, arriving twelve minutes early — reveal about him?",
        options: [
          "He is anxious and lacks confidence in his natural abilities",
          "He is methodical, conscientious, and takes things he cares about seriously, even when the stakes seem modest",
          "He is trying to compensate for having no relevant experience",
          "He is performative and more concerned with appearances than substance"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The accumulation of preparation details — none of them excessive, all of them considered — paints a picture of someone who applies genuine care and effort to things that matter to him. A part-time bookshop job commands the same preparation as an exam. This is a character detail, not a sign of anxiety."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "What causes Noah to get the job, despite his rehearsed answers being rendered useless?",
        options: [
          "He impresses Janet with his knowledge of the bookshop's existing stock",
          "His genuine, unscripted account of a book he loved — including the telling detail that he still doesn't know its title — convinces Janet he is a real reader",
          "Janet recognises him from a previous interaction in the shop",
          "He demonstrates superior customer service skills compared to the other candidates"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Noah's answer is authentic precisely because it is imperfect — he can't remember the author, the cover is missing, he still doesn't know the title. These gaps make the story credible as a real experience rather than a constructed one. Janet is not testing his memory; she is testing whether he is genuinely someone who reads for love."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "The passage says the till was 'temperamental.' What does this suggest about it?",
        options: [
          "It was very old and valuable",
          "It was unreliable and prone to behaving unpredictably",
          "It required specialised training to operate",
          "It was recently installed and still being tested"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Temperamental, when applied to a machine, means it behaves inconsistently and unpredictably — working well sometimes and poorly at others, much like a person with a volatile temperament. The word is used here with gentle humour to suggest the till is a mild occupational hazard."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central idea this story explores?",
        options: [
          "Job interviews are an unreliable way to assess a candidate's true abilities",
          "Genuine enthusiasm and authentic experience are more compelling than polished preparation",
          "Bookshops are more interesting workplaces than other retail environments",
          "Young people should research their interviewers before attending an interview"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Noah's prepared answers — competent and conventional — are irrelevant to Janet. What secures him the job is an unpolished, genuine story about a book he loved, told because the question left him no choice but to be real. The story argues that authenticity, not performance, is what resonates — at least in the right context."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 2 – BEGINNER / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-nonfiction-001",
    title: "The Psychology of Procrastination",
    gradeBand: "Grade 9-10",
    ageBand: "14-17",
    difficulty: "Beginner",
    category: "Non-Fiction",
    estimatedReadingLevel: 7.2,
    wordCount: 255,
    content: `
Procrastination is one of the most universally experienced and least understood features of human behaviour. Most people who procrastinate describe it to themselves as laziness — a character flaw to be overcome with greater willpower. Research in psychology suggests this framing is not only inaccurate but actively counterproductive.

Procrastination is not primarily a time-management problem. It is an emotion-regulation problem. When we avoid a task, we are rarely avoiding the task itself — we are avoiding the emotional discomfort associated with it. This might be anxiety about failure, fear of judgement, uncertainty about where to begin, or a more diffuse sense of inadequacy that a particular task brings to the surface. Avoidance provides immediate emotional relief, which the brain registers as a reward — reinforcing the behaviour and making it more likely to recur.

This explains why classic anti-procrastination advice — "just start," "break it into steps," "make a schedule" — often fails. These strategies address the time dimension of procrastination without addressing its emotional engine. A person who avoids writing an essay because writing it makes them feel exposed and inadequate will not be meaningfully helped by a timetable.

What research does suggest is effective is developing self-compassion: the ability to acknowledge difficulty and respond to oneself with kindness rather than criticism. Studies have found that students who forgave themselves for procrastinating on an exam were less likely to procrastinate on the next one. Treating yourself harshly for avoiding something rarely makes you less likely to avoid it — it more commonly adds shame to the original discomfort, compounding the avoidance.

Understanding procrastination as an emotional response rather than a moral failing does not remove the need to do difficult things. It simply makes doing them more possible.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central argument this passage makes about procrastination?",
        options: [
          "Procrastination is a form of laziness that can be overcome with better time-management techniques",
          "Procrastination is an emotional response to discomfort, and addressing it requires self-compassion rather than harsher self-discipline",
          "Students procrastinate primarily because they are overwhelmed by excessive workloads",
          "The brain is biologically programmed to avoid difficult tasks and this cannot be changed"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage argues from the outset that procrastination is misunderstood as laziness and is better understood as emotion regulation. Its conclusion — that understanding procrastination as an emotional response rather than a moral failing makes doing difficult things 'more possible' — restates this central argument."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "Why does avoidance tend to reinforce procrastination rather than resolve it?",
        options: [
          "Because avoidance gives the avoided task more time to grow in difficulty",
          "Because avoiding a task produces immediate emotional relief, which the brain treats as a reward — making avoidance more likely to recur",
          "Because people who avoid tasks feel guilty and become less productive overall",
          "Because avoidance is a habit that becomes harder to break the longer it continues"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage explains the reinforcement loop precisely: avoidance reduces emotional discomfort → the brain registers this reduction as a reward → the rewarded behaviour is more likely to be repeated. This is not a moral failing but a neurological pattern."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Why does the passage say that standard anti-procrastination advice 'often fails'?",
        options: [
          "Because most people already know these strategies and have tried them without success",
          "Because the advice addresses the time dimension of procrastination while ignoring the emotional discomfort that actually drives the behaviour",
          "Because willpower is a limited resource that is depleted by the effort of following schedules",
          "Because the advice was developed for adults and does not transfer well to younger people"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage is explicit: strategies like schedules and step-breaking treat procrastination as a time-management problem, when it is actually an emotion-regulation problem. Until the emotional discomfort driving avoidance is addressed, structural solutions will have limited effect."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does 'self-compassion' mean in the context of this passage?",
        options: [
          "Excusing yourself from responsibilities by accepting your limitations",
          "The ability to acknowledge difficulty and respond to yourself with kindness rather than harsh self-criticism",
          "A meditative practice designed to reduce stress and improve focus",
          "The habit of rewarding yourself after completing difficult tasks"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage defines self-compassion directly: 'the ability to acknowledge difficulty and respond to oneself with kindness rather than criticism.' It is not permissiveness or excuse-making — the passage is clear that difficult things still need to be done. It is simply a more effective emotional stance from which to do them."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "What finding about students and procrastination does the passage cite as evidence for self-compassion's effectiveness?",
        options: [
          "Students who used detailed study schedules procrastinated less than those who did not",
          "Students who forgave themselves for procrastinating on one exam were less likely to procrastinate on the next",
          "Students who spoke to counsellors about procrastination showed significant improvements in their grades",
          "Students who broke tasks into small steps completed them more efficiently than those who did not"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage directly cites this specific finding: students who forgave themselves for procrastinating on an exam were less likely to procrastinate on the next one — used as concrete evidence that self-compassion is a more effective response than self-criticism."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 3 – BEGINNER / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-fiction-002",
    title: "The Gap Year",
    gradeBand: "Grade 9-10",
    ageBand: "14-17",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 7.1,
    wordCount: 268,
    content: `
Everyone in Lena's family had gone directly from school to university. It was not a rule that had ever been written down or discussed. It was simply what happened, in the same way that certain families always spent Christmas in a particular place or always voted for the same party. Lena had assumed, without examining the assumption, that she would do the same.

In the spring of her final year, she told her parents she wanted to take a year off first.

Her father asked what she would do with a year. Her mother asked whether she had thought this through. Both questions had the quality of concern that felt, to Lena, indistinguishable from doubt.

She had not thought it through. She had a vague idea of working, saving, and going somewhere far enough away that she would have to figure things out for herself. She could not have said precisely what it was she needed to figure out. She only knew that at seventeen she felt like a person who had been handed a script and asked to perform it, and that she wanted, before the next act began, to spend some time off-book.

She said: "I want to find out what I actually want."

Her mother said: "How will you know when you've found it?"

Lena didn't have an answer for that. She went away and thought about it for three days and came back and said: "I think when it feels like a choice rather than the next thing."

Her parents looked at each other for a long moment.

"Okay," said her father. "One year."

Lena felt something settle in her that she had not known was unsettled.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does Lena mean when she says she wants to 'spend some time off-book'?",
        options: [
          "She wants to spend more time reading before beginning university",
          "She wants to step outside the pre-written life trajectory she has been following and make decisions that are genuinely her own",
          "She wants to stop studying and focus on practical work experience instead",
          "She wants to avoid the academic pressure of her final year of school"
        ],
        correctAnswerIndex: 1,
        explanation:
          "'Off-book' is a theatrical term meaning performing without the script — from memory, spontaneously. Lena uses it as a metaphor: she feels her life has been scripted for her (school → university, without question), and she wants time outside that script to discover what she actually chooses, rather than what she has been handed."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What does Lena's answer — 'I think when it feels like a choice rather than the next thing' — reveal about what is troubling her?",
        options: [
          "She is afraid of making the wrong decision about her university course",
          "She is aware that she has been living by momentum and expectation rather than genuine agency, and she wants to experience making a real, self-directed choice",
          "She is dissatisfied with the university she has been accepted to",
          "She wants more time to research careers before committing to a degree"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The distinction between 'a choice' and 'the next thing' is the emotional core of the story. 'The next thing' implies automatic progression — doing what comes after what came before. A 'choice' implies agency and genuine decision-making. Lena is articulating a desire to experience her own life as authored by herself, not by inherited pattern."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "What causes Lena to question the assumption that she will go directly to university?",
        options: [
          "A friend who took a gap year tells her about the benefits",
          "She receives advice from a school counsellor suggesting she is not ready for university",
          "An internal sense of discomfort — feeling as though she is performing a script rather than living her own life — prompts her to pause",
          "She fails to receive an offer from her preferred university and needs to reconsider her plans"
        ],
        correctAnswerIndex: 2,
        explanation:
          "No external event triggers Lena's decision. It comes from an internal feeling — the sense of being handed a script, of life proceeding as a performance rather than a genuine unfolding. The cause is entirely psychological: an accumulating awareness of living by assumption rather than choice."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "The passage describes the family's expectation of going directly to university as something 'assumed without examining the assumption.' What does this phrase suggest?",
        options: [
          "The assumption had been deliberately hidden from Lena to avoid putting pressure on her",
          "The expectation had never been consciously questioned or evaluated — it operated as an unspoken, unexamined default",
          "The assumption was based on evidence that Lena had chosen to ignore",
          "Lena's parents had considered alternatives but decided university was the best path"
        ],
        correctAnswerIndex: 1,
        explanation:
          "An unexamined assumption is one that operates below the level of conscious thought — taken for granted as simply the way things are, rather than one option among several. The passage uses this phrase to show that Lena's trajectory has been shaped by invisible social inheritance rather than deliberate choice."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme this story explores?",
        options: [
          "The practical benefits and risks of taking a gap year before university",
          "The tension between inherited expectations and the individual's need to make genuinely self-authored choices",
          "How parents should support their children's decisions even when they disagree",
          "Why the transition from school to university is particularly difficult for young people"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story is not primarily about gap years or university — these are the surface. The theme is the distinction between living a life given to you by expectation and building one through genuine choice. Lena's final feeling of 'something settling that she had not known was unsettled' signals the emotional resolution of that tension."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 4 – BEGINNER / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-nonfiction-002",
    title: "What Is Civil Disobedience?",
    gradeBand: "Grade 9-10",
    ageBand: "14-17",
    difficulty: "Beginner",
    category: "Non-Fiction",
    estimatedReadingLevel: 7.3,
    wordCount: 258,
    content: `
Civil disobedience is the deliberate, nonviolent refusal to comply with a law or government directive, undertaken as a form of political protest. It is one of the oldest and most debated tools available to citizens in a democracy — and, historically, one of the most effective.

The concept was developed most influentially by the American writer Henry David Thoreau in his 1849 essay "Resistance to Civil Government," later renamed "Civil Disobedience." Thoreau argued that when a government enacts laws that are unjust, citizens not only have the right to disobey them — they have a moral obligation to do so. To comply with an unjust law, in Thoreau's view, was to make oneself complicit in the injustice.

This idea was taken up and transformed by Mahatma Gandhi in India and later by Martin Luther King Jr. in the United States, both of whom used organised, nonviolent resistance to challenge oppressive laws and systems. Their campaigns demonstrated that civil disobedience could be a strategic as well as a moral tool: by openly breaking laws and accepting the legal consequences, protesters exposed the injustice of those laws and generated moral pressure on governments to change them.

The ethics of civil disobedience remain genuinely contested. Supporters argue that it is sometimes the only effective recourse available to those whose voices are systematically excluded from democratic processes. Critics argue that allowing individuals to selectively disobey laws they consider unjust undermines the rule of law on which democratic societies depend.

Both concerns are serious. The history of civil disobedience suggests that where it is used — and how — matters as much as whether it is used at all.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "According to the passage, what was Thoreau's argument about citizens and unjust laws?",
        options: [
          "Citizens should work within democratic systems to change unjust laws rather than breaking them",
          "Citizens not only have the right to disobey unjust laws but a moral obligation to do so",
          "Unjust laws should be disobeyed only when all other legal options have been exhausted",
          "Citizens in a democracy are never truly obligated to disobey laws, even unjust ones"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage directly states Thoreau's position: citizens have not merely the right but the moral obligation to disobey unjust laws, and complying with injustice makes one complicit in it. This is his central argument as described in the passage."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "According to the passage, why was openly breaking laws and accepting the legal consequences an effective strategy for civil disobedience movements?",
        options: [
          "It prevented governments from using violence against protesters without international condemnation",
          "It created media attention that forced governments to respond publicly",
          "It exposed the injustice of the laws being broken and generated moral pressure on governments to change them",
          "It demonstrated the organisational strength of the protest movements"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage identifies the strategic logic: by accepting legal consequences for breaking unjust laws, protesters made the injustice of those laws visible and created moral pressure for change. The acceptance of punishment was not a concession — it was part of the method."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does it mean to be 'complicit' in something, as used in the passage?",
        options: [
          "To actively and openly support something you know to be wrong",
          "To be involved in or partly responsible for something harmful, even through passive participation or compliance",
          "To formally agree with a government directive by signing a legal document",
          "To benefit financially from an unjust system"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Complicit means sharing in the responsibility for something wrong, even if your participation is passive. Thoreau's argument is that by simply complying with an unjust law — doing nothing — you become part of the injustice. Complicity does not require active endorsement; it can arise from passive acceptance."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "Why does the passage conclude that 'where civil disobedience is used — and how — matters as much as whether it is used at all'?",
        options: [
          "Because civil disobedience is only effective in democratic countries with free media",
          "Because the ethical and strategic legitimacy of civil disobedience depends heavily on context, method, and the nature of the injustice being challenged",
          "Because different cultures have different tolerances for political protest",
          "Because governments are less likely to respond to civil disobedience in certain political climates"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage presents two serious, competing concerns — civil disobedience as necessary recourse and civil disobedience as threat to rule of law. Its conclusion does not resolve the tension but suggests that judgements about legitimacy must be contextual: the specific injustice, the method used, and the availability of alternative recourse all shape whether a particular act of disobedience is ethically defensible."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central purpose of this passage?",
        options: [
          "To argue that civil disobedience is always justified when citizens disagree with a law",
          "To provide an objective overview of civil disobedience — its origins, historical use, and the genuine ethical debate surrounding it",
          "To celebrate the achievements of Gandhi and Martin Luther King Jr. as political leaders",
          "To warn that civil disobedience poses a serious threat to democratic systems"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage is balanced and informational rather than polemical. It explains the concept, traces its intellectual origins, gives historical examples, and presents both sides of the ethical debate without endorsing either. Its purpose is to equip the reader with a clear, nuanced understanding of a complex political concept."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 5 – BEGINNER / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-fiction-003",
    title: "Before the Match",
    gradeBand: "Grade 9-10",
    ageBand: "14-17",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 7.0,
    wordCount: 262,
    content: `
In the changing room before the county final, nobody spoke. This was unusual. Normally there was noise — boots on concrete, someone's music, the coach talking through the warm-up. Tonight the only sound was the rain against the high window and the distant murmur of the crowd beginning to fill the stands.

Isak sat on the bench with his boots already tied and looked at the floor. He had been playing football since he was six. He had been in county finals before. He had experienced the particular quality of pre-match silence, when the mind either steadies itself or begins to spiral. He had experienced both.

Tonight it was steadying.

He thought about the last time they had played this opponent — six weeks ago, an ordinary league match that they had lost 2-1. He thought about the goal he had missed in the sixty-third minute: an open net, and he had scuffed the shot wide and stood there for a moment with his hands on his head while the opposition goalkeeper retrieved the ball with something that looked like sympathy.

He thought: that miss is in the past. It is not here tonight.

The coach came in. He looked around the room, seemed to register the silence, and said only: "You know what to do."

Nobody moved for a moment. Then Isak stood up. He was not the captain — the captain was a girl named Priya who pulled on her armband now without ceremony — but he stood up first.

One by one, the rest of the team rose around him.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What is significant about the fact that Isak stands up first, despite not being the captain?",
        options: [
          "It suggests he is challenging Priya's authority as captain",
          "It shows he is in a hurry to begin the warm-up",
          "It signals that his internal composure — his decision to leave the past miss behind — has become a quiet act of leadership that the team responds to",
          "It indicates he did not hear the coach's instruction to wait"
        ],
        correctAnswerIndex: 2,
        explanation:
          "Isak's standing is the physical expression of the mental resolution he has just completed — choosing to leave the missed goal in the past and be present for tonight. The team rising around him shows that this act of composure, though wordless and unofficial, carries its own leadership weight. The captain pulls on her armband; Isak initiates the movement."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What does the way Isak thinks about his missed goal in the sixty-third minute reveal about his mental approach to competition?",
        options: [
          "He is haunted by past mistakes and struggles to move past them",
          "He is able to acknowledge a painful moment without letting it define his present — using memory actively rather than being controlled by it",
          "He is overconfident and does not take past mistakes seriously enough",
          "He focuses on others' mistakes rather than his own to maintain his confidence"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Isak remembers the miss with specific, unflinching detail — the open net, the scuffed shot, the goalkeeper's sympathy. He does not minimise it. But he also states clearly: 'that miss is in the past. It is not here tonight.' He uses memory as a conscious exercise in letting go, not as a burden or a source of false reassurance."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "The passage says the captain 'pulled on her armband without ceremony.' What does 'without ceremony' suggest about how she does this?",
        options: [
          "She puts the armband on reluctantly, as if she does not want to be captain",
          "She does it quietly and matter-of-factly, without needing attention or ritual — a mark of understated confidence",
          "She does it quickly because the team is running late",
          "She is unfamiliar with the armband and struggles to put it on"
        ],
        correctAnswerIndex: 1,
        explanation:
          "'Without ceremony' means without fuss, performance, or ritual. Applied to Priya's action, it suggests she does not need to make a moment of her leadership — it is simply what she does. This understated quality mirrors the whole tone of the scene: leadership expressed through quiet action, not display."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What causes the pre-match silence in the changing room to feel different from ordinary nervousness?",
        options: [
          "The coach has asked the team to be quiet so that he can give his pre-match talk",
          "The rain and the sound of the crowd create an unusually tense atmosphere",
          "For Isak at least, the silence is the sound of minds steadying rather than spiralling — a purposeful, composed quiet rather than anxious paralysis",
          "The team is exhausted after a difficult week of training and has no energy for conversation"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage distinguishes between two types of pre-match silence — one where the mind steadies and one where it spirals. Isak notes that tonight it is the former. The silence is not oppressive but purposeful: the room is full of people doing exactly what Isak is doing, working to be present and composed."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme this story explores?",
        options: [
          "The physical and tactical preparation required for high-level football competition",
          "How individuals manage and release past failure in order to be fully present for a new challenge",
          "The relationship between formal leadership and the informal leadership that emerges naturally within a team",
          "The psychological pressure of competing in finals and how it differs from ordinary matches"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Isak's missed goal and his conscious decision to leave it in the past are the emotional core of the story. The match has not yet started; the story is entirely about what happens in the mind before action begins. The theme is the internal work of releasing failure in order to be genuinely present — relevant to sport, but not limited to it."
      }
    ]
  },

// ─────────────────────────────────────────────
// PASSAGES 6–10  |  INTERMEDIATE DIFFICULTY
// Age Band: 14–17  |  Grade Band: Grade 9-11
// ─────────────────────────────────────────────

  // ─────────────────────────────────────────────
  // PASSAGE 6 – INTERMEDIATE / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-fiction-004",
    title: "The Apology",
    gradeBand: "Grade 9-11",
    ageBand: "14-17",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 8.0,
    wordCount: 280,
    content: `
The message sat in Dara's drafts folder for eleven days. She had written it the night it happened — the night she had said, in front of a group of people whose opinions she cared about too much, something about Marcus that was unkind, reductive, and untrue. She had known it was wrong as she was saying it. She had said it anyway, for the small, sour reward of a laugh.

The message was four sentences long. She had revised it so many times that the original impulse — the genuine shame she had felt that night — had become almost unrecognisable beneath the accumulated edits. The first draft had been raw and direct. The current version was careful, balanced, and concerned, she suspected, more with how she appeared than with what Marcus had actually experienced.

On the twelfth day she deleted everything after the first sentence and sent it.

*I said something cruel about you in front of people and I'm sorry.*

No explanation. No qualifications. No account of the pressures she had been under or the social dynamics she'd been navigating. She had decided, in the end, that these things were reasons, not excuses, and that offering them would transfer the burden of her discomfort onto Marcus, who had already carried enough of it.

He replied four hours later: *Thanks for saying so.*

Five words. She read them several times, trying to determine whether they were warm or merely civil. She concluded, eventually, that it did not matter — that expecting a particular kind of forgiveness was itself a way of making Marcus's response about her.

She closed the thread and let it be.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Character Analysis",
        question: "What does Dara's decision to delete everything except the first sentence reveal about her understanding of what a genuine apology requires?",
        options: [
          "She realises her apology was too long and that shorter messages are more likely to be read",
          "She recognises that explanations and qualifications, however true, shift the focus from the harm caused to the apologiser's feelings — and that Marcus deserves an apology that centres him, not her",
          "She is afraid that a detailed apology will make Marcus angrier",
          "She decides that written apologies are inadequate and plans to speak to Marcus in person instead"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Dara identifies that her carefully revised draft had become 'more concerned with how she appeared than with what Marcus had actually experienced.' By stripping everything back to one sentence with no qualifications, she prioritises Marcus's experience over her own need to explain or justify — which is the mark of a genuine rather than a self-serving apology."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "What does Dara mean when she concludes that 'expecting a particular kind of forgiveness was itself a way of making Marcus's response about her'?",
        options: [
          "She believes Marcus is being deliberately unhelpful with his brief reply",
          "She recognises that hoping or expecting forgiveness places a demand on Marcus — converting his role from recipient of an apology to provider of her emotional resolution",
          "She has decided that forgiveness is not important and that moving on is what matters",
          "She is disappointed that Marcus did not reply more warmly and is rationalising this disappointment"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Dara's final realisation is the story's most sophisticated moment: even receiving forgiveness, if anticipated or desired, becomes a way of centring herself. Marcus has already been harmed once; requiring him to perform a particular kind of forgiveness would compound this by making his emotional response serve her needs. Letting it be is the completion of her act of genuine accountability."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "Why had the original emotional impulse of Dara's apology become 'almost unrecognisable' by the twelfth day?",
        options: [
          "She had forgotten exactly what she said and was no longer sure it was really wrong",
          "Repeated revision, driven by concern for her own image rather than Marcus's experience, had gradually replaced raw honesty with careful self-presentation",
          "Her feelings of shame had genuinely faded and she no longer felt the apology was necessary",
          "She had received advice from friends that her original message was too emotional"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage traces the deterioration explicitly: the first draft was 'raw and direct'; the revised version was 'careful, balanced, and concerned more with how she appeared.' The revision process, shaped by image management rather than genuine accountability, had processed the original emotional honesty out of the message."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "Dara decides that her reasons for what she said were 'reasons, not excuses.' What distinction is she drawing?",
        options: [
          "She is arguing that reasons are factual while excuses are emotional",
          "She means that while contextual factors may explain her behaviour, they do not justify it or reduce Marcus's experience of harm — and offering them would burden him with managing her discomfort",
          "She believes reasons are acceptable to include in an apology but excuses are not",
          "She is distinguishing between things she could control and things she could not"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Dara is making a precise ethical distinction: reasons explain why something happened without diminishing responsibility; excuses attempt to reduce or transfer that responsibility. She acknowledges the social pressures she was under but refuses to use them to soften her accountability — doing so would make Marcus carry the weight of her discomfort."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central idea this story explores?",
        options: [
          "Apologies delivered in writing are less sincere than those delivered in person",
          "A genuine apology requires stripping away self-interest — including the desire to be forgiven — and centring the experience of the person harmed",
          "Social pressure causes people to say things they do not mean, and this is understandable",
          "It is better to apologise quickly and imperfectly than to wait for the perfect moment"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Every element of the story — the eleven days of revision, the deleted qualifications, the decision not to require a specific response — builds toward the same understanding: that a real apology is not a transaction in which the apologiser seeks absolution, but an act that places the harmed person's experience at its centre, without conditions or expectations."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 7 – INTERMEDIATE / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-nonfiction-003",
    title: "The Limits of Meritocracy",
    gradeBand: "Grade 9-11",
    ageBand: "14-17",
    difficulty: "Intermediate",
    category: "Non-Fiction",
    estimatedReadingLevel: 8.3,
    wordCount: 272,
    content: `
Meritocracy — the idea that social rewards should go to those who work hardest and demonstrate the greatest ability — is one of the most widely held beliefs in modern societies. It underpins educational systems, hiring practices, and the stories we tell about success and failure. It is also, according to a growing body of social research, significantly more complicated than it appears.

The core problem is that meritocracy assumes a level playing field: that talent and effort are the primary determinants of outcome, and that structural factors — wealth, race, geography, family background — are secondary variables that can be set aside. Research consistently challenges this assumption. Children born into wealthier families have access to better nutrition, more stable home environments, superior schools, and extensive networks of professional contacts — advantages that compound over time and that have nothing to do with individual effort or ability.

This does not mean that individual effort is irrelevant. It means that effort is not sufficient on its own, and that outcomes shaped heavily by starting conditions cannot straightforwardly be read as reflections of personal merit. When we treat success as purely the result of individual effort, we tend simultaneously to treat failure as purely the result of individual inadequacy — a conclusion that is both empirically questionable and morally troubling.

The philosopher Michael Sandel has argued that the real danger of meritocracy is not that it fails to deliver on its promise, but that when people believe it has succeeded — when they attribute their position to their own merit — they become less empathetic toward those who have less, and less able to recognise the role of luck and circumstance in their own outcomes.

A society that takes merit seriously, he suggests, must also take seriously the conditions that make merit possible.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central argument this passage makes about meritocracy?",
        options: [
          "Meritocracy is a flawed concept that should be abandoned in favour of equal outcomes for all",
          "Meritocracy's promise is undermined by structural inequalities that mean starting conditions heavily shape outcomes — making pure merit a partial fiction, with real moral consequences",
          "Individual effort is irrelevant in societies where wealth and background determine success",
          "Educational systems are the primary obstacle to achieving genuine meritocracy"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage does not reject the value of effort or merit but argues that structural advantages compound in ways that make 'pure' meritocracy impossible — and that believing meritocracy has succeeded produces moral harms, including reduced empathy and the misattribution of failure to personal inadequacy."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the passage mean by saying that advantages 'compound over time'?",
        options: [
          "They become more visible and harder to ignore as a person grows older",
          "They accumulate and build on each other — each advantage creating conditions for further advantages — producing outcomes that far exceed what any single factor could explain",
          "They create legal complications that are difficult to address through policy",
          "They become sources of resentment between social classes over time"
        ],
        correctAnswerIndex: 1,
        explanation:
          "To compound means to increase by building upon itself. Compounding advantages work like compound interest: better nutrition supports better cognitive development; better cognitive development supports school performance; school performance supports university access; university access supports career prospects. Each advantage amplifies the next, producing cumulative inequality far greater than its individual components."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Why does the passage describe the conclusion that failure is purely the result of individual inadequacy as 'empirically questionable and morally troubling'?",
        options: [
          "Because it discourages people from trying to improve their circumstances",
          "Because it is both factually inaccurate — ignoring the role of structural disadvantage — and morally harmful, as it blames individuals for outcomes they could not fully control",
          "Because it leads to policies that increase taxation on high earners",
          "Because it makes people less likely to vote in democratic elections"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Empirically questionable means the evidence does not support it — structural disadvantage demonstrably shapes outcomes. Morally troubling means it produces harmful ethical consequences — blaming individuals for systemic failures removes the moral impetus to address those systems and causes unnecessary suffering to those already disadvantaged."
      },
      {
        id: "q4",
        skill: "Literal Recall",
        question: "What does philosopher Michael Sandel argue is the 'real danger' of meritocracy?",
        options: [
          "That meritocratic systems are easily corrupted by those in power",
          "That meritocracy inevitably produces extreme inequality of wealth",
          "That when people believe meritocracy has succeeded, they become less empathetic toward those with less and less able to recognise the role of luck in their own success",
          "That meritocracy encourages excessive competition and undermines community bonds"
        ],
        correctAnswerIndex: 2,
        explanation:
          "The passage directly summarises Sandel's argument: the danger is not meritocracy's failure but its perceived success — when people believe their position reflects pure merit, they lose empathy for those below them and become blind to how much luck and circumstance shaped their own outcomes."
      },
      {
        id: "q5",
        skill: "Cause and Effect",
        question: "According to the passage, what effect does the belief that meritocracy has succeeded have on how people perceive those who are less successful?",
        options: [
          "It motivates them to create charitable organisations to help the disadvantaged",
          "It causes them to attribute others' lesser success to personal inadequacy rather than structural disadvantage, reducing empathy",
          "It leads them to support political reforms that would create more equal opportunities",
          "It makes them more aware of their own advantages and more grateful for them"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage traces this effect explicitly through Sandel's argument: believing that success reflects merit leads logically to believing that lack of success reflects lack of merit — personal inadequacy rather than structural disadvantage. This is the moral harm: empathy erodes because failure is personalised rather than contextualised."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 8 – INTERMEDIATE / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-fiction-005",
    title: "Small Hours",
    gradeBand: "Grade 9-11",
    ageBand: "14-17",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 8.1,
    wordCount: 282,
    content: `
The thing about grief, Theo was discovering, was that it did not observe schedules. It arrived, when it arrived, without warning and without apparent cause — a piece of music through a shop doorway, the specific angle of winter light on a wall, the smell of coffee in the morning, which had also been his mother's smell.

He was sixteen. She had died four months ago, quickly and without warning, from something that had been undetected until it was too late. Everyone had been very kind, and then gradually, as was probably necessary and certainly inevitable, they had returned to their own lives. His father got up and went to work. His sister went back to university. The house went on being the house.

Theo went back to school and discovered that grief had no social form there. Nobody knew what to say, so most people said nothing, which was almost worse than the wrong thing, because silence implied the subject was too dangerous to approach — that the loss was something to be managed privately, offstage.

There was one exception. A teacher named Ms. Osei, who taught history and had lost her own mother the year before, stopped him one afternoon in the corridor.

"This bit is very hard," she said. "Four months in, when everyone else has moved on."

She did not ask him how he was coping. She did not suggest resources. She simply named the thing he was experiencing with enough precision that he felt, for the first time in weeks, recognised rather than managed.

He said: "Yes."

She nodded. "It gets less sharp," she said. "Not smaller. Less sharp."

He thought about that distinction for a long time afterwards.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What is the significance of Ms. Osei's distinction — 'not smaller, less sharp'?",
        options: [
          "She is reassuring Theo that he will eventually forget his grief entirely",
          "She is distinguishing between grief diminishing in size — which would imply forgetting or caring less — and grief becoming less acute, which honours the permanence of loss while offering genuine hope",
          "She is warning Theo that his grief will become worse before it becomes better",
          "She is suggesting that grief is different for everyone and that no single description is accurate"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The distinction matters enormously. 'Smaller' would imply the grief shrinks — which can feel like a betrayal of the person lost. 'Less sharp' means the acute, cutting quality softens over time while the loss itself remains. This is both more honest and more comforting than conventional reassurance, which is why Theo thinks about it for a long time afterwards."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What makes Ms. Osei's response different from the responses of most people around Theo, and what does this difference reveal?",
        options: [
          "She gives him practical advice that others have been too busy to provide",
          "Rather than asking questions, suggesting resources, or maintaining silence, she names his specific experience with precision — she meets him where he actually is rather than where it is comfortable for others to place him",
          "She is the only person who has lost a parent herself and therefore understands grief better than others",
          "She speaks to him in private rather than in front of his classmates, which makes him more comfortable"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage establishes a contrast: most people said nothing (awkward avoidance), the implied alternative is wrong-headed consolation, and Ms. Osei's response is to name the experience precisely — 'four months in, when everyone else has moved on.' This precision is what makes Theo feel 'recognised rather than managed.' It is not her personal experience of grief but her willingness to speak directly to his that distinguishes her."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "The passage says grief had 'no social form' at school. What does this mean?",
        options: [
          "Grief was not discussed in any subjects taught at the school",
          "There was no established social script or acknowledged way for students and teachers to interact with someone who was visibly grieving — leaving Theo without context or support",
          "Theo had no friends at school who knew his mother had died",
          "The school had no formal counselling services for bereaved students"
        ],
        correctAnswerIndex: 1,
        explanation:
          "A 'social form' means a recognised, culturally established way of navigating a situation — a script of appropriate behaviour. Grief lacks one in school: there is no clear way for peers or teachers to engage with a grieving student, so most default to silence, which Theo experiences as isolating. The absence of social form leaves him without any framework for being acknowledged."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What effect does the return of Theo's father to work and his sister to university have on his experience of grief?",
        options: [
          "It gives Theo the privacy and space he needs to process his loss without distraction",
          "It causes him to feel that normal life has resumed for everyone else while he remains stuck — amplifying the isolation of grief",
          "It motivates him to return to school and focus on his studies as a way of coping",
          "It makes him angry at his family for not staying with him during a difficult period"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage frames this return to normality as 'probably necessary and certainly inevitable' — Theo understands why it happens. But understanding does not protect him from the experience: his grief continues while others move on, and this asynchrony deepens his isolation. The house 'goes on being the house' — life's indifference to his internal state is part of what makes grief so lonely."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme of this story?",
        options: [
          "Grief becomes significantly easier once the initial shock has passed",
          "Being precisely named and genuinely witnessed in one's pain is more valuable than any amount of sympathy, advice, or careful silence",
          "Teachers are better equipped than family members to support grieving teenagers",
          "The grieving process follows predictable stages that those around the bereaved can learn to recognise"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story builds toward Theo feeling 'recognised rather than managed' — a formulation that captures the central theme perfectly. What he needs is not resources, not silence, not conventional consolation, but someone willing to name his experience precisely and honestly. Ms. Osei's two lines do more for him than four months of careful distance. The theme is the power of being truly seen."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 9 – INTERMEDIATE / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-nonfiction-004",
    title: "Why Democracies Fail: The Problem of Democratic Backsliding",
    gradeBand: "Grade 9-11",
    ageBand: "14-17",
    difficulty: "Intermediate",
    category: "Non-Fiction",
    estimatedReadingLevel: 8.4,
    wordCount: 275,
    content: `
For most of the twentieth century, the dominant fear about democracy was that it would be destroyed by force — through military coups, revolutions, or foreign invasion. This remains a real threat in parts of the world. But political scientists have increasingly identified a different, subtler danger: democratic backsliding, in which democracies erode not through sudden rupture but through gradual, incremental changes that are difficult to identify and resist in real time.

Democratic backsliding typically does not begin with the suspension of elections or the abolition of opposition parties. It begins with smaller manoeuvres: the targeted weakening of independent courts, the systematic delegitimisation of the press, the co-opting of electoral commissions, or the use of legal mechanisms to harass political opponents. Each individual step may appear minor or defensible. The cumulative effect is a system that retains the form of democracy while hollowing out its substance.

This pattern is particularly dangerous because it exploits the very norms that liberal democracies depend on. Democratic systems function partly through formal rules and partly through informal norms — understandings about how power should and should not be used that are never written into law because it was assumed no one would violate them. When leaders begin violating these norms, the systems designed to protect against authoritarian rule often prove inadequate, because they were built to stop different kinds of threats.

Political scientists Steven Levitsky and Daniel Ziblatt, in their influential study "How Democracies Die," argue that the most important safeguard against backsliding is not constitutional but social: the willingness of political elites across party lines to refuse to normalise norm violations, regardless of short-term political advantage.

A democracy, they suggest, is only as strong as the collective commitment to maintain it.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central argument this passage makes about how democracies are most at risk today?",
        options: [
          "Military coups remain the greatest threat to democratic governments worldwide",
          "Democratic backsliding — the gradual erosion of democratic norms and institutions through incremental steps rather than sudden seizure — poses a more insidious and harder-to-resist threat than outright force",
          "Democracies are fundamentally unstable systems that require constant constitutional reform",
          "The greatest threat to democracy comes from foreign interference in electoral processes"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage opens by contrasting the traditional fear (overthrow by force) with the more contemporary danger (gradual, incremental erosion). Every subsequent paragraph develops this argument: backsliding is dangerous precisely because it is slow, exploits existing norms, and is difficult to identify and resist as it happens."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the passage mean when it says democratic backsliding retains 'the form of democracy while hollowing out its substance'?",
        options: [
          "Elections continue to be held but the results are no longer accepted by losing parties",
          "The outward appearances of democracy — elections, constitutions, parliaments — remain in place, while the genuine independence, checks, and balances that give them meaning are systematically removed",
          "Democratic governments become increasingly focused on symbolism rather than policy",
          "Citizens continue to vote but become increasingly disengaged from the political process"
        ],
        correctAnswerIndex: 1,
        explanation:
          "This distinction between form and substance is central to the passage's argument. A democracy can look democratic — holding elections, maintaining a legislature — while the independent courts, free press, and fair electoral processes that make those structures meaningful have been quietly dismantled. The shell remains; the content has been removed."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "Why are democratic systems often inadequate at stopping backsliding, according to the passage?",
        options: [
          "Because most democratic constitutions were written before the concept of backsliding was understood",
          "Because the systems were designed to stop different threats — sudden violent seizure — and the informal norms they depended on were never codified into law because no one anticipated they would be violated",
          "Because politicians across all parties are equally likely to engage in norm violations when it benefits them",
          "Because citizens in democratic countries have become too passive to hold their governments accountable"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage identifies a structural vulnerability: democratic protections rely partly on informal norms — shared understandings never written into law because violation was assumed unthinkable. Backsliding targets these norms precisely because they are unenforceable. The systems were built for a different kind of threat."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "What does the argument that the most important safeguard is 'social rather than constitutional' imply about the nature of democratic resilience?",
        options: [
          "It implies that constitutions are poorly drafted and need to be rewritten",
          "It implies that democracy's ultimate defence is not legal architecture but the shared values, commitments, and willingness of people — especially those with power — to refuse to normalise what should not be normal",
          "It implies that ordinary citizens are more important than political elites in protecting democratic norms",
          "It implies that social media plays a crucial role in exposing democratic backsliding"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Levitsky and Ziblatt's argument elevates human commitment — specifically the refusal of political elites to treat norm violations as acceptable — above legal structures as democracy's deepest protection. This is a significant claim: no constitution can protect a democracy whose powerful actors no longer choose to maintain it."
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "What is the title of the study by Steven Levitsky and Daniel Ziblatt referenced in the passage?",
        options: [
          "The Death of Democracy",
          "How Democracies Die",
          "The Backsliding Problem",
          "Democratic Fragility in the Modern Age"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage directly names the study: 'How Democracies Die' by Steven Levitsky and Daniel Ziblatt — describing it as 'influential' and citing its central argument about social safeguards as the primary protection against democratic erosion."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 10 – INTERMEDIATE / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-fiction-006",
    title: "The Audition",
    gradeBand: "Grade 9-11",
    ageBand: "14-17",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 8.2,
    wordCount: 278,
    content: `
The drama school held its auditions in a room with too many chairs, a panelled wall of mirrors, and the particular institutional smell of cleaned floors and old wood. Fatima had waited in the corridor for forty minutes among eleven other applicants, all of whom had been performing their preparedness — checking phones, mouthing lines, performing stillness with visible effort. She had been doing it too, until she noticed she was doing it and stopped.

She had prepared a speech from a play she loved — two minutes of a woman arguing with herself about whether to leave. She had memorised it so thoroughly that it had ceased to exist as words and become instead a series of states: the refusal, the doubt, the moment the decision is made without being named.

In the audition room, there were three people behind a table. She delivered the speech.

She could not tell, afterwards, whether it had been good. This had happened before: when she was fully present in something, the critical faculty that usually ran a commentary — *that worked, that didn't, they liked that* — was absent. She had simply been the woman in the speech for two minutes, and then she had come back to herself in the room, and the three people were looking at her with expressions she couldn't decode.

One of them said: "Can you do it again, but less prepared?"

She nearly laughed. She took a breath instead, and let go of the architecture she had built around the speech over four months of rehearsal — the precise timing, the practised pauses — and did it again from somewhere she couldn't name.

It was the best thing she had ever done. She was not offered the place. She thought about that for years.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does the judge mean by asking Fatima to do the speech 'less prepared'?",
        options: [
          "They want her to perform the speech from memory without any preparation at all",
          "They want her to abandon the careful structure she has built and find a more spontaneous, unguarded emotional truth — to access the speech beneath the performance of it",
          "They believe she has not rehearsed enough and want to see what she can do with less",
          "They want her to perform the speech more quietly and with less physical movement"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The request is paradoxical — Fatima has memorised the speech so thoroughly it no longer exists as words. 'Less prepared' means less performed, less structured, less protected by technique. The judges are asking her to strip away the architecture of preparation and find the raw emotional material underneath — which is precisely what she does."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What does it reveal about Fatima that she notices she is performing preparedness in the corridor — and then stops?",
        options: [
          "She is overconfident and does not believe she needs to prepare like the other applicants",
          "She possesses an unusual degree of self-awareness — able to catch herself in a performance and step out of it, which turns out to be exactly the quality the audition requires",
          "She is too nervous to maintain the performance and gives up",
          "She has decided the audition does not matter and is no longer invested in the outcome"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The moment in the corridor mirrors the audition: both require Fatima to stop performing a version of herself and be genuinely present. Her self-awareness — catching the performance and choosing to stop — is the quality that makes her capable of the second, unguarded delivery. The corridor moment foreshadows the audition room."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does Fatima mean when she says the speech had 'ceased to exist as words and become instead a series of states'?",
        options: [
          "She had memorised it so thoroughly that she no longer needed to think about the individual words — the emotional journey had become internalised",
          "She had translated the speech into a different language as part of her preparation",
          "She had broken the speech into separate sections to make it easier to remember",
          "The speech was so abstract that its meaning was difficult to grasp intellectually"
        ],
        correctAnswerIndex: 0,
        explanation:
          "'States' here means emotional or psychological conditions — the refusal, the doubt, the unnamed decision. When a piece of text is truly internalised, it stops being language to be recited and becomes an emotional experience to be inhabited. Fatima's preparation has reached this level: she does not speak the words, she lives the conditions they describe."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What is the effect of Fatima's critical faculty being 'absent' during the first delivery?",
        options: [
          "She makes errors she is unaware of and the delivery suffers as a result",
          "She has no way to know whether the performance was good, but this absence of self-commentary is itself a sign of genuine presence and immersion in the work",
          "She becomes disconnected from the text and loses her place",
          "The judges are unable to see any emotion in her performance because she is not monitoring it"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage frames the silence of the critical faculty as a positive indicator — when Fatima is truly present, the part of her that usually runs a performance commentary disappears. This is not a failure of awareness but its highest form: full immersion. The paradox is that she cannot evaluate how well she did because she was genuinely inside the experience rather than watching it from outside."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What does the final sentence — 'She was not offered the place. She thought about that for years' — suggest as the story's central idea?",
        options: [
          "Talent is not always recognised by those in positions to reward it, which is a fundamental injustice",
          "The experience of doing the best work of your life — of genuine, unguarded presence — can be more significant and lasting than the outcome it produced",
          "Drama school auditions are an unreliable measure of genuine artistic ability",
          "Failure is always instructive, and the most important lessons come from rejection"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Fatima does not get the place, but the sentence structure places the thinking — not the rejection — as what endures. She thinks about it for years not because she is bitter but because something real happened in that room, something she had not accessed before. The central idea is that authentic, fully present experience has a value independent of the external verdict it receives."
      }
    ]
  },

  {
    id: "g4-fiction-001",
    title: "The Lost Kite",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 4.5,
    wordCount: 180,
    content: `
Liam ran across the field holding tightly to the string of his bright red kite.
The wind was strong and the kite rose higher and higher into the sky. Suddenly, a powerful gust snapped the string.
Liam watched helplessly as the kite drifted away over the trees.
The next morning he returned to the field to search for it. After several hours he spotted something red hanging from a branch.
It was his kite. Liam carefully climbed the hill, retrieved it, and repaired the broken string before flying it again.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What color was Liam's kite?",
        options: ["Blue", "Green", "Red", "Yellow"],
        correctAnswerIndex: 2,
        explanation: "The passage states that Liam's kite was bright red."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "Why did the kite fly away?",
        options: ["Liam let go", "The string snapped", "It landed in water", "Someone took it"],
        correctAnswerIndex: 1,
        explanation: "A strong gust of wind caused the string to snap, which made the kite drift away."
      },
      {
        id: "q3",
        skill: "Sequence",
        question: "When did Liam search for the kite?",
        options: ["That evening", "The next morning", "A week later", "Immediately"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'The next morning he returned to the field to search for it.'"
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'retrieved' most nearly mean?",
        options: ["Lost", "Found and recovered", "Painted", "Sold"],
        correctAnswerIndex: 1,
        explanation: "Retrieved means to get something back. Liam got his kite back from the branch."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "What does this story suggest about Liam?",
        options: ["He gives up easily", "He is careless", "He is persistent", "He dislikes kites"],
        correctAnswerIndex: 2,
        explanation: "Liam searched for hours and repaired the kite instead of giving up, showing persistence."
      }
    ]
  },

  {
    id: "g4-nonfiction-001",
    title: "How a Seed Grows",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Beginner",
    category: "Non-Fiction",
    estimatedReadingLevel: 4.2,
    wordCount: 175,
    content: `
A seed needs four things to grow into a plant: water, sunlight, air, and soil.
First, water softens the seed's outer coat. Then a tiny root pushes down into the soil.
Next, a small stem pushes up toward the sunlight. The stem carries water from the root to the leaves.
Leaves use sunlight, air, and water to make food for the plant. This process is called photosynthesis.
Without any one of these four things, the seed cannot grow.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "How many things does a seed need to grow?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswerIndex: 1,
        explanation: "The first sentence says: 'A seed needs four things: water, sunlight, air, and soil.'"
      },
      {
        id: "q2",
        skill: "Sequence",
        question: "What happens right after the seed's coat softens?",
        options: ["A stem pushes up", "A root pushes down", "Leaves make food", "The seed dies"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'First, water softens the seed's outer coat. Then a tiny root pushes down.'"
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'photosynthesis' mean in this passage?",
        options: ["The seed's coat softening", "Roots growing downward", "Making food using sunlight, air, and water", "A type of soil"],
        correctAnswerIndex: 2,
        explanation: "The passage says: 'Leaves use sunlight, air, and water to make food. This process is called photosynthesis.'"
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What would happen if a seed had no sunlight?",
        options: ["It would grow faster", "It would not grow", "It would only grow roots", "It would turn blue"],
        correctAnswerIndex: 1,
        explanation: "The passage ends with: 'Without any one of these four things, the seed cannot grow.' Sunlight is one of them."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the main idea of this passage?",
        options: ["Seeds are colorful", "How seeds grow into plants", "Different types of soil", "Why roots are strong"],
        correctAnswerIndex: 1,
        explanation: "The whole passage explains the steps and needs for a seed to become a plant."
      }
    ]
  },

  {
    id: "g4-fiction-002",
    title: "The Forgotten Homework",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 4.3,
    wordCount: 178,
    content: `
Mia finished her science homework about butterflies and placed it on her desk.
That night, her baby brother crawled into her room and grabbed the paper. He crumpled it into a ball.
The next morning, Mia could not find her homework anywhere. She felt her heart sink.
Just then, she saw a crumpled paper under the crib. It was her butterfly drawing.
Mia smoothed it out, asked her mom for tape, and carefully fixed the torn edges. She turned it in, and her teacher said, "Great job saving your work!"`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What was Mia's homework about?",
        options: ["Frogs", "Butterflies", "Plants", "Rockets"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Mia finished her science homework about butterflies.'"
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "Why was Mia's homework crumpled?",
        options: ["She crumpled it herself", "The wind blew it", "Her baby brother grabbed and crumpled it", "The dog chewed it"],
        correctAnswerIndex: 2,
        explanation: "The passage says: 'Her baby brother crawled into her room and grabbed the paper. He crumpled it into a ball.'"
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "Which word best describes Mia?",
        options: ["Lazy", "Resourceful", "Mean", "Scared of everything"],
        correctAnswerIndex: 1,
        explanation: "Mia found a way to fix the homework with tape instead of giving up, showing she is resourceful."
      },
      {
        id: "q4",
        skill: "Sequence",
        question: "What did Mia do right after finding the crumpled paper?",
        options: ["She threw it away", "She smoothed it out", "She cried", "She hid it"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Mia smoothed it out, asked her mom for tape, and carefully fixed the torn edges.' Smoothing came first."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "How did Mia probably feel when she could not find her homework?",
        options: ["Happy", "Worried or upset", "Excited", "Hungry"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'She felt her heart sink' — a sign of worry or disappointment."
      }
    ]
  },

  {
    id: "g4-nonfiction-002",
    title: "The Octopus Escape Artist",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Beginner",
    category: "Non-Fiction",
    estimatedReadingLevel: 4.4,
    wordCount: 182,
    content: `
Octopuses are known as escape artists of the sea. They have no bones, so they can squeeze through tiny gaps.
Their soft bodies can fit through openings as small as their beak, which is the only hard part.
In aquariums, octopuses have escaped from tanks by unscrewing lids or climbing through pipes.
One octopus named Inky slipped out of his tank, crawled across the floor, and disappeared into a drain leading to the ocean.
Octopuses use this skill in the wild to hide from predators inside small cracks in rocks.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What is the only hard part of an octopus's body?",
        options: ["Its tentacles", "Its beak", "Its eyes", "Its skin"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Their soft bodies can fit through openings as small as their beak, which is the only hard part.'"
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the word 'squeeze' mean in this passage?",
        options: ["To shout loudly", "To press through a tight space", "To swim fast", "To eat"],
        correctAnswerIndex: 1,
        explanation: "Octopuses have no bones, so they can 'squeeze through tiny gaps' — push their bodies through tight spaces."
      },
      {
        id: "q3",
        skill: "Main Idea",
        question: "What is this passage mostly about?",
        options: ["What octopuses eat", "How octopuses escape tight spaces", "Colors of octopuses", "Where octopuses live"],
        correctAnswerIndex: 1,
        explanation: "The passage repeatedly describes escape skills: squeezing, unscrewing lids, hiding in cracks."
      },
      {
        id: "q4",
        skill: "Inference",
        question: "Why do octopuses hide in small cracks in the wild?",
        options: ["To find food", "To play", "To hide from predators", "To sleep all day"],
        correctAnswerIndex: 2,
        explanation: "The passage says they 'use this skill to hide from predators inside small cracks in rocks.'"
      },
      {
        id: "q5",
        skill: "Literal Recall",
        question: "What did the octopus named Inky do?",
        options: ["Built a nest", "Ate a fish", "Escaped into a drain", "Changed color"],
        correctAnswerIndex: 2,
        explanation: "The passage says: 'Inky slipped out, crawled across the floor, and disappeared into a drain leading to the ocean.'"
      }
    ]
  },

  {
    id: "g4-fiction-003",
    title: "The Rainy Day Art",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Beginner",
    category: "Fiction",
    estimatedReadingLevel: 4.3,
    wordCount: 179,
    content: `
Leo was bored because rain kept him inside. His grandmother handed him a box of chalk.
"The sidewalk is wet," she said. "Try drawing on it."
Leo stepped onto the covered porch and drew a large sun on the wet concrete. The colors spread beautifully.
He drew flowers, then a rainbow. Each drawing looked like soft, glowing paint.
When the rain stopped and the sun came out, the drawings slowly faded. Leo smiled and said, "That's okay. I can make new ones tomorrow."`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What did Leo's grandmother give him?",
        options: ["Paint", "A book", "A box of chalk", "An umbrella"],
        correctAnswerIndex: 2,
        explanation: "The passage says: 'His grandmother handed him a box of chalk.'"
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "Why did Leo's drawings look like glowing paint?",
        options: ["He used real paint", "He drew on wet concrete", "He was a professional artist", "The rain washed them away"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Leo drew on the wet concrete. The colors spread beautifully' like soft, glowing paint."
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "How did Leo feel when the drawings faded?",
        options: ["Angry and sad", "Accepting and positive", "Scared", "Jealous"],
        correctAnswerIndex: 1,
        explanation: "Leo smiled and said 'That's okay. I can make new ones tomorrow' — showing a positive, accepting attitude."
      },
      {
        id: "q4",
        skill: "Prediction",
        question: "What will Leo probably do the next day?",
        options: ["Stay inside all day", "Draw new chalk pictures", "Throw away the chalk", "Move to a desert"],
        correctAnswerIndex: 1,
        explanation: "Leo says, 'I can make new ones tomorrow,' so it's likely he will draw again."
      },
      {
        id: "q5",
        skill: "Vocabulary",
        question: "What does the word 'faded' mean in this passage?",
        options: ["Became brighter", "Became lighter and disappeared slowly", "Dried quickly", "Turned into stone"],
        correctAnswerIndex: 1,
        explanation: "After the sun came out, 'the drawings slowly faded' — they became less visible over time."
      }
    ]
  },
  // ─────────────────────────────────────────────
// PASSAGES 11–15  |  ADVANCED DIFFICULTY
// Age Band: 14–17  |  Grade Band: Grade 10-12
// ─────────────────────────────────────────────

  // ─────────────────────────────────────────────
  // PASSAGE 11 – ADVANCED / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-fiction-007",
    title: "The Cost of the Story",
    gradeBand: "Grade 10-12",
    ageBand: "14-17",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 9.2,
    wordCount: 310,
    content: `
My grandmother told the story of her escape from the war so many times that by the time I was old enough to understand it, the story had become perfectly formed — a polished, self-contained object with a beginning, a complication, and a resolution that always landed in the same place: the moment she crossed the border at night and looked back and decided not to look back again.

She told it at dinners, at community events, to journalists who came to write about people like her. She told it fluently and without apparent distress, in a voice that had the particular quality of things that have been said so many times they have been rendered safe.

What I did not understand until much later — until I was seventeen, studying the psychology of trauma — was that this fluency was not the absence of pain. It was a management system for it. The story had been told so many times that it had become, in a sense, separate from her: a narrative object she could handle and present and set back down. The telling did not require her to re-enter the experience. It allowed her to remain outside it.

I asked her once, in the year before she died, whether there were things about that crossing she had never told anyone.

She looked at me for a long moment. Then she said: "The story I tell is true. It is not everything."

I asked what the rest was.

She shook her head — not with reluctance, I thought, but with something more like protectiveness. Toward herself. Toward me.

"Some things," she said, "you keep so they stay yours. The moment you put them into a story, they belong to whoever hears it."

I have been thinking about the ethics of storytelling ever since. About who a story belongs to. About what is lost — and what is protected — in the telling.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does the grandmother mean when she says 'the story I tell is true. It is not everything'?",
        options: [
          "She has been exaggerating parts of her story for dramatic effect and is admitting this for the first time",
          "She distinguishes between factual truth — what the story contains is accurate — and completeness: there are true experiences she has chosen not to include, not because they are false but because they are not hers to share",
          "She has forgotten some parts of her experience and is acknowledging the gaps in her memory",
          "She believes stories are always simplifications and that no story can ever be fully true"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The grandmother makes a precise distinction: the story is true, but it is a curated truth — a selection from a larger, more private reality. What is omitted is not false; it is withheld. This is a claim about the ethics of narrative: what you choose not to tell is as deliberate as what you do tell."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "The narrator interprets the grandmother's headshake as protectiveness 'toward herself' and 'toward me.' What does this dual protectiveness suggest about her?",
        options: [
          "She does not trust the narrator and is worried the information will be misused",
          "She is protecting her own interior life from exposure while simultaneously protecting the narrator from the weight of knowledge that cannot be shared without cost — a simultaneous act of self-preservation and care",
          "She has decided the narrator is too young to hear the full story",
          "She is ashamed of the parts of the story she has not shared and is hiding this shame"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The dual protectiveness is the grandmother's most complex act in the story. She protects herself by keeping some things her own — not as secrecy but as self-possession. She protects the narrator by not transferring the burden of untellable experience. Both are acts of wisdom and care, not evasion."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "The narrator describes the grandmother's telling as having 'the particular quality of things that have been said so many times they have been rendered safe.' What does 'rendered safe' suggest?",
        options: [
          "The story has been fact-checked and verified by journalists",
          "Repetition has processed the raw emotional danger out of the telling — the story can now be delivered without the teller re-entering the original trauma",
          "The story has been simplified over time to make it suitable for public audiences",
          "The grandmother has made peace with her past and no longer finds it painful"
        ],
        correctAnswerIndex: 1,
        explanation:
          "'Rendered safe' means transformed through use into something that no longer carries its original threat. Repetition has created distance between the grandmother and the experience: she can handle the narrative without being inside it. This is clarified by the narrator's later understanding — the fluency is a management system for pain, not its absence."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "According to the grandmother, what happens to an experience the moment it is put into a story?",
        options: [
          "It becomes permanent and can no longer be forgotten",
          "It is transformed from a private possession into something that belongs to whoever hears it — the teller surrenders a degree of ownership over their own experience",
          "It loses its emotional power through the act of narration",
          "It becomes available to be challenged or questioned by others"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The grandmother's formulation is precise: 'the moment you put them into a story, they belong to whoever hears it.' Narration is an act of transfer. The story leaves the teller's possession and enters the listener's — which is why some things are worth keeping untold, not because they are shameful but because keeping them is a form of self-possession."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What central ethical question does this passage raise about storytelling?",
        options: [
          "Whether traumatic experiences should be shared publicly or kept private",
          "Who owns an experience once it has been told — and what is lost and protected by the choice to tell or withhold — raising questions about narrative, self-possession, and the ethics of turning lived experience into story",
          "Whether journalists should be allowed to publish personal stories without permission",
          "How survivors of trauma can use storytelling as a tool for healing"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage does not resolve the ethical question it raises — the narrator is 'thinking about it ever since.' The question is: what is the relationship between a person and their story? What does telling cost? What does withholding protect? The grandmother's distinction between the told story and the untold remainder is the entry point into this larger ethical inquiry."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 12 – ADVANCED / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-nonfiction-005",
    title: "Free Will, Determinism, and Why the Question Matters",
    gradeBand: "Grade 10-12",
    ageBand: "14-17",
    difficulty: "Advanced",
    category: "Non-Fiction",
    estimatedReadingLevel: 9.5,
    wordCount: 305,
    content: `
The question of whether human beings have free will — the capacity to make genuinely uncaused choices — is one of the oldest in philosophy, and one of the few that has become more rather than less urgent as science has advanced.

The determinist position holds that every event, including every human thought and decision, is the inevitable product of prior causes: genetics, upbringing, neurological processes, environmental conditions. On this view, what we experience as choice is a kind of retrospective story the brain tells itself — a narrative layered over processes that have already occurred. Neuroscientific research has provided provocative, if contested, support for this position: studies suggesting that measurable brain activity precedes the conscious awareness of a decision by several hundred milliseconds, implying that the sense of deliberate choice arrives after the outcome has already been determined.

Compatibilism — the most widely held position among contemporary philosophers — attempts to preserve the concept of free will within a deterministic framework. It argues that free will should not be understood as the ability to have acted otherwise given identical prior conditions, but as the ability to act in accordance with one's own reasoning, values, and desires, free from external coercion. On this view, freedom is not a property of individual decisions but of the relationship between a person's actions and their character.

The practical stakes of this debate are considerable. Legal systems that assign criminal responsibility assume that individuals could have chosen to act differently. If determinism is true in the strict sense, this assumption may be philosophically incoherent. Yet the alternative — abandoning responsibility frameworks entirely — would have profound consequences for justice, punishment, and social order.

Most working solutions retain a pragmatic version of responsibility: we hold people accountable not because it is metaphysically certain they could have acted otherwise, but because doing so produces better outcomes — for deterrence, rehabilitation, and the maintenance of social norms — than not doing so.

Whether this pragmatism is intellectually honest, or a comfortable evasion of a question we lack the courage to answer, remains genuinely open.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central purpose of this passage?",
        options: [
          "To argue that determinism is correct and that free will is an illusion that should be abandoned",
          "To lay out the key positions in the free will debate — determinism, compatibilism, and pragmatic responsibility — and show why the question has serious practical stakes that make it impossible to dismiss as purely academic",
          "To summarise the neuroscientific evidence against the existence of free will",
          "To defend compatibilism as the most intellectually satisfying resolution to the free will debate"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage surveys the philosophical terrain without resolving it — it presents determinism, compatibilism, and the pragmatic approach to legal responsibility, then acknowledges in its final line that the underlying question 'remains genuinely open.' Its purpose is to map the problem and its stakes, not to adjudicate between positions."
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the passage mean by describing the neuroscientific evidence for determinism as 'provocative, if contested'?",
        options: [
          "The research is offensive to religious believers and has therefore been publicly debated",
          "The studies raise challenging and significant questions about free will, but their methodology and interpretation remain disputed among scientists and philosophers",
          "The research is preliminary and has not yet been published in peer-reviewed journals",
          "The evidence is highly convincing and has effectively settled the free will debate among scientists"
        ],
        correctAnswerIndex: 1,
        explanation:
          "'Provocative' means stimulating or challenging — the research raises serious questions. 'Contested' means disputed — its methodology and what it actually proves are debated. The phrase is carefully balanced: it acknowledges the significance of the research without overstating its conclusiveness, which is a mark of intellectually honest writing."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "What does the final sentence — asking whether pragmatic responsibility is 'intellectually honest, or a comfortable evasion of a question we lack the courage to answer' — imply about the passage's stance?",
        options: [
          "The passage believes pragmatic responsibility is intellectually dishonest and should be replaced",
          "The passage maintains genuine uncertainty — acknowledging that the pragmatic solution may be a useful fiction we have collectively agreed to maintain because the alternative is too disruptive, without fully confronting its philosophical inadequacy",
          "The passage believes the free will debate is now resolved by neuroscience",
          "The passage argues that philosophical questions without practical consequences are not worth pursuing"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The final sentence does not resolve the tension — it names it. The pragmatic approach may be working solution rather than true answer: a collectively maintained fiction that serves social purposes. The passage does not condemn this, but it refuses to pretend the underlying philosophical problem has been solved. This is honest intellectual humility, not evasion."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "Why does strict determinism create a problem for legal systems, according to the passage?",
        options: [
          "Because it suggests that judges and juries are themselves determined and therefore cannot make fair decisions",
          "Because legal systems assign criminal responsibility on the assumption that individuals could have chosen differently — an assumption that strict determinism renders philosophically incoherent",
          "Because it implies that environmental and social conditions, rather than individuals, should be held responsible for criminal behaviour",
          "Because determinism suggests that punishment cannot deter future crimes if all behaviour is causally fixed"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage states the problem directly: criminal responsibility assumes the person 'could have chosen to act differently.' Strict determinism holds that given identical prior conditions, no different choice was possible — undermining the logical foundation of blame and punishment. This is not merely theoretical: it has real implications for how justice should be administered."
      },
      {
        id: "q5",
        skill: "Vocabulary",
        question: "How does the compatibilist position redefine 'free will,' and why is this redefinition significant?",
        options: [
          "It redefines free will as the absence of any external constraints on behaviour, which makes it compatible with legal accountability",
          "It redefines free will not as the metaphysical ability to have chosen otherwise, but as acting in accordance with one's own reasoning and values without coercion — shifting the concept from a claim about causation to a claim about the relationship between a person and their actions",
          "It redefines free will as a social construct that societies create to maintain order, regardless of its metaphysical truth",
          "It redefines free will as a neurological process that can be measured and verified through brain imaging"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The compatibilist redefinition is philosophically significant because it sidesteps the metaphysical problem (could you have done otherwise?) and reframes freedom as about authenticity and self-determination rather than causation. This allows the concept to coexist with determinism — you can be causally determined and still free, if your actions express your own character and values rather than external compulsion."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 13 – ADVANCED / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-fiction-008",
    title: "The Version of You",
    gradeBand: "Grade 10-12",
    ageBand: "14-17",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 9.3,
    wordCount: 308,
    content: `
The summer she turned sixteen, Imogen discovered that she was different people in different places. Not in the ordinary sense — not the way everyone modulates tone and vocabulary between formal and informal settings. Something more disconcerting than that: she was different in what she actually thought, in what she found funny, in what she cared about.

With her school friends she was sharp, funny, and somewhat cruel in the way that close groups are cruel — a shared vocabulary of dismissal that felt like intimacy. With her family she was quieter, more patient, occasionally more honest about what was wrong. With the elderly woman next door, to whom she had begun delivering groceries on Saturdays, she was attentive and curious in a way that required no performance, because Mrs. Hartley had no knowledge of who Imogen was supposed to be.

She began to wonder which version was real.

She raised this with her English teacher, Mr. Okafor, who had the disconcerting habit of treating casual questions as though they were serious.

"All of them," he said, without hesitation. "And none of them individually."

She waited.

"The self isn't a fixed object," he said. "It's more like a practice — something constituted partly by context, partly by the people you're with, partly by what a situation asks of you. What you're describing isn't inauthenticity. It's responsiveness."

"But which one is the most me?" she pressed.

He considered this. "Probably the one that appears when there's nothing to perform for and nothing at stake. When you're not being read by anyone."

She thought about Mrs. Hartley's kitchen on Saturday mornings — the tea, the undemanding company, the conversations that moved slowly and landed wherever they landed.

She did not tell Mr. Okafor what she thought of in that moment. Some answers, she was learning, were more useful kept interior — not because they were secret, but because speaking them might fix them in a form too small for what they actually were.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does Imogen's final decision not to share her thought with Mr. Okafor suggest about what she is learning?",
        options: [
          "She has lost trust in Mr. Okafor after his answer failed to satisfy her",
          "She is beginning to understand — echoing her grandmother's wisdom in a different register — that some forms of self-knowledge are preserved rather than diminished by not being narrated: speaking might crystallise something into a fixed form smaller than the living reality",
          "She is embarrassed to admit that she enjoys her time with an elderly neighbour",
          "She has decided that language is an inadequate tool for expressing psychological insight"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Imogen's reasoning is precise: she keeps the thought interior 'not because it is secret, but because speaking it might fix it in a form too small for what it actually is.' This is a sophisticated epistemological claim — that articulation can reduce rather than capture certain kinds of understanding. She has reached a conclusion about the limits of language that she is not yet willing to submit to language."
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "What does the description of Imogen with her school friends — 'sharp, funny, and somewhat cruel in the way that close groups are cruel' — reveal about how social belonging can shape behaviour?",
        options: [
          "Imogen is fundamentally an unkind person whose other social performances are masks",
          "Shared cruelty functions as a form of in-group bonding, and participation in it is partly a condition of membership — suggesting that social identity can pull behaviour away from individual values without conscious choice",
          "Imogen's school friendships are superficial compared to her relationship with Mrs. Hartley",
          "Teenagers are inherently more cruel than adults and this changes as they mature"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The phrase 'a shared vocabulary of dismissal that felt like intimacy' is key: the cruelty is not about malice but about belonging. The group's shared language — even when it involves dismissing others — creates cohesion. Imogen participates not because she is cruel but because the group's identity partly requires it. This is a nuanced observation about how context shapes behaviour."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "Mr. Okafor describes the self not as a 'fixed object' but as a 'practice.' What does calling the self a practice imply?",
        options: [
          "That the self must be deliberately constructed through daily habit and routine",
          "That selfhood is not a stable, pre-existing essence but something enacted and constituted through interaction — it is always in process, shaped by context and relationship, rather than a thing possessed independently of them",
          "That the self can be improved through effort in the way that a skill improves with practice",
          "That there is no such thing as a consistent self and that all behaviour is situational performance"
        ],
        correctAnswerIndex: 1,
        explanation:
          "A practice is something done rather than something had. To call the self a practice is to say it is not a static interior object waiting to be discovered but an ongoing activity constituted through living, relating, and responding. This is a philosophical claim — associated with thinkers from Aristotle to modern social constructionists — that identity is dynamic rather than fixed."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "Why does Imogen feel most genuinely herself with Mrs. Hartley, according to Mr. Okafor's reasoning?",
        options: [
          "Because Mrs. Hartley is kind and non-judgemental, making Imogen feel safe",
          "Because in Mrs. Hartley's company there is nothing to perform and nothing at stake — no prior identity to maintain, no audience to read her — freeing a version of herself constituted only by genuine attention and curiosity",
          "Because the relationship is new and Imogen has not yet developed a persona for it",
          "Because Mrs. Hartley reminds Imogen of her grandmother and activates a deeper layer of identity"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Mr. Okafor's criterion is the absence of performance and stakes: 'when you're not being read by anyone.' With Mrs. Hartley, Imogen has no established social role to maintain, no group identity to perform, no image to protect. What emerges in that space is closer to the constitutive self — responsive, attentive, curious — precisely because there is nothing social requiring it to be otherwise."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What central philosophical question about identity does this story explore?",
        options: [
          "Whether teenagers are more authentic than adults because they are still discovering who they are",
          "Whether the self is a fixed, discoverable essence or a dynamic practice constituted through context and relationship — and what the implications of each answer are for how we understand authenticity",
          "How social media has made it more difficult for young people to maintain a consistent sense of identity",
          "Why close friendships are simultaneously the most intimate and most socially coercive relationships we have"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Imogen's question — which version is really me? — is the philosophical problem of identity and authenticity. Mr. Okafor's answer — the self as practice rather than object — represents one significant philosophical position. The story does not resolve the question but inhabits it honestly, ending with Imogen holding an insight she deliberately refuses to fix into language. The central question is about the nature of the self."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 14 – ADVANCED / NON-FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-nonfiction-006",
    title: "The Obligation to Know: On Wilful Ignorance and Moral Responsibility",
    gradeBand: "Grade 10-12",
    ageBand: "14-17",
    difficulty: "Advanced",
    category: "Non-Fiction",
    estimatedReadingLevel: 9.6,
    wordCount: 298,
    content: `
There is a form of ignorance that is not passive. It is chosen — maintained through the deliberate avoidance of information that would require a change in behaviour, belief, or self-conception. Philosophers call this wilful ignorance, and its moral status is considerably more complicated than the simple absence of knowledge.

The standard framework for moral responsibility holds that culpability requires both the capacity to know and the opportunity to know. We do not hold people responsible for harms they could not reasonably have foreseen or prevented. But wilful ignorance introduces a complication: what happens when someone could have known — when the information was available, the capacity to understand it was present, and the only obstacle was an unwillingness to look?

Consider the consumer who prefers not to investigate the supply chains of the products they buy, or the citizen who avoids news about the consequences of policies they support. In both cases, ignorance is not the result of inaccessibility but of a choice — conscious or semiconscious — to protect a preferred self-image or a comfortable way of living from the disruption that knowledge would bring.

Philosophers working in this area have argued that wilful ignorance is morally indistinct from knowing in many cases: if you could have known, and chose not to, the ignorance you maintain becomes a kind of choice — with its own moral weight. The law has partly recognised this in the concept of 'wilful blindness,' which treats deliberate avoidance of knowledge as legally equivalent to having it.

The implications are uncomfortable. A genuinely honest moral life may require not merely avoiding harm we know about, but actively seeking knowledge about harms we might be contributing to without knowing — accepting the disruption to self-image that this knowledge may produce.

This is a harder standard than most ethical frameworks explicitly demand. Whether it is too demanding, or simply demanding in the way that honesty has always been, is a question worth sitting with.
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Main Idea",
        question: "What is the central ethical argument this passage makes?",
        options: [
          "Consumers have a legal obligation to research the supply chains of the products they purchase",
          "Wilful ignorance — the deliberate avoidance of available information to protect comfort or self-image — carries moral responsibility equivalent in many cases to knowing, and a genuinely honest moral life may require actively seeking uncomfortable knowledge",
          "Most people are morally responsible for far more harm than they realise, and this is a crisis of modern ethics",
          "The legal concept of wilful blindness should be extended to cover all forms of consumer behaviour"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage builds from the definition of wilful ignorance through its moral status to the uncomfortable practical implication: moral honesty may require actively seeking knowledge of harms we might be contributing to, not merely avoiding harms we already know about. This is the central argument, stated most directly in the penultimate paragraph."
      },
      {
        id: "q2",
        skill: "Inference",
        question: "Why does the passage describe wilful ignorance as 'considerably more complicated' than simple absence of knowledge?",
        options: [
          "Because it is harder to detect from the outside and therefore harder to hold people accountable for",
          "Because simple ignorance carries no moral weight, whereas wilful ignorance involves a choice — making the person who maintains it, in some sense, responsible for what they chose not to know",
          "Because philosophers disagree about whether wilful ignorance is actually chosen or is a subconscious process",
          "Because the legal system treats wilful ignorance differently in different jurisdictions"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The complication arises because agency is involved: wilful ignorance is not a gap in knowledge but an act of will — a choice to not know. This means the standard moral framework (culpability requires capacity and opportunity to know) cannot simply exempt the wilfully ignorant, because they had both. The choice not to look is itself morally significant."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the passage mean by 'a preferred self-image' that knowledge might disrupt?",
        options: [
          "A public reputation that could be damaged if negative information became known",
          "An internal picture of oneself as good, ethical, or innocent — maintained partly by not looking too closely at the ways one's actions or choices may contribute to harm",
          "A social media presence constructed to project particular values",
          "A professional identity that depends on maintaining certain positions or affiliations"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The preferred self-image the passage refers to is the internal, moral self-concept: the picture we carry of ourselves as essentially decent people. Knowledge that we are contributing to harm — through consumption, political support, or inaction — threatens this image. Wilful ignorance is partly a defence mechanism protecting it from disruption."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "What is the effect of the law's concept of 'wilful blindness' on the philosophical argument the passage makes?",
        options: [
          "It weakens the argument by suggesting the problem has already been adequately addressed by legal systems",
          "It strengthens the argument by showing that the equivalence of deliberate non-knowing and knowing has already been recognised beyond philosophy — lending practical and institutional weight to the moral claim",
          "It redirects the argument from individual ethics to institutional responsibility",
          "It introduces a competing framework that the passage must reconcile with its philosophical claims"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The legal reference works as supporting evidence: if courts already treat deliberate avoidance of knowledge as legally equivalent to having it, this validates the philosophical claim that wilful ignorance carries genuine moral weight. The law's partial recognition reinforces rather than exhausts the argument."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "The passage ends by asking whether the standard it describes is 'too demanding, or simply demanding in the way that honesty has always been.' What does this closing question do?",
        options: [
          "It undermines the argument by admitting that the standard proposed may be unrealistic",
          "It refuses easy closure — acknowledging that the standard is genuinely difficult while suggesting that the difficulty may itself be the point: honesty and moral seriousness have always required effort, and this standard is demanding in the same tradition",
          "It invites readers to choose their own ethical standard based on personal circumstances",
          "It suggests that the passage's argument applies only to people with the time and resources to research the consequences of their choices"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The final question is deliberately open and challenges the reader to sit with its difficulty rather than resolve it quickly. The comparison to honesty is significant: it frames the demanding standard not as an unreasonable imposition but as continuous with a long ethical tradition that has never claimed to be comfortable. The closing question is an invitation to take the argument seriously, not an admission of its failure."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PASSAGE 15 – ADVANCED / FICTION
  // ─────────────────────────────────────────────
  {
    id: "g9-fiction-009",
    title: "After the Results",
    gradeBand: "Grade 10-12",
    ageBand: "14-17",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 9.4,
    wordCount: 312,
    content: `
The results came on a Thursday morning in August. Asha had known they were coming for weeks — had tracked the countdown in the corner of her mind through a summer of deliberate distraction — and yet when her phone buzzed on the kitchen table, she found she could not pick it up for six minutes. She sat with her hands around a cup of tea that had gone cold and experienced, in concentrated form, something she had been living more diffusely all summer: the profound discomfort of a moment that will determine a great deal existing in the same second as the still-open possibility that it might not have gone wrong.

She got a grade she had not expected. Not in the way she had feared, but in the other direction.

She thought, in the minutes after, that she would feel relief. What she felt instead was something more disorienting: a sudden formlessness, as though the scaffolding of anxiety that had been organising her life for two years had been removed all at once, leaving her standing in a space that was larger than she knew what to do with.

She called her father. He made a sound she had never heard from him before — something between a breath and a word — and for a moment neither of them spoke.

"What do you want to do today?" he said finally.

She found she had no answer. The future, which had been a fixed and pressurised point for so long, had opened into something without edges. She had spent so long preparing for a specific outcome that she had not prepared at all for the condition of having got what she wanted.

"I don't know," she said. "I think I need to find out what I was doing all of this for."

Her father was quiet for a moment.

"That," he said carefully, "might be the best possible use of today."
    `.trim(),
    questions: [
      {
        id: "q1",
        skill: "Inference",
        question: "What does the 'sudden formlessness' Asha feels after the good result suggest about the psychological function her anxiety had been serving?",
        options: [
          "It suggests her anxiety was a sign of mental illness that has now resolved itself",
          "It suggests that the anxiety, though painful, had been providing structure and direction — organising her attention and energy around a fixed point — and its removal leaves a disorienting absence of shape",
          "It suggests she is experiencing an emotional crash after a period of sustained stress",
          "It suggests she had not genuinely wanted to succeed and is now uncertain how to feel"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Asha's description is precise: 'the scaffolding of anxiety that had been organising her life for two years had been removed all at once.' Scaffolding is structural — it holds things in shape. The anxiety, whatever its costs, gave her life a coherent shape oriented around a fixed goal. Its removal creates not just relief but formlessness: a space 'larger than she knew what to do with.'"
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "Asha experiences something 'diffusely all summer' and then 'in concentrated form' when the phone buzzes. What does this contrast suggest?",
        options: [
          "She spent the summer in denial and only confronted reality when forced to",
          "The anxiety she had been experiencing at low intensity all summer was suddenly compressed into a single acute moment — the same feeling in a more intense and unavoidable form",
          "She had been distracted from her worry all summer and it suddenly returned",
          "Her feelings changed in nature from confusion to clarity as the results approached"
        ],
        correctAnswerIndex: 1,
        explanation:
          "'Diffusely' means spread out, diluted, present but not concentrated. 'In concentrated form' means the same thing compressed into intensity. The distinction describes how the same underlying emotional reality — uncertainty about consequential results — had been present all summer at low volume and was now suddenly at maximum intensity. The content of the feeling is the same; its amplitude has changed."
      },
      {
        id: "q3",
        skill: "Character Analysis",
        question: "What does Asha's final statement — 'I think I need to find out what I was doing all of this for' — reveal about her?",
        options: [
          "She regrets the amount of work she put in and is questioning whether it was worth it",
          "She is a reflective person who recognises that achieving a goal is not the same as understanding its meaning — and that the work of finding genuine purpose may only begin where the external goal ends",
          "She is experiencing a temporary disorientation that will quickly resolve as she begins the next stage of her education",
          "She is expressing a desire to take time off before beginning university"
        ],
        correctAnswerIndex: 1,
        explanation:
          "Asha's question is not a complaint — it is a recognition. Having got what she worked for, she realises she does not yet know what it is in service of. The external goal (the grade) was real but not final: behind it lies the deeper question of what she wants her life to mean. This is a mark of unusual self-awareness — most people only ask this question much later, if at all."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "Why is Asha unable to answer her father's question — 'What do you want to do today?' — despite having just received excellent results?",
        options: [
          "She is too exhausted from the stress of waiting to make any decisions",
          "Her capacity for self-direction has been so fully organised around achieving a specific goal that its achievement leaves her without an internal compass for what comes next — she has prepared for the outcome but not for the open future beyond it",
          "She is disappointed that her father's response was not more celebratory",
          "She is waiting to hear whether her friends have also received good results before deciding how to feel"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The passage makes this explicit: 'she had spent so long preparing for a specific outcome that she had not prepared at all for the condition of having got what she wanted.' The goal had so thoroughly structured her attention and will that its absence leaves her without direction. This is a psychological consequence of goal-orientation: the goal provides structure, but it cannot provide the meaning that comes after."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What central idea does this passage explore through Asha's experience of success?",
        options: [
          "Academic results are an unreliable measure of a person's actual abilities and worth",
          "Achieving a long-held goal can produce disorientation rather than simple relief — because goals structure our lives and attention, and their achievement opens questions about meaning and purpose that the pursuit itself had deferred",
          "The transition from school to the next stage of life is universally difficult, regardless of academic outcome",
          "Parents play a crucial role in helping young people process significant moments of transition"
        ],
        correctAnswerIndex: 1,
        explanation:
          "The story is not about academic success or failure — it is about what happens to a person when the structuring goal of their life is removed by being achieved. The central insight is that achievement and meaning are not the same thing: reaching a destination does not tell you why you were travelling, or where to go next. Asha's question — 'what was I doing all of this for?' — is the passage's central inquiry."
      }
    ]
  },
  // ... (previous 5 Beginner passages remain above) ...

  {
    id: "g4-fiction-004",
    title: "The Empty Nest",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 5.2,
    wordCount: 215,
    content: `
For weeks, Maya watched a robin build a nest in the pear tree outside her window. The robin laid three blue eggs, then sat on them day and night.
One morning, Maya heard tiny chirping sounds. Three baby birds with open beaks waited for food. Maya watched the mother robin bring worms and insects from dawn until dusk.
Then one day, the largest baby stood on the edge of the nest. It fluttered its wings, jumped, and flew shakily to a lower branch. Within two days, all three had left.
Maya felt a lump in her throat. The nest was empty. Her father put an arm around her. "You helped just by watching quietly," he said. "That's how they learn to be brave."`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "How many eggs did the robin lay?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswerIndex: 1,
        explanation: "The passage states: 'The robin laid three blue eggs.'"
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the word 'fluttered' mean in this passage?",
        options: ["Folded tightly", "Flew perfectly", "Moved wings quickly and lightly", "Stopped moving"],
        correctAnswerIndex: 2,
        explanation: "The baby bird 'fluttered its wings' before jumping — a quick, light wing movement."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Why did Maya feel a lump in her throat?",
        options: ["She was sick", "She was sad the birds left", "She was angry at her father", "She was hungry"],
        correctAnswerIndex: 1,
        explanation: "The nest was empty after she watched the birds grow — a lump in the throat often means sadness or emotion."
      },
      {
        id: "q4",
        skill: "Character Analysis",
        question: "Which word best describes Maya?",
        options: ["Careless", "Observant and caring", "Loud and rude", "Selfish"],
        correctAnswerIndex: 1,
        explanation: "Maya watched the birds for weeks and felt sad when they left, showing she is observant and caring."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the main message of this story?",
        options: ["Birds are dangerous", "Watching quietly can help others grow", "Pear trees are the best", "Always touch baby birds"],
        correctAnswerIndex: 1,
        explanation: "Maya's father says: 'You helped just by watching quietly. That's how they learn to be brave.'"
      }
    ]
  },

  {
    id: "g4-nonfiction-003",
    title: "The Great Pacific Garbage Patch",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Non-Fiction",
    estimatedReadingLevel: 5.3,
    wordCount: 228,
    content: `
Far out in the Pacific Ocean floats a massive collection of trash called the Great Pacific Garbage Patch. It is not a solid island, but millions of tiny pieces of plastic spread across an area twice the size of Texas.
Most of the trash comes from land. Plastic bags, bottles, and straws wash into rivers, which carry them to the ocean. Ocean currents then pull the trash into one large area.
Sea animals mistake plastic for food. Turtles eat floating plastic bags thinking they are jellyfish. Birds feed plastic pieces to their babies.
Scientists are working on solutions. Some boats scoop up plastic. Others invent special nets. But the best solution is to use less plastic and recycle more.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What is the Great Pacific Garbage Patch made of?",
        options: ["Solid islands of metal", "Millions of tiny plastic pieces", "Dead trees and leaves", "Oil and chemicals"],
        correctAnswerIndex: 1,
        explanation: "The passage says it is 'millions of tiny pieces of plastic spread across a huge area.'"
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "Why do sea turtles eat plastic bags?",
        options: ["They like the taste", "They mistake them for jellyfish", "They are angry", "The bags are colorful"],
        correctAnswerIndex: 1,
        explanation: "The passage states: 'Turtles eat floating plastic bags thinking they are jellyfish.'"
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'currents' mean in this passage?",
        options: ["Electrical wires", "Ocean water moving in a direction", "Fish swimming together", "Strong winds"],
        correctAnswerIndex: 1,
        explanation: "Ocean currents are movements of water that 'pull the trash into one large area.'"
      },
      {
        id: "q4",
        skill: "Main Idea",
        question: "What is this passage mostly about?",
        options: ["Different types of fish", "How to build boats", "A large ocean trash problem and its causes", "The weather in Texas"],
        correctAnswerIndex: 2,
        explanation: "The passage describes the garbage patch, where it comes from, how it harms animals, and solutions."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "Why does the author say the best solution is to use less plastic?",
        options: ["Plastic is expensive", "Stopping trash at the source prevents the problem", "Plastic is heavy", "Scientists gave up"],
        correctAnswerIndex: 1,
        explanation: "If we use less plastic, less trash reaches the ocean — stopping the problem before it starts is most effective."
      }
    ]
  },

  {
    id: "g4-fiction-005",
    title: "The Whispering Cave",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 5.1,
    wordCount: 230,
    content: `
Elena and her cousin Marco explored the woods behind their grandmother's house. Marco pointed to a dark opening in a rocky hillside. "Local kids say the cave whispers," he whispered.
Elena grabbed a flashlight. "Let's find out."
Inside, the cave was cool and damp. Drip... drip... water fell from the ceiling. Then Elena heard something: "Elena... Elena..." She froze.
Marco laughed. "It's an echo! Your voice bounced off the walls."
Elena shouted, "Marco!" The cave answered: "Marco... Marco..." They both grinned. The "whisper" was just their own voices returning.
They left the cave smiling. "Sometimes," Elena said, "the scariest things have simple explanations."`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "Who went with Elena to explore the cave?",
        options: ["Her grandmother", "Her cousin Marco", "Her best friend", "Her brother"],
        correctAnswerIndex: 1,
        explanation: "The first sentence says: 'Elena and her cousin Marco explored the woods.'"
      },
      {
        id: "q2",
        skill: "Sequence",
        question: "What happened right after Elena heard a whisper?",
        options: ["She ran away", "She froze", "She screamed", "She turned off the flashlight"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Then Elena heard something... She froze.'"
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "Why did the cave seem to whisper?",
        options: ["A ghost lived inside", "Water drops created sounds", "Echoes bounced their voices back", "The wind blew through cracks"],
        correctAnswerIndex: 2,
        explanation: "Marco explains: 'It's an echo! Your voice bounced off the walls.'"
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'explanations' mean in the last sentence?",
        options: ["Scary stories", "Reasons or answers", "Loud noises", "Hidden treasures"],
        correctAnswerIndex: 1,
        explanation: "Elena says scary things have 'simple explanations' — simple reasons or answers for why they happen."
      },
      {
        id: "q5",
        skill: "Prediction",
        question: "What will Elena and Marco probably do next time they hear a strange sound?",
        options: ["Run home crying", "Look for a logical cause first", "Ignore it forever", "Call the police"],
        correctAnswerIndex: 1,
        explanation: "After learning the whisper was just an echo, they will likely check for simple reasons before being scared."
      }
    ]
  },

  {
    id: "g4-nonfiction-004",
    title: "How Penguins Stay Warm",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Non-Fiction",
    estimatedReadingLevel: 5.0,
    wordCount: 222,
    content: `
Emperor penguins live in Antarctica, the coldest place on Earth. Temperatures can drop to -60°C (-76°F). Yet these birds stay warm through several clever adaptations.
First, penguins have four layers of feathers. The outer layer is waterproof. The inner layers trap air close to the skin, acting like a warm blanket.
Second, penguins huddle together in huge groups called colonies. Thousands of penguins press tightly against each other. Those in the middle stay warmest, so they take turns moving to the cold outside edge.
Third, penguins have a thick layer of blubber under their skin. Blubber stores energy and keeps cold out.
Together, these adaptations allow penguins to survive where most animals cannot.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What is a large group of penguins called?",
        options: ["A flock", "A colony", "A school", "A herd"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Penguins huddle together in huge groups called colonies.'"
      },
      {
        id: "q2",
        skill: "Sequence",
        question: "Which adaptation does the passage mention first?",
        options: ["Blubber", "Huddling", "Feather layers", "Swimming fast"],
        correctAnswerIndex: 2,
        explanation: "The passage lists adaptations in order: 'First, penguins have four layers of feathers.'"
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'adaptations' mean in this passage?",
        options: ["Problems animals face", "Body features or behaviors that help animals survive", "Colors of animals", "Names of baby animals"],
        correctAnswerIndex: 1,
        explanation: "Feathers, huddling, and blubber are all 'adaptations' — special features for surviving in cold."
      },
      {
        id: "q4",
        skill: "Cause and Effect",
        question: "Why do penguins take turns on the outside of the huddle?",
        options: ["They like the cold", "To be fair so all stay warm", "To find food", "To exercise"],
        correctAnswerIndex: 1,
        explanation: "Those in the middle stay warmest, 'so they take turns moving to the cold outside edge' — fairness for survival."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "Why don't penguins' feathers get wet and cold?",
        options: ["They never swim", "The outer layer is waterproof", "They wear plastic coats", "They dry instantly"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'The outer layer is waterproof' — this keeps water from reaching the inner warm layers."
      }
    ]
  },

  {
    id: "g4-fiction-006",
    title: "The Lemonade Stand Promise",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Intermediate",
    category: "Fiction",
    estimatedReadingLevel: 5.2,
    wordCount: 234,
    content: `
Jaden and his sister Keisha set up a lemonade stand every Saturday. Their recipe was secret: fresh lemons, mint from their garden, and just enough sugar.
One Saturday, a new boy named Amir moved in next door. He walked past without saying hello. Jaden whispered, "He's unfriendly."
Keisha shook her head. "Maybe he's just shy."
She poured a cup and walked it to Amir's porch. "Welcome to the neighborhood," she said.
Amir's face lit up. "My old town had no lemonade like this!"
The next week, Amir brought his own table and sold cookies next to them. Together, they earned twice as much. Jaden admitted, "You were right, Keisha. I judged too fast."`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What special ingredient did they add to their lemonade?",
        options: ["Strawberries", "Mint from their garden", "Honey", "Ginger"],
        correctAnswerIndex: 1,
        explanation: "The passage says the recipe included 'fresh lemons, mint from their garden, and just enough sugar.'"
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "Which words best describe Keisha?",
        options: ["Mean and bossy", "Kind and thoughtful", "Lazy and bored", "Scared and quiet"],
        correctAnswerIndex: 1,
        explanation: "Keisha suggests Amir might be shy, then welcomes him with lemonade — showing kindness and thoughtfulness."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Why did Amir walk past without saying hello?",
        options: ["He was angry", "He was likely shy or nervous", "He hated lemonade", "He was deaf"],
        correctAnswerIndex: 1,
        explanation: "Keisha says 'Maybe he's just shy,' and later Amir's face lights up when welcomed — he wasn't unfriendly, just new."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'admitted' mean in the last sentence?",
        options: ["Shouted angrily", "Confessed or acknowledged something true", "Forgot", "Ran away"],
        correctAnswerIndex: 1,
        explanation: "Jaden 'admitted' he was wrong — he confessed or owned up to his mistake."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the main lesson of this story?",
        options: ["Lemonade is delicious", "Don't judge someone before getting to know them", "Cookies sell better than lemonade", "Move to a new town"],
        correctAnswerIndex: 1,
        explanation: "Jaden judged Amir as unfriendly, but Amir was just shy. Keisha's kindness showed the value of patience and openness."
      }
    ]
  },
  
  // ... (previous 5 Beginner + 5 Intermediate passages remain above) ...

  {
    id: "g4-fiction-007",
    title: "The Unfinished Letter",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 5.9,
    wordCount: 268,
    content: `
Grandpa Joe had always been a man of few words. But after he passed away, Sofia found a faded envelope in his desk drawer addressed to her.
Inside was an unfinished letter. It read: "Dear Sofia, I hope one day you understand why I didn't—" The sentence stopped there. The ink was smudged, as if he had paused to think and never returned.
Sofia felt a knot in her stomach. What didn't he do? Why was he sorry?
She asked her mother, who sighed. "Your grandpa wanted to come to your school play last year, but his car broke down. He was too proud to ask for help. He never forgave himself."
Sofia realized the letter wasn't about anger. It was about regret. She finished the letter herself: "—didn't make it to your play. I already knew you were cheering from home. I love you."
She placed the letter back in the drawer, smiling through tears.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "Where did Sofia find the unfinished letter?",
        options: ["Under her pillow", "In a desk drawer", "In the mailbox", "Inside a book"],
        correctAnswerIndex: 1,
        explanation: "The passage states: 'Sofia found a faded envelope in his desk drawer addressed to her.'"
      },
      {
        id: "q2",
        skill: "Inference",
        question: "Why was Grandpa Joe's letter unfinished?",
        options: ["He ran out of paper", "He became ill suddenly", "He paused and never returned to finish it", "Sofia tore it"],
        correctAnswerIndex: 2,
        explanation: "The passage says: 'The ink was smudged, as if he had paused to think and never returned.' This suggests he got distracted or discouraged."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'regret' mean in this passage?",
        options: ["Excitement about the future", "Sadness about something you wish you had done differently", "Anger at someone else", "Pride in your accomplishments"],
        correctAnswerIndex: 1,
        explanation: "Grandpa Joe felt bad for missing the play and 'never forgave himself' — that feeling is regret."
      },
      {
        id: "q4",
        skill: "Character Analysis",
        question: "Which word best describes Grandpa Joe based on the passage?",
        options: ["Carefree and lazy", "Proud and regretful", "Angry and mean", "Forgetful but kind"],
        correctAnswerIndex: 1,
        explanation: "He was 'too proud to ask for help' after his car broke down, and he 'never forgave himself' — showing pride and deep regret."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central theme of this story?",
        options: ["Car repairs are expensive", "Letters are better than phone calls", "Understanding and forgiveness heal old wounds", "School plays are very important"],
        correctAnswerIndex: 2,
        explanation: "Sofia finishes the letter with love instead of anger, showing that understanding Grandpa Joe's regret brought her peace."
      }
    ]
  },

  {
    id: "g4-nonfiction-005",
    title: "The Secret Language of Whales",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Advanced",
    category: "Non-Fiction",
    estimatedReadingLevel: 6.0,
    wordCount: 272,
    content: `
For decades, scientists have been puzzled by the haunting songs of humpback whales. These underwater melodies can travel for thousands of miles across entire oceans.
Male humpbacks sing complex songs that last up to 20 minutes and repeat for hours. What astonishes researchers most is that all whales in the same ocean sing the same version of a song. Then, slowly, the song changes. Within a few years, an entirely new song emerges.
Some scientists believe the songs help males attract females, similar to birdsong. Others argue the songs are maps or social updates: "Food is here," or "Danger there."
Most remarkable of all, whales learn songs from each other. When Australian whales visited the Pacific, Pacific whales began singing Australian tunes. This cultural transmission — sharing knowledge across generations — was once thought unique to humans.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "How long can a humpback whale's song last?",
        options: ["Up to 5 minutes", "Up to 20 minutes", "Up to one hour", "Up to two hours"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Male humpbacks sing complex songs that last up to 20 minutes and repeat for hours.'"
      },
      {
        id: "q2",
        skill: "Vocabulary",
        question: "What does the phrase 'cultural transmission' mean in this passage?",
        options: ["Radio broadcasting underwater", "Sharing learned behaviors across a group", "Fighting between whale families", "Moving to warmer water"],
        correctAnswerIndex: 1,
        explanation: "The passage explains it as 'sharing knowledge across generations' — whales learning songs from each other."
      },
      {
        id: "q3",
        skill: "Cause and Effect",
        question: "What happened when Australian whales visited the Pacific?",
        options: ["They stopped singing", "Pacific whales began singing Australian songs", "All whales became silent", "Pacific whales attacked them"],
        correctAnswerIndex: 1,
        explanation: "The passage states: 'When Australian whales visited the Pacific, Pacific whales began singing Australian tunes.'"
      },
      {
        id: "q4",
        skill: "Inference",
        question: "Why does the author say this discovery is 'most remarkable of all'?",
        options: ["Whales are louder than humans", "Sharing culture was once thought unique to humans", "Australian whales are smarter", "Pacific whales are older"],
        correctAnswerIndex: 1,
        explanation: "The passage directly states: 'This cultural transmission... was once thought unique to humans.' Finding it in whales is remarkable."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the main idea of this passage?",
        options: ["Whales are the loudest animals", "Humpback whales communicate with complex, changing songs and learn from each other", "All whales sing the same song forever", "Female whales sing louder than males"],
        correctAnswerIndex: 1,
        explanation: "The passage focuses on song complexity, how songs change over time, and how whales learn from each other across oceans."
      }
    ]
  },

  {
    id: "g4-fiction-008",
    title: "The Bridge Builder's Lesson",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 5.8,
    wordCount: 279,
    content: `
Two villages were separated by a deep, rocky gorge. For years, the villagers argued about who should build the first bridge. The north village blamed the south. The south village blamed the north.
A young girl named Anya grew tired of the fighting. She gathered stones from both sides and began stacking them at the narrowest point of the gorge.
"What are you doing?" scoffed an elder. "They will never help."
Anya continued. After three days, a boy from the south village brought a heavy log. "My father said this is foolish," the boy said, "but I disagree."
Soon, more villagers arrived. By week's end, a simple bridge connected the two sides. The first person to cross was the elder who had scoffed. He shook hands with a man from the opposite side.
"A bridge takes two sides," Anya said. "But someone has to place the first stone."`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What separated the two villages?",
        options: ["A river", "A deep, rocky gorge", "A large wall", "A forest"],
        correctAnswerIndex: 1,
        explanation: "The first sentence states: 'Two villages were separated by a deep, rocky gorge.'"
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "Which words best describe Anya?",
        options: ["Bossy and loud", "Patient and proactive", "Scared and shy", "Lazy and complaining"],
        correctAnswerIndex: 1,
        explanation: "Anya didn't wait for others to start — she 'gathered stones' and began building, showing patience and initiative."
      },
      {
        id: "q3",
        skill: "Sequence",
        question: "What happened right after the boy from the south brought a log?",
        options: ["Anya gave up", "More villagers arrived to help", "The bridge collapsed", "The elder stopped them"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Soon, more villagers arrived' after the boy brought the log."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'scoffed' mean in this passage?",
        options: ["Praised loudly", "Laughed or spoke in a mocking way", "Cried sadly", "Whispered secretly"],
        correctAnswerIndex: 1,
        explanation: "The elder said 'They will never help' in a dismissive, mocking tone — that is scoffing."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the central message of this story?",
        options: ["Building bridges is hard work", "Someone must take the first step to solve a problem", "Elders are always right", "Boys are stronger than girls"],
        correctAnswerIndex: 1,
        explanation: "Anya says: 'Someone has to place the first stone' — meaning one person's action can inspire others to cooperate."
      }
    ]
  },

  {
    id: "g4-nonfiction-006",
    title: "The Accidental Invention of Potato Chips",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Advanced",
    category: "Non-Fiction",
    estimatedReadingLevel: 5.7,
    wordCount: 258,
    content: `
In 1853, a Native American chef named George Crum worked at a fancy resort in Saratoga Springs, New York. A customer repeatedly sent back his fried potatoes, complaining they were too thick and soggy.
Annoyed, Crum decided to teach the customer a lesson. He sliced potatoes paper-thin, fried them until they were hard and crunchy, and dumped extra salt on top. He expected the customer to be furious.
Instead, the customer loved them. Other guests demanded the same "Saratoga Chips." Soon, they appeared on every menu.
Crum never patented his invention, so he made little money. But his "mistake" became one of the world's most popular snacks. Today, Americans eat over 1.5 billion pounds of potato chips each year — all because one chef got annoyed.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What year were potato chips invented?",
        options: ["1753", "1853", "1903", "1953"],
        correctAnswerIndex: 1,
        explanation: "The passage states: 'In 1853, a Native American chef named George Crum' invented them."
      },
      {
        id: "q2",
        skill: "Cause and Effect",
        question: "Why did George Crum make the potatoes extremely thin and crunchy?",
        options: ["He followed a recipe", "He wanted to annoy the complaining customer", "He ran out of oil", "He was practicing for a competition"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Annoyed, Crum decided to teach the customer a lesson' by making them impossible to eat with a fork."
      },
      {
        id: "q3",
        skill: "Vocabulary",
        question: "What does the word 'patented' mean in this passage?",
        options: ["Ate quickly", "Legally protected an invention so others cannot copy it", "Threw away", "Gave as a gift"],
        correctAnswerIndex: 1,
        explanation: "Crum never patented his invention, meaning he never legally claimed ownership — so 'he made little money.'"
      },
      {
        id: "q4",
        skill: "Sequence",
        question: "What happened immediately after Crum added extra salt to the crunchy potatoes?",
        options: ["He threw them away", "The customer loved them", "He ate them himself", "The restaurant closed"],
        correctAnswerIndex: 1,
        explanation: "The passage says: 'Instead, the customer loved them' — that was the immediate result."
      },
      {
        id: "q5",
        skill: "Inference",
        question: "Why does the author say 'all because one chef got annoyed' at the end?",
        options: ["To show anger is always bad", "To highlight that great inventions can come from accidents or frustration", "To make fun of George Crum", "To encourage bad behavior"],
        correctAnswerIndex: 1,
        explanation: "The author uses humor to show that a negative emotion (annoyance) led accidentally to a world-famous snack."
      }
    ]
  },

  {
    id: "g4-fiction-009",
    title: "The Keeper of Small Wishes",
    gradeBand: "Grade 4-5",
    ageBand: "9-11",
    difficulty: "Advanced",
    category: "Fiction",
    estimatedReadingLevel: 6.1,
    wordCount: 298,
    content: `
Old Mrs. Chen lived alone at the end of Maple Street. Children whispered that she was a witch. In truth, she was a retired librarian with a peculiar habit: each morning, she swept the entire sidewalk, not just her own.
When Leo's skateboard wheel broke, he couldn't afford a new one. He sat on her steps, defeated. Mrs. Chen appeared. "Small wishes matter too," she said, handing him a shoebox filled with spare skateboard parts.
"I'm not a witch," she laughed. "I just pay attention."
Leo helped her sweep for a week. He learned that she collected lost buttons, unmatched socks, and stray marbles. She returned everything to its owner. "People notice when something small goes missing," she said. "Even if they don't say it."
When Mrs. Chen moved away, she left Leo the shoebox. On top was a note: "Now you're the keeper."
Leo realized that kindness wasn't about grand gestures. It was about noticing the small things others overlooked.`.trim(),
    questions: [
      {
        id: "q1",
        skill: "Literal Recall",
        question: "What was Mrs. Chen's job before she retired?",
        options: ["A teacher", "A librarian", "A doctor", "A baker"],
        correctAnswerIndex: 1,
        explanation: "The passage states: 'In truth, she was a retired librarian with a peculiar habit.'"
      },
      {
        id: "q2",
        skill: "Character Analysis",
        question: "Which phrase best describes Mrs. Chen's personality?",
        options: ["Mean and mysterious", "Observant and quietly generous", "Lazy and forgetful", "Loud and boastful"],
        correctAnswerIndex: 1,
        explanation: "She notices lost buttons and spare skateboard parts, then returns or gives them — observant and quietly generous."
      },
      {
        id: "q3",
        skill: "Inference",
        question: "Why did children whisper that Mrs. Chen was a witch?",
        options: ["She had a black cat", "She had unusual habits and kept to herself", "She could fly", "She cursed people"],
        correctAnswerIndex: 1,
        explanation: "Her 'peculiar habit' of sweeping the whole sidewalk and collecting small items seemed strange to children who didn't know her."
      },
      {
        id: "q4",
        skill: "Vocabulary",
        question: "What does the word 'peculiar' mean in this passage?",
        options: ["Normal and boring", "Strange or unusual", "Loud and noisy", "Fast and quick"],
        correctAnswerIndex: 1,
        explanation: "Sweeping the entire sidewalk every morning is an unusual or 'peculiar' habit."
      },
      {
        id: "q5",
        skill: "Main Idea",
        question: "What is the main message of this story?",
        options: ["Old people are mysterious", "Skateboarding is dangerous", "Small acts of noticing and kindness matter greatly", "Never trust neighbors"],
        correctAnswerIndex: 2,
        explanation: "The ending states: 'Kindness wasn't about grand gestures. It was about noticing the small things others overlooked.'"
      }
    ]
  }
];



