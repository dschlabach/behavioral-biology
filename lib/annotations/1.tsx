import { Annotation, prepareAnnotation } from '@/lib/annotations/config'
import { timestampToSeconds } from '@/utils'

const annotations: Annotation[] = [
  {
    type: 'person',
    start: '00:00:00,500',
    name: 'Robert Sapolsky',
    summary:
      'Robert Morris Sapolsky (born April 6, 1957) is an American academic, neuroscientist, and primatologist. He is the John A. and Cynthia Fry Gunn Professor at Stanford University, and is a professor of biology, neurology, and neurosurgery.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Robert_Sapolsky',
    photo: '/sapolsky.jpg',
  },
  {
    type: 'wiki',
    start: timestampToSeconds('00:05:15,000'),
    name: 'Amygdala',
    summary:
      'The amygdala is a small almond-shaped structure in the brain that plays a key role in processing emotions, particularly fear.',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Amyg.png',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Amygdala',
  },
  {
    type: 'wiki',
    start: timestampToSeconds('00:05:41,000'),
    name: 'Moscone-Milk assassinations',
    summary:
      'The Moscone-Milk assassinations were the assassinations of San Francisco Mayor George Moscone and Harvey Milk on November 27, 1978.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Moscone%E2%80%93Milk_assassinations',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Cover_of_San_Francisco_Chronicle_November_28_1978.jpg/440px-Cover_of_San_Francisco_Chronicle_November_28_1978.jpg',
  },
  {
    type: 'wiki',
    start: timestampToSeconds('00:05:54,000'),
    name: 'Twinkie defense',
    summary: '"Twinkie defense" is a derisive label for an improbable legal defense.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Twinkie_defense',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Hostess-Twinkies.jpg/440px-Hostess-Twinkies.jpg',
  },
  {
    type: 'key-point',
    start: timestampToSeconds('00:06:26,000'),
    duration: 60,
    text: "Things going on in the body can dramatically influence what's going on in the brain",
  },
  {
    type: 'key-point',
    start: timestampToSeconds('00:07:04,000'),
    text: "Sometimes, what's going on in the brain can affect every outpost in the body.",
  },
  {
    type: 'illustration',
    start: timestampToSeconds('00:10:32,000'),
    duration: 60,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Linear_visible_spectrum.svg/2880px-Linear_visible_spectrum.svg.png',
    caption: 'The visible spectrum of light.',
  },
  {
    type: 'key-point',
    start: timestampToSeconds('00:11:00,000'),
    text: 'Breaking concepts into categories makes them easier to understand and remember.',
  },
  {
    type: 'wiki',
    start: timestampToSeconds('00:11:33,000'),
    name: 'Linguistic relativity (Sapir-Whorf hypothesis)',
    summary: 'The Sapir-Whorf hypothesis is the idea that the language we speak can shape the way we think and perceive the world.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Linguistic_relativity',
  },
  {
    type: 'key-point',
    start: timestampToSeconds('00:15:24,850'),
    text: 'With overcategorization, you have trouble seeing how similar things are on either side of an arbitrary boundary.',
  },
  {
    type: 'key-point',
    variant: 'mistake',
    start: timestampToSeconds('00:17:00,850'),
    text: "When you pay too much attention to boundaries, you don't see the big picture, all you see are categories.",
  },
  {
    type: 'quote',
    start: timestampToSeconds('00:26:19,000'),
    duration: 60,
    text: 'Give me a dozen healthy infants, well-formed, and my own specified world to bring them up in and I’ll guarantee to take any one at random and train him to become any type of specialist I might select—doctor, lawyer, artist, merchant-chief and, yes, even beggar-man and thief, regardless of his talents, penchants, tendencies, abilities, vocations, and race of his ancestors.',
    author: 'John B. Watson',
  },
  {
    type: 'wiki',
    start: timestampToSeconds('00:26:33,000'),
    duration: 74,
    name: 'John B. Watson',
    summary:
      'John Broadus Watson was an American psychologist and behaviorist. He was one of the founders of the school of psychology called Behaviorism.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/John_B._Watson',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/John_Broadus_Watson.JPG',
  },
  {
    type: 'wiki',
    start: timestampToSeconds('00:26:44,000'),
    name: 'B.F. Skinner',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/B._F._Skinner',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/B.F._Skinner_at_Harvard_circa_1950_%28cropped%29.jpg',
    summary:
      'Burrhus Frederic Skinner was an American psychologist and behaviorist. He was one of the founders of the school of psychology called Behaviorism.',
  },
  {
    type: 'explanation',
    start: timestampToSeconds('00:27:24,190'),
    text: "Watson's wife sought divorce due to his ongoing affair with a student, Rosalie Rayner. In searching Rayner's bedroom, Mary discovered love letters from Watson. The affair became front-page news in Baltimore. The publicity resulted in Johns Hopkins University asking Watson to resign his faculty position in October 1920.",
    link: 'https://en.wikipedia.org/wiki/John_B._Watson#Marriage_and_children',
  },
  {
    type: 'wiki',
    start: timestampToSeconds('00:28:51,000'),
    duration: 30,
    name: 'Frontal lobotomy',
    summary:
      'Frontal lobotomy is a surgical procedure that involves cutting the frontal lobes of the brain. It was used to treat mental disorders, but it is now considered to be a dangerous and ineffective procedure.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Frontal_lobotomy',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lobotomy_1949.jpg/560px-Lobotomy_1949.jpg',
  },
  {
    type: 'wiki',
    start: timestampToSeconds('00:29:05,000'),
    name: 'António Egas Moniz',
    summary:
      'António Egas Moniz was a Portuguese neurologist. He is known for his invention of the frontal lobotomy, a surgical procedure that involves cutting the frontal lobes of the brain.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Ant%C3%B3nio_Egas_Moniz',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Moniz.jpg/400px-Moniz.jpg',
  },
  {
    type: 'quote',
    start: timestampToSeconds('00:29:50,000'),
    duration: 60,
    text: 'The selection for social utility must be accomplished by some social institution if mankind is not to be ruined by domestication-induced degeneracy. The racial idea as the basis of our state has already accomplished much in this respect. We may, and we must, rely on the healthy instincts of the best of our people for the extermination of elements of the population loaded with dregs.',
  },
  {
    type: 'wiki',
    start: '00:30:52,840',
    end: '00:31:37,980',
    name: 'Konrad Lorenz',
    summary:
      'Konrad Zacharias Lorenz was an Austrian zoologist, ethologist, and ornithologist. He shared the 1973 Nobel Prize in Physiology or Medicine with Nikolaas Tinbergen and Karl von Frisch. ',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Konrad_Lorenz',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Konrad_Lorenz.JPG/440px-Konrad_Lorenz.JPG',
  },
  {
    type: 'wiki',
    start: '00:30:59,980',
    name: 'Ethology',
    summary:
      'Ethology is the scientific study of animal behavior. It is a branch of zoology that focuses on the behavior of animals in their natural environment.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Ethology',
  },
  {
    type: 'illustration',
    start: '00:33:33,550',
    end: '00:35:34,000',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/440px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg',
    caption: 'A winter white dwarf hamster',
  },
  {
    type: 'wiki',
    start: '00:35:37,500',
    end: '00:36:39,009',
    name: 'Wellesley effect',
    summary: 'The Wellesley effect is the phenomenon where women who live together have their menstrual cycles synchronized.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Menstrual_synchrony',
  },
  {
    type: 'book',
    start: '00:46:30,960',
    title: "Why Zebras Don't Get Ulcers",
    author: 'Robert Sapolsky',
    published: '2004',
    summary: '',
    link: 'https://www.amazon.com/Why-Zebras-Dont-Ulcers-Third/dp/0805073698',
    photo: 'https://m.media-amazon.com/images/I/71P0HbnDKvL._SL1500_.jpg',
  },
  {
    type: 'book',
    start: '00:46:51,780',
    end: '00:48:57,079',
    title: 'Chaos: Making a New Science',
    author: 'James Gleick',
    published: '2011',
    summary: '',
    link: 'https://www.amazon.com/Chaos-Making-Science-James-Gleick-ebook/dp/B003YL4KOO/ref=sr_1_1',
    photo: 'https://m.media-amazon.com/images/I/81weL7g9gCL._SY522_.jpg',
  },
]

export const one = annotations.map(prepareAnnotation)
