import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <img className="img-fluid"
          src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"
          alt=""
        />
      </div>
      <div className="col-sm-8">
        <h1 className={styles.about}>Фамилия и имя</h1>
        <h2 style={{backgroundColor: "green"}}>Обо мне</h2>
        <h3>E-mail</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          explicabo quae dicta expedita laborum facilis incidunt quasi aliquid
          ipsam unde ea ipsum nemo recusandae laudantium harum officiis ipsa,
          fuga atque!
        </p>
      </div>
    </div>
  );
};

export default Profile;
