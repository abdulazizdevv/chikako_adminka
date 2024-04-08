export default function TextArea({
  className = '',
  style,
  error,
  size = 3,
  ...rest
}: any) {
  return (
    <div
      className={`
            border
            flex
            space-x-2
            items-center
            rounded-lg
            text-body
            px-2
            p-1
            w-full
            font-smaller
            focus-within:ring-1
            focus-within:outline-none
            focus-within:border-blue-700
            ${error ? 'border-red-600' : 'border-gray-300'}
            ${className}
        `}
      style={style}
    >
      <textarea
        className='w-full outline-none'
        style={{ height: size * 24, background: 'transparent' }}
        type='text'
        {...rest}
      ></textarea>
    </div>
  );
}
