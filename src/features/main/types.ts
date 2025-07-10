export interface IOutletProps {
  setIsModalOpen: (isOpen: boolean) => void;
  setModalContent: (content: any) => void;
  setModalType: (type: string) => void;
}
export interface IBook {
  bookId: string;
  title: string;
  description: string;
  author?: string[];
  language?: string;
}
