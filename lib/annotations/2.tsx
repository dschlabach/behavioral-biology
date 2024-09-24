import ExternalLink from '@/components/ExternalLink'
import { Annotation, prepareAnnotation } from '@/lib/annotations/config'

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
    type: 'person',
    start: '00:00:01,500',
    name: 'Test',
    summary:
      'Robert Morris Sapolsky (born April 6, 1957) is an American academic, neuroscientist, and primatologist. He is the John A. and Cynthia Fry Gunn Professor at Stanford University, and is a professor of biology, neurology, and neurosurgery.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Robert_Sapolsky',
    photo: '/sapolsky.jpg',
  },
  {
    type: 'person',
    start: '00:00:02,500',
    name: 'Test2 ',
    summary:
      'Robert Morris Sapolsky (born April 6, 1957) is an American academic, neuroscientist, and primatologist. He is the John A. and Cynthia Fry Gunn Professor at Stanford University, and is a professor of biology, neurology, and neurosurgery.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Robert_Sapolsky',
    photo: '/sapolsky.jpg',
  },
  {
    type: 'wiki',
    start: '00:08:02,240',
    name: 'Nash equilibrium',
    summary:
      'In game theory, the Nash equilibrium (named after the mathematician John Forbes Nash Jr.) is a set of strategies, one for each player, such that no player can unilaterally deviate from their strategy and achieve a better outcome.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Nash_equilibrium',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/John_Forbes_Nash%2C_Jr._by_Peter_Badge.jpg',
  },
  {
    type: 'key-point',
    start: '00:08:17,159',
    text: 'The same process of figuring out what are the rules of optimizing Tic Tac Toe behavior can be built upon the principles of Evolution to figure out all sorts of realms of optimized social behavior.',
  },

  {
    type: 'wiki',
    start: '00:08:36,120',
    name: 'Sociobiology',
    summary:
      'Sociobiology is a field of biology that aims to explain social behavior in terms of evolution. It draws from disciplines including psychology, ethology, anthropology, evolution, zoology, archaeology, and population genetics.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Sociobiology',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Darwin%27s_finches_by_Gould.jpg/360px-Darwin%27s_finches_by_Gould.jpg',
  },

  {
    type: 'wiki',
    start: '00:08:46,040',
    name: 'Evolutionary Psychology',
    summary:
      'Evolutionary psychology is a field of study that applies the principles of evolutionary biology to the study of human behavior. It seeks to understand the psychological mechanisms that have evolved to help our ancestors survive and reproduce.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Evolutionary_psychology',
  },
  {
    type: 'wiki',
    start: '00:09:07,000',
    name: 'Charles Darwin',
    summary:
      'Charles Robert Darwin, was an English naturalist, geologist and biologist, best known for his contributions to the theory of evolution.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Charles_Darwin',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/440px-Charles_Darwin_seated_crop.jpg',
  },
  {
    type: 'wiki',
    start: '00:09:20,680',
    name: 'Alfred Russel Wallace',
    summary:
      'Alfred Russel Wallace was an English naturalist, geologist, explorer, and anthropologist. He is best known for his contributions to the theory of evolution and his work on the principles of natural selection.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Alfred_Russel_Wallace',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Alfred-Russel-Wallace-c1895.jpg/440px-Alfred-Russel-Wallace-c1895.jpg',
  },
  {
    type: 'key-point',
    start: '00:10:31,920',
    text: 'Darwinian evolution is built on 3 principles:\n 1. There are traits that are heritable \n 2. Variability within traits exists \n 3. Some versions of those traits are more adaptive than others',
  },
  {
    type: 'illustration',
    start: '00:15:30,600',
    duration: 60,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Wildebeest_Jumping_Into_the_Mara_River.jpg/1016px-Wildebeest_Jumping_Into_the_Mara_River.jpg',
    caption: (
      <p>
        Wildebeest leaping into the Mara River during their{' '}
        <ExternalLink href="https://en.wikipedia.org/wiki/Serengeti#Great_migration">Great Migration</ExternalLink>
      </p>
    ),
  },
  {
    type: 'key-point',
    start: '00:16:40,600',
    variant: 'misconception',
    text: 'Animals behave for the good of the species, not the individual.',
  },
  {
    type: 'wiki',
    start: '00:16:51,720',
    name: 'V. C. Wynne-Edwards',
    summary:
      'Vero Copner Wynne-Edwards (4 July 1906 - 5 January 1997) was an English zoologist. He was best known for his advocacy of group selection, the theory that natural selection acts at the level of the group.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/V.C._Wynne-Edwards',
    photo: 'https://upload.wikimedia.org/wikipedia/en/2/28/V._C._Wynne-Edwards.gif',
  },
  {
    type: 'key-point',
    start: '00:17:56,760',
    text: 'Not "survival of the fittest", but "reproduction of the fittest."',
  },
  {
    type: 'wiki',
    start: '00:20:52,120',
    duration: 120,
    name: 'Sexual Selection',
    summary:
      'Sexual selection is a form of natural selection where individuals with traits that enhance their ability to attract mates are more likely to reproduce. This can lead to the evolution of traits that are not necessarily adaptive for survival, but are adaptive for mating.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Sexual_selection',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Paradesia_decora_Keulemans.jpg',
  },
  {
    type: 'illustration',
    start: '00:22:18,440',
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/RanaArvalisBlueMale3.jpg',
    caption: 'Male moor frogs become blue to signal their fitness to females.',
  },
  {
    type: 'key-point',
    start: '00:23:11,720',
    text: "The first building block is individual selection, which is about maximizing the number of copies of one's genes in the next generation.",
  },
  {
    type: 'key-point',
    start: '00:24:45,679',
    duration: 60,
    text: 'Because you share genes with your relatives, sometimes you will get behavior which decreases your own reproductive success in order to enhance the reproductive success of your relatives.',
  },
  {
    type: 'wiki',
    start: '00:25:14,000',
    name: 'J. B. S. Haldane',
    summary:
      'John Burdon Sanderson Haldane, was a British-Indian scientist who worked in physiology, genetics, evolutionary biology, and mathematics.',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/J._B._S._Haldane',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/J._B._S._Haldane.jpg',
  },
  {
    type: 'wiki',
    start: '00:26:09,240',
    duration: 120,
    name: 'Kin Selection',
    summary:
      "Kin selection is a process whereby natural selection favours a trait due to its positive effects on the reproductive success of an organism's relatives, even when at a cost to the organism's own survival and reproduction.",
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Kin_selection',
  },
  {
    type: 'illustration',
    start: '00:27:26,000',
    duration: 101,
    src: 'https://images.pexels.com/photos/3822824/pexels-photo-3822824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Vervet monkeys',
  },
  {
    type: 'study',
    start: '00:32:08,919',
    duration: 90,
    title: 'Local dispersal promotes biodiversity in a real-life game of rock-paper-scissors',
    author: 'Benjamin Kerr, Margaret A. Riley, Marcus W. Feldman & Brendan J. M. Bohannan',
    publishDate: '2002',
    link: 'https://www.bio.umass.edu/biology/riley/sites/www.bio.umass.edu.biology.riley/files/2002b%20Local%20dispersal%20and%20interactions%20promote%20coexistence%20in%20a%20real%20life%20game%20of%20rock-paper-scissors.pdf',
    summary: '',
  },
  {
    type: 'illustration',
    start: '00:35:35,000',
    duration: 60,
    src: 'https://images.pexels.com/photos/1322599/pexels-photo-1322599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Rhesus macaque',
  },
  {
    type: 'wiki',
    start: '00:36:37,760',
    name: 'Reciprocal Altruism',
    wikipediaSlug: 'https://en.wikipedia.org/wiki/Reciprocal_altruism',
    summary:
      "Reciprocal altruism is a behaviour whereby an organism acts in a manner that temporarily reduces its fitness while increasing another organism's fitness, with the expectation that the other organism will act in a similar manner at a later time.",
  },
]

export const two = annotations.map(prepareAnnotation)
