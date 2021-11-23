import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'tnsska',
      company: 'Dog Hous',
      theme: 'dark',
      title: 'Poodle King',
      email: 'tnsska2@naver.com',
      message: 'go for it',
      fileName: 'tnsska2',
      fileURL: null,
    },
    {
      id: '2',
      name: 'tnsska2',
      company: 'Dog Hous',
      theme: 'light',
      title: 'Poodle King',
      email: 'tnsska2@naver.com',
      message: 'go for it',
      fileName: 'tnsska2',
      fileURL: null,
    },
    {
      id: '3',
      name: 'tnsska3',
      company: 'Dog Hous',
      theme: 'colorful',
      title: 'Poodle King',
      email: 'tnsska2@naver.com',
      message: 'go for it',
      fileName: 'tnsska2',
      fileURL: 'tnsska2.png',
    }
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;