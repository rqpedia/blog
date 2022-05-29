import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-8 pb-6 mb-8">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`transition duration-700 mb-1 hover:text-pink-600 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-1 mb-1`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
