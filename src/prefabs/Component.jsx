export function Toggle() {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div className="w-11 h-6 bg-lightMode peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-darkGRay after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-darkGray"></div>
      <span className='ml-3 text-sm font-medium text-slate-900 '>
        Toggle me
      </span>
    </label>
  );
}
