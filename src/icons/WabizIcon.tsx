import React from 'react';

type Props = {
  size: number;
  color?: string;
  viewBox?: string;
};

const WabizIcon = (props: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      id='Layer_1'
      x={0}
      y={0}
      width={props.size}
      height={props.size}
      viewBox='0 0 393 393'
      {...props}
    >
      <style>{'.st1{fill:#fff}'}</style>
      <path
        d='M331.4 393H61.6C27.6 393 0 365.5 0 331.4V61.6C0 27.6 27.6 0 61.6 0h269.9c34 0 61.6 27.6 61.6 61.6v269.9c-.1 34-27.6 61.5-61.7 61.5z'
        style={{
          fill: props.color,
        }}
      />
      <path
        d='m131.8 204.8 43.4-43.4c5.7-5.7 5.7-15 0-20.7l-13-13c-5.7-5.7-15-5.7-20.7 0l-34.8 34.8-34.8-34.8c-5.7-5.7-15-5.7-20.7 0l-13 13c-5.7 5.7-5.7 15 0 20.7l43.4 43.4c.5.7 1 1.4 1.6 2l13 13c2.9 2.9 6.7 4.3 10.5 4.3s7.6-1.4 10.5-4.3l13-13c.6-.6 1.2-1.3 1.6-2M258.5 146.7l-13-13c-5.7-5.7-15-5.7-20.7 0L127 231.5c-5.7 5.7-5.7 15 0 20.7l13 13c5.7 5.7 15 5.7 20.7 0l97.8-97.8c5.7-5.7 5.7-14.9 0-20.7M354.9 231.6l-43.4-43.4c-.5-.7-1-1.4-1.6-2l-13-13c-2.9-2.9-6.7-4.3-10.5-4.3s-7.6 1.4-10.5 4.3l-13 13c-.6.6-1.2 1.3-1.6 2l-43.4 43.4c-5.7 5.7-5.7 15 0 20.7l13 13c5.7 5.7 15 5.7 20.7 0l34.8-34.8 34.8 34.8c5.7 5.7 15 5.7 20.7 0l13-13c5.7-5.7 5.7-15 0-20.7'
        className='st1'
      />
    </svg>
  );
}

WabizIcon.defaultProps = {
  color: '#72ba00',
  size: 32,
};

export default WabizIcon;