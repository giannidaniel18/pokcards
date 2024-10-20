import React from "react";

const DividerWithLabel = ({ label }: { label: string }) => {
  return (
    <div className="relative flex items-center py-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500">{label}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default DividerWithLabel;
