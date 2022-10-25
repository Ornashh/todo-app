import React from "react";

import { ReactComponent as Add } from "@material-design-icons/svg/filled/add_circle_outline.svg";
import { ReactComponent as Checked } from "@material-design-icons/svg/filled/task_alt.svg";
import { ReactComponent as Unchecked } from "@material-design-icons/svg/filled/radio_button_unchecked.svg";
import { ReactComponent as Dots } from "@material-design-icons/svg/filled/more_horiz.svg";
import { ReactComponent as Edit } from "@material-design-icons/svg/filled/edit_note.svg";
import { ReactComponent as Delete } from "@material-design-icons/svg/filled/delete.svg";
import { ReactComponent as Close } from "@material-design-icons/svg/filled/close.svg";
import { ReactComponent as Menu } from "@material-design-icons/svg/filled/menu.svg";
import { ReactComponent as User } from "@material-design-icons/svg/filled/account_circle.svg";
import { ReactComponent as Logout } from "@material-design-icons/svg/filled/logout.svg";
import { ReactComponent as Notes } from "@material-design-icons/svg/filled/notes.svg";

const List = {
  add: <Add fill="#E64A19" />,
  checked: <Checked fill="#E64A19" />,
  unchecked: <Unchecked fill="#E64A19" />,
  dots: <Dots fill="#FFF" />,
  edit: <Edit fill="#BDBDBD" />,
  delete: <Delete fill="#BDBDBD" />,
  close: <Close fill="#BDBDBD" />,
  menu: <Menu fill="#FFF" />,
  user: <User fill="#FFF" />,
  logout: <Logout fill="#BDBDBD" />,
  tasks: <Notes fill="#BDBDBD" />,
};

const Icon = ({ name }) => {
  return List[name];
};

export default Icon;
