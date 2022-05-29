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
    <div className="bg-white shadow-lg rounded-lg p-8 pb-6 mb-8 bg-gray-200">
      <h3 className="transition duration-700 mb-4 cursor-pointer text-3xl font-semibold">
        Categories
      </h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`transition duration-700 cursor-pointer block hover:text-pink-600 ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-2 mb-1`}>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
