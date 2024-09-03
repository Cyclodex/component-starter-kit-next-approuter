'use client';

import { ComponentProps, UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { SearchInputProps } from '.';
import Input from '@/components/Input';

type SlotNames = 'results';
type Parameters = SearchInputProps;
type Props = ComponentProps<Parameters, SlotNames>;

import React, { useState } from 'react';

function SearchInput({ component, slots, context, value }: Props) {
  const [searchValue, setSearchValue] = useState(value);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">Search for products</h1>
      <div className="flex">
        <Input
          id={component._id}
          placeholder="Search for products..."
          className="border-2 border-primary border-r-2 min-h-[auto]"
          value={searchValue}
          type="search"
          onChange={e => setSearchValue(e.target.value)}
        />

        <button
          className="bg-blue-400 p-1 hover:bg-blue-600 text-white font-bold"
          onClick={() => (window.location.href = `?search=${searchValue}`)}
        >
          <UniformText context={context} component={component} parameterId="label" as="span" />
        </button>
      </div>

      {value ? (
        <div>
          {slots.results.items.length === 0 ? (
            <div className="p-5 text-center">No results found</div>
          ) : (
            <UniformSlot context={context} slot={slots.results} data={component} />
          )}
        </div>
      ) : (
        <div className="p-5 text-center">Please search for products</div>
      )}
    </div>
  );
}

export { SearchInput };
