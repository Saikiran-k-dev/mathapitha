import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.aboutSection}>
        <h1 className={styles.heading}>About Matha Pitha PK Charitable Trust</h1>
        <p className={styles.description}>
          Matha Pitha PK Charitable Trust is a beacon of hope and compassion, dedicated to making a positive impact on the community. Our mission is rooted in the belief that every individual and animal deserves care, respect, and support. We strive to uplift lives through a diverse range of initiatives focused on health, animal care, community organization, self-care, and essential services.
        </p>
        <p className={styles.description}>
          Founded on the principles of empathy and service, our trust is committed to creating a better world, one act of kindness at a time. Whether it’s providing healthcare to the underprivileged, rescuing and caring for animals, or supporting community development, Matha Pitha PK Charitable Trust stands as a pillar of strength for those in need.
        </p>
        <p className={styles.description}>
          Join us in our journey to foster a community where everyone thrives. Together, we can make a lasting difference.
        </p>
      </div>
    </div>
  );
}

export default Home;
