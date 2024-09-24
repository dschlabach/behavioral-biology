import { one } from '@/lib/annotations/1'
import { two } from '@/lib/annotations/2'
import { Annotation } from '@/lib/annotations/config'

export type Lecture = {
  title: string
  description?: string
  videoId: string
  srt?: string
  txt?: string
  annotations?: (Annotation & { end: number })[]
}

export const lectures: Lecture[] = [
  {
    title: 'Introduction to Human Behavioral Biology',
    videoId: 'NNnIGh9g6fA',
    srt: '/captions/1.srt',
    txt: '/captions/1.txt',
    annotations: one,
  },
  {
    title: 'Behavioral Evolution',
    videoId: 'Y0Oa4Lp5fLE',
    srt: '/captions/2.srt',
    annotations: two,
  },
  { title: 'Behavioral Evolution II', videoId: 'oKNAzl-XN4I' },
  { title: 'Molecular Genetics', videoId: '_dRXA1_e30o' },
  { title: 'Molecular Genetics II', videoId: 'dFILgg9_hrU' },
  { title: 'Behavioral Genetics', videoId: 'e0WZx7lUOrY' },
  { title: 'Behavioral Genetics II', videoId: 'RG5fN6KrDJE' },
  { title: 'Recognizing Relatives', videoId: 'P388gUPSq_I' },
  { title: 'Ethology', videoId: 'ISVaoLlW104' },
  { title: 'Introduction to Neuroscience I', videoId: '5031rWXgdYo' },
  { title: 'Introduction to Neuroscience II', videoId: 'uqU9lmFztOU' },
  { title: 'Endocrinology', videoId: 'yETVsV4zfFw' },
  { title: 'Advanced Neurology and Endocrinology', videoId: 'kAfz0yAcOyQ' },
  { title: 'Limbic System', videoId: 'CAOnSbDSaOw' },
  { title: 'Human Sexual Behavior I', videoId: 'LOY3QH_jOtE' },
  { title: 'Human Sexual Behavior II', videoId: '95OP9rSjxzw' },
  { title: 'Human Sexual Behavior III & Aggression I', videoId: 'JPYmarGO5jM' },
  { title: 'Aggression II', videoId: 'wLE71i4JJiM' },
  { title: 'Aggression III', videoId: 'EtVfoIkVSu8' },
  { title: 'Aggression IV', videoId: 'BqP4_4kr7-0' },
  { title: 'Chaos and Reductionism', videoId: '_njf8jwEGRo' },
  { title: 'Emergence and Complexity', videoId: 'o_ZuWbX-CyE' },
  { title: 'Language', videoId: 'SIOQgY1tqrU' },
  { title: 'Schizophrenia', videoId: 'nEnklxGAmak' },
  { title: 'Individual Differences', videoId: '-PpDq1WUtAw' },
]
