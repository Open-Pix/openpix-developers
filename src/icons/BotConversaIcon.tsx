import React from 'react';

type Props = {
  size: number;
  color?: string;
  viewBox?: string;
};

const BotConversaIcon = ({ size, viewBox }: Props) => (
  <svg viewBox={viewBox} width={size} height={size}>
    <path
      fill="#46C556"
      d="M78 1c99.021 0 198.043 0 297.727.375 4.23.79 7.843.97 11.358 1.657 16.984 3.317 30.315 12.585 40.862 25.963 6.924 8.782 10.45 19.18 12.965 30.432.069 103.853.078 207.24.08 310.625 0 .997-.09 1.993-.472 3.193-1.726 5.193-2.602 10.401-4.605 15.132-6.975 16.472-18.494 28.741-35.185 35.638-5.752 2.376-11.811 4.011-17.73 5.985-103.688 0-207.376 0-311.703-.361-18.13-3.169-32.382-11.297-43.647-25.185-7.589-9.356-11.742-19.987-14.562-31.88-.069-103.854-.078-207.24-.08-310.626 0-.997.09-1.993.473-3.193.412-1.36.34-2.55.593-3.667 5.795-25.592 26.975-47.515 53.669-52.14C71.172 2.352 74.58 1.651 78 1m51.305 162.799-10.4 6.818c-.307-2.644-.726-4.754-.768-6.87a3233.94 3233.94 0 0 1-.497-33.49c-.158-16.656-.083-33.318-.514-49.968-.08-3.105-1.522-6.53-3.287-9.17-4.991-7.467-15.961-10.354-25.647-7.278-9.489 3.012-14.325 9.62-14.34 19.75-.074 47.829-.178 95.658-.157 143.486.007 15.66-1.114 31.502.814 46.944 6.684 53.52 53.018 95.047 107.68 94.953 31.328-.054 62.657-.007 93.986-.126 4.307-.016 8.675-.387 12.91-1.167 84.892-15.644 120.339-114.069 64.6-179.87-18.164-21.441-41.54-35.28-69.723-36.712-33.745-1.715-67.63-.68-101.455-.824-18.638-.08-36.238 4.027-53.202 13.524z"
    />
    <path d="M440.853 373.041c.049-.996.14-1.992.14-2.989-.003-103.386-.012-206.772-.012-311.09.012-19.942.015-38.952.019-57.962h13.968v429c-4.362 0-8.69 0-13.494-.469-.523-19.142-.572-37.816-.621-56.49zM13.147 58.959c-.049.996-.14 1.992-.14 2.989.003 103.386.012 206.772.012 311.09-.012 19.609-.015 38.285-.019 56.962H1.02c.006-143 .006-286 .006-429 3.69 0 7.353 0 11.495.469.528 19.475.577 38.483.626 57.49z" />
    <path
      fill="#FFF"
      d="M13.48 58.755c-.382-18.803-.43-37.81-.48-57.286C34.354 1 55.708 1 77.531 1c-2.95.652-6.36 1.353-9.788 1.947-26.694 4.626-47.874 26.549-53.67 52.141-.252 1.117-.18 2.307-.592 3.667zM440.531 1c.465 19.01.462 38.02.39 57.495-2.525-10.32-6.05-20.718-12.974-29.5C417.4 15.617 404.07 6.35 387.085 3.032c-3.515-.687-7.128-.867-10.89-1.657C397.354 1 418.707 1 440.53 1zM13.469 430c-.465-18.677-.462-37.353-.39-56.495 2.829 10.962 6.982 21.593 14.571 30.95 11.265 13.887 25.516 22.015 43.179 25.184-18.85.361-37.87.361-57.36.361zM440.52 373.245c.382 18.47.43 37.144.48 56.286-19.02.469-38.042.469-57.531.469 5.45-1.974 11.509-3.609 17.261-5.985 16.691-6.897 28.21-19.166 35.185-35.638 2.003-4.73 2.879-9.939 4.605-15.132z"
    />
    <path
      fill="#FEFFFE"
      d="M129.61 163.597c16.659-9.295 34.259-13.401 52.897-13.322 33.825.145 67.71-.89 101.455.824 28.184 1.431 51.559 15.27 69.722 36.713 55.74 65.8 20.293 164.225-64.6 179.869-4.234.78-8.602 1.151-12.91 1.167-31.328.119-62.657.072-93.986.126-54.661.094-100.995-41.433-107.679-94.953-1.928-15.442-.807-31.285-.814-46.944-.02-47.828.083-95.657.156-143.486.016-10.13 4.852-16.738 14.341-19.75 9.686-3.076 20.656-.19 25.647 7.278 1.765 2.64 3.207 6.065 3.287 9.17.431 16.65.356 33.312.514 49.969.106 11.163.276 22.327.497 33.488.042 2.117.461 4.227.768 6.871 3.794-2.487 7.097-4.652 10.705-7.02M335.92 260.4c-.28-37.293-27.253-65.541-64.462-66.348-29.805-.646-59.639-.362-89.454.012-13.023.163-25.279 3.823-35.954 11.776-22.212 16.55-32.296 38.435-26.741 65.818 5.388 26.563 21.294 44.786 48.31 50.651 12.04 2.614 24.782 2.123 37.22 2.72 7.268.35 14.566.064 21.713.064 3.235 9.731-2.882 20.075 4.074 28.907 2.723-.915 5.57-1.443 7.993-2.754 21.654-11.722 43.332-23.406 64.808-35.45 21.157-11.865 31.06-30.696 32.494-55.396z"
    />
    <path
      fill="#47C557"
      d="M335.906 260.866c-1.42 24.234-11.322 43.065-32.479 54.93-21.476 12.044-43.154 23.728-64.808 35.45-2.423 1.311-5.27 1.839-7.993 2.754-6.956-8.832-.84-19.176-4.074-28.907-7.147 0-14.445.286-21.712-.063-12.44-.598-25.18-.107-37.22-2.721-27.017-5.865-42.923-24.088-48.311-50.651-5.555-27.383 4.529-49.269 26.74-65.818 10.676-7.953 22.932-11.613 35.955-11.776 29.815-.374 59.649-.658 89.454-.012 37.209.807 64.183 29.055 64.448 66.814m-170.068-15.457c-.8 1.26-1.72 2.46-2.384 3.789-4.691 9.384-2.75 19.656 5.006 26.778 7.542 6.925 17.613 7.769 26.675 2.236 8.505-5.194 12.48-15.115 9.83-24.533-4.802-17.069-25.878-21.891-39.127-8.27m91.293-3.906c-1.08 1.031-2.259 1.978-3.225 3.106-6.77 7.898-6.962 21.255-.466 29.071 7.05 8.483 18.526 10.499 28.383 4.985 9.435-5.278 13.593-16.277 10.128-26.573-3.742-11.116-19.741-20.565-34.82-10.589z"
    />
    <path
      fill="#FDFEFD"
      d="M166.053 245.117c13.034-13.33 34.11-8.507 38.913 8.562 2.65 9.418-1.326 19.34-9.831 24.533-9.062 5.533-19.133 4.689-26.675-2.236-7.756-7.122-9.697-17.394-5.006-26.778.664-1.329 1.583-2.53 2.6-4.081zM257.431 241.292c14.779-9.765 30.778-.316 34.52 10.8 3.465 10.296-.693 21.295-10.128 26.573-9.857 5.514-21.333 3.498-28.383-4.985-6.496-7.816-6.303-21.173.466-29.071.966-1.128 2.145-2.075 3.525-3.317z"
    />
  </svg>
);

BotConversaIcon.defaultProps = {
  color: '#47C557',
  viewBox: '15 15 420 420',
  size: 24,
};

export default BotConversaIcon;
