import React from 'react';

const Divider: React.FC = () => {
  return (
    <div className="my-6 flex items-center">
      <div className="flex-1 border-t border-gray-300"></div>
      <div className="px-3 text-sm text-gray-500">or</div>
      <div className="flex-1 border-t border-gray-300"></div>
    </div>
  );
};

export default Divider;