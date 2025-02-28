export interface IScores {
  id: string | number;
  student_id: string | number;
  test_id: number;
  test_title: string;
  test_description?: string;
  score: boolean;
  teacher_id: number | string;
  completed_at: number | string;
  is_passed?: boolean;
}

export const tableHeaders: (keyof IScores)[] = ['test_title', 'test_description', 'completed_at', 'score', 'is_passed'];

export const scoresList: IScores = [
  {
    id: 1,
    student_id: 101,
    test_title:
      'asdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdfasdassdf ',
    test_description: 'sdfjsdfhsdf',
    test_id: 123192849,
    score: 85,
    completed_at: '2025-02-19T14:30:00Z',
    is_passed: true
  },
  {
    id: 1223,
    student_id: 101,
    test_title: 'qqqq',
    test_id: 12319284129,
    score: 70,
    completed_at: '2025-02-20T14:30:00Z',
    is_passed: true
  },
  {
    id: 124,
    student_id: 101,
    test_title: 'wwwww',
    test_id: 1231912849,
    score: 60,
    completed_at: '2025-02-12T14:30:00Z',
    is_passed: false
  }
];
