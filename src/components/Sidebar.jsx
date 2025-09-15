import { HomeIcon, UserIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ menuItems }) => {
  return (
    <aside className='flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700'>
      {/* Logo */}
      <a href='#'>
        <img
          className='w-auto h-7'
          src='https://placehold.com/150x40?text=Logo'
          alt='Logo'
        />
      </a>

      {/* Menu */}
      <div className='flex flex-col justify-between flex-1 mt-6'>
        <nav className='flex-1 -mx-3 space-y-3'>
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className='flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg 
             text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
            >
              {/* icon hanya tampil jika ada */}
              {item.icon && <item.icon className='w-5 h-5 mr-2' />}
              <span className='text-sm font-medium'>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
