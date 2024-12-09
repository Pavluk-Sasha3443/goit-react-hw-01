import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendBox}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.friendOnline : css.friendOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
