import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <section className={s.profilecard}>
    <div className={s.description}>
      <img src={avatar} alt={username} className={s.avatar} />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
      <li className={s.item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  </section>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
