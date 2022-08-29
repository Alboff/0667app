const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  id: "1",
  about: "Мой рассказ о своих увлечениях.",
  avatar:
    "https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg",
};

const users = {
  0: {name: "Владислава", lastname: "Анютина"},
  1: {name: "Юлия", lastname: "Петрова"},
  2: {name: "Петр", lastname: "блочков"},
  3: {name: "Константин", lastname: "Лесков"},
  4: {name: "Парфирий", lastname: "Тетерин"},
};

export function getUsers() {
  return user;
}

export function getUser() {
  return user;
}
