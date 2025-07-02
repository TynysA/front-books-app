export interface IOutletProps {
  setIsModalOpen: (value: boolean) => void;
  setModalContent: (content: any) => void;
  setModalType: (type: string) => void;
}

export type CommentType = {
  id: string;
  author: {
    _id: string;
    username: string;
    avatar?: string | null;
  };
  book: string;
  text: string;
  parentComment?: string | null;
  createdAt: string;
  likes: number;
  replies?: CommentType[];
};

export const mockCommentsData = [
  {
    id: '1',
    author: {
      id: 'user1',
      username: 'Смолин Павел',
      avatar: null
    },
    text: 'Глава 1 - послезавтра.',
    createdAt: '2025-07-01T20:33:00Z',
    likes: 16,
    replies: [
      {
        id: '2',
        author: {
          id: 'user2',
          username: 'Роман Е.',
          avatar: null
        },
        text: 'Поставил сердечко сегодня за послезавтра :)',
        createdAt: '2025-07-01T22:20:00Z',
        likes: 6,
        replies: []
      },
      {
        id: '3',
        author: {
          id: 'user3',
          username: 'Владимир Атомный',
          avatar: null
        },
        text: 'Удачи, братишка ✌️',
        createdAt: '2025-07-01T22:05:00Z',
        likes: 6,
        replies: []
      }
    ]
  },
  {
    id: '4',
    author: {
      id: 'user4',
      username: 'Фома А.',
      avatar: null
    },
    text: '🔥👌',
    createdAt: '2025-07-01T20:41:00Z',
    likes: 6,
    replies: []
  },
  {
    id: '5',
    author: {
      id: 'user5',
      username: 'ALEX',
      avatar: null
    },
    text: 'Отлично. Ждём.',
    createdAt: '2025-07-01T20:34:00Z',
    likes: 9,
    replies: []
  }
];
