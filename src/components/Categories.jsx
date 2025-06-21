import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { BlogCategories } from './data/BlogCategories';

function Categories() {
  return (
    <Popover className="relative">
<PopoverButton className="nav-link text-white flex items-center gap-1">
  Categories <ChevronDownIcon className="w-5 h-5 text-white" aria-hidden="true" />
</PopoverButton>


<PopoverPanel className="absolute top-full left-0 z-50 mt-2 w-80 rounded-lg bg-white shadow-lg">
        <ul className="p-3 space-y-3 text-sm">
          {BlogCategories.map((item) => (
            <li key={item.name} className="flex items-start gap-x-4">
              <div className="p-2 bg-gray-200 rounded-lg">
                <item.icon className="h-5 w-5 text-gray-500"  />
              </div>
              <div>
                <a href={item.href} className="font-semibold text-[#201E43] hover:underline">
                  {item.name}
                </a>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </PopoverPanel>
    </Popover>
  );
}

export default Categories;
