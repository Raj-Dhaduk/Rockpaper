import React from 'react'
import './../../page.module.css'
import styles from './../../page.module.css';



const page = ({ choice, playGame }) => {
    return (
      <button className={styles.button} onClick={() => playGame(choice)}>
        {choice.charAt(0).toUpperCase() + choice.slice(1)}
      </button>
    );
  };

export default page