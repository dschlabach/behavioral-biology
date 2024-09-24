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
  status: 'draft' | 'published'
}

export const lectures: Lecture[] = [
  {
    title: 'Introduction to Human Behavioral Biology',
    videoId: 'NNnIGh9g6fA',
    srt: '/captions/1.srt',
    txt: '/captions/1.txt',
    annotations: one,
    status: 'published',
  },
  {
    title: 'Behavioral Evolution',
    videoId: 'Y0Oa4Lp5fLE',
    srt: '/captions/2.srt',
    annotations: two,
    status: 'draft',
  },
  {
    title: 'Behavioral Evolution II',
    videoId: 'oKNAzl-XN4I',
    status: 'draft',
  },
  {
    title: 'Molecular Genetics',
    videoId: '_dRXA1_e30o',
    status: 'draft',
  },
  {
    title: 'Molecular Genetics II',
    videoId: 'dFILgg9_hrU',
    status: 'draft',
  },
  {
    title: 'Behavioral Genetics',
    videoId: 'e0WZx7lUOrY',
    status: 'draft',
  },
  {
    title: 'Behavioral Genetics II',
    videoId: 'RG5fN6KrDJE',
    status: 'draft',
  },
  {
    title: 'Recognizing Relatives',
    videoId: 'P388gUPSq_I',
    status: 'draft',
  },
  {
    title: 'Ethology',
    videoId: 'ISVaoLlW104',
    status: 'draft',
  },
  {
    title: 'Introduction to Neuroscience I',
    videoId: '5031rWXgdYo',
    status: 'draft',
  },
  {
    title: 'Introduction to Neuroscience II',
    videoId: 'uqU9lmFztOU',
    status: 'draft',
  },
  {
    title: 'Endocrinology',
    videoId: 'yETVsV4zfFw',
    status: 'draft',
  },
  {
    title: 'Advanced Neurology and Endocrinology',
    videoId: 'kAfz0yAcOyQ',
    status: 'draft',
  },
  {
    title: 'Limbic System',
    videoId: 'CAOnSbDSaOw',
    status: 'draft',
  },
  {
    title: 'Human Sexual Behavior I',
    videoId: 'LOY3QH_jOtE',
    status: 'draft',
  },
  {
    title: 'Human Sexual Behavior II',
    videoId: '95OP9rSjxzw',
    status: 'draft',
  },
  {
    title: 'Human Sexual Behavior III & Aggression I',
    videoId: 'JPYmarGO5jM',
    status: 'draft',
  },
  {
    title: 'Aggression II',
    videoId: 'wLE71i4JJiM',
    status: 'draft',
  },
  {
    title: 'Aggression III',
    videoId: 'EtVfoIkVSu8',
    status: 'draft',
  },
  {
    title: 'Aggression IV',
    videoId: 'BqP4_4kr7-0',
    status: 'draft',
  },
  {
    title: 'Chaos and Reductionism',
    videoId: '_njf8jwEGRo',
    status: 'draft',
  },
  {
    title: 'Emergence and Complexity',
    videoId: 'o_ZuWbX-CyE',
    status: 'draft',
  },
  {
    title: 'Language',
    videoId: 'SIOQgY1tqrU',
    status: 'draft',
  },
  {
    title: 'Schizophrenia',
    videoId: 'nEnklxGAmak',
    status: 'draft',
  },
  {
    title: 'Individual Differences',
    videoId: '-PpDq1WUtAw',
    status: 'draft',
  },
]
