import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { loginThunk } from 'redux/operations';
import { ReactComponent as MyIcon } from './../assets/icon.svg';
import icon from './../assets/icon.svg';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { selectIsLogin } from 'redux/selectors';

const MySvgSet = ({ svgName, ...props }) => {
  switch (svgName) {
    case 'Spiner':
      return (
        <motion.svg
          initial={{ rotate: 720 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 3, delay: 5 }}
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          {...props}
        >
          <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728l-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536l1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071l3.536-3.535 1.414 1.415-3.536 3.535z" />
        </motion.svg>
      );
    case 'React':
      return (
        <svg
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z"
            fill="#050D42"
          />
          <path
            d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z"
            fill="#050D42"
          />
          <path
            d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z"
            fill="#050D42"
          />
          <path
            d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z"
            fill="#2F4BFF"
          />
        </svg>
      );

    default:
      break;
  }
};

function IconBxLoader(props) {
  return (
    <motion.svg
      initial={{ rotate: 1200 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 3, delay: 20 }}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728l-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536l1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071l3.536-3.535 1.414 1.415-3.536 3.535z" />
    </motion.svg>
  );
}

function IconBook(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
    </svg>
  );
}

function IconSearch(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
    </svg>
  );
}

export const LoginForm = () => {
  const isLogin = useSelector(selectIsLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.state?.FromPage);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
  };
  if (isLogin) {
    return <Navigate to={location.state?.FromPage || '/'} />;
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: '-200%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'backInOut', duration: 0.8 }}
        >
          <motion.input
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, ease: 'backInOut', duration: 0.5 }}
            placeholder="Email..."
            type="email"
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <motion.input
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, ease: 'backInOut', duration: 0.8 }}
            placeholder="Password..."
            type="password"
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, ease: 'backInOut', duration: 0.1 }}
          >
            Log In
          </motion.button>
          <motion.h3
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, ease: 'backInOut', duration: 0.8 }}
          >
            You don't have an account? Let's{' '}
            <Link to="/register">Create it!</Link>
            <motion.img
              initial={{ rotate: 360 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 30 }}
              src={icon}
              alt="icon"
              width={100}
              height={100}
            />
            <IconBxLoader width="100" height="100" color="red" />
            <MyIcon width={100} height={100} />
            <MySvgSet svgName="React" width={100} height={100} />
            <MySvgSet svgName="Spiner" width={100} height={100} />
          </motion.h3>
        </motion.div>
      </Form>
    </>
  );
};

export const Form = styled.form`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(
    112.1deg,
    rgb(32, 38, 57) 11.4%,
    rgb(63, 76, 119) 70.2%
  );
  justify-content: center;
  align-items: center;
  input {
    box-shadow: 0px 0px 1px 2px black;
    font-size: 1.5rem;
    padding: 5px;
    border: none;
  }

  div {
    padding: 40px 50px;
    backdrop-filter: blur(10%);
    box-shadow: 0px 0px 15px 2px black;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h3 {
      margin: 10px 0;
      color: white;
      a {
        color: #07f407;
      }
    }
    button {
      border: none;
      box-shadow: 0px 0px 1px 1px black;

      color: white;
      background-color: transparent;
      padding: 8px 16px;
      transition: all 0.3s linear;
      &:hover {
        background-color: black;
        color: teal;
        box-shadow: 0px 0px 5px 4px black;
        cursor: pointer;
      }
    }
  }
`;
