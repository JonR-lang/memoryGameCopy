export function Toggle() {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div className="w-11 h-6 bg-sky-100 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-orange-500 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-darkGray peer-checked:after:shadow-crescent peer-checked:after:bg-darkGray"></div>
    </label>
  );
}
