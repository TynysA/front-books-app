import { IFullScreenErrorProps } from '@/widgets/FullScreenError/types';

const FullScreenError = ({ resetErrorBoundary, callback }: IFullScreenErrorProps) => {
  const handleOnRetry = () => {
    if (callback) callback();
    else if (resetErrorBoundary) {
      resetErrorBoundary();
    }
  };

  return (
    <div>
      <p>Error!</p>
      <button onClick={handleOnRetry}>Retry</button>
    </div>
  );
};

export default FullScreenError;
