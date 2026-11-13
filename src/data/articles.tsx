export type Article = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: string[];
  pullQuote?: string;
};

export const articles: Article[] = [
  {
    id: '1',
    slug: 'the-quiet-architecture-of-morning-light',
    title: 'The Quiet Architecture of Morning Light',
    subtitle: 'How the first hour of daylight shapes the way we think, make, and remember',
    excerpt:
      'There is a particular quality to early light that asks nothing of you. It arrives without urgency, pooling across surfaces as if it had all the time in the world — because, for a moment, it does.',
    category: 'design',
    author: { name: 'Elena Marsh', role: 'Contributing Editor' },
    date: 'October 21, 2026',
    readTime: 8,
    image: 'https://images.pexels.com/photos/973505/pexels-photo-973505.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    imageAlt: 'Geometric pendant light fixtures casting warm light in a minimal space',
    featured: true,
    pullQuote:
      'The rooms we live in are not containers for our lives but quiet collaborators in how those lives unfold.',
    body: [
      'There is a particular quality to early light that asks nothing of you. It arrives without urgency, pooling across surfaces as if it had all the time in the world — because, for a moment, it does.',
      'I have spent several years now paying attention to this hour, not out of discipline but out of a growing conviction that most of what I understand about beauty I learned from the way light moves through a room before anyone has asked anything of it. The angle changes with the seasons, and so the room changes. In winter the light comes in low and gold and long, stretching itself across the floor like an animal that has found a warm place to rest. In summer it is higher, whiter, more noncommittal — it touches the ceiling and leaves.',
      '## A grammar of warmth',
      'Architects have always known this, of course. They speak of orientation and solar gain and daylight factors, and these are real and important things. But underneath the technical vocabulary there is an older, quieter conversation about what light does to a person — how it orients them not only in space but in feeling. A room that catches the morning well is a room that forgives you for waking up uncertain.',
      'The Japanese have a word, *komorebi*, for the dappled light that filters through leaves. It is not a technical term. It is a word that acknowledges that light is never just illumination — it is always also a mood, a memory, a small instruction in how to pay attention.',
      '> The rooms we live in are not containers for our lives but quiet collaborators in how those lives unfold.',
      'When I design a space now — whether it is a room or a page or the structure of a day — I begin by asking where the morning will enter. Not where the windows are, exactly, but where the first useful light will land, and what it will touch first. A table, a wall, a section of floor. This is not mysticism. It is the same logic a painter uses when deciding where to place the warmest note in a composition: you are telling the eye where to begin.',
      '## The furniture of attention',
      'There is a difference between a room that is bright and a room that is well-lit. Brightness is a measurement; being well-lit is a relationship. The most inviting rooms I know are not the brightest. They are the ones where light has been allowed to do its slow, layered work — reflecting off one surface onto another, gathering in corners, leaving some places in deliberate shadow.',
      'This is, I think, a useful metaphor for almost anything. Attention works the same way. You cannot simply turn it on. You can only arrange the conditions under which it arrives naturally, and then be patient enough to let it pool.',
      'The morning light will not wait for you to be ready. But if you have made a place for it, it will find you there.',
    ],
  },
  {
    id: '2',
    slug: 'the-potter-and-the-pause',
    title: 'The Potter and the Pause',
    subtitle: 'On the discipline of stopping at exactly the right moment',
    excerpt:
      'The hardest part of making anything is knowing when to stop. A potter learns this at the wheel, where a half-second of hesitation can be the difference between a form that breathes and one that collapses.',
    category: 'craft',
    author: { name: 'Theo Kallen', role: 'Staff Writer' },
    date: 'October 18, 2026',
    readTime: 6,
    image: 'https://images.pexels.com/photos/29418319/pexels-photo-29418319.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    imageAlt: 'Artisan hands shaping clay on a pottery wheel',
    pullQuote:
      'Mastery is not the ability to keep going. It is the wisdom to recognize the moment the work no longer needs you.',
    body: [
      'The hardest part of making anything is knowing when to stop. A potter learns this at the wheel, where a half-second of hesitation can be the difference between a form that breathes and one that collapses into itself.',
      'I watched a potter named Margit work one afternoon in a studio outside of Utrecht. She had been throwing for forty years. Her hands moved with a sureness that looked almost casual, the way a good writer\'s sentences can look casual on the page. But what struck me most was the pause — the precise, deliberate moment when she lifted her hands away and let the wheel slow.',
      '## The shape of restraint',
      '"You can always add more clay," she said, not looking up. "You cannot take it away." This is the central problem of making: the medium wants more, and the maker must decide when more becomes too much. The wheel does not know when to stop. The clay does not know. Only the hands know, and only if they have learned to listen.',
      'There is a temptation, in any craft, to keep refining. To sand one more time, to revise one more pass, to add the detail that will finally make it complete. But completeness is not the result of accumulation. It is the result of restraint — of recognizing the moment when the form has arrived and any further intervention would only push it past itself.',
      '> Mastery is not the ability to keep going. It is the wisdom to recognize the moment the work no longer needs you.',
      'Margit told me that early in her career she ruined more pots by overworking them than by any other mistake. She would keep touching the rim, adjusting the curve, smoothing a surface that was already smooth. The form would lose its freshness — that quality that makes a handmade object feel alive, as though it were still in the process of becoming.',
      '## Learning to lift your hands',
      'The pause is not passivity. It is a particular kind of attention — one that is willing to let the work exist without you for a moment, to see whether it holds. This is harder than it sounds. The maker\'s instinct is to stay involved, to keep shaping, to remain the author. But the best work, Margit said, is the work that eventually tells you it is finished. You only hear it if you are quiet enough to listen.',
      'I have thought about this often, and not only about pottery. The pause applies to writing, to design, to conversation, to the way we arrange our days. There is always more that could be done. The discipline is in recognizing what already has been.',
    ],
  },
  {
    id: '3',
    slug: 'against-the-attention-economy',
    title: 'Against the Attention Economy',
    subtitle: 'A modest proposal for reclaiming the rooms of our own minds',
    excerpt:
      'We have built a world that treats human attention as a resource to be extracted, refined, and sold. What would it mean to treat it instead as a garden — something to be tended, protected, and allowed to lie fallow?',
    category: 'essay',
    author: { name: 'Iris Vaughn', role: 'Senior Editor' },
    date: 'October 15, 2026',
    readTime: 11,
    image: 'https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    imageAlt: 'A warmly lit home library filled with books',
    pullQuote:
      'Attention is not a currency to be spent. It is the medium in which the self is composed — and we have been remarkably careless about who is allowed to mint it.',
    body: [
      'We have built a world that treats human attention as a resource to be extracted, refined, and sold. The infrastructure of our daily lives — the phones in our pockets, the feeds on our screens, the notifications that interrupt our thoughts — is optimized for one purpose: to capture and hold our gaze for as long as possible, and to sell that holding to the highest bidder.',
      'This is not a new observation. What is less often noted is how thoroughly this arrangement has colonized our inner lives — not just our time, but the very texture of our thinking. We do not merely spend attention; we are spent by it.',
      '## The extraction model',
      'The language of the attention economy is the language of mining. We speak of engagement, of capture, of retention. Attention is framed as a deposit to be withdrawn, a well to be tapped. The implicit assumption is that attention is something we have, and that others want — a commodity like any other, subject to the same logic of supply and demand.',
      'But attention is not like oil or gold. It is not a fixed quantity that exists independently of how it is used. Attention is shaped by its objects. What we attend to determines, over time, what we are capable of attending to. The mind that spends its hours scrolling is not the same mind that spends its hours reading, and the difference is not merely in what it knows but in what it can do.',
      '> Attention is not a currency to be spent. It is the medium in which the self is composed — and we have been remarkably careless about who is allowed to mint it.',
      '## The garden as counter-metaphor',
      'A garden is not a mine. It is a living system that responds to care, that changes with the seasons, that requires periods of rest. A gardener does not extract value from the soil; they cultivate conditions under which things grow. The garden teaches a different relationship to attention: not as a resource to be spent but as a practice to be tended.',
      'This is not a romantic metaphor. It is a practical one. When you treat attention as a garden, certain things become obvious that are invisible under the extraction model. You notice that attention needs fallow periods — times when nothing in particular is being attended to, and the mind is allowed to settle. You notice that what you plant matters: a diet of outrage and novelty produces a different inner landscape than a diet of depth and patience. You notice that attention cannot be forced, only invited.',
      '## What we lose',
      'The cost of the attention economy is not measured only in hours, though the hours are staggering enough. The deeper cost is in what we become unable to do — the slow, demanding forms of attention that writing, making, and thinking deeply require. These are not skills you can switch on. They are capacities, built over time, that atrophy when unused.',
      'Simone Weil wrote that attention, at its purest, is a form of prayer. Whether or not one shares her theology, the underlying point is worth taking seriously: attention is the most fundamental act of the human mind, and how we direct it determines the shape of our inner lives. To surrender the direction of our attention to systems designed to exploit it is to surrender something close to the core of who we are.',
      '## A modest practice',
      'I do not have a program for dismantling the attention economy. But I have a practice, small and daily, that has changed how I experience my own mind. I begin each morning with an hour of no-input time — no screens, no feeds, no incoming information. I read, or I sit, or I walk. The content of the hour matters less than its boundary: for sixty minutes, nothing is permitted to demand my attention. I must choose, moment by moment, where to place it.',
      'It is a small thing. But small things, tended over time, become gardens.',
    ],
  },
  {
    id: '4',
    slug: 'a-lighthouse-on-the-edge-of-weather',
    title: 'A Lighthouse on the Edge of Weather',
    subtitle: 'Notes from a week on the North Sea coast',
    excerpt:
      'The lighthouse does not calm the storm. It does not even acknowledge it. It simply continues to send its steady signal into the dark, and that continuity — not the light itself — is what the ships are navigating by.',
    category: 'travel',
    author: { name: 'Caleb Frost', role: 'Contributing Writer' },
    date: 'October 12, 2026',
    readTime: 7,
    image: 'https://images.pexels.com/photos/27786022/pexels-photo-27786022.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    imageAlt: 'A lighthouse on a rock in the sea under a dramatic stormy sky',
    pullQuote:
      'Continuity is not the same as permanence. It is the daily, deliberate choice to keep showing up — to send the signal again, regardless of whether anyone is listening.',
    body: [
      'The lighthouse does not calm the storm. It does not even acknowledge it. It simply continues to send its steady signal into the dark, and that continuity — not the light itself — is what the ships are navigating by.',
      'I spent a week last autumn in a converted keeper\'s cottage on the North Sea coast. The lighthouse itself was automated now, its keeper long replaced by a mechanism that required no warmth, no company, no particular courage. But the building remained, and someone had made a small business of renting its outbuildings to people who wanted, for a few days, to live at the edge of weather.',
      '## The education of wind',
      'The wind there was unlike any I had known. It was not a presence but a condition — the default state of the air, which calmed only briefly and without warning. On the first day I found it hostile. By the third I had stopped fighting it. By the fifth I had begun to plan my walks around it, the way one plans around tides.',
      'There is something clarifying about sustained weather. It removes the illusion that the world is arranged for your convenience. You become a participant in a system that does not care about your preferences, and the result — paradoxically — is not desolation but a kind of relief. The pressure to arrange everything lifts. You are here, and the weather is here, and the negotiation between you is honest.',
      '> Continuity is not the same as permanence. It is the daily, deliberate choice to keep showing up — to send the signal again, regardless of whether anyone is listening.',
      '## What the keeper knew',
      'The old keeper\'s logs were in a drawer in the cottage, dating back to the 1950s. They were mostly weather readings — wind speed, visibility, sea state — recorded in a steady hand twice a day for decades. But occasionally there were notes. "Sea very heavy. No ships visible." "Gull on the lantern room, second time this week." "Snow. Beautiful."',
      'I read through them one evening with the wind pressing against the windows. What struck me was not the drama — there was almost no drama — but the accumulation. Day after day, the same observations, the same patient recording of conditions that would change and change again and mean very little in isolation but, taken together, described a life.',
      '## The signal',
      'On my last night the wind dropped, briefly, and I walked out to the point. The light turned its slow circle above me, and out on the water there was nothing — no ships, no movement, just the dark sea doing what it always did. The light was not for me. It was not for anyone, just then. But it was on. It had been on for a hundred years, through storms and quiet nights and the long automation of its own operation, and it would be on tomorrow, and the day after.',
      'This, I thought, is what continuity looks like. Not a grand gesture but a repeated one. Not permanence but the decision, made again and again, to keep the signal going.',
    ],
  },
  {
    id: '5',
    slug: 'the-return-of-the-analog-hour',
    title: 'The Return of the Analog Hour',
    subtitle: 'Why a generation raised on streaming is learning to listen to records again',
    excerpt:
      'The vinyl revival is often dismissed as nostalgia. But something more interesting is happening: a generation is rediscovering that the medium shapes the listening, and that some media make you listen better.',
    category: 'culture',
    author: { name: 'Mara Solis', role: 'Contributing Writer' },
    date: 'October 9, 2026',
    readTime: 5,
    image: 'https://images.pexels.com/photos/6521626/pexels-photo-6521626.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    imageAlt: 'A vinyl record playing on a vintage turntable',
    pullQuote:
      'The record does not let you skip. It asks you to stay — and in staying, you hear things the shuffle would never have allowed you to reach.',
    body: [
      'The vinyl revival is often dismissed as nostalgia — a retro affectation, a bit of aesthetic cosplay by people who miss the look of things they never actually lived through. But spend an evening with someone who has just bought their first turntable and you begin to suspect something more interesting is happening.',
      'What they are responding to is not the warmth of the sound, though that is real. They are responding to the shape of the experience — the fact that a record demands a different kind of listening than a streaming queue. You cannot skip with a gesture. You cannot shuffle. You have to get up, turn the record, and place the needle, and in doing so you commit to listening to a side of music in the order someone intended.',
      '## The discipline of the side',
      'This sounds like inconvenience, and it is. But inconvenience is not always a flaw. Sometimes it is a structure — a set of constraints that forces a particular kind of engagement. The streaming service removes all friction, and what you get is a listening experience that can be interrupted, fragmented, and backgrounded at any moment. The record adds friction back, and what you get is listening as an activity — something you are doing, not something that is happening to you.',
      '> The record does not let you skip. It asks you to stay — and in staying, you hear things the shuffle would never have allowed you to reach.',
      'I do not think records are inherently better than files. The format is not the point. The point is that the format shapes the attention, and different formats cultivate different capacities. A generation that grew up with infinite, frictionless music is discovering, through vinyl, that limitation can be a form of generosity — that being unable to skip is sometimes exactly what you need to actually hear.',
      '## The analog hour',
      'A friend who teaches music history told me she has started assigning her students an "analog hour" each week: one hour of listening to a complete album, in order, with no other activity. She said the results were immediate. Students who had never sat through an entire album began to talk about tracks in relation to each other, about pacing and sequence, about the arc of a record. They were not hearing new music. They were hearing old music in a new way — because the format had given them the patience to actually listen.',
      'This is the lesson, I think. Not that analog is superior, but that the ease of digital has cost us certain forms of attention, and that those forms can be recovered — sometimes by reaching for the very technologies we thought we had outgrown.',
    ],
  },
  {
    id: '6',
    slug: 'concrete-poetry-the-language-of-brutalism',
    title: 'Concrete Poetry',
    subtitle: 'Reading brutalism as a language of honesty rather than hostility',
    excerpt:
      'Brutalism is the most misunderstood architectural movement of the last century. Its concrete forms are called cold, oppressive, inhuman. But look closer and you find a philosophy of radical honesty — a refusal to dress structure in costume.',
    category: 'design',
    author: { name: 'Elena Marsh', role: 'Contributing Editor' },
    date: 'October 6, 2026',
    readTime: 9,
    image: 'https://images.pexels.com/photos/31635618/pexels-photo-31635618.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    imageAlt: 'Detailed view of a concrete building facade in brutalist style',
    pullQuote:
      'Brutalism does not flatter you. It asks you to meet it on its own terms — and that discomfort, that refusal to charm, is its form of integrity.',
    body: [
      'Brutalism is the most misunderstood architectural movement of the last century. Its concrete forms are called cold, oppressive, inhuman. Cities have demolished its buildings and called it progress. But look closer — past the surface associations with totalitarian regimes and parking garages — and you find a philosophy of radical honesty: a refusal to dress structure in costume.',
      'The name itself is a mistranslation. *Béton brut* means raw concrete — the material, not an attitude. Le Corbusier used the phrase to describe his preference for leaving concrete unfinished, its texture and form honest about how it was made. The English "brutalism" turned a material description into an emotional judgment, and the movement has been fighting the PR battle ever since.',
      '## The ethics of exposure',
      'What brutalism proposes is simple and, to many, unsettling: that a building should show how it is built. Its structure should be visible. Its materials should be unadorned. Its functions should be legible on its exterior. This is not hostility. It is a particular kind of respect — the respect of assuming the viewer can handle the truth of how things are made.',
      'Most architecture is a kind of theater. Cladding hides structure. ornamentation disguises function. The building presents a face to the world that is different from the machine behind it. There is nothing wrong with theater, but brutalism offers an alternative: a building that is exactly what it appears to be, that does not pretend to be lighter or warmer or more delicate than it is.',
      '> Brutalism does not flatter you. It asks you to meet it on its own terms — and that discomfort, that refusal to charm, is its form of integrity.',
      '## The texture of truth',
      'The best brutalist buildings reward attention in ways that smoother architecture does not. The surface of raw concrete records the process of its making — the grain of the formwork, the lines of the pour, the occasional imprint of a tie rod. It is a material that shows its history. Like a handmade pot that bears the marks of the wheel, it is honest about its origins.',
      'This is why brutalism has persisted, despite decades of unpopularity, as a touchstone for designers and architects who value directness. It represents a position — the position that honesty is more valuable than charm, that structure is more interesting than surface, that a building should be legible rather than merely pleasing.',
      '## Learning to read it',
      'I did not always love brutalism. For years I saw only the surfaces — the gray, the weight, the institutional associations. What changed me was spending time in a well-designed brutalist space. The proportions were generous. The light, filtered through deep concrete reveals, was soft and steady. The materials aged well, developing a patina of moss and stain that made them feel integrated with the landscape rather than imposed on it.',
      'The building did not charm me. It did something more valuable: it earned my respect. It was honest about what it was, and it asked me to be honest about what I valued. That exchange — direct, unadorned, and slightly uncomfortable — is the heart of the brutalist proposition. It is not for everyone. But it is not without integrity.',
    ],
  },
  {
    id: '7',
    slug: 'the-seasonal-kitchen-and-the-art-of-limitation',
    title: 'The Seasonal Kitchen and the Art of Limitation',
    subtitle: 'How cooking with what is available right now teaches you to think inside the circle',
    excerpt:
      'The seasonal cook is not a purist. They are a pragmatist who has discovered that limitation is not the enemy of creativity but its most reliable engine.',
    category: 'craft',
    author: { name: 'Theo Kallen', role: 'Staff Writer' },
    date: 'October 3, 2026',
    readTime: 6,
    image: 'https://images.pexels.com/photos/6129281/pexels-photo-6129281.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    imageAlt: 'Roasted pumpkin and seasonal vegetables',
    pullQuote:
      'The seasonal kitchen does not ask what you want to cook. It asks what is here, right now, and what it wants to become — which is a much better question.',
    body: [
      'The seasonal cook is not a purist. They are a pragmatist who has discovered that limitation is not the enemy of creativity but its most reliable engine.',
      'We tend to imagine creativity as the freedom to do anything — an open field, no constraints, infinite choice. But anyone who has actually made things knows that total freedom is paralyzing. The blank page, the empty canvas, the kitchen with every ingredient in the world available year-round: these are not gifts. They are problems. The creative mind needs edges to push against.',
      '## What the garden offers',
      'A seasonal kitchen is a kitchen with edges. In October, there are squash and apples and root vegetables and hardy greens. In June, there are tomatoes and stone fruit and the first herbs. The list is short, and it changes, and the cook must work within it. This is not deprivation. It is direction.',
      '> The seasonal kitchen does not ask what you want to cook. It asks what is here, right now, and what it wants to become — which is a much better question.',
      'The difference is profound. When you ask "what do I want to cook," you start from desire, which is vague and often unoriginal — you want what you have seen, what you remember, what the algorithm suggests. When you ask "what is here, and what does it want to become," you start from material. You engage with the actual qualities of the thing in front of you — its texture, its sweetness, its water content — and you follow where it leads.',
      '## The discipline of the calendar',
      'Seasonal cooking teaches a patience that modern food culture has largely abandoned. You cannot have tomatoes in January, not good ones, and the seasonal cook does not try. They wait. And in the waiting, they discover that anticipation is an ingredient — that the first tomato of July tastes different from the tomatoes you have been eating all year, because you have been hungry for it.',
      'This is the deeper lesson of the seasonal kitchen: that limitation, accepted and worked within, produces a quality of attention that abundance cannot. The cook with everything available year-round has no reason to pay special attention to any of it. The cook who knows that the quince will only be here for three weeks pays very close attention indeed.',
      'Limitation is not loss. It is focus. And focus, in the kitchen as in everything, is what makes the work good.',
    ],
  },
  {
    id: '8',
    slug: 'on-keeping-a-notebook',
    title: 'On Keeping a Notebook',
    subtitle: 'The quiet practice that turns fragments into a life',
    excerpt:
      'A notebook is not a diary. It is not a journal. It is a workspace for the mind — a place where half-formed thoughts are allowed to exist without the pressure of becoming something.',
    category: 'essay',
    author: { name: 'Iris Vaughn', role: 'Senior Editor' },
    date: 'September 30, 2026',
    readTime: 8,
    image: 'https://images.pexels.com/photos/5357086/pexels-photo-5357086.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    imageAlt: 'An open notebook with a pen and coffee cup',
    pullQuote:
      'The notebook is not where you record what you think. It is where you discover what you think — by writing your way into thoughts you did not know you had.',
    body: [
      'A notebook is not a diary. It is not a journal. It is a workspace for the mind — a place where half-formed thoughts are allowed to exist without the pressure of becoming something.',
      'I have kept notebooks for twenty years, and I have never gone back and read them. This sounds wasteful, and perhaps it is, but the value of the notebook was never in its contents. It was in the act of writing — the daily, unpressured practice of putting down what I noticed, what I was thinking about, what a phrase or a face or a quality of light had prompted in me.',
      '## The workspace, not the gallery',
      'The mistake most people make with notebooks is treating them as destinations — places where finished thoughts are stored. But a notebook is a workshop. It is messy, provisional, often incomprehensible to anyone but the writer. It is not for keeping things. It is for working things out.',
      'Joan Didion, in her essay "On Keeping a Notebook," described it as a place to keep "the shimmer of a passing moment." She did not mean beautiful or important moments. She meant the moments that caught her attention for reasons she could not fully explain — a stranger\'s gesture, an overheard phrase, the particular light on a particular afternoon. These fragments, she wrote, were not meaningful in themselves. But the act of noticing them, of writing them down, was a way of paying attention to her own attention — of learning, over time, what she cared about.',
      '> The notebook is not where you record what you think. It is where you discover what you think — by writing your way into thoughts you did not know you had.',
      '## The permission to be incomplete',
      'What makes a notebook work is the absence of audience. You are not writing for anyone. You are not even writing for your future self, who may or may not ever read it. You are writing for the present moment — to externalize a thought, to see it on the page, to find out what it looks like outside your head.',
      'This requires a particular kind of permission: the permission to be incoherent, to write sentences that go nowhere, to record observations that have no obvious purpose. Most of what you write will never be used. This is not a failure. It is the medium working as intended — the way a sketchbook is mostly failed sketches, and the failed sketches are what make the good ones possible.',
      '## What the practice teaches',
      'Over time, the notebook teaches you things that no other practice has taught me. It teaches you that thoughts are not found but made — that the act of writing is not transcription but creation, and that you often do not know what you think until you have written your way to the end of a sentence. It teaches you to notice more, because the habit of writing things down makes the world denser — every day contains more material when you are in the habit of collecting it. And it teaches you patience with your own mind, which is slower and more circular than you would like, and which arrives at its best thoughts not through force but through steady, unpressured attention.',
      'Keep a notebook. Do not worry about what you write in it. Write down what you notice, what you think, what you are wondering about. Do not read it back. The value is not in the record. It is in the practice — the daily, quiet act of paying attention to your own life.',
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticle(): Article {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function getRecentArticles(limit?: number): Article[] {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
