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
import { ReactComponent as Login } from "@material-design-icons/svg/filled/login.svg";
import { ReactComponent as Logout } from "@material-design-icons/svg/filled/logout.svg";
import { ReactComponent as Notes } from "@material-design-icons/svg/filled/notes.svg";
import { ReactComponent as Dark } from "@material-design-icons/svg/outlined/dark_mode.svg";
import { ReactComponent as Light } from "@material-design-icons/svg/outlined/light_mode.svg";
import { ReactComponent as Language } from "@material-design-icons/svg/outlined/language.svg";

const List = {
  add: <Add />,
  checked: <Checked />,
  unchecked: <Unchecked />,
  dots: <Dots />,
  edit: <Edit />,
  delete: <Delete />,
  close: <Close />,
  menu: <Menu />,
  user: <User />,
  login: <Login />,
  logout: <Logout />,
  tasks: <Notes />,
  dark: <Dark />,
  light: <Light />,
  language: <Language />,
};

const Icon = ({ name }) => List[name];

export default Icon;
