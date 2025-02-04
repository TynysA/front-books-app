import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PolicyContainer } from '@/shared/ui/PolicyContainer/types';

const PolicyContainer = ({
  children,
  title,
  goBackCustomHandler,
  showArrow = true,
  showBurgerMenu = true
}: PolicyContainer) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  const goBack = () => {
    if (goBackCustomHandler) goBackCustomHandler();
    else navigate(-1);
  };

  return <div></div>;
};

export default PolicyContainer;
