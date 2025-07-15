import Wrapper from './wrapper';

interface SpinnerProps {
  isLoading: boolean;
}

const Spinner = ({ isLoading }: SpinnerProps) => {
  return (
    <Wrapper>
      {isLoading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-16 h-16 border-t-4 border-b-4 border-gray-200 border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </Wrapper>
  );
};

export default Spinner;
