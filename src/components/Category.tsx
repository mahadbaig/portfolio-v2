import React from "react";

const Category = (props:any) => {
    const cat = props.cat
    const visibility = props.visibility
  return (
    <div
      className={`
                    lg:px-6 lg:py-2
                    md:px-5 md:py-2
                    px-4 py-2
                    border-2
                    rounded-full
                    border-green-800
                    ${visibility}
                    `}
    >
      <p className="text-sm">{cat}</p>
    </div>
  );
};

export default Category;
